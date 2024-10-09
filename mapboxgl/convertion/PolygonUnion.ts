/*
* 实现将多个Feature合并成一个MultiPolygon的Feature整体：
* features：目标数据Feature类型：Polygon或者MultiPolygon
* id: 结果Feature的图层id
*/

import { Feature } from './typing';
import PolygonClipping from 'polygon-clipping';

export class PolygonUnion {

  private _features: Feature[];

  private _id: string;

  constructor(features: Feature[], id: any) {
    this._id = id;
    this._features = features;
  }

  unionFeature = () => {
    const polygon = this.recreatePolygon()
    const result = this.merge(polygon)
    return result
  }


  /**
   * 将querySourceFeature返回数据重构成Polygon类型
   * @returns []
   */
  recreatePolygon = () => {
    const polygons: any[] = [];
    this._features.forEach((feat: Feature) => {
      if (feat.geometry.type === 'MultiPolygon') {
        const flatPolygons: number[][][] = [];
        this.multiPolygonToPolygon(feat.geometry.coordinates, flatPolygons);
        flatPolygons.forEach((poly: number[][]) => {
          polygons.push({
            type: 'Feature',
            geometry: {
              coordinates: [poly],
              type: 'Polygon',
            },
            properties: feat.properties,
          });
        });
      } else if (feat.geometry.type === 'Polygon') {
        polygons.push({
          type: 'Feature',
          geometry: feat.geometry,
          properties: feat.properties,
        });
      }
    });
    return polygons;
  };

  /**
   * 将MultiPolygon转换为Polygon
   * @param multi: MultiPolygon坐标
   * @param polygons: 转换后Polygon
   * @returns []
   */
  multiPolygonToPolygon = (multi: any[], polygons: number[][][]) => {
    for (let i = 0; i < multi.length; i++) {
      if (multi[i].length > 1 && multi[i][0].length === 2) {
        polygons.push(multi[i]);
      } else {
        this.multiPolygonToPolygon(multi[i], polygons);
      }
    }
  };


  /**
   * 将Polygon合并为MultiPolygon
   * @param inputs: Polygon数据
   * @returns []
   */
  merge = (inputs: any[]) => {
    const polygonCoords = inputs.map((i: any) => i.geometry.coordinates)
    const unionCoords = PolygonClipping.union(polygonCoords)
    const output = {
      id: this._id,
      type: 'Feature',
      geometry: {
        type: 'MultiPolygon',
        coordinates: unionCoords,
      },
      properties: inputs[0].properties,
    };
    return output;
  };
}



export default PolygonUnion;