<p align="center">
  <img src="./assets/icons/mapicon.png" alt="CGo OpenMap Logo" width="96" height="96">
</p>

<h1 align="center">CGo OpenMap</h1>

<p align="center">
  轻量、现代、高度可扩展的开源 Web 城市轨道交通交互线路图引擎
</p>

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0%20%2F%20ODbL-blue.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/dependencies-none-brightgreen.svg" alt="Zero Dependencies">
  <a href="./CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  <img src="https://img.shields.io/badge/platform-Web%20%2F%20PWA-orange.svg" alt="Platform">
</p>

<p align="center">
  <a href="#项目简介">项目简介</a> •
  <a href="#核心特性">核心特性</a> •
  <a href="#快速上手">快速上手</a> •
  <a href="#开发文档">开发文档</a> •
  <a href="#项目架构">项目架构</a> •
  <a href="#城市数据移植">城市移植</a> •
  <a href="#城市主理人与鸣谢">主理人与鸣谢</a> •
  <a href="#开源许可协议">开源协议</a>
</p>

<p align="center">
  <img src="./assets/images/screenshot-1.png" alt="CGo OpenMap 界面预览" width="85%">
</p>

---

## 项目简介

**CGo OpenMap** 是一款专注于城市轨道交通线网可视化与交互的开源地图引擎。

项目采用原生 Web 技术栈构建，具备**开箱即用、轻量高效、零构建依赖**的特点，旨在为交通爱好者、城市规划研究者以及前端开发者提供可定制的交互式线路图解决方案。

目前引擎以北京轨道交通线网作为完整参考实现，底层采用通用引擎与城市业务数据完全解耦的架构设计。开发者可以基于标准化数据格式，快速移植并部署任意城市（如上海、广州、深圳、成都、武汉等）的轨道交通网络。

---

## 核心特性

- **轻量与零框架依赖**：纯原生 Web 标准构建（HTML5、SVG、Vanilla JS、Web Components、CSS 变量），无需 Node.js、Webpack 或其它前端打包流程，直接以静态资源方式部署运行。
- **原生矢量图形交互**：基于原生 SVG 渲染，支持无级平滑缩放、自由平移漫游与视口边界控制，原生适配桌面端鼠标滚轮及移动端多触点缩放手势。
- **深浅色主题适配**：内置深色（Dark）与浅色（Light）两套主题，支持跟随系统色彩偏好自动切换或手动锁定；高分屏下文字与矢量元素均保真呈现。
- **多维车站检索**：支持站名中英文、拼音全拼与首字母简拼、多音字及历史站名别名模糊匹配；检索命中后支持视口平滑定位与聚焦动效。
- **精细化站点与线路模型**：提供车站信息图卡（换乘线路、运营归属、出入口信息）、站台换乘与楼梯结构示意图、首末班车时刻表查询接口以及出站限时虚拟换乘映射。
- **位置辅助与服务联动**：基于浏览器 Geolocation API 计算临近站点与直线距离，支持一键调起外部地图导航与铁路枢纽服务。
- **高内聚低耦合的多城市架构**：核心渲染引擎（`core/`）与城市业务配置（`city/`）彻底分离，新增城市仅需配置站点与走向数据，无需修改底层渲染逻辑。
- **PWA 离线支持**：内置 Service Worker 缓存策略与 Web App Manifest 配置，支持在主流桌面与移动操作系统上作为独立应用安装并离线使用。

---

## 快速上手

### 本地运行

由于项目使用了 ES Modules 与 Service Worker，需通过 HTTP/HTTPS 协议访问，建议使用任意静态 HTTP 服务器运行：

1. **克隆代码库**
   ```bash
   git clone https://github.com/NokiaimuL/CGo-OpenMap.git
   cd CGo-OpenMap
   ```

2. **启动本地服务（任选一种）**
   - **VS Code**：安装 `Live Server` 插件，在编辑器右下角点击 **Go Live**（或右键 `index.html` 选择 **Open with Live Server**）。
   - **Node.js**：
     ```bash
     npx serve .
     ```
   - **Python 3**：
     ```bash
     python3 -m http.server 8080
     ```

3. **访问应用**
   在浏览器中打开 `http://localhost:8080`（或 Live Server 对应端口如 `http://127.0.0.1:5500`）即可查看。

---

## 开发文档

针对不同角色与使用场景，项目提供了详细的开发与配置指南：

| 读者场景 | 推荐文档 | 说明 |
| :--- | :--- | :--- |
| 初学者入门 | [QUICKSTART.md](./QUICKSTART.md) | 面向零基础用户的开发环境配置与 AI 辅助开发指南 |
| AI 辅助开发 | [AGENTS.md](./AGENTS.md) | 面向各类 AI Coding Agent 的项目架构、解耦规范与数据标准 |
| 城市数据移植 | [PORTING.md](./PORTING.md) | 城市线网数据结构、站点坐标与线路图例配置说明 |
| 社区贡献规范 | [CONTRIBUTING.md](./CONTRIBUTING.md) | 代码贡献流程、城市主理人机制与 PR 自查清单 |

---

## 项目架构

项目目录采用引擎与数据分层设计：

