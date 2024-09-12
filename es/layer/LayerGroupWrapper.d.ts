import MapWrapper from '../MapWrapper';
import { type TLayerGroupOptions } from '../typings';
import LayerWrapper from './LayerWrapper';
/**
 * 图层组
 * 43description 多个图层作为一个对象控制
 */
declare class LayerGroupWrapper {
    private _options;
    get options(): TLayerGroupOptions;
    private _layers;
    get layers(): (LayerWrapper | LayerGroupWrapper)[];
    constructor(options: TLayerGroupOptions);
    onAdd(map: MapWrapper, beforeId?: string): void;
    onRemove(map: MapWrapper): void;
    private updateOptions;
}
export default LayerGroupWrapper;
