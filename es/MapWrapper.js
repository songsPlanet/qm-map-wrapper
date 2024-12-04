import _Reflect$construct from '@babel/runtime-corejs3/core-js-stable/reflect/construct';
import _sliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/slice';
import _Array$from from '@babel/runtime-corejs3/core-js-stable/array/from';
import _Symbol from '@babel/runtime-corejs3/core-js-stable/symbol';
import _getIteratorMethod from '@babel/runtime-corejs3/core-js/get-iterator-method';
import _Array$isArray from '@babel/runtime-corejs3/core-js-stable/array/is-array';
import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime-corejs3/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime-corejs3/helpers/getPrototypeOf';
import _inherits from '@babel/runtime-corejs3/helpers/inherits';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import 'core-js/modules/es.error.cause.js';
import 'core-js/modules/es.error.to-string.js';
import 'core-js/modules/es.array.push.js';
import 'core-js/modules/es.date.to-string.js';
import 'core-js/modules/es.function.name.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.regexp.test.js';
import 'core-js/modules/es.regexp.to-string.js';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _parseInt from '@babel/runtime-corejs3/core-js-stable/parse-int';
import _findIndexInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/find-index';
import LayerGroupWrapper from './layer/LayerGroupWrapper.js';
import LayerWrapper from './layer/LayerWrapper.js';
import { LngLatBounds, Map } from 'mapbox-gl';
import { MapEvent } from './typings/TEvent.js';
import GISToolHelper from './GISToolHelper.js';

