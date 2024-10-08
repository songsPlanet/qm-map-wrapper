import { type AnyLayer, type Layer } from 'mapbox-gl';
import { type IDataResolver } from './TResolver';


export type TLegendItemOptions = {
  imageId?: string;
  style?: any;
  text?: string;
};

export type TLegendControlOptions = TLegendItemOptions & {
  title?: string;
  items?: TLegendItemOptions[];
};

export type TLayerOptions = AnyLayer &
  Layer & {
    name: string;
    isAdd?: boolean;
    isTemporary?: boolean;
    legend?: TLegendControlOptions;
    LayerName?: string;
    dataResolver?: IDataResolver;
    canUpdate?: boolean;
  };

export interface TLayerGroupOptions {
  id: string;
  name: string;
  isAdd?: boolean; // 通过子图层计算而来
  isTemporary?: boolean; // 不在图层列表里显示的临时图层，但需要popup
  type: 'layerGroup' | 'logicGroup';
  legend?: TLegendControlOptions;
  layers: Array<TLayerOptions | TLayerGroupOptions>;
}

export type TLayerSettingOptions = TLayerGroupOptions | TLayerOptions;

export type TMapLayerSetting = Array<TLayerSettingOptions>;
