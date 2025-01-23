import type { GeoJSONSource } from 'mapbox-gl';
import { IGeoJSONResolver } from '../typings/TResolver';
declare class GeojsonResolver implements IGeoJSONResolver {
    private queryFunction;
    constructor(queryFunction: () => Promise<any>);
    /**
    * 从指定的API加载GeoJSON数据到Mapbox GL JS地图
    * @param source GeoJSON数据接口的URL
    * @returns Promise<any> 加载结果的Promise
    */
    load(source: GeoJSONSource): Promise<any>;
}
export default GeojsonResolver;
