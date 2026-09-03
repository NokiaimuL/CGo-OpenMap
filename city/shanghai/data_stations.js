/**
 * CGo OpenMap - 上海轨道交通车站数据 (city/shanghai/data_stations.js)
 */

const stationsData = {
    // === 2号线东西横向主轴 ===
    "SH_S12": { type: "dot", x: 220, y: 650, cn: "国家会展中心", en: "National Exhibition Center", align: "top" },
    "SH_S11": { type: "rdot", x: 320, y: 650, cn: "虹桥火车站", en: "Hongqiao Railway Station", align: "top" },
    "SH_S10": { type: "tsf", x: 420, y: 650, cn: "虹桥2号航站楼", en: "Hongqiao Airport Terminal 2", align: "top" },
    "SH_S09": { type: "dot", x: 540, y: 650, cn: "淞虹路", en: "Songhong Road", align: "top" },
    "SH_S08": { type: "tsf", x: 660, y: 650, cn: "中山公园", en: "Zhongshan Park", align: "top-left" },
    "SH_S07": { type: "tsf", x: 780, y: 650, cn: "静安寺", en: "Jing'an Temple", align: "bottom-left" },
    "SH_S01": { type: "tsf", x: 900, y: 650, cn: "人民广场", en: "People's Square", align: "top-right", offset: { x: 4, y: -4 } },
    "SH_S02": { type: "tsf", x: 1000, y: 650, cn: "南京东路", en: "East Nanjing Road", align: "top" },
    "SH_S03": { type: "tsf", x: 1100, y: 650, cn: "陆家嘴", en: "Lujiazui", align: "top-right" },
    "SH_S04": { type: "tsf", x: 1220, y: 650, cn: "世纪大道", en: "Century Avenue", align: "top" },
    "SH_S05": { type: "tsf", x: 1360, y: 650, cn: "龙阳路", en: "Longyang Road", align: "top" },
    "SH_S06": { type: "tsf", x: 1500, y: 650, cn: "浦东国际机场", en: "Pudong Int'l Airport", align: "top" },

    // === 1号线南北主轴 ===
    "SH_S25": { type: "rdot", x: 900, y: 400, cn: "上海火车站", en: "Shanghai Railway Station", align: "right" },
    "SH_S24": { type: "tsf", x: 900, y: 480, cn: "汉中路", en: "Hanzhong Road", align: "right" },
    "SH_S23": { type: "dot", x: 900, y: 560, cn: "新闸路", en: "Xinzha Road", align: "right" },
    "SH_S13": { type: "tsf", x: 900, y: 740, cn: "黄陂南路", en: "South Huangpi Road", align: "right" },
    "SH_S14": { type: "tsf", x: 900, y: 830, cn: "陕西南路", en: "South Shaanxi Road", align: "right" },
    "SH_S15": { type: "tsf", x: 830, y: 890, cn: "常熟路", en: "Changshu Road", align: "bottom-right" },
    "SH_S16": { type: "dot", x: 750, y: 950, cn: "衡山路", en: "Hengshan Road", align: "bottom-right" },
    "SH_S17": { type: "tsf", x: 670, y: 1010, cn: "徐家汇", en: "Xujiahui", align: "bottom-right" },
    "SH_S18": { type: "tsf", x: 590, y: 1070, cn: "漕宝路", en: "Caobao Road", align: "bottom-right" },
    "SH_S19": { type: "rdot", x: 510, y: 1130, cn: "上海南站", en: "Shanghai South Railway Station", align: "bottom-right" },
    "SH_S20": { type: "dot", x: 430, y: 1190, cn: "锦江乐园", en: "Jinjiang Park", align: "bottom-right" },
    "SH_S21": { type: "dot", x: 350, y: 1230, cn: "莲花路", en: "Lianhua Road", align: "bottom" },
    "SH_S22": { type: "tsf", x: 270, y: 1230, cn: "莘庄", en: "Xinzhuang", align: "bottom" },

    // === 10号线 ===
    "SH_S27": { type: "dot", x: 520, y: 770, cn: "水城路", en: "Shuicheng Road", align: "bottom" },
    "SH_S26": { type: "tsf", x: 670, y: 830, cn: "交通大学", en: "Jiaotong University", align: "bottom-left" },
    "SH_S28": { type: "tsf", x: 1000, y: 740, cn: "新天地", en: "Xintiandi", align: "right" },
    "SH_S29": { type: "tsf", x: 1000, y: 830, cn: "豫园", en: "Yuyuan Garden", align: "right" },
    "SH_S30": { type: "dot", x: 1120, y: 520, cn: "邮电新村", en: "Youdian Xincun", align: "right" },
    "SH_S31": { type: "dot", x: 1240, y: 420, cn: "五角场", en: "Wujiaochang", align: "top" },

    // === 14号线 ===
    "SH_S37": { type: "dot", x: 380, y: 480, cn: "封浜", en: "Fengbang", align: "top" },
    "SH_S36": { type: "dot", x: 520, y: 480, cn: "真光路", en: "Zhenguang Road", align: "top" },
    "SH_S35": { type: "tsf", x: 660, y: 480, cn: "曹杨路", en: "Caoyang Road", align: "top" },
    "SH_S34": { type: "dot", x: 780, y: 560, cn: "武定路", en: "Wuding Road", align: "left" },
    "SH_S32": { type: "dot", x: 1220, y: 740, cn: "浦东南路", en: "South Pudong Road", align: "bottom" },
    "SH_S33": { type: "tsf", x: 1360, y: 740, cn: "蓝天路", en: "Lantian Road", align: "bottom" },
};