function ownKeys(e, r) { var t = _Object$keys(e); if (_Object$getOwnPropertySymbols) { var o = _Object$getOwnPropertySymbols(e); r && (o = _filterInstanceProperty(o).call(o, function (r) { return _Object$getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context4, _context5; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _forEachInstanceProperty(_context4 = ownKeys(Object(t), !0)).call(_context4, function (r) { _defineProperty(e, r, t[r]); }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(e, _Object$getOwnPropertyDescriptors(t)) : _forEachInstanceProperty(_context5 = ownKeys(Object(t))).call(_context5, function (r) { _Object$defineProperty(e, r, _Object$getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof _Symbol && _getIteratorMethod(r) || r["@@iterator"]; if (!t) { if (_Array$isArray(r) || (t = _unsupportedIterableToArray(r)) || e) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { var _context3; if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = _sliceInstanceProperty(_context3 = {}.toString.call(r)).call(_context3, 8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? _Array$from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? _Reflect$construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * 地图扩展类
 */
var MapWrapper = /*#__PURE__*/function (_Map) {
  function MapWrapper(options) {
    var _this;
    _classCallCheck(this, MapWrapper);
    _this = _callSuper(this, MapWrapper, [options]);
    _defineProperty(_this, "_id", void 0);
    /**
     * 获取mapOptions
     */
    _defineProperty(_this, "_options", void 0);
    /**
     * 获取MapLayerSetting
     */
    _defineProperty(_this, "_mapLayerSetting", void 0);
    /**
     * 获取images列表
     * {
     *  id:"imageID",
     *  data:"base64字符串"
     * }[]
     */
    _defineProperty(_this, "_images", []);
    // 绘制工具
    _defineProperty(_this, "_drawTool", void 0);
    _defineProperty(_this, "_layers", []);
    _defineProperty(_this, "addDotIcon", function (point) {
      _this.clearSelect('red-dot');
      _this.addSource('red-dot-ds', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            properties: {},
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: point // icon position [lng, lat]
            }
          }]
        }
      });
      _this.addLayer({
        id: 'red-dot-lyr',
        type: 'symbol',
        source: 'red-dot-ds',
        layout: {
          'icon-image': 'redAnimationImg',
          'icon-size': 1,
          'icon-rotation-alignment': 'map',
          'icon-allow-overlap': true,
          'icon-offset': [0, 0]
        }
      });
    });
    /**
     * 获取地图四至：
     * @returns {[[*, *], [*, *], [*, *], [*, *]]}
     */
    _defineProperty(_this, "getMapExtent", function () {
      var xmin = _this.getBounds().getWest();
      var xmax = _this.getBounds().getEast();
      var ymin = _this.getBounds().getSouth();
      var ymax = _this.getBounds().getNorth();
      return [[xmin, ymax], [xmax, ymax], [xmax, ymin], [xmin, ymin]];
    });
    /**
     * 获取lnglatBounds四至：
     * @returns {[[*, *], [*, *], [*, *], [*, *]]}
     */
    _defineProperty(_this, "getBoundsExtent", function (bounds) {
      var xmin = bounds.getWest();
      var xmax = bounds.getEast();
      var ymin = bounds.getSouth();
      var ymax = bounds.getNorth();
      return [[xmin, ymax], [xmax, ymax], [xmax, ymin], [xmin, ymin]];
    });
    _this._options = options;
    _this._id = options.id;
    _this._mapLayerSetting = [];
    // 地图初始化
    _this.fire(MapEvent.MAPINITED, {
      map: _this
    });
    return _this;
  }
  /**
   * 返回初始地图位置
   */
  _inherits(MapWrapper, _Map);
  return _createClass(MapWrapper, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    }
  }, {
    key: "mapLayerSetting",
    get: function get() {
      return this._mapLayerSetting;
    }
  }, {
    key: "images",
    get: function get() {
      return this._images;
    },
    set: function set(value) {
      this._images = value;
    }
  }, {
    key: "drawTool",
    get: function get() {
      return this._drawTool;
    },
    set: function set(value) {
      this._drawTool = value;
    }
  }, {
    key: "layers",
    get: function get() {
      return this._layers;
    }
  }, {
    key: "zoomHome",
    value: function zoomHome() {
      var center = this._options.center;
      var zoom = this._options.zoom;
      this.setCenter(center);
      this.setZoom(zoom);
    }
  }, {
    key: "load",
    value: function load(mapLayerSetting) {
      var _this2 = this;
      this._mapLayerSetting = mapLayerSetting;
      _forEachInstanceProperty(mapLayerSetting).call(mapLayerSetting, function (layerOption) {
        var lyrWrapper;
        if ('layers' in layerOption) {
          lyrWrapper = new LayerGroupWrapper(layerOption);
        } else {
          lyrWrapper = new LayerWrapper(layerOption);
        }
        _this2.addLayerWrapper(lyrWrapper);
        _this2._layers.push(lyrWrapper);
      });
    }
  }, {
    key: "getLayerWrapper",
    value: function getLayerWrapper(layers, id) {
      var _iterator = _createForOfIteratorHelper(layers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var lyr = _step.value;
          if (lyr.options.id === id) {
            return lyr;
          } else if ('layers' in lyr) {
            var temp = this.getLayerWrapper(lyr.layers, id);
            if (temp) {
              return temp;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return undefined;
    }
  }, {
    key: "addLayerWrapper",
    value: function addLayerWrapper(layer, beforeId) {
      layer.onAdd(this, beforeId);
      // 图层变化事件
      this.fire(MapEvent.MAPLAYERCHANGED, {
        map: this,
        layer: layer
      });
    }
  }, {
    key: "removeLayerWrapper",
    value: function removeLayerWrapper(layer, removeSource) {
      layer.onRemove(this, removeSource);
      // 图层变化事件
      this.fire(MapEvent.MAPLAYERCHANGED, {
        map: this,
        layer: layer
      });
    }
    /**
     * 添加临时图层-和图层关联
     */
  }, {
    key: "addTemporaryWrapper",
    value: function addTemporaryWrapper(mapLayerSettting) {
      var _this3 = this;
      _forEachInstanceProperty(mapLayerSettting).call(mapLayerSettting, function (layerOption) {
        var lyrWrapper;
        if ('layers' in layerOption) {
          lyrWrapper = new LayerGroupWrapper(layerOption);
        } else {
          lyrWrapper = new LayerWrapper(layerOption);
        }
        var flag = _this3.getLayer(layerOption.id);
        if (flag) {
          // remove layer
          _this3.removeLayer(layerOption.id);
          _this3.removeSource(layerOption.id + '-ds');
          _this3.layers.pop();
        }
        _this3.addLayerWrapper(lyrWrapper);
        _this3.layers.push(lyrWrapper);
      });
    }
    /**
     * 高亮要素-面/线
     */
  }, {
    key: "selectFeature",
    value: function selectFeature(geo, id, paint) {
      id ? this.clearSelect(id) : this.clearSelect();
      var dsId = id ? "".concat(id, "-ds") : 'location-ds';
      var lyrId = id ? "".concat(id, "-lyr") : 'location-lyr';
      this.addSource(dsId, {
        type: 'geojson',
        data: geo
      });
      this.addLayer({
        id: lyrId,
        type: 'line',
        paint: _objectSpread({
          'line-color': '#00ffff',
          'line-width': 2
        }, paint),
        source: dsId
      });
    }
    /**
     * 高亮要素-点
     */
  }, {
    key: "selectCircleFeature",
    value: function selectCircleFeature(geo, id, paint, filter, beforeId) {
      var dsId = id ? "".concat(id, "-ds") : 'location-ds';
      var lyrId = id ? "".concat(id, "-lyr") : 'location-lyr';
      this.clearFeatureById(dsId, lyrId);
      this.addSource(dsId, {
        type: 'geojson',
        data: geo
      });
      this.addLayer({
        id: lyrId,
        type: 'circle',
        paint: _objectSpread({
          'circle-color': '#00ffff',
          'circle-radius': 6,
          'circle-opacity': 0.3,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#00ffff'
        }, paint),
        source: dsId,
        filter: filter ? filter : ['in', '$type', 'Point']
      }, beforeId);
    }
    /**
     * 要素注记
     * geo：目标要素geometry
     * id：指定id，区分与一般高亮要素
     * filter：标注过滤条件：如['concat','保单号:  ',['get', 'policyNo'],'\n','险种:  ',['get', 'seedCodeNames']]
     */
  }, {
    key: "selectSymbolFeature",
    value: function selectSymbolFeature(geo, id, paint, filter) {
      var dsId = "".concat(id, "-ds");
      var lyrId = "".concat(id, "-lyr");
      this.clearFeatureById(dsId, lyrId);
      this.addSource(dsId, {
        type: 'geojson',
        data: geo
      });
      this.addLayer({
        id: lyrId,
        type: 'symbol',
        minzoom: 10,
        layout: {
          'text-size': 14,
          'text-field': filter !== null && filter !== void 0 ? filter : 'test',
          'text-justify': 'auto',
          'symbol-placement': 'point',
          'text-radial-offset': 0.5,
          'text-font': ['Open Sans Regular'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right']
        },
        paint: _objectSpread({
          'text-color': '#F320BE',
          // 玫红
          'text-halo-width': 2,
          'text-halo-color': 'white'
        }, paint),
        source: dsId
      });
    }
    /**
     * 要素注记-图标
     * @param geo：目标要素geometry{type：Point}
     * @param id：唯一编码
     * @param icon ：图标名称
     * @param beforeId
     */
  }, {
    key: "selectSymbolIconFeature",
    value: function selectSymbolIconFeature(geo, id, icon, beforeId) {
      var dsId = "".concat(id, "-ds");
      var lyrId = "".concat(id, "-lyr");
      this.clearFeatureById(dsId, lyrId);
      this.addSource(dsId, {
        type: 'geojson',
        data: geo
      });
      this.addLayer({
        id: lyrId,
        type: 'symbol',
        layout: {
          'icon-image': icon,
          'icon-allow-overlap': true,
          'icon-ignore-placement': true
        },
        paint: {
          'text-color': '#fff',
          'text-halo-width': 0.2,
          'text-halo-color': 'white'
        },
        source: dsId
      }, beforeId);
    }
    /**
     * 矢量切片服务
     * @param tiles：目标切片地址[`http://ip/selectserver/${sourceName}/{z}/{x}/{y}?`]
     * @param sourceName：数据源名称
     * @param id：唯一编码
     * @param paint ：可选样式
     * @param beofreId
     */
  }, {
    key: "selectLineFeatureByServer",
    value: function selectLineFeatureByServer(tiles, sourceName, id, paint, beofreId) {
      var dsId = "".concat(id, "-ds");
      var lyrId = "".concat(id, "-lyr");
      this.clearFeatureById(dsId, lyrId);
      this.addSource(dsId, {
        type: 'vector',
        maxzoom: 14,
        tiles: tiles
      });
      this.addLayer({
        id: lyrId,
        type: 'line',
        paint: _objectSpread({
          'line-color': '#00ffff',
          'line-width': 2
        }, paint),
        source: dsId,
        'source-layer': "public.".concat(sourceName)
      }, beofreId);
    }
    /**
    * 矢量切片服务
    * @param tiles：目标切片地址[`http://ip/selectserver/${sourceName}/{z}/{x}/{y}?`]
    * @param sourceName：数据源名称
    * @param id：唯一编码
    * @param paint ：可选样式
    * @param beofreId
    */
  }, {
    key: "selectFillFeatureByServer",
    value: function selectFillFeatureByServer(tiles, sourceName, id, paint, beofreId) {
      var dsId = "".concat(id, "-ds");
      var lyrId = "".concat(id, "-lyr");
      this.clearFeatureById(dsId, lyrId);
      this.addSource(dsId, {
        type: 'vector',
        minzoom: 0,
        maxzoom: 12,
        tiles: tiles
      });
      this.addLayer({
        id: lyrId,
        type: 'fill',
        paint: paint,
        source: dsId,
        'source-layer': "public.".concat(sourceName)
      }, beofreId);
    }
  }, {
    key: "addDashLayer",
    value:
    /**
    * 给线矢量添加动态效果
    * @param sourceid 线矢量sourceid
    */
    function addDashLayer(sourceid) {
      var that = this;
      this.addLayer({
        id: 'line-dashed',
        type: 'line',
        source: sourceid,
        paint: {
          'line-color': '#3FB2BF',
          'line-width': 3,
          'line-dasharray': [0, 4, 3]
        }
      });
      var dashArraySequence = [[0, 4, 3], [0.5, 4, 2.5], [1, 4, 2], [1.5, 4, 1.5], [2, 4, 1], [2.5, 4, 0.5], [3, 4, 0], [0, 0.5, 3, 3.5], [0, 1, 3, 3], [0, 1.5, 3, 2.5], [0, 2, 3, 2], [0, 2.5, 3, 1.5], [0, 3, 3, 1], [0, 3.5, 3, 0.5]];
      var step = 0;
      var _animateDashArray = function animateDashArray(timestamp) {
        var newStep = _parseInt(timestamp / 80 % dashArraySequence.length);
        if (newStep !== step) {
          that.setPaintProperty('line-dashed', 'line-dasharray', dashArraySequence[step]);
          step = newStep;
        }
        // Request the next frame of the animation.
        requestAnimationFrame(_animateDashArray);
      };
      _animateDashArray(0);
    }
    /**
    * 添加绘制图层
    *  @param data feature[]
    */
  }, {
    key: "addDrawFeature",
    value: function addDrawFeature(data) {
      var _this4 = this;
      if (data.length === 0) return;
      var modifyPolygon = GISToolHelper.modifyMultiPolygon(data);
      _forEachInstanceProperty(modifyPolygon).call(modifyPolygon, function (d) {
        var _this4$drawTool;
        (_this4$drawTool = _this4.drawTool) === null || _this4$drawTool === void 0 || _this4$drawTool.add(d);
      });
    }
    /**
     * 清理图层
     * @param id：唯一编码
     */
  }, {
    key: "clearSelect",
    value: function clearSelect(id) {
      var dsId = id ? "".concat(id, "-ds") : 'location-ds';
      var lyrId = id ? "".concat(id, "-lyr") : 'location-lyr';
      var flag = this.getLayer(lyrId);
      if (flag) {
        this.removeLayer(lyrId);
        this.removeSource(dsId);
      }
    }
  }, {
    key: "clearFeatureById",
    value: function clearFeatureById(dsId, lyrId) {
      var flag = this.getLayer(lyrId);
      if (flag) {
        this.removeLayer(lyrId);
        this.removeSource(dsId);
      }
    }
    /**
      * 单个要素地图定位
      */
  }, {
    key: "locationFeature",
    value: function locationFeature(featCol) {
      var _context;
      var bds = new LngLatBounds();
      _forEachInstanceProperty(_context = featCol.features).call(_context, function (d) {
        bds.extend(GISToolHelper.getFeatureBoundingBox(d));
      });
      this.fitBounds(bds, {
        maxZoom: 16
      });
    }
    /**
     * 多个要素的地图定位
     */
  }, {
    key: "locationFeatures",
    value: function locationFeatures(featCols) {
      var bds = new LngLatBounds();
      _forEachInstanceProperty(featCols).call(featCols, function (featCol) {
        var _context2;
        _forEachInstanceProperty(_context2 = featCol.features).call(_context2, function (d) {
          bds.extend(GISToolHelper.getFeatureBoundingBox(d));
        });
      });
      this.fitBounds(bds, {
        maxZoom: 16
      });
    }
    /**
    * 经纬度地图定位
    */
  }, {
    key: "locationFeatureByCoords",
    value: function locationFeatureByCoords(lonlat) {
      var bounds = new LngLatBounds(lonlat[0], lonlat[1]);
      this.fitBounds(bounds, {
        maxZoom: 16.5
      });
    }
  }, {
    key: "findValidBeforeId",
    value:
    /**
     * 查找有效beforeId
     */
    function findValidBeforeId(layerId) {
      var lyrList = this.getLayerList();
      var layerIndex = _findIndexInstanceProperty(lyrList).call(lyrList, function (d) {
        return d.options.id === layerId;
      });
      if (layerIndex > -1) {
        for (var i = layerIndex; i < lyrList.length; i++) {
          var beforeLayer = this.getLayer(lyrList[i].options.id);
          if (beforeLayer) {
            return beforeLayer.id;
          }
        }
      }
      return undefined;
    }
    /**
     * 获取图层列表(偏平化数组)
     */
  }, {
    key: "getLayerList",
    value: function getLayerList() {
      var lyrList = [];
      GISToolHelper.transTreeToArr(lyrList, this.layers);
      return lyrList;
    }
    /**
     * 地图销毁
     */
  }, {
    key: "destory",
    value: function destory() {
      this.fire(MapEvent.MAPDESTRORY, {
        map: this
      });
      this.remove();
    }
  }]);
}(Map);

export { MapWrapper as default };
