export declare type Position = number[];

export interface Polygon {
    type: "Polygon";
    coordinates: Position[][];
}
/**
 * MultiPolygon Geometry Object
 *
 * https://tools.ietf.org/html/rfc7946#section-3.1.7
 */
export interface MultiPolygon {
    type: "MultiPolygon";
    coordinates: Position[][][];
}

export interface Geometry  {
    type: string;
    coordinates: Position[][] | Position[][][];
}

export declare type Properties = {
    [name: string]: any;
} | null;

export declare type Id = string | number;

export interface Feature<G = Geometry , P = Properties>  {
    type: "Feature";
    geometry: G;
    /**
     * A value that uniquely identifies this feature in a
     * https://tools.ietf.org/html/rfc7946#section-3.2.
     */
    id?: Id;
    /**
     * Properties associated with this feature.
     */
    properties: P;
}