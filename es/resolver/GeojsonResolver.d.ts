import type { GeoJSONSource } from 'mapbox-gl';
import { IGeoJSONResolver } from '../typings/TResolver';
declare class GeojsonResolver implements IGeoJSONResolver {
    private queryFunction;
    private param?;
    /**
    * 创建一个新的GeojsonResolver实例
    * @param queryFunction 用于查询数据的函数
    * @param param 可选参数，传递给queryFunction
    */
    constructor(queryFunction: () => Promise<any>, param?: any);
    /**
    * 从指定的API加载GeoJSON数据到Mapbox GL JS地图
    * @param source GeoJSON数据接口的URL
    * @returns Promise<any> 加载结果的Promise
    */
    load(source: GeoJSONSource): Promise<any>;
}
export default GeojsonResolver;
