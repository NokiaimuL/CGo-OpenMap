/**
 * CGo OpenMap - 多城市注册与元数据中心 (city/data.js)
 * 
 * ==============================================================================
 * 模块作用与架构定位 (Architecture Overview)
 * ==============================================================================
 * 1. 记录系统已注册的所有城市列表 (CITY_REGISTRY) 及对应数据文件路径与主业务逻辑；
 * 2. 存储每个城市的视图元数据（初始画布尺寸、启动中心点、默认缩放比例、高德行政区等）；
 * 3. 提供统一的多城市管理对象 (CityDataManager)，支持动态切换、URL参数解析与持久化存储；
 * 4. 为核心引擎 (core/script.js) 和设置面板 (core/settings.js) 提供统一的城市数据总线。
 * 
 * ==============================================================================
 * ️ 开发者移植指南 (Porting Guide - How to Register a New City)
 * ==============================================================================
 * 当你需要为新城市（如上海、广州、深圳、成都、武汉等）制作线路图时：
 * 1. 在 `city/` 目录下创建以城市拼音/英文命名的新文件夹（例如 `city/shanghai/`）；
 * 2. 在下方 `CITY_REGISTRY` 对象中添加一条新城市配置记录（参考下面的上海示例注释）；
 * 3. 在 `city/{city_id}/` 下编写对应的业务与数据文件（参考 `city/beijing/` 规范）；
 * 4. 在 `index.html` 底部引入新城市脚本，或通过 `?city={city_id}` 动态访问。
 * ==============================================================================
 */

