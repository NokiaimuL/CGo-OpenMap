# 🚇 CGo OpenMap 城市移植与二次开发手册

> 本手册为 **CGo OpenMap 开源项目** 官方移植指南。通过本手册，你可以快速基于本项目的基础架构，从零制作任意城市（如上海、广州、深圳、成都、武汉、南京等）的轨道交通交互线路图。

---

## 💡 移植核心理念

CGo OpenMap 采用了**核心渲染引擎与城市业务数据完全解耦**的设计模式：
- **核心引擎 (`core/`)**：负责 SVG 矢量渲染、缩放漫游、图层控制、UI 组件交互、手势支持、搜索定位与主题切换，**无需修改**。
- **城市数据 (`city/{city_id}/`)**：负责存储车站坐标、线路走向、站距、图例与时刻表，**这是你唯一需要填充和定制的部分**。

移植的核心工作在于**城市数据的配置与填充**，而非重写前端代码。

---

## 📂 文件结构速查

创建新城市时，请在 `city/` 下新建城市文件夹（例如 `city/shanghai/`），结构建议如下：

```text
city/shanghai/
├── shanghai.js                 # 城市特有业务逻辑与连通关系定义
├── data_stations.js            # 车站列表 (坐标、名称、类型、对齐方式)
├── data_lines.js               # 线路列表 (线路颜色、站点序列、站间距、运营单位)
├── data_legend.js              # 图例面板展示结构与线路分组
├── data_timetable.js           # 车站首末班车时刻数据
├── data_notopen.js             # 在建/规划未开通线路数据
├── data_virtual_transfers.js   # 出站虚拟换乘/站外连通配置
├── data_scattered.js           # 特殊单线段或孤立支线
└── staname.csv                 # 智能搜索别名/多音字/旧站名索引库
```

素材文件：
- `assets/svg/`：目标城市的线路徽标 SVG 图标（如 `icon@01.svg`）。
- `assets/icons/`：目标城市的特色车站或地标徽标。

---

## 🛠️ 第一步：注册新城市 (`city/data.js`)

打开 `city/data.js`，在 `CITY_REGISTRY` 中注册新城市的基础元数据：

```javascript
const CITY_REGISTRY = {
    "shanghai": {
        id: "shanghai",
        name: "上海",
        folder: "./city/shanghai",
        mainLogic: "./city/shanghai/shanghai.js",
        // 地图初始视图中心点与缩放比例
        center: { x: 1000, y: 800 },
        defaultScale: 1.0,
        // 画布总尺寸 (根据线网图宽高设定)
        mapSize: { width: 2200, height: 1800 },
        // 高德地图检索所属行政区名称
        searchCity: "上海",
        // 网页元数据
        title: "CGo OpenMap - 上海轨道交通线路图",
        keywords: "上海地铁, 申通地铁, 线路图, 轨道交通",
        description: "由 CGo OpenMap 驱动的上海轨道交通智能交互线路图",
        isDefault: true // 设为默认激活
    }
};
```

---

## 🎨 第二步：准备线路徽标 (`assets/svg/`)

为目标城市准备各条线路的 SVG 徽标图标：
- **复用现有模板（推荐）**：本项目已内置 1~57 号线等常用数字线路的通用矢量模板（`assets/svg/icon@01.svg` ~ `icon@57.svg`）。模板内部采用 CSS 变量动态驱动，**无需重新绘制 SVG 文件**。
- **动态颜色绑定**：在 `data_lines.js` 中配置对应线路的 `color` / `svgclr`（图标背景色）与 `svgtext`（图标文字颜色）属性，系统即可自动为 SVG 图标注入相应颜色。
- **自定义特殊图标**：如需添加有轨电车、市域快线或特殊专线图标，可按统一规则命名（如 `icon@apmr.svg`）存入 `assets/svg/` 目录，图标建议为标准正方形或统一比例的 SVG 矢量图。


---

## 🖱️ 第三步：编排车站与线路数据

### 1. 采集与编写车站坐标 (`data_stations.js`)

在 `data_stations.js` 中定义所有车站的相对坐标、名称与排版属性：

```javascript
const stationsData = {
    // 建议使用标准格式的 Station ID，如 "M101"
    "M101": {
        type: "dot",                // 类型: dot(普通站), tsf(换乘站), no(暂缓开通), rdot(国铁火车站)
        x: 820,                     // 画布 X 坐标 (像素)
        y: 640,                     // 画布 Y 坐标 (像素)
        cn: "人民广场",              // 中文站名
        en: "People's Square",      // 英文站名
        align: "top-right",         // 文字相对锚点位置: top, bottom, left, right, top-left 等
        offset: { x: 4, y: -2 },    // 文字微调偏移量
        textScale: { cn: 1.0, en: 1.0 }, // 字符宽高微调
        hideLabel: false            // 是否隐藏文本标签
    },
    // 更多车站...
};
```

### 2. 串联线路走向 (`data_lines.js`)

在 `data_lines.js` 中按运行顺序将车站连接为线路：

