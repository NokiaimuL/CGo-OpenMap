# AGENTS.md - CGo OpenMap AI Agent 快速上手指南

> **适用对象**：各类 AI Coding Agent（包括 DeepSeek-V3/R1 驱动的 Agent、Antigravity、Claude Code、Cursor、Cline、Roo Code 等）。
> **核心目标**：帮助 AI Agent 快速理解项目架构、遵循设计原则、高效准确地执行城市移植、线路/站点增改、样式定制及 Bug 修复任务。

---

## 1. 项目概述与技术栈

**CGo OpenMap** 是一款现代、轻量、高扩展性的开源城市轨道交通交互线路图引擎。

- **核心技术栈**：
  - **结构与渲染**：HTML5 + 原生 SVG 矢量渲染 + CSS3（基于 CSS 变量驱动的主题系统）
  - **核心逻辑**：纯原生 JavaScript (ES6+)，**零前端构建工具与打包依赖**（无需 Vite/Webpack/Node.js 构建步骤）
  - **组件体系**：原生 Web Components (`core/cgo-ui.js`，包含 `<cgo-icon>` 等自定义元素)
  - **离线与 PWA**：原生 Service Worker (`sw.js`) 与 `manifest.json`
- **运行方式**：纯静态 Web 资源，通过任意静态 HTTP 服务器（如 VS Code Live Server、`npx serve .`、`python3 -m http.server`）即可直接在浏览器中运行。

---

## 2. 核心架构最高铁律（严禁违反）

### 🚨 铁律一：核心引擎与城市业务数据彻底解耦
1. **`core/` 目录为多城市通用引擎**：
   - 负责 SVG 绘制、视口缩放漫游、手势处理、全局搜索、图例调度、主题切换、图卡弹窗等通用交互。
   - **严禁**在 `core/` 下的任何脚本中硬编码特定城市的车站 ID（如 `M101`）、特定线路名称（如 `1号线`）、特定颜色或特定城市的私有业务逻辑。
2. **`city/` 目录为城市业务数据层**：
   - 所有特定城市（如北京 `city/beijing/`、上海 `city/shanghai/` 等）的车站坐标、线路走向、站距、图例结构、时刻表，**必须且只能**存放在 `city/{city_id}/` 目录下。
   - 所有新城市必须通过 `city/data.js` 的 `CITY_REGISTRY` 进行注册。

### 🚨 铁律二：零重型依赖与单文件纯粹性
- 项目面向轻量、开箱即用与跨平台部署，**严禁引入** React/Vue 等重型框架或需要额外编译器的依赖包。
- 新增功能需遵循原生 Web 标准（Vanilla JS, Web Components, Standard DOM/SVG APIs）。

### 🚨 铁律三：严禁破坏暗色/亮色主题与多端适配
- 所有颜色必须优先使用 `css/cgo_clr.css` 和 `css/style.css` 中定义的 CSS 变量（如 `var(--theme-bg)`, `var(--text-color)` 等）。
- 任何 UI 变更必须同时适配桌面端（鼠标滚轮、悬浮、拖拽）与移动触控端（多点手势捏合缩放、触控拖拽）。

---

## 3. 项目目录结构速查

