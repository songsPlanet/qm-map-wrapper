import type { TMapLayerSetting } from './typings/TLayerOptions';
import LayerGroupWrapper from './layer/LayerGroupWrapper';
import type { StyleFunction, Expression } from 'mapbox-gl';
import type { TMapOptions } from './typings/TMapOptions';
import LayerWrapper from './layer/LayerWrapper';
import { Map, LngLatBounds } from 'mapbox-gl';
/**
 * 地图扩展类
 */
declare class MapWrapper extends Map {
    private _id;
    get id(): string;
    /**
     * 获取mapOptions
     */
    private _options;
    get options(): TMapOptions;
    /**
     * 获取MapLayerSetting
     */
    private _mapLayerSetting;
    get mapLayerSetting(): TMapLayerSetting;
    /**
     * 获取images列表
     * {
     *  id:"imageID",
     *  data:"base64字符串"
     * }[]
     */
    private _images;
    get images(): {
        id: string;
        url: string;
    }[];
    set images(value: {
        id: string;
        url: string;
    }[]);
    private _drawTool;
    get drawTool(): any;
    set drawTool(value: any);
    private _layers;
    get layers(): (LayerWrapper | LayerGroupWrapper)[];
    constructor(options: TMapOptions);
    /**
     * 返回初始地图位置
     */
    zoomHome(): void;
    load(mapLayerSetting: TMapLayerSetting): void;
    getLayerWrapper(layers: Array<LayerWrapper | LayerGroupWrapper>, id: string): LayerWrapper | LayerGroupWrapper | undefined;
    addLayerWrapper(layer: LayerWrapper | LayerGroupWrapper, beforeId?: string): void;
    removeLayerWrapper(layer: LayerWrapper | LayerGroupWrapper, removeSource?: boolean): void;
    /**
     * 添加临时图层-和图层关联
     */
    addTemporaryWrapper(mapLayerSettting: TMapLayerSetting): void;
    /**
     * 高亮要素-面/线
     */
    selectFeature(geo: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string, id?: string, color?: string): void;
    /**
     * 高亮要素-点
     */
    selectCircleFeature(geo: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry>, id?: string): void;
    /**
     * 要素注记
     * geo：目标要素geometry
     * id：指定id，区分与一般高亮要素
     * filter：标注过滤条件：如['concat','保单号:  ',['get', 'policyNo'],'\n','险种:  ',['get', 'seedCodeNames']]
     */
    selectSymbolFeature(geo: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string, id: string, color?: string, filter?: string | StyleFunction | Expression | undefined): void;
    /**
     * 要素注记-图标
     * @param geo：目标要素geometry{type：Point}
     * @param id：唯一编码
     * @param color ：可选颜色，默认玫红
     * @param filter：可选过滤条件：如['concat','保单号:  ',['get', 'policyNo'],'\n','险种:  ',['get', 'seedCodeNames']]
     */
    selectSymbolIconFeature(geo: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string, id: string, icon: string, filter?: string | StyleFunction | Expression | undefined): void;
    addDotIcon: (point: []) => void;
    clearSelect(id?: string): void;
    /**
     * 清理图层
     * @param id：唯一编码
     */
    clearSelectById(id: string): void;
    /**
     * 查找有效beforeId
     */
    findValidBeforeId(layerId: string): string | undefined;
    /**
     * 获取图层列表(偏平化数组)
     */
    getLayerList(): (LayerWrapper | LayerGroupWrapper)[];
    /**
     * 地图销毁
     */
    destory(): void;
    /**
     * 单个要素地图定位
     */
    locationFeature(featCol: any): void;
    /**
     * 多个要素的地图定位
     */
    locationFeatures(featCols: any[]): void;
    /**
     * 获取地图四至：
     * @returns {[[*, *], [*, *], [*, *], [*, *]]}
     */
    getMapExtent: () => number[][];
    /**
     * 获取lnglatBounds四至：
     * @returns {[[*, *], [*, *], [*, *], [*, *]]}
     */
    getBoundsExtent: (bounds: LngLatBounds) => number[][];
    /**
     * 给线矢量添加动态效果
     * @param sourceid 线矢量sourceid
     */
    addDashLayer(sourceid: string): void;
}
export default MapWrapper;
