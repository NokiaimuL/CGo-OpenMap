/**
 * CGo OpenMap - 合肥车站数据库
 * 坐标来自底图点选 hefei_picked_coords.json；未点选站按线路邻锚点线性插值。
 */

const stationsData = {
    "0101": {
        type: "dot",
        x: 1373,
        y: 874,
        cn: "张洼",
        en: "Zhangwa",
        align: "left",
        offset: { x: -6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0102": {
        type: "dot",
        x: 1375,
        y: 946,
        cn: "兴华苑",
        en: "Xinghuayuan",
        align: "right",
        offset: { x: 6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0103": {
        type: "dot",
        x: 1376,
        y: 1017,
        cn: "瑶海公园",
        en: "Yaohai Park",
        align: "left",
        offset: { x: -6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0104": {
        type: "tsf",
        x: 1378,
        y: 1089,
        cn: "合肥火车站",
        en: "Hefei Railway Station",
        align: "bottom",
        offset: { x: 0, y: 8 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0105": {
        type: "dot",
        x: 1351,
        y: 1169,
        cn: "长淮",
        en: "Changhuai",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0106": {
        type: "dot",
        x: 1303,
        y: 1209,
        cn: "明光路",
        en: "Mingguang Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0107": {
        type: "tsf",
        x: 1283,
        y: 1284,
        cn: "大东门",
        en: "Dadongmen",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0108": {
        type: "dot",
        x: 1283,
        y: 1350,
        cn: "包公园",
        en: "Baogong Park",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0109": {
        type: "dot",
        x: 1283,
        y: 1415,
        cn: "合工大南区",
        en: "HFUT South",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0110": {
        type: "tsf",
        x: 1283,
        y: 1481,
        cn: "朱岗",
        en: "Zhugang",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0111": {
        type: "dot",
        x: 1284,
        y: 1554,
        cn: "秋浦河路",
        en: "Qiupuhe Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0112": {
        type: "dot",
        x: 1286,
        y: 1626,
        cn: "葛大店",
        en: "Gedadian",
        align: "right",
        offset: { x: 8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0113": {
        type: "dot",
        x: 1213,
        y: 1686,
        cn: "望湖城",
        en: "Wanghucheng",
        align: "left",
        offset: { x: -8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0114": {
        type: "tsf",
        x: 1213,
        y: 1753,
        cn: "合肥南站",
        en: "Hefei South Railway Station",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0115": {
        type: "dot",
        x: 1213,
        y: 1826,
        cn: "南站南广场",
        en: "South Square of Hefei South",
        align: "left",
        offset: { x: -6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0116": {
        type: "dot",
        x: 1213,
        y: 1899,
        cn: "骆岗",
        en: "Luogang",
        align: "right",
        offset: { x: 6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0117": {
        type: "dot",
        x: 1213,
        y: 1971,
        cn: "高王",
        en: "Gaowang",
        align: "left",
        offset: { x: -6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0118": {
        type: "dot",
        x: 1213,
        y: 2044,
        cn: "滨湖会展中心",
        en: "Binhu Convention Center",
        align: "right",
        offset: { x: 6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0119": {
        type: "tsf",
        x: 1213,
        y: 2117,
        cn: "紫庐",
        en: "Zilu",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0120": {
        type: "dot",
        x: 1213,
        y: 2197,
        cn: "塘西河公园",
        en: "Tangxihe Park",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0121": {
        type: "dot",
        x: 1213,
        y: 2277,
        cn: "金斗公园",
        en: "Jindou Park",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0122": {
        type: "tsf",
        x: 1213,
        y: 2357,
        cn: "云谷路",
        en: "Yungu Road",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0123": {
        type: "dot",
        x: 1213,
        y: 2430,
        cn: "万达城",
        en: "Wanda City",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0124": {
        type: "dot",
        x: 1213,
        y: 2502,
        cn: "万年埠",
        en: "Wannianbu",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0125": {
        type: "dot",
        x: 1131,
        y: 2557,
        cn: "丙子铺",
        en: "Bingzipu",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0126": {
        type: "dot",
        x: 1056,
        y: 2554,
        cn: "九联圩",
        en: "Jiulianwei",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0201": {
        type: "dot",
        x: 203,
        y: 1287,
        cn: "南岗",
        en: "Nangang",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0202": {
        type: "dot",
        x: 270,
        y: 1287,
        cn: "桂庄",
        en: "Guizhuang",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0203": {
        type: "dot",
        x: 337,
        y: 1287,
        cn: "汽车西站",
        en: "West Coach Station",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0204": {
        type: "dot",
        x: 404,
        y: 1287,
        cn: "振兴路",
        en: "Zhenxing Road",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0205": {
        type: "dot",
        x: 471,
        y: 1287,
        cn: "蜀山西",
        en: "West Shushan",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0206": {
        type: "dot",
        x: 539,
        y: 1287,
        cn: "大蜀山",
        en: "Dashushan",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0207": {
        type: "dot",
        x: 606,
        y: 1287,
        cn: "天柱路",
        en: "Tianzhu Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0208": {
        type: "dot",
        x: 673,
        y: 1287,
        cn: "科学大道",
        en: "Science Avenue",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0209": {
        type: "dot",
        x: 740,
        y: 1287,
        cn: "十里庙",
        en: "Shilimiao",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0210": {
        type: "tsf",
        x: 807,
        y: 1287,
        cn: "西七里塘",
        en: "Xiqilitang",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0211": {
        type: "tsf",
        x: 900,
        y: 1287,
        cn: "五里墩",
        en: "Wulidun",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0212": {
        type: "dot",
        x: 971,
        y: 1287,
        cn: "三里庵",
        en: "Sanlian",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0213": {
        type: "dot",
        x: 1043,
        y: 1286,
        cn: "安农大",
        en: "AHAU",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0214": {
        type: "tsf",
        x: 1114,
        y: 1286,
        cn: "三孝口",
        en: "Sanxiaokou",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0215": {
        type: "dot",
        x: 1198,
        y: 1285,
        cn: "四牌楼",
        en: "Sipailou",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0217": {
        type: "dot",
        x: 1361,
        y: 1285,
        cn: "三里街",
        en: "Sanlijie",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0218": {
        type: "dot",
        x: 1439,
        y: 1286,
        cn: "东五里井",
        en: "Dongwulijing",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0219": {
        type: "tsf",
        x: 1517,
        y: 1287,
        cn: "东七里",
        en: "Dongqili",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0220": {
        type: "dot",
        x: 1582,
        y: 1287,
        cn: "漕冲",
        en: "Caochong",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0221": {
        type: "dot",
        x: 1647,
        y: 1287,
        cn: "东二十埠",
        en: "Dong'ershibu",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0222": {
        type: "dot",
        x: 1712,
        y: 1287,
        cn: "龙岗",
        en: "Longgang",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0223": {
        type: "dot",
        x: 1777,
        y: 1287,
        cn: "王岗",
        en: "Wanggang",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0224": {
        type: "dot",
        x: 1842,
        y: 1287,
        cn: "三十埠",
        en: "Sanshibu",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0225": {
        type: "dot",
        x: 1906,
        y: 1287,
        cn: "三十埠东",
        en: "East Sanshibu",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0226": {
        type: "dot",
        x: 1971,
        y: 1287,
        cn: "祥和",
        en: "Xianghe",
        align: "bottom",
        offset: { x: 0, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0227": {
        type: "dot",
        x: 2036,
        y: 1287,
        cn: "桂王",
        en: "Guiwang",
        align: "bottom",
        offset: { x: 0, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0228": {
        type: "dot",
        x: 2101,
        y: 1287,
        cn: "对河",
        en: "Duihe",
        align: "bottom",
        offset: { x: 0, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0229": {
        type: "dot",
        x: 2166,
        y: 1287,
        cn: "店埠河",
        en: "Dianbuhe",
        align: "bottom",
        offset: { x: 0, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0230": {
        type: "dot",
        x: 2217,
        y: 1328,
        cn: "排头",
        en: "Paitou",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0231": {
        type: "rdot",
        x: 2217,
        y: 1388,
        cn: "肥东站",
        en: "Feidong Railway Station",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0232": {
        type: "dot",
        x: 2217,
        y: 1447,
        cn: "和睦湖",
        en: "Hemu Lake",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0233": {
        type: "dot",
        x: 2216,
        y: 1507,
        cn: "马桥",
        en: "Maqiao",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0234": {
        type: "dot",
        x: 2216,
        y: 1566,
        cn: "南沙河",
        en: "Nanshahe",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0235": {
        type: "dot",
        x: 2216,
        y: 1626,
        cn: "撮镇",
        en: "Cuozhen",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0301": {
        type: "dot",
        x: 1993,
        y: 903,
        cn: "相城路",
        en: "Xiangcheng Road",
        align: "bottom-right",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0302": {
        type: "dot",
        x: 1930,
        y: 902,
        cn: "职教城东",
        en: "East Vocational Town",
        align: "bottom-right",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0303": {
        type: "dot",
        x: 1867,
        y: 901,
        cn: "职教城",
        en: "Vocational Town",
        align: "bottom-right",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0304": {
        type: "dot",
        x: 1797,
        y: 931,
        cn: "幼儿师范",
        en: "Preschool Teachers College",
        align: "bottom-right",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0305": {
        type: "dot",
        x: 1751,
        y: 976,
        cn: "文浍苑",
        en: "Wenhuiyuan",
        align: "bottom-right",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0306": {
        type: "dot",
        x: 1706,
        y: 1021,
        cn: "勤劳村",
        en: "Qinlaocun",
        align: "bottom-right",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0307": {
        type: "dot",
        x: 1660,
        y: 1066,
        cn: "新海大道",
        en: "Xinhai Avenue",
        align: "bottom-right",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0308": {
        type: "dot",
        x: 1592,
        y: 1091,
        cn: "窦桥湾",
        en: "Douqiaowan",
        align: "bottom-right",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0309": {
        type: "tsf",
        x: 1516,
        y: 1097,
        cn: "方庙",
        en: "Fangmiao",
        align: "bottom-right",
        offset: { x: 6, y: 8 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0310": {
        type: "dot",
        x: 1449,
        y: 1090,
        cn: "竹丝滩",
        en: "Zhusitan",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0312": {
        type: "dot",
        x: 1315,
        y: 1090,
        cn: "鸭林冲",
        en: "Yalinchong",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0313": {
        type: "dot",
        x: 1252,
        y: 1091,
        cn: "淮南路",
        en: "Huainan Road",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0314": {
        type: "tsf",
        x: 1189,
        y: 1091,
        cn: "一里井",
        en: "Yilijing",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0315": {
        type: "tsf",
        x: 1114,
        y: 1091,
        cn: "海棠",
        en: "Haitang",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0316": {
        type: "dot",
        x: 1046,
        y: 1091,
        cn: "郑河",
        en: "Zhenghe",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0317": {
        type: "dot",
        x: 974,
        y: 1091,
        cn: "四泉桥",
        en: "Siquanqiao",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0318": {
        type: "dot",
        x: 900,
        y: 1107,
        cn: "杏花村",
        en: "Xinghuacun",
        align: "right",
        offset: { x: 6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0319": {
        type: "tsf",
        x: 854,
        y: 1153,
        cn: "合肥西站",
        en: "Hefei West Railway Station",
        align: "left",
        offset: { x: -6, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0320": {
        type: "dot",
        x: 804,
        y: 1221,
        cn: "南新庄",
        en: "Nanxinzhuang",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0322": {
        type: "dot",
        x: 807,
        y: 1379,
        cn: "国防科技大学",
        en: "NUDT",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0323": {
        type: "tsf",
        x: 807,
        y: 1481,
        cn: "洪岗",
        en: "Honggang",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0324": {
        type: "dot",
        x: 776,
        y: 1562,
        cn: "市政务中心",
        en: "Municipal Government Center",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0325": {
        type: "dot",
        x: 729,
        y: 1607,
        cn: "合肥大剧院",
        en: "Hefei Grand Theatre",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0326": {
        type: "tsf",
        x: 700,
        y: 1681,
        cn: "图书馆",
        en: "Library",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0327": {
        type: "dot",
        x: 699,
        y: 1761,
        cn: "省博物馆",
        en: "Anhui Museum",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0328": {
        type: "dot",
        x: 699,
        y: 1841,
        cn: "安医大二附院",
        en: "AHMU 2nd Affiliated Hospital",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0329": {
        type: "tsf",
        x: 698,
        y: 1921,
        cn: "繁华大道",
        en: "Fanhua Avenue",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0330": {
        type: "dot",
        x: 699,
        y: 2001,
        cn: "大学城北",
        en: "North University Town",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0331": {
        type: "dot",
        x: 675,
        y: 2062,
        cn: "工大翡翠湖校区",
        en: "HFUT Feicui Lake",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0332": {
        type: "dot",
        x: 633,
        y: 2104,
        cn: "安大磬苑校区",
        en: "AHU Qingyuan",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0333": {
        type: "dot",
        x: 590,
        y: 2147,
        cn: "幸福坝",
        en: "Xingfuba",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0334": {
        type: "dot",
        x: 548,
        y: 2190,
        cn: "安医一附院南区",
        en: "Anyi 1 Fuyuan Nanqu",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0335": {
        type: "dot",
        x: 506,
        y: 2232,
        cn: "凉亭",
        en: "Liangting",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0336": {
        type: "dot",
        x: 478,
        y: 2291,
        cn: "李湾",
        en: "Liwan",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0337": {
        type: "dot",
        x: 478,
        y: 2350,
        cn: "四十埠",
        en: "Sishibu",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0338": {
        type: "dot",
        x: 478,
        y: 2408,
        cn: "芮祠",
        en: "Ruici",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0339": {
        type: "dot",
        x: 478,
        y: 2467,
        cn: "乐平",
        en: "Leping",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0340": {
        type: "dot",
        x: 478,
        y: 2526,
        cn: "省儿童医院新区",
        en: "Provincial Children's Hospital New Campus",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0341": {
        type: "no",
        x: 479,
        y: 2586,
        cn: "馆驿",
        en: "Guanyi",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0401": {
        type: "dot",
        x: 1516,
        y: 793,
        cn: "综保区",
        en: "Comprehensive Bonded Zone",
        align: "right",
        offset: { x: 8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0402": {
        type: "dot",
        x: 1516,
        y: 839,
        cn: "安医一附院北区",
        en: "AHMU 1st Affiliated Hospital North",
        align: "left",
        offset: { x: -8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0403": {
        type: "dot",
        x: 1516,
        y: 885,
        cn: "陶冲湖东",
        en: "East Taochong Lake",
        align: "right",
        offset: { x: 8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0404": {
        type: "dot",
        x: 1516,
        y: 931,
        cn: "十里村",
        en: "Shilicun",
        align: "left",
        offset: { x: -8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0405": {
        type: "dot",
        x: 1516,
        y: 1002,
        cn: "新海公园",
        en: "Xinhai Park",
        align: "right",
        offset: { x: 8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0407": {
        type: "dot",
        x: 1517,
        y: 1192,
        cn: "站塘",
        en: "Zhantang",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0409": {
        type: "dot",
        x: 1479,
        y: 1362,
        cn: "唐桥",
        en: "Tangqiao",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0410": {
        type: "dot",
        x: 1428,
        y: 1408,
        cn: "五里庙",
        en: "Wulimiao",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0411": {
        type: "tsf",
        x: 1391,
        y: 1481,
        cn: "尧渡河路",
        en: "Yaoduhe Road",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0412": {
        type: "dot",
        x: 1392,
        y: 1561,
        cn: "工经学院",
        en: "Industrial Economics College",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0413": {
        type: "dot",
        x: 1393,
        y: 1642,
        cn: "葛大店南",
        en: "South Gedadian",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0414": {
        type: "dot",
        x: 1394,
        y: 1722,
        cn: "望湖城南",
        en: "South Wanghucheng",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0416": {
        type: "dot",
        x: 1120,
        y: 1753,
        cn: "淝南",
        en: "Feinan",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0417": {
        type: "dot",
        x: 1058,
        y: 1736,
        cn: "竹西",
        en: "Zhuxi",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0418": {
        type: "dot",
        x: 1028,
        y: 1698,
        cn: "薛河",
        en: "Xuehe",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0419": {
        type: "dot",
        x: 964,
        y: 1684,
        cn: "南屏路",
        en: "Nanping Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0420": {
        type: "dot",
        x: 898,
        y: 1683,
        cn: "姚公庙",
        en: "Yaogongmiao",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0421": {
        type: "dot",
        x: 832,
        y: 1682,
        cn: "天鹅湖东",
        en: "East Swan Lake",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0422": {
        type: "dot",
        x: 766,
        y: 1682,
        cn: "天鹅湖",
        en: "Swan Lake",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0424": {
        type: "dot",
        x: 630,
        y: 1681,
        cn: "柳树塘",
        en: "Liushutang",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0425": {
        type: "dot",
        x: 563,
        y: 1659,
        cn: "金桂",
        en: "Jingui",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0426": {
        type: "dot",
        x: 520,
        y: 1618,
        cn: "玉兰大道",
        en: "Yulan Avenue",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0427": {
        type: "tsf",
        x: 444,
        y: 1564,
        cn: "北雁湖",
        en: "Beiyanhu",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0428": {
        type: "dot",
        x: 388,
        y: 1642,
        cn: "复兴集",
        en: "Fuxingji",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0429": {
        type: "dot",
        x: 388,
        y: 1703,
        cn: "长安集",
        en: "Changanji",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0430": {
        type: "dot",
        x: 364,
        y: 1766,
        cn: "桃花潭",
        en: "Taohuatan",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0431": {
        type: "dot",
        x: 320,
        y: 1809,
        cn: "金小郢",
        en: "Jinxiaoying",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0432": {
        type: "dot",
        x: 296,
        y: 1869,
        cn: "铜锣寨路",
        en: "Tongluozhai Road",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0433": {
        type: "dot",
        x: 297,
        y: 1928,
        cn: "魏庄",
        en: "Weizhuang",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0434": {
        type: "dot",
        x: 296,
        y: 1988,
        cn: "烧脉岗",
        en: "Shaomaigang",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0435": {
        type: "no",
        x: 296,
        y: 2049,
        cn: "紫云湖",
        en: "Ziyunhu",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0501": {
        type: "dot",
        x: 1114,
        y: 778,
        cn: "汲桥路",
        en: "Jiqiao Road",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0502": {
        type: "tsf",
        x: 1115,
        y: 849,
        cn: "六中菱湖校区",
        en: "No.6 HS Linghu Campus",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0503": {
        type: "dot",
        x: 1115,
        y: 922,
        cn: "菱湖公园",
        en: "Linghu Park",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0504": {
        type: "dot",
        x: 1115,
        y: 995,
        cn: "北五里井",
        en: "Beiwulijing",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0506": {
        type: "dot",
        x: 1114,
        y: 1140,
        cn: "白水坝",
        en: "Baishuiba",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0507": {
        type: "dot",
        x: 1114,
        y: 1213,
        cn: "杏花公园",
        en: "Xinghua Park",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0509": {
        type: "dot",
        x: 1115,
        y: 1351,
        cn: "稻香楼",
        en: "Daoxianglou",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0510": {
        type: "dot",
        x: 1115,
        y: 1417,
        cn: "中国科大东区",
        en: "USTC East",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0511": {
        type: "tsf",
        x: 1116,
        y: 1482,
        cn: "市第三医院",
        en: "Municipal 3rd Hospital",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0512": {
        type: "dot",
        x: 1114,
        y: 1555,
        cn: "休宁路",
        en: "Xiuning Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0513": {
        type: "dot",
        x: 1113,
        y: 1628,
        cn: "凌大塘",
        en: "Lingdatang",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0514": {
        type: "dot",
        x: 1150,
        y: 1687,
        cn: "望湖城西",
        en: "West Wanghucheng",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0516": {
        type: "dot",
        x: 1317,
        y: 1821,
        cn: "盛大",
        en: "Shengda",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0517": {
        type: "dot",
        x: 1387,
        y: 1822,
        cn: "包河苑",
        en: "Baoheyuan",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0518": {
        type: "dot",
        x: 1457,
        y: 1822,
        cn: "义兴",
        en: "Yixing",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0519": {
        type: "dot",
        x: 1517,
        y: 1853,
        cn: "大连路",
        en: "Dalian Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0520": {
        type: "dot",
        x: 1517,
        y: 1920,
        cn: "花园大道",
        en: "Huayuan Avenue",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0521": {
        type: "dot",
        x: 1518,
        y: 1986,
        cn: "黄河路",
        en: "Huanghe Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0522": {
        type: "dot",
        x: 1518,
        y: 2052,
        cn: "扬子江路",
        en: "Yangzijiang Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0523": {
        type: "tsf",
        x: 1518,
        y: 2119,
        cn: "义城",
        en: "Yicheng",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0524": {
        type: "dot",
        x: 1518,
        y: 2208,
        cn: "省行政中心东",
        en: "East Provincial Admin Center",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0525": {
        type: "dot",
        x: 1519,
        y: 2297,
        cn: "方兴湖",
        en: "Fangxing Lake",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0526": {
        type: "dot",
        x: 1459,
        y: 2359,
        cn: "渡江纪念馆",
        en: "Crossing-the-Yangtze Memorial",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0527": {
        type: "dot",
        x: 1377,
        y: 2358,
        cn: "沈湾",
        en: "Shenwan",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0528": {
        type: "dot",
        x: 1295,
        y: 2358,
        cn: "华山路",
        en: "Huashan Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0530": {
        type: "dot",
        x: 1134,
        y: 2358,
        cn: "清水冲",
        en: "Qingshuichong",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0531": {
        type: "dot",
        x: 1056,
        y: 2359,
        cn: "云川公园",
        en: "Yunchuan Park",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0532": {
        type: "dot",
        x: 983,
        y: 2404,
        cn: "滨湖竹园",
        en: "Binhu Zhuyuan",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0533": {
        type: "dot",
        x: 986,
        y: 2467,
        cn: "贵阳路",
        en: "Guiyang Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0601": {
        type: "dot",
        x: 139,
        y: 1557,
        cn: "青龙岗",
        en: "Qinglonggang",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0602": {
        type: "dot",
        x: 215,
        y: 1559,
        cn: "合肥七中",
        en: "Hefei No.7 High School",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0603": {
        type: "dot",
        x: 292,
        y: 1560,
        cn: "量子科学中心",
        en: "Quantum Science Center",
        align: "top",
        offset: { x: 0, y: -4 },
        textScale: { cn: 1.0, en: 0.9 }
    },
    "0604": {
        type: "dot",
        x: 368,
        y: 1562,
        cn: "科大先研院",
        en: "USTC Advanced<br>Research Institute",
        align: "bottom",
        offset: { x: 4, y: 6 },
        textScale: { cn: 1.0, en: 0.85 }
    },
    "0606": {
        type: "dot",
        x: 546,
        y: 1524,
        cn: "开福寺",
        en: "Kaifu Temple",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0607": {
        type: "dot",
        x: 632,
        y: 1481,
        cn: "梦城",
        en: "Mengcheng",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0608": {
        type: "dot",
        x: 729,
        y: 1481,
        cn: "松荫桥",
        en: "Songyinqiao",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0610": {
        type: "dot",
        x: 922,
        y: 1482,
        cn: "陆军兵种大学",
        en: "Army Arms University",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0611": {
        type: "dot",
        x: 1019,
        y: 1482,
        cn: "南七里",
        en: "Nanqili",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0613": {
        type: "dot",
        x: 1200,
        y: 1482,
        cn: "卫岗",
        en: "Weigang",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0616": {
        type: "dot",
        x: 1456,
        y: 1481,
        cn: "唐大楼",
        en: "Tangdalou",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0617": {
        type: "dot",
        x: 1522,
        y: 1481,
        cn: "市儿童医院",
        en: "Municipal Children's Hospital",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0618": {
        type: "no",
        x: 1587,
        y: 1481,
        cn: "市博物馆",
        en: "Municipal Museum",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0619": {
        type: "dot",
        x: 1653,
        y: 1481,
        cn: "钢红",
        en: "Ganghong",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0620": {
        type: "dot",
        x: 1718,
        y: 1481,
        cn: "大兴集",
        en: "Daxingji",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0621": {
        type: "dot",
        x: 1784,
        y: 1481,
        cn: "伏龙",
        en: "Fulong",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0622": {
        type: "dot",
        x: 1849,
        y: 1481,
        cn: "龙塘",
        en: "Longtang",
        align: "right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0701": {
        type: "dot",
        x: 619,
        y: 1923,
        cn: "翡翠公园",
        en: "Feicui Park",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0703": {
        type: "dot",
        x: 755,
        y: 1921,
        cn: "徽园",
        en: "Huiyuan",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0704": {
        type: "dot",
        x: 811,
        y: 1922,
        cn: "明珠广场",
        en: "Mingzhu Square",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0705": {
        type: "dot",
        x: 868,
        y: 1922,
        cn: "天都路",
        en: "Tiandu Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0706": {
        type: "dot",
        x: 927,
        y: 1942,
        cn: "南艳湖北",
        en: "North Nanyan Lake",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0707": {
        type: "dot",
        x: 966,
        y: 1982,
        cn: "一六八中学",
        en: "No.168 High School",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0708": {
        type: "dot",
        x: 1005,
        y: 2022,
        cn: "合肥大学",
        en: "Hefei University",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0709": {
        type: "dot",
        x: 1044,
        y: 2063,
        cn: "南艳湖南",
        en: "South Nanyan Lake",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0710": {
        type: "dot",
        x: 1083,
        y: 2103,
        cn: "要素大市场",
        en: "Factor Market",
        align: "top-right",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0711": {
        type: "dot",
        x: 1149,
        y: 2121,
        cn: "滨湖医院",
        en: "Binhu Hospital",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0713": {
        type: "dot",
        x: 1301,
        y: 2118,
        cn: "嵩山路",
        en: "Songshan Road",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0714": {
        type: "dot",
        x: 1389,
        y: 2118,
        cn: "省文化和非遗馆",
        en: "Provincial Culture & ICH Museum",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0716": {
        type: "no",
        x: 1598,
        y: 2117,
        cn: "合肥四中",
        en: "Hefei No.4 High School",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0801": {
        type: "rdot",
        x: 1105,
        y: 424,
        cn: "北城高铁站",
        en: "Beicheng HSR Station",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0802": {
        type: "dot",
        x: 1038,
        y: 466,
        cn: "省立医院北区",
        en: "Provincial Hospital North",
        align: "left",
        offset: { x: -8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0803": {
        type: "dot",
        x: 1038,
        y: 524,
        cn: "双墩",
        en: "Shuangdun",
        align: "right",
        offset: { x: 8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0804": {
        type: "dot",
        x: 1038,
        y: 583,
        cn: "北城世纪城",
        en: "Beicheng Century City",
        align: "left",
        offset: { x: -8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0805": {
        type: "dot",
        x: 1038,
        y: 642,
        cn: "梅冲湖",
        en: "Meichong Lake",
        align: "right",
        offset: { x: 8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0806": {
        type: "dot",
        x: 1038,
        y: 700,
        cn: "金梅路",
        en: "Jinmei Road",
        align: "left",
        offset: { x: -8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0807": {
        type: "dot",
        x: 1038,
        y: 758,
        cn: "双凤",
        en: "Shuangfeng",
        align: "right",
        offset: { x: 8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0808": {
        type: "dot",
        x: 1038,
        y: 817,
        cn: "荷塘路",
        en: "Hetang Road",
        align: "left",
        offset: { x: -8, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0810": {
        type: "dot",
        x: 1190,
        y: 937,
        cn: "庐阳经开区",
        en: "Luyang Economic Zone",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "0811": {
        type: "dot",
        x: 1190,
        y: 1014,
        cn: "杏林",
        en: "Xinglin",
        align: "top",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S101": {
        type: "no",
        x: 117,
        y: 722,
        cn: "寿县炎刘",
        en: "Yanliu, Shouxian",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S102": {
        type: "no",
        x: 200,
        y: 721,
        cn: "寿县经开区",
        en: "Shouxian Economic Zone",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S103": {
        type: "no",
        x: 296,
        y: 764,
        cn: "新桥1号航站楼",
        en: "Xinqiao T1",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S104": {
        type: "no",
        x: 347,
        y: 817,
        cn: "新桥2号航站楼",
        en: "Xinqiao T2",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S105": {
        type: "no",
        x: 439,
        y: 852,
        cn: "迎宾大道",
        en: "Yingbin Avenue",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S106": {
        type: "no",
        x: 537,
        y: 850,
        cn: "未来湖",
        en: "Weilai Lake",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S107": {
        type: "no",
        x: 634,
        y: 849,
        cn: "长兴湖",
        en: "Changxing Lake",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S108": {
        type: "no",
        x: 732,
        y: 847,
        cn: "未来大科学城",
        en: "Future Science City",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S109": {
        type: "no",
        x: 804,
        y: 917,
        cn: "岗集",
        en: "Gangji",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S110": {
        type: "no",
        x: 804,
        y: 990,
        cn: "大杨",
        en: "Dayang",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S111": {
        type: "no",
        x: 805,
        y: 1064,
        cn: "庐州公园",
        en: "Luzhou Park",
        align: "left",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    },
    "S113": {
        type: "no",
        x: 877,
        y: 1220,
        cn: "省中医院西区",
        en: "Provincial TCM Hospital West",
        align: "bottom",
        offset: { x: 0, y: 0 },
        textScale: { cn: 1.0, en: 1.0 }
    }
};