```text
openmap/
├── index.html                  # 主入口页面 (包含基础DOM与脚本引入区)
├── LICENSE                     # 双轨开源许可协议 (GNU AGPLv3 + ODbL 1.0)
├── CONTRIBUTING.md              # 社区贡献与城市主理人指南
├── AGENTS.md                   # AI Agent 快速上手指南 (本文件)
├── QUICKSTART.md               # 初学者 AI 快速上手实操手册
├── PORTING.md                  # 城市移植详细操作指南
├── README.md                   # 开源项目说明主文档
├── readme.html                 # 网页版内置说明弹窗页面
├── privacy.html                # 隐私政策页面
├── manifest.json               # PWA 配置文件
├── sw.js                       # Service Worker 离线缓存
├── core/                       # 核心渲染与交互引擎 (多城市通用)
│   ├── script.js               # 主引擎：SVG生成、视口矩阵变换、平滑飞跃定位、事件监听
│   ├── cgo-ui.js               # Web Components 组件库 (<cgo-icon> 等)
│   ├── settings.js             # 偏好设置面板逻辑 (主题、全屏、清除缓存)
│   ├── help.js                 # 帮助与关于弹窗逻辑
│   ├── notice.js               # 动态公告与消息提示
│   └── tool-theme.js           # 亮暗主题切换控制器
├── city/                       # 城市数据层 (按城市解耦)
│   ├── data.js                 # 城市注册总线 (CITY_REGISTRY) 与运行时元数据
│   └── beijing/                # 示例城市 (北京)
│       ├── beijing.js          # 城市特有业务关系
│       ├── data_stations.js    # 车站坐标、中英文名、对齐方式、类型 (dot/tsf/rdot)
│       ├── data_lines.js       # 线路序列、颜色、站距、分支/环线配置
│       ├── data_legend.js      # 图例分组与分类显示
│       ├── data_timetable.js   # 车站首末班车时刻数据
│       ├── data_notopen.js     # 在建与规划虚线走向
│       ├── data_virtual_transfers.js # 出站虚拟换乘/站外连通映射
│       ├── data_scattered.js   # 孤立/特殊连接线路段
│       ├── staname.csv         # 拼音缩写、多音字与旧站名搜索库
│       └── stacard/            # 车站详情卡片与站台结构图组件
├── css/                        # 样式系统
│   ├── style.css               # 地图引擎核心样式、图层排版、手势动画
│   ├── cgo_clr.css             # 线路标志色与全局主题配色变量
│   ├── cgo_element.css         # UI 基础元素样式 (按钮、输入框、徽章)
│   ├── cgo_ui.css              # CGoUI 基础样式
│   └── cgo_components.css      # 车站卡片、检索面板与弹窗样式
└── assets/                     # 静态资源
    ├── icons/                  # 应用图标、车站徽标、天气地标
    └── svg/                    # 线路数字徽标 (icon@01.svg ~ icon@57.svg 等)
```

---

## 4. 关键数据结构与规范

### 4.1 城市注册 (`city/data.js`)

在 `CITY_REGISTRY` 中注册城市基础信息：
```javascript
const CITY_REGISTRY = {
    "shanghai": {
        id: "shanghai",
        name: "上海",
        folder: "./city/shanghai",
        mainLogic: "./city/shanghai/shanghai.js",
        center: { x: 1000, y: 800 },   // 初始视口居中坐标
        defaultScale: 1.0,              // 初始缩放比例
        mapSize: { width: 2200, height: 1800 }, // 画布总尺寸 (px)
        searchCity: "上海",             // 高德行政区检索名称
        title: "CGo OpenMap - 上海轨道交通线路图",
        keywords: "上海地铁, 申通地铁, 线路图, 轨道交通",
        description: "由 CGo OpenMap 驱动的上海轨道交通智能交互线路图",
        isDefault: false
    }
};
```

### 4.2 车站定义 (`data_stations.js`)

每个车站以唯一 ID 为 Key：
```javascript
const stationsData = {
    "M101": {
        type: "dot",                // 站类: dot(普通站，包含地铁站和市郊铁路站), tsf(换乘站), no(暂缓开通), rdot(单独零散的国铁火车站)
        x: 820,                     // 画布 X 坐标 (像素，左上角为原点 0,0)
        y: 640,                     // 画布 Y 坐标 (像素)
        cn: "人民广场",              // 中文站名
        en: "People's Square",      // 英文站名
        align: "top-right",         // 文本对齐锚点: top, bottom, left, right, top-left, top-right, bottom-left, bottom-right
        offset: { x: 4, y: -2 },    // 文本相对站点的微调像素偏移
        textScale: { cn: 1.0, en: 1.0 }, // 文本缩放比例 (可选)
        hideLabel: false            // 是否隐藏文本标签 (可选)
    }
};
```

> **换乘站规范**：多条线路相交的换乘车站，各线路必须共用**相同的车站 ID 与坐标**，或者配置虚拟换乘映射。

