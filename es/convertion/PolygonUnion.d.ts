import { Feature } from './typing';
import PolygonClipping from 'polygon-clipping';
export declare class PolygonUnion {
    private _features;
    private _id;
    constructor(features: Feature[], id: any);
    unionFeature: () => {
        id: string;
        type: string;
        geometry: {
            type: string;
            coordinates: PolygonClipping.MultiPolygon;
        };
        properties: any;
    };
    /**
     * 将querySourceFeature返回数据重构成Polygon类型
     * @returns []
     */
    recreatePolygon: () => any[];
    /**
     * 将MultiPolygon转换为Polygon
     * @param multi: MultiPolygon坐标
     * @param polygons: 转换后Polygon
     * @returns []
     */
    multiPolygonToPolygon: (multi: any[], polygons: number[][][]) => void;
    /**
     * 将Polygon合并为MultiPolygon
     * @param inputs: Polygon数据
     * @returns []
     */
    merge: (inputs: any[]) => {
        id: string;
        type: string;
        geometry: {
            type: string;
            coordinates: PolygonClipping.MultiPolygon;
        };
        properties: any;
    };
}
export default PolygonUnion;
