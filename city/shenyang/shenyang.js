/**
 * CGo OpenMap - 沈阳城市配置与扩展模块 (city/shenyang/shenyang.js)
 *
 * 提供城市上下文、线路辅助配置及 StaCard 地图数据接入。
 */

(function () {
    const CITY_STYLE_ID = "shenyang-city-style";
    const CALLOUT_LABEL_CLASS = "label-callout";
    const CALLOUT_LINES_ID = "shenyang-label-callout-lines";
    const SVG_NS = "http://www.w3.org/2000/svg";

    function loadCityStylesheet() {
        const existingLink = document.getElementById(CITY_STYLE_ID);
        if (existingLink) return existingLink;
        const link = document.createElement("link");
        link.id = CITY_STYLE_ID;
        link.rel = "stylesheet";
        link.href = "./city/shenyang/style.css";
        document.head.appendChild(link);
        return link;
    }

    const cityStylesheet = loadCityStylesheet();

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

    function getStationForLabel(label) {
        const stationId = label?.dataset?.sid;
        if (!stationId) return null;

        const processedStation = window.processedStations?.[stationId];
        if (processedStation) return processedStation;

        const rawStation = window.stationsData?.[stationId]
            || (typeof stationsData !== "undefined" ? stationsData[stationId] : null);
        if (rawStation) return rawStation;

        const name = label.querySelector(".stacn")?.textContent?.trim() || "";
        return name ? { type: label.classList.contains("type-tsf") ? "tsf" : "", cn: name } : null;
    }

    function getMapPoint(clientX, clientY, mapRect, scaleX, scaleY) {
        return {
            x: (clientX - mapRect.left) / scaleX,
            y: (clientY - mapRect.top) / scaleY
        };
    }

    function getCalloutEndpoints(label, stationId) {
        const mapContent = document.getElementById("map-content");
        const stationNode = document.getElementById(`node_${stationId}`);
        if (!mapContent || !stationNode) return null;

        const mapRect = mapContent.getBoundingClientRect();
        const mapWidth = mapContent.offsetWidth || mapRect.width;
        const mapHeight = mapContent.offsetHeight || mapRect.height;
        const scaleX = mapWidth ? mapRect.width / mapWidth : 1;
        const scaleY = mapHeight ? mapRect.height / mapHeight : 1;
        if (!Number.isFinite(scaleX) || !Number.isFinite(scaleY) || scaleX <= 0 || scaleY <= 0) return null;

        const stationRect = stationNode.getBoundingClientRect();
        const labelRect = label.getBoundingClientRect();
        if (!labelRect.width || !labelRect.height) return null;

        const stationCenter = {
            x: stationRect.left + stationRect.width / 2,
            y: stationRect.top + stationRect.height / 2
        };
        const candidates = [
            { x: labelRect.left, y: labelRect.bottom },
            { x: labelRect.right, y: labelRect.bottom }
        ];
        const distance = (point) => Math.hypot(point.x - stationCenter.x, point.y - stationCenter.y);
        const target = distance(candidates[0]) <= distance(candidates[1]) ? candidates[0] : candidates[1];

        return {
            start: getMapPoint(stationCenter.x, stationCenter.y, mapRect, scaleX, scaleY),
            end: getMapPoint(target.x, target.y, mapRect, scaleX, scaleY)
        };
    }

    function createCalloutPath(className, endpoints) {
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttribute("class", className);
        path.setAttribute("d", `M ${endpoints.start.x} ${endpoints.start.y} L ${endpoints.end.x} ${endpoints.end.y}`);
        path.setAttribute("vector-effect", "non-scaling-stroke");
        return path;
    }

    function syncStationCallouts() {
        const labelsLayer = document.getElementById("labels-layer");
        const linesLayer = document.getElementById("lines-layer");
        if (!labelsLayer || !linesLayer || !window.SHENYANG_CITY) return;

        const labels = [...labelsLayer.querySelectorAll(".label-group")];
        labels.forEach((label) => {
            const station = getStationForLabel(label);
            const labelStyle = window.SHENYANG_CITY.getStationLabelStyle(station, label.dataset.sid);
            const shouldCallout = labelStyle === "callout";
            if (label.classList.contains(CALLOUT_LABEL_CLASS) !== shouldCallout) {
                label.classList.toggle(CALLOUT_LABEL_CLASS, shouldCallout);
            }
        });

        const calloutLabels = labels.filter((label) => label.classList.contains(CALLOUT_LABEL_CLASS));
        let calloutLayer = document.getElementById(CALLOUT_LINES_ID);
        if (!calloutLabels.length) {
            calloutLayer?.remove();
            return;
        }
        if (!calloutLayer) {
            calloutLayer = document.createElementNS(SVG_NS, "g");
            calloutLayer.id = CALLOUT_LINES_ID;
            calloutLayer.setAttribute("aria-hidden", "true");
            calloutLayer.setAttribute("pointer-events", "none");
            linesLayer.appendChild(calloutLayer);
        }

        calloutLayer.replaceChildren();
        calloutLabels.forEach((label) => {
            const endpoints = getCalloutEndpoints(label, label.dataset.sid);
            if (!endpoints) return;
            calloutLayer.appendChild(createCalloutPath("shenyang-label-callout-line-halo", endpoints));
            calloutLayer.appendChild(createCalloutPath("shenyang-label-callout-line", endpoints));
        });
    }

    function installStationCalloutObserver() {
        const labelsLayer = document.getElementById("labels-layer");
        if (!labelsLayer || labelsLayer.dataset.shenyangCalloutObserver === "true") return;

        let frameId = 0;
        const scheduleSync = () => {
            if (frameId) return;
            frameId = requestAnimationFrame(() => {
                frameId = 0;
                syncStationCallouts();
            });
        };

        const labelsObserver = new MutationObserver(scheduleSync);
        labelsObserver.observe(labelsLayer, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class", "style"]
        });

        const mapContent = document.getElementById("map-content");
        if (mapContent) {
            const mapObserver = new MutationObserver(scheduleSync);
            mapObserver.observe(mapContent, { attributes: true, attributeFilter: ["class", "style"] });
        }

        window.addEventListener("resize", scheduleSync, { passive: true });
        cityStylesheet?.addEventListener("load", scheduleSync, { once: true });
        if (document.fonts?.ready) document.fonts.ready.then(scheduleSync);
        labelsLayer.dataset.shenyangCalloutObserver = "true";
        scheduleSync();
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
            if (station?.labelStyle) return station.labelStyle;
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

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", installStationCalloutObserver, { once: true });
    } else {
        installStationCalloutObserver();
    }
})();