### 4.3 线路走向 (`data_lines.js`)

```javascript
const linesData = [
    // 1. 标准单线
    {
        id: "M1",
        name: "1号线",
        color: "#E4002B",            // 线路主色 (16进制 Hex)
        svg: "icon@01.svg",          // 线路图标 (复用 assets/svg/ 下通用模板)
        company: "申通地铁第一运营公司",
        stationIds: ["M101", "M102", "M103"], // 按运行顺序排列的车站 ID 数组
        distances: [1200, 1500]       // 站间距 (米)，严格满足 length === stationIds.length - 1
    },
    // 2. 环线 (必须声明 isLoop: true)
    {
        id: "M4",
        name: "4号线",
        color: "#5B2C84",
        isLoop: true,
        stationIds: ["M401", "M402", "M403", "M404"],
        distances: [1100, 1250, 1300, 950] // 顺时针站距 (length === stationIds.length)
    },
    // 3. 分支/Y字形线路 (必须声明 hasbranch: true)
    {
        id: "M11",
        name: "11号线",
        color: "#852655",
        hasbranch: true,
        "stationIds-way1": ["M1101", "M1102", "M1103"],
        "stationIds-way2": ["M1101", "M1102", "M1104"],
        "distances-way1": [1300, 1400],
        "distances-way2": [1300, 1800]
    }
];
```

### 4.4 矢量徽标颜色注入机制
- `assets/svg/icon@01.svg` ~ `icon@57.svg` 为内置矢量模板，内部使用 CSS 变量动态驱动。
- 无需为新城市额外绘制数字 SVG。只需在 `data_lines.js` 中声明：
  - `color`: 线路主色
  - `svgclr` (可选): 图标底色（默认同 `color`）
  - `svgtext` (可选): 图标文字颜色（默认 `#FFFFFF`）

---

## 5. AI Agent 常见任务执行 SOP

### 任务 A：为项目移植新城市
1. **创建城市目录**：在 `city/` 下新建 `city/{city_id}/`，参考 `city/beijing/` 准备各个 `data_*.js` 文件。
2. **注册城市**：在 `city/data.js` 的 `CITY_REGISTRY` 中添加新城市元数据。
3. **编写车站与线路**：按顺序填充 `data_stations.js` 和 `data_lines.js`。
4. **引入脚本**：在 `index.html` 底部修改引入的城市脚本路径，或保留动态加载支持。
5. **验证测试**：启动静态服务验证渲染与缩放。

### 任务 B：批量添加/修改站点与调整线路
1. **添加站点**：在 `data_stations.js` 添加车站对象，设置合理的 `(x, y)` 坐标与 `align` 对齐方式。
2. **连接线路**：在 `data_lines.js` 对应线路的 `stationIds` 中插入新站 ID，并同步向 `distances` 插入对应的站间距（注意数组长度校验）。
3. **检查防重叠**：若站名与线网相撞，调整 `align`（如 `top` 改为 `bottom-right`）并微调 `offset`。

### 任务 C：添加出站虚拟换乘
1. 打开 `data_virtual_transfers.js`。
2. 在 `VIRTUAL_FREE_TRANSFER_MAP` 中建立双向或单向连通 ID 关联：
   ```javascript
   const VIRTUAL_FREE_TRANSFER_MAP = {
       "M1205": ["M1308"],
       "M1308": ["M1205"]
   };
   ```

---

## 6. 本地运行与调试方法

由于浏览器安全策略（CORS）限制，直接双击 `index.html` 无法通过 `file://` 协议加载模块与数据。请使用以下任一方式启动本地静态服务：

```bash
# 方式 1: 使用 npx serve (推荐)
npx serve .

# 方式 2: 使用 Python 3 内置服务器
python3 -m http.server 8080

# 方式 3: VS Code 安装 Live Server 插件后点击右下角 "Go Live"
```

浏览器访问对应端口（如 `http://localhost:8080` 或 `http://127.0.0.1:5500`）即可实时调试。
