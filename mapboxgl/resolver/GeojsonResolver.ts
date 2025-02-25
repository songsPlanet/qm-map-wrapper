import type { GeoJSONSource } from 'mapbox-gl';
import { IGeoJSONResolver } from '../typings/TResolver';

class GeojsonResolver implements IGeoJSONResolver {

  private queryFunction: (param?:any) => Promise<any>;

  private param?:any

  /**
  * 创建一个新的GeojsonResolver实例
  * @param queryFunction 用于查询数据的函数
  * @param param 可选参数，传递给queryFunction
  */
  constructor(queryFunction: () => Promise<any>,param?:any) {
    this.queryFunction = queryFunction
    this.param=param!
  }

  /**
  * 从指定的API加载GeoJSON数据到Mapbox GL JS地图
  * @param source GeoJSON数据接口的URL
  * @returns Promise<any> 加载结果的Promise
  */
  async load(source: GeoJSONSource): Promise<any> {
    try {
      const result = await this.queryFunction(this.param);
      source.setData(result);
      console.log('成功加载GeoJSON图层');
    } catch (error:any) {
      console.error('加载GeoJSON数据失败:', error);
      throw new Error(`Failed to load GeoJSON data: ${error.message}`);
    }
  }


}

export default GeojsonResolver;