(function () {
    /**
     * 城市注册表字典 (City Registry Map)
     * 键名为城市唯一标识符 (cityId, 如 "beijing", "shanghai")
     */
    const CITY_REGISTRY = {
        "beijing": {
            id: "beijing",
            name: "北京",
            folder: "./city/beijing",
            mainLogic: "./city/beijing/beijing.js",
            center: { x: 900, y: 640 },
            defaultScale: 1.1,
            mapSize: { width: 1850, height: 1300 },
            searchCity: "北京",
            title: "CGo OpenMap - 北京轨道交通线路图",
            keywords: "CGo OpenMap, 北京地铁, 线路图, 市郊铁路, 轨道交通",
            description: "由 CGo OpenMap 驱动的北京轨道交通智能交互线路图",
            officialMapUrl: "https://www.bjsubway.com/station/xltcx/",
            maintainers: [
                { name: "NaL", role: "城市主理人" },
                { name: "SierraQin", role: "运营数据支持" },
                { name: "Freedom Space", role: "市郊铁路校对" }
            ],
            isDefault: true
        },
        "shanghai": {
            id: "shanghai",
            name: "上海",
            folder: "./city/shanghai",
            mainLogic: "./city/shanghai/shanghai.js",
            center: { x: 900, y: 650 },
            defaultScale: 1.1,
            mapSize: { width: 1850, height: 1300 },
            searchCity: "上海",
            title: "CGo OpenMap - 上海轨道交通线路图",
            keywords: "CGo OpenMap, 上海地铁, 申通地铁, 线路图, 轨道交通",
            description: "由 CGo OpenMap 驱动的上海轨道交通智能交互线路图",
            officialMapUrl: "http://service.shmetro.com/yxxp/index.htm",
            maintainers: [
                { name: "待认领", role: "城市主理人招募中", isRecruiting: true }
            ],
            isDefault: false
        },
        "shenyang": {
            id: "shenyang",
            name: "沈阳",
            folder: "./city/shenyang",
            mainLogic: "./city/shenyang/shenyang.js",
            center: { x: 1000, y: 1170 },
            defaultScale: 1.0,
            mapSize: { width: 2000, height: 2400 },
            searchCity: "沈阳",
            title: "CGo OpenMap - 沈阳地铁线网图",
            keywords: "CGo OpenMap, 沈阳地铁, 线路图, 轨道交通",
            description: "由 CGo OpenMap 驱动的沈阳轨道交通智能交互线路图",
            officialMapUrl: "https://symtc.com/metro/passenger?menuInfo=IqrtbiWGPusZw4wCih3m2YRNiXJIYT1pjX2pF0/XX30lu1%2BGtOMiaCjsVIw9ivHVzeD8jpj3GuOHd8UqVujd33oHmcuPVsisY9MZemovzQQ=",
            maintainers: [
                { name: "jrzhang", role: "城市主理人", github: "https://github.com/beepingflijo" },
                { name: "从恒隆到细河", role: "运营数据支持" }
            ],
            isDefault: false
        }
    };

    // ==========================================================================
    // 城市激活与状态解析 (City Resolution Logic)
    // 优先级：URL 查询参数 ?city=xxx > 本地 LocalStorage 记忆 > 默认城市 (beijing)
    // ==========================================================================
    const urlParams = new URLSearchParams(window.location.search);
    const rawUrlCity = urlParams.get('city');
    const urlCity = rawUrlCity ? rawUrlCity.toLowerCase().trim() : null;
    const storedCity = localStorage.getItem('cgo_openmap_city');

    let currentCityId = "beijing";
    if (urlCity && CITY_REGISTRY[urlCity]) {
        currentCityId = urlCity;
        // 用户通过 URL 明确指定时，同步更新本地偏好记录
        try { localStorage.setItem('cgo_openmap_city', currentCityId); } catch (_) { }
    } else if (storedCity && CITY_REGISTRY[storedCity]) {
        currentCityId = storedCity;
    }

    // 动态同步网页标题与元数据
    const activeCityMeta = CITY_REGISTRY[currentCityId];
    if (activeCityMeta) {
        if (activeCityMeta.title) document.title = activeCityMeta.title;
        const descEl = document.querySelector('meta[name="description"]');
        if (descEl && activeCityMeta.description) descEl.setAttribute('content', activeCityMeta.description);
        const kwEl = document.querySelector('meta[name="keywords"]');
        if (kwEl && activeCityMeta.keywords) kwEl.setAttribute('content', activeCityMeta.keywords);
    }

    /**
     * 城市数据与运行时管理器 (CityDataManager)
     * 提供城市配置的查询、动态注册与激活切换能力
     */
    const CityDataManager = {
        /**
         * 获取所有已在系统注册的城市配置列表
         * @returns {Array<Object>} 城市配置对象数组
         */
        getAllCities() {
            return Object.values(CITY_REGISTRY);
        },

        /**
         * 获取指定城市的基础元数据配置
         * @param {string} cityId - 城市标识 ID (如 'beijing', 'shanghai')
         * @returns {Object|null} 城市配置对象
         */
        getCity(cityId) {
            return CITY_REGISTRY[cityId] || CITY_REGISTRY[currentCityId] || null;
        },

        /**
         * 获取当前处于激活状态的城市配置
         * @returns {Object} 当前城市的配置对象
         */
        getCurrentCity() {
            return this.getCity(currentCityId);
        },

        /**
         * 获取当前激活城市的 ID 字符串
         * @returns {string} 城市 ID (如 'beijing')
         */
        getCurrentCityId() {
            return currentCityId;
        },

        /**
         * 设置并激活当前城市（同步保存至 localStorage）
         * @param {string} cityId - 目标城市 ID
         * @returns {boolean} 设置是否成功
         */
        setCurrentCity(cityId) {
            if (CITY_REGISTRY[cityId]) {
                currentCityId = cityId;
                localStorage.setItem('cgo_openmap_city', cityId);
                return true;
            }
            console.warn(`[CityDataManager] 未找到城市配置: ${cityId}`);
            return false;
        },

        /**
         * 动态向注册表添加一个新城市配置
         * @param {Object} cityConfig - 城市配置对象（必须包含 id 字段）
         * @returns {boolean} 注册是否成功
         */
        registerCity(cityConfig) {
            if (cityConfig && cityConfig.id) {
                CITY_REGISTRY[cityConfig.id] = Object.assign({}, CITY_REGISTRY[cityConfig.id] || {}, cityConfig);
                if (cityConfig.isDefault && !urlCity && !storedCity) {
                    currentCityId = cityConfig.id;
                }
                return true;
            }
            return false;
        }
    };

    // ==========================================================================
    // 全局导出与挂载 (Global Window Exports)
    // ==========================================================================
    window.CITY_REGISTRY = CITY_REGISTRY;
    window.CityDataManager = CityDataManager;
    window.getCurrentCityData = () => CityDataManager.getCurrentCity();

    console.log("[CityRegistry] 城市注册表加载完毕，当前城市:", currentCityId);
})();
