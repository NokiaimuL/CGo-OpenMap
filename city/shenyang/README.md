# 沈阳地铁城市数据说明

## 站名呼出标注

沈阳城市脚本通过 `getStationLabelStyle(station, stationId)` 为换乘站选择站名样式，并在城市脚本内使用 `MutationObserver` 将样式应用到核心引擎生成的标签。当前规则是：所有 `type: "tsf"` 的换乘站启用 `"callout"`，但“合作街”保留默认标签样式。

`"callout"` 标签包含文本框底部描边，并由城市脚本在 `lines-layer` 内动态创建 SVG 连线，连接站点中心与文本框左下角、右下角中距离较近的一点。连线会在标签尺寸、地图视口或缩放状态变化后重新计算；样式规则位于本目录的 `style.css`。

如需调整单个车站，可在 `data_stations.js` 的车站对象中设置 `labelStyle: "callout"`。车站对象级设置优先于城市脚本的批量选择规则。

## 详情弹窗标题图标

`shenyang.js` 通过局部 `MutationObserver` 监听详情弹窗重新渲染，为“怀远门”“中街”和“大南门”插入 `assets/fangcheng.svg`。每个站点的装饰图配置包含 `src` 和可编辑的 `title` 字段，当前提示语为“本站位于沈阳方城文化旅游区”。图片会插入 `.header-name-group` 前，核心弹窗逻辑不包含沈阳站名或资源路径。

“大南门”当前尚未录入车站数据；将来在 `data_stations.js` 添加中文名为“大南门”的站点后，无需再次修改匹配逻辑即可显示该图标。
