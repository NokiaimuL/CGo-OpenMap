/**
 * CGo OpenMap - 沈阳城市配置与扩展模块 (city/shenyang/shenyang.js)
 *
 * 提供城市上下文、线路辅助配置及 StaCard 地图数据接入。
 */

(function () {
    const CITY_STYLE_ID = "shenyang-city-style";

    function loadCityStylesheet() {
        if (document.getElementById(CITY_STYLE_ID)) return;
        const link = document.createElement("link");
        link.id = CITY_STYLE_ID;
        link.rel = "stylesheet";
        link.href = "./city/shenyang/style.css";
        document.head.appendChild(link);
    }

    loadCityStylesheet();

    const HEADER_DECORATION_CLASS = "shenyang-station-header-decoration";
    const FANGCHENG_DECORATION = {
        src: "./city/shenyang/assets/fangcheng.svg",
        title: "本站位于沈阳方城文化旅游区"
    };
    const STATION_HEADER_DECORATIONS = {
        "怀远门": FANGCHENG_DECORATION,
        "中街": FANGCHENG_DECORATION,
        "大南门": FANGCHENG_DECORATION
    };

    function syncStationHeaderDecoration(infoPanel) {
        const existingImage = infoPanel.querySelector(`.${HEADER_DECORATION_CLASS}`);
        const stationName = infoPanel.querySelector(".panel-cn-name")?.textContent?.trim() || "";
        const decoration = STATION_HEADER_DECORATIONS[stationName];

        if (!decoration) {
            existingImage?.remove();
            return;
        }
        if (existingImage) {
            existingImage.src = decoration.src;
            existingImage.title = decoration.title || "";
            return;
        }

        const headerNameGroup = infoPanel.querySelector(".header-name-group");
        if (!headerNameGroup?.parentElement) return;

        const decorationImg = document.createElement("img");
        decorationImg.className = HEADER_DECORATION_CLASS;
        decorationImg.src = decoration.src;
        decorationImg.title = decoration.title || "";
        decorationImg.alt = "";
        decorationImg.setAttribute("aria-hidden", "true");
        decorationImg.draggable = false;
        headerNameGroup.parentElement.insertBefore(decorationImg, headerNameGroup);
    }

    function installStationHeaderDecorationObserver() {
        const infoPanel = document.getElementById("info-panel");
        if (!infoPanel || infoPanel.dataset.shenyangHeaderDecorationObserver === "true") return;

        const observer = new MutationObserver(() => syncStationHeaderDecoration(infoPanel));
        observer.observe(infoPanel, { childList: true, subtree: true });
        infoPanel.dataset.shenyangHeaderDecorationObserver = "true";
        syncStationHeaderDecoration(infoPanel);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", installStationHeaderDecorationObserver, { once: true });
    } else {
        installStationHeaderDecorationObserver();
    }

    const ShenyangCity = {
        id: "shenyang",
        name: "沈阳",
        searchCity: "沈阳",
        center: { x: 1000, y: 800 },
        defaultScale: 1.0,
        mapSize: { width: 1944, height: 1680 },
        LINE_META: {},
        LINE_SORT_ORDER: [],
        LINE_SYNC_GROUPS: [],
        SUBURBAN_LINES: [],
        MERGE_STATIONS: [],
        CROSS_PLATFORM_STATIONS: [],
        // 换乘站默认使用底部描边与下角引线，合作街保留原有普通标签样式。
        getStationLabelStyle(station) {
            if (station?.type !== "tsf" || station.cn === "合作街") return null;
            return "callout";
        },
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
