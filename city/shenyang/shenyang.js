/**
 * CGo OpenMap - 沈阳城市配置与扩展模块 (city/shenyang/shenyang.js)
 *
 * 提供城市上下文、线路辅助配置及 StaCard 地图数据接入。
 */

(function () {
    const ShenyangCity = {
        id: "shenyang",
        name: "沈阳",
        searchCity: "沈阳",
        center: { x: 1000, y: 1170 },
        defaultScale: 1.0,
        mapSize: { width: 2000, height: 2400 },
        LINE_META: {},
        LINE_SORT_ORDER: [],
        LINE_SYNC_GROUPS: [],
        SUBURBAN_LINES: [],
        MERGE_STATIONS: [],
        CROSS_PLATFORM_STATIONS: [],
        maintainers: [
            { name: "jrzhang", role: "城市主理人", github: "https://github.com/beepingflijo" },
            { name: "从恒隆到细河", role: "运营数据支持" }
        ],
        dataFiles: {
            stanameCsvUrl: "./city/shenyang/staname.csv",
            amapDataUrl: "./city/shenyang/amap_data.json"
        },
        getNavigationUrl(stationName, isRailway = false) {
            const query = isRailway ? stationName : `${stationName}(地铁站)`;
            return `https://uri.amap.com/search?keyword=${encodeURIComponent(query)}&city=${encodeURIComponent("沈阳")}`;
        },
        getRailway12306Url(stationName) {
            return `https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=${encodeURIComponent(stationName.replace(/站$/, ""))}`;
        },
        getSuburbanLinks() {
            return null;
        },
        formatOwnerName(rawOwnerName) {
            return rawOwnerName || "未知运营单位";
        },
        formatCompanyString(companyList) {
            return [...new Set(companyList)].join("，");
        },
        stacard: {
            script: "./city/shenyang/stacard/script.js",
            geoDataUrl: "./city/shenyang/amap_data.json",
            basePath: "./city/shenyang/stacard/",
            getRenderer: () => window.ShenyangStaCard || window.StaCard || null
        },
        async initStaCard(options = {}) {
            return await this.stacard.getRenderer()?.init?.({
                basePath: this.stacard.basePath,
                geoDataUrl: this.stacard.geoDataUrl,
                ...options
            });
        },
        hasStaCard(stationId, lineId, stationInfo) {
            return Boolean(this.stacard.getRenderer()?.hasCard?.(stationId, lineId, stationInfo));
        },
        getStaCardHtml(station, lineInfo, isCrossPlatform = false) {
            return this.stacard.getRenderer()?.getCardPlaceholderHtml?.(station, lineInfo, isCrossPlatform) || "";
        },
        async renderStaCards(infoPanel, station) {
            return await this.stacard.getRenderer()?.renderPanelCards?.(infoPanel, station);
        }
    };

    window.SHENYANG_CITY = ShenyangCity;
    window.CURRENT_CITY = ShenyangCity;
    window.CityDataManager?.registerCity?.({
        id: ShenyangCity.id,
        name: ShenyangCity.name,
        folder: "./city/shenyang",
        mainLogic: "./city/shenyang/shenyang.js",
        center: ShenyangCity.center,
        defaultScale: ShenyangCity.defaultScale,
        mapSize: ShenyangCity.mapSize,
        searchCity: ShenyangCity.searchCity,
        title: "CGo OpenMap - 沈阳地铁线网图",
        keywords: "CGo OpenMap, 沈阳地铁, 线路图, 轨道交通",
        description: "由 CGo OpenMap 驱动的沈阳地铁智能交互线路图",
        isDefault: false,
        ...ShenyangCity
    });
})();