```javascript
const linesData = [
    // 基础单线示例
    {
        id: "M1",
        name: "1号线",
        color: "#E4002B",            // 线路主题色 (Hex)
        svg: "icon@01.svg",          // 关联的线路 SVG 徽标
        company: "上海地铁第一运营公司", // 运营单位
        stationIds: [                // 按运行顺序填入车站 ID
            "M101", "M102", "M103", "M104"
        ],
        distances: [                 // 站间距 (米)，长度为 stationIds.length - 1
            1200, 1500, 980
        ]
    },
    // 环线示例 (如 4号线)
    {
        id: "M4",
        name: "4号线",
        color: "#5B2C84",
        isLoop: true,                // 声明为环线
        stationIds: ["M401", "M402", "M403", "M404"],
        distances: [1100, 1250, 1300, 950],     // 顺时针站距 (长度与 stationIds 相同)
        distances2: [950, 1300, 1250, 1100]    // 逆时针站距 (可选反向站距)
    },
    // 分支 / Y 字形线路示例 (如 11号线主支线)
    {
        id: "M11",
        name: "11号线",
        color: "#852655",
        hasbranch: true,             // 声明含分支
        "stationIds-way1": ["M1101", "M1102", "M1103", "M1104"], // 主线+支线1
        "stationIds-way2": ["M1101", "M1102", "M1105", "M1106"], // 主线+支线2
        "distances-way1": [1300, 1400, 1200],
        "distances-way2": [1300, 1800, 1500]
    }
];
```

### 3. 配置在建与规划未开通线路 (`data_notopen.js`)

对于正在建设中的线路，可在 `data_notopen.js` 中定义平滑虚线走向：

```javascript
const NOT_OPEN_LINES = [
    {
        name: "在建18号线二期",
        points: [
            { x: 500, y: 300 },
            { x: 550, y: 300 },
            { x: 600, y: 350 }
        ],
        style: {
            color: "#D6A841",
            width: "3.4",
            dashArray: "6,4"
        }
    }
];
```

### 4. 配置虚拟换乘与出站连通 (`data_virtual_transfers.js`)

对于出站换乘或同站名不同站厅的特殊车站：

```javascript
const VIRTUAL_FREE_TRANSFER_MAP = {
    // 格式: "主车站ID": ["可虚拟换乘的车站ID_1", "可虚拟换乘的车站ID_2"]
    "M1205": ["M1308"] // 如南京西路 12/13 号线出站换乘
};
```

---

## 🔍 第四步：构建图例与检索别名

1. **图例面板 (`data_legend.js`)**：按照运营制式（如市区地铁、市域铁路、轻轨、磁浮）对线路进行分组归类，配置图例显示。
2. **搜索别名 (`staname.csv`)**：建立旧站名、别名、粤拼/拼音与多音字的映射，增强搜索框的识别能力。

---

## 🚀 第五步：在 `index.html` 中引入城市数据脚本

在 `index.html` 的底部脚本加载区，将城市相关数据脚本指向你的新城市目录（例如 `shanghai`）：

```html
<!-- 城市业务逻辑与数据配置 -->
<script src="city/shanghai/shanghai.js"></script>
<script type="module" src="city/shanghai/stacard/script.js"></script>
<script src="city/shanghai/data_stations.js"></script>
<script src="city/shanghai/data_lines.js"></script>
<script src="city/shanghai/data_virtual_transfers.js"></script>
<script src="city/shanghai/data_scattered.js"></script>
<script src="city/shanghai/data_legend.js"></script>
<script src="city/shanghai/data_timetable.js"></script>
<script src="city/shanghai/data_notopen.js"></script>
```

---

## ✅ 发布前自查清单

- [ ] **视觉效果**：所有车站和线路在亮色与暗色模式下对比度是否清晰？
- [ ] **多线换乘**：多条线路交叉的换乘站，坐标是否已统一对齐至同一物理坐标点？
- [ ] **搜索测试**：在搜索栏中输入中文、英文或拼音缩写，能否准确定位车站？
- [ ] **图例联动**：点击图例中的线路，是否能正常高亮对应线路？
- [ ] **定位功能**：在移动端或浏览器中点击定位按钮，能否正确计算出最近的车站？

---

## 🏆 第六步：提交 PR 并成为官方「城市主理人」

在本地测试完成后，**强烈建议并欢迎你将该城市数据提交 Pull Request 合入官方主仓库**！

### 为什么一定要回传到官方主仓库？

1. **🌟 尊享官方「城市主理人」专属署名**：
   - 你的名字与 GitHub 个人主页将被写入 `city/data.js` 的 `maintainers` 字段，并在系统的 **「关于与帮助」弹窗**、官方 `README.md` 中动态展示与致谢！
2. **🛡️ 终身享有底层引擎的平滑升级保障（技术反制保障）**：
   - CGo OpenMap 核心引擎正在持续高速演进（包括即将到来的换乘路径寻路算法、时刻表联动、3D模式联动及图形性能大重构）。
   - **合入官方主库的城市**：官方核心团队承诺负责向后兼容性测试、自动化数据迁移以及 Bug 维护，确保你的城市始终享有最新的引擎特性；
   - **脱离主库的私有分支**：由于脱离统一维护生态，引擎迭代时私有格式将迅速失配破损，自行维护成本极高。
3. **⚖️ 遵守开源协议规范**：
   - 本项目数据遵循 **ODbL 1.0 / CC BY-SA 4.0** 相同方式共享协议，开源回馈也是开源社区互利互惠的优良传统。

👉 **立即阅读 [社区贡献指南 (CONTRIBUTING.md)](./CONTRIBUTING.md)，发起你的第一个 Pull Request 吧！**