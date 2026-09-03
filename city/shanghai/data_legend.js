/**
 * CGo OpenMap - 上海轨道交通图例配置 (city/shanghai/data_legend.js)
 */

const LEGEND_CONFIG = [
    {
        type: "title",
        title: "城市轨道交通",
        subtitle: "Urban Rail Transit"
    },
    {
        type: "grid",
        cols: 2,
        items: [
            { targets: ["SH1"], name: "1号线" },
            { targets: ["SH2"], name: "2号线" },
            { targets: ["SH10"], name: "10号线" },
            { targets: ["SH14"], name: "14号线" }
        ]
    }
];

if (typeof window !== "undefined") {
    window.LEGEND_CONFIG = LEGEND_CONFIG;
    window.LEGEND_SECTIONS = LEGEND_CONFIG;
    if (window.SHANGHAI_CITY) window.SHANGHAI_CITY.LEGEND_CONFIG = LEGEND_CONFIG;
    if (window.CURRENT_CITY) window.CURRENT_CITY.LEGEND_CONFIG = LEGEND_CONFIG;
}
