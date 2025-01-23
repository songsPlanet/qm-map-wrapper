import type { GeoJSONSource } from 'mapbox-gl';
import { IGeoJSONResolver } from '../typings/TResolver';

class GeojsonResolver implements IGeoJSONResolver {

  private queryFunction: (param?:any) => Promise<any>;

  private param?:any

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
    if (!this.queryFunction) {
      throw new Error('Query function is not set');
    }
    
    try {
      await this.queryFunction(this.param).then((res: any) => {
        source.setData(res.data);
        console.log('Success loading GeoJSON Layer:');
      });
    } catch (error) {
      console.error('Error loading GeoJSON data:', error);
      throw error;
    }
  }

}

export default GeojsonResolver;
