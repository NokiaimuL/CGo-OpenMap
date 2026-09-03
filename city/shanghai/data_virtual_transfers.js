/**
 * CGo OpenMap - 上海虚拟换乘与出站连通配置 (city/shanghai/data_virtual_transfers.js)
 */

// 免费虚拟换乘/站外换乘映射表 (上海公共交通卡/随申码出站限时换乘)
const VIRTUAL_FREE_TRANSFER_MAP = {
    // 示例：上海火车站 1号线与3/4号线出站换乘
    "SH_S25": ["SH_S24"],
    "SH_S24": ["SH_S25"]
};

const VIRTUAL_FREE_CONNECT_LINES = [
    {
        from: "SH_S25",
        to: "SH_S24",
        offsetFrom: { x: 0, y: 0 },
        offsetTo: { x: 0, y: 0 }
    }
];

// 付费虚拟换乘/火车站接驳映射表
const VIRTUAL_TRANSFER_MAP = {};
const VIRTUAL_CONNECT_LINES = [];
