/**
 * CGo OpenMap - 上海轨道交通线路数据 (city/shanghai/data_lines.js)
 */

const LINE_META = {
    "1号线": {
        svg: "icon@01.svg",
        svgclr: "#e4002b",
        svgtext: "#ffffff",
        color: "#e4002b",
        company: "上海地铁第一运营有限公司"
    },
    "2号线": {
        svg: "icon@02.svg",
        svgclr: "#82c341",
        svgtext: "#ffffff",
        color: "#82c341",
        company: "上海地铁第二运营有限公司"
    },
    "10号线": {
        svg: "icon@10.svg",
        svgclr: "#bfa4c7",
        svgtext: "#ffffff",
        color: "#bfa4c7",
        company: "上海地铁第一运营有限公司"
    },
    "14号线": {
        svg: "icon@14.svg",
        svgclr: "#827a00",
        svgtext: "#ffffff",
        color: "#827a00",
        company: "上海地铁第四运营有限公司"
    }
};

const linesData = [
    {
        id: "SH1",
        name: "1号线",
        color: "#e4002b",
        svg: "icon@01.svg",
        stationIds: [
            "SH_S25", "SH_S24", "SH_S23", "SH_S01", "SH_S13",
            "SH_S14", "SH_S15", "SH_S16", "SH_S17", "SH_S18",
            "SH_S19", "SH_S20", "SH_S21", "SH_S22"
        ],
        distances: [900, 800, 1100, 1200, 900, 1100, 1000, 1300, 1200, 1400, 1300, 1500, 1600],
        pathPoints: [
            { x: 900, y: 400 },
            { x: 900, y: 830 },
            { x: 510, y: 1130 },
            { x: 430, y: 1190 },
            { x: 350, y: 1230 },
            { x: 270, y: 1230 }
        ]
    },
    {
        id: "SH2",
        name: "2号线",
        color: "#82c341",
        svg: "icon@02.svg",
        stationIds: [
            "SH_S12", "SH_S11", "SH_S10", "SH_S09", "SH_S08",
            "SH_S07", "SH_S01", "SH_S02", "SH_S03", "SH_S04",
            "SH_S05", "SH_S06"
        ],
        distances: [1200, 1100, 1800, 1900, 1400, 1300, 1100, 1500, 1600, 2200, 3100],
        pathPoints: [
            { x: 220, y: 650 },
            { x: 1500, y: 650 }
        ]
    },
    {
        id: "SH10",
        name: "10号线",
        color: "#bfa4c7",
        svg: "icon@10.svg",
        stationIds: [
            "SH_S11", "SH_S27", "SH_S26", "SH_S14", "SH_S28",
            "SH_S29", "SH_S02", "SH_S30", "SH_S31"
        ],
        distances: [2200, 1500, 2100, 1200, 1100, 1300, 1800, 1900],
        pathPoints: [
            { x: 320, y: 650 },
            { x: 440, y: 770 },
            { x: 520, y: 770 },
            { x: 670, y: 830 },
            { x: 900, y: 830 },
            { x: 1000, y: 830 },
            { x: 1000, y: 650 },
            { x: 1120, y: 520 },
            { x: 1240, y: 420 }
        ]
    },
    {
        id: "SH14",
        name: "14号线",
        color: "#827a00",
        svg: "icon@14.svg",
        stationIds: [
            "SH_S37", "SH_S36", "SH_S35", "SH_S34", "SH_S07",
            "SH_S13", "SH_S29", "SH_S03", "SH_S32", "SH_S33"
        ],
        distances: [1400, 1600, 1500, 1100, 1400, 1200, 1500, 1400, 1700],
        pathPoints: [
            { x: 380, y: 480 },
            { x: 660, y: 480 },
            { x: 780, y: 560 },
            { x: 780, y: 650 },
            { x: 900, y: 740 },
            { x: 1000, y: 830 },
            { x: 1100, y: 650 },
            { x: 1220, y: 740 },
            { x: 1360, y: 740 }
        ]
    }
];

if (typeof window !== "undefined") {
    window.linesData = linesData;
    window.LINE_META = LINE_META;
    window._GLOBAL_LINE_META = LINE_META;
    if (window.SHANGHAI_CITY) window.SHANGHAI_CITY.LINE_META = LINE_META;
    if (window.CURRENT_CITY) window.CURRENT_CITY.LINE_META = LINE_META;
}