```text
openmap/
├── index.html                  # 应用主入口页面
├── LICENSE                     # 双轨开源许可协议 (GNU AGPLv3 + ODbL 1.0)
├── CONTRIBUTING.md              # 社区贡献指南与主理人规范
├── AGENTS.md                   # AI Agent 规范与架构铁律
├── QUICKSTART.md               # 初学者快速上手手册
├── PORTING.md                  # 城市移植实操指南
├── README.md                   # 项目主说明文档
├── readme.html                 # 应用内说明弹窗
├── privacy.html                # 隐私政策说明
├── manifest.json               # PWA 配置文件
├── sw.js                       # Service Worker 离线缓存
├── core/                       # 核心通用引擎 (多城市通用)
│   ├── script.js               # 主渲染引擎：SVG 绘制、视口变换与交互调度
│   ├── cgo-ui.js               # Web Components 组件库 (<cgo-icon> 等)
│   ├── settings.js             # 设置面板控制逻辑
│   ├── help.js                 # 帮助与关于弹窗逻辑
│   ├── notice.js               # 消息通知组件
│   └── tool-theme.js           # 主题切换与调色管理
├── city/                       # 城市数据层 (按城市解耦)
│   ├── data.js                 # 城市注册总线 (CITY_REGISTRY)
│   └── beijing/                # 参考实现 (北京)
│       ├── beijing.js          # 城市特定业务逻辑与扩展
│       ├── data_stations.js    # 车站坐标、名称、属性与对齐配置
│       ├── data_lines.js       # 线路走向、站点序列与标志色
│       ├── data_legend.js      # 图例结构与分组展示
│       ├── data_timetable.js   # 车站首末班车时刻数据
│       ├── data_notopen.js     # 在建及未开通规划走向
│       ├── data_scattered.js   # 孤立/特殊连接线路段
│       ├── data_virtual_transfers.js # 虚拟换乘映射定义
│       ├── staname.csv         # 拼音检索与多音字库
│       └── stacard/            # 车站详情卡片与结构图组件
├── css/                        # 样式系统
│   ├── style.css               # 地图引擎核心样式与图层布局
│   ├── cgo_clr.css             # 线路标志色与全局主题变量
│   ├── cgo_element.css         # UI 基础元素样式
│   ├── cgo_ui.css              # CGoUI 基础样式
│   └── cgo_components.css      # 车站卡片与检索面板样式
└── assets/                     # 静态资源
    ├── icons/                  # 应用与车站图标
    ├── svg/                    # 线路数字矢量徽标
    └── images/                 # 界面截图与演示资源
```

---

## 城市数据移植

制作新城市线路图包含以下核心步骤：

1. **新建城市目录**：在 `city/` 目录下建立对应城市文件夹（例如 `city/shanghai/`），参考 `city/beijing/` 的数据文件结构。
2. **注册城市信息**：在 `city/data.js` 的 `CITY_REGISTRY` 中添加城市元数据（ID、画布尺寸、默认中心点与初始缩放比例）。
3. **录入站点与线路**：
   - 在 `data_stations.js` 中录入车站唯一 ID、画布坐标 `(x, y)`、中英文名称及文本对齐方式；
   - 在 `data_lines.js` 中配置线路序列、站点串联顺序 `stationIds` 与线路标志色；
   - 准备线路图标或直接复用 `assets/svg/` 中的通用矢量模板。
4. **本地验证**：启动本地服务器查看渲染效果，调整站名排版避免遮挡。

详细规范与进阶配置（如换乘站设置、分支线路、虚拟换乘等）请参阅 **[城市移植实操手册 (PORTING.md)](./PORTING.md)**。

---

## 城市主理人与鸣谢

本项目倡导**开放共建、各城自主主理**的运作模式。完整移植或长期维护特定城市数据的贡献者将作为该城市的官方主理人，其署名与个人主页链接将展示在应用界面（「关于与帮助」弹窗）、项目文档及数据注册表中。

- **北京线网**：[NaL](https://github.com/NokiaimuL/)（城市主理人） · SierraQin（运营数据支持） · Freedom Space（市郊铁路校对）
- **上海线网**：*主理人虚位以待，欢迎认领*
- **平台架构**：[NaL](https://github.com/NokiaimuL/) & [Ryan](https://github.com/ryan-si)
- **地理数据**：[高德地图开放平台](https://lbs.amap.com/)

> **关于上游维护与兼容性**：
> 核心引擎将持续迭代演进（如寻路算法、时刻表联动、3D/实际走向视图等）。建议将新增城市数据通过 Pull Request 合入官方主库，官方团队将统一提供向后兼容支持与数据迁移维护。
> 欢迎查阅 **[社区贡献指南 (CONTRIBUTING.md)](./CONTRIBUTING.md)** 了解更多提交流程。

---

## 开源许可协议

本项目采用核心引擎与城市数据分离的**双轨开源协议**（详见 [LICENSE](./LICENSE)）：

1. **核心引擎与交互代码**（`core/`、`css/`、`index.html` 等）：遵循 **[GNU AGPLv3](./LICENSE)** 协议开源。任何基于网络服务器向公众提供在线地图交互服务的衍生版本，均须向用户公开完整源代码。
2. **城市地图与业务数据**（`city/` 目录）：遵循 **[ODbL 1.0 (Open Database License)](https://opendatacommons.org/licenses/odbl/)** 与 **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)** 协议共享。任何基于本项目数据衍生的公开线网数据，须保持同等协议开源。
3. **知识产权说明**：各城市轨道交通系统的官方标志、线路名称、官方标志色及运营数据版权归各属地运营公司所有。
