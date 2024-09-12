"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.error.to-string.js");
require("core-js/modules/es.array.push.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.regexp.to-string.js");
var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));
var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));
var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));
var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));
var _getIteratorMethod2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator-method"));
var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _findIndex = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find-index"));
var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));
var _LayerGroupWrapper = _interopRequireDefault(require("./layer/LayerGroupWrapper.js"));
var _LayerWrapper = _interopRequireDefault(require("./layer/LayerWrapper.js"));
var _mapboxGl = require("mapbox-gl");
var _GISToolHelper = _interopRequireDefault(require("./GISToolHelper.js"));
var _TEvent = require("./typings/TEvent.js");
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof _symbol["default"] && (0, _getIteratorMethod2["default"])(r) || r["@@iterator"];
  if (!t) {
    if ((0, _isArray["default"])(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    var _context3;
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = (0, _slice["default"])(_context3 = {}.toString.call(r)).call(_context3, 8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? (0, _from["default"])(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _callSuper(t, o, e) {
  return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? (0, _construct["default"])(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call((0, _construct["default"])(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * 地图扩展类
 */
var MapWrapper = exports["default"] = /*#__PURE__*/function (_Map) {
  function MapWrapper(options) {
    var _this;
    (0, _classCallCheck2["default"])(this, MapWrapper);
    _this = _callSuper(this, MapWrapper, [options]);
    (0, _defineProperty2["default"])(_this, "_id", void 0);
    /**
     * 获取mapOptions
     */
    (0, _defineProperty2["default"])(_this, "_options", void 0);
    /**
     * 获取MapLayerSetting
     */
    (0, _defineProperty2["default"])(_this, "_mapLayerSetting", void 0);
    /**
     * 获取images列表
     * {
     *  id:"imageID",
     *  data:"base64字符串"
     * }[]
     */
    (0, _defineProperty2["default"])(_this, "_images", []);
    // 绘制工具
    (0, _defineProperty2["default"])(_this, "_drawTool", void 0);
    (0, _defineProperty2["default"])(_this, "_layers", []);
    (0, _defineProperty2["default"])(_this, "addDotIcon", function (point) {
      _this.clearSelectById('red-dot');
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
    (0, _defineProperty2["default"])(_this, "getMapExtent", function () {
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
    (0, _defineProperty2["default"])(_this, "getBoundsExtent", function (bounds) {
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
    _this.fire(_TEvent.MapEvent.MAPINITED, {
      map: _this
    });
    return _this;
  }
  /**
   * 返回初始地图位置
   */
  (0, _inherits2["default"])(MapWrapper, _Map);
  return (0, _createClass2["default"])(MapWrapper, [{
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
      (0, _forEach["default"])(mapLayerSetting).call(mapLayerSetting, function (layerOption) {
        var lyrWrapper;
        if ('layers' in layerOption) {
          lyrWrapper = new _LayerGroupWrapper["default"](layerOption);
        } else {
          lyrWrapper = new _LayerWrapper["default"](layerOption);
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
      this.fire(_TEvent.MapEvent.MAPLAYERCHANGED, {
        map: this,
        layer: layer
      });
    }
  }, {
    key: "removeLayerWrapper",
    value: function removeLayerWrapper(layer, removeSource) {
      layer.onRemove(this, removeSource);
      // 图层变化事件
      this.fire(_TEvent.MapEvent.MAPLAYERCHANGED, {
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
      (0, _forEach["default"])(mapLayerSettting).call(mapLayerSettting, function (layerOption) {
        var lyrWrapper;
        if ('layers' in layerOption) {
          lyrWrapper = new _LayerGroupWrapper["default"](layerOption);
        } else {
          lyrWrapper = new _LayerWrapper["default"](layerOption);
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
    value: function selectFeature(geo, id, color) {
      id ? this.clearSelect(id) : this.clearSelect();
      var dsId = id ? "".concat(id, "-location-ds") : 'location-ds';
      var lyrId = id ? "".concat(id, "-location-lyr") : 'location-lyr';
      this.addSource(dsId, {
        type: 'geojson',
        data: geo
      });
      this.addLayer({
        id: lyrId,
        type: 'line',
        paint: {
          'line-color': color !== null && color !== void 0 ? color : '#00ffff',
          'line-width': 2
        },
        source: dsId
      });
    }
    /**
     * 高亮要素-点
     */
  }, {
    key: "selectCircleFeature",
    value: function selectCircleFeature(geo, id) {
      id ? this.clearSelect("".concat(id)) : this.clearSelect();
      var dsId = id ? "".concat(id, "-location-ds") : 'location-ds';
      var lyrId = id ? "".concat(id, "-location-lyr") : 'location-lyr';
      this.addSource(dsId, {
        type: 'geojson',
        data: geo
      });
      this.addLayer({
        id: lyrId,
        type: 'circle',
        paint: {
          'circle-color': '#00ffff',
          'circle-radius': 6,
          'circle-opacity': 0.3,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#00ffff'
        },
        source: dsId
      });
    }
    /**
     * 要素注记
     * geo：目标要素geometry
     * id：指定id，区分与一般高亮要素
     * filter：标注过滤条件：如['concat','保单号:  ',['get', 'policyNo'],'\n','险种:  ',['get', 'seedCodeNames']]
     */
  }, {
    key: "selectSymbolFeature",
    value: function selectSymbolFeature(geo, id, color, filter) {
      this.clearSelect(id);
      var dsId = "".concat(id, "-location-ds");
      var lyrId = "".concat(id, "-location-lyr");
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
        paint: {
          'text-color': color ? color : '#F320BE',
          // 玫红
          'text-halo-width': 2,
          'text-halo-color': 'white'
        },
        source: dsId
      });
    }
    /**
     * 要素注记-图标
     * @param geo：目标要素geometry{type：Point}
     * @param id：唯一编码
     * @param color ：可选颜色，默认玫红
     * @param filter：可选过滤条件：如['concat','保单号:  ',['get', 'policyNo'],'\n','险种:  ',['get', 'seedCodeNames']]
     */
  }, {
    key: "selectSymbolIconFeature",
    value: function selectSymbolIconFeature(geo, id, icon, filter) {
      this.clearSelect("".concat(id));
      var dsId = "".concat(id, "-location-ds");
      var lyrId = "".concat(id, "-location-lyr");
      this.addSource(dsId, {
        type: 'geojson',
        data: geo
      });
      this.addLayer({
        id: lyrId,
        type: 'symbol',
        minzoom: 0,
        layout: {
          'icon-image': icon,
          'text-field': filter ? filter : '',
          'text-font': ['Open Sans Regular'],
          'text-allow-overlap': true,
          'text-ignore-placement': true,
          'icon-allow-overlap': true,
          'icon-ignore-placement': true
        },
        paint: {
          'text-color': '#fff',
          'text-halo-width': 0.2,
          'text-halo-color': 'white'
        },
        source: dsId
      });
    }
  }, {
    key: "clearSelect",
    value: function clearSelect(id) {
      var dsId = id ? "".concat(id, "-location-ds") : 'location-ds';
      var lyrId = id ? "".concat(id, "-location-lyr") : 'location-lyr';
      var flag = this.getLayer(lyrId);
      if (flag) {
        this.removeLayer(lyrId);
        this.removeSource(dsId);
      }
    }
    /**
     * 清理图层
     * @param id：唯一编码
     */
  }, {
    key: "clearSelectById",
    value: function clearSelectById(id) {
      var dsId = "".concat(id, "-ds");
      var lyrId = "".concat(id, "-lyr");
      var flag = this.getLayer(lyrId);
      if (flag) {
        this.removeLayer(lyrId);
        this.removeSource(dsId);
      }
    }
    /**
     * 查找有效beforeId
     */
  }, {
    key: "findValidBeforeId",
    value: function findValidBeforeId(layerId) {
      var lyrList = this.getLayerList();
      var layerIndex = (0, _findIndex["default"])(lyrList).call(lyrList, function (d) {
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
      _GISToolHelper["default"].transTreeToArr(lyrList, this.layers);
      return lyrList;
    }
    /**
     * 地图销毁
     */
  }, {
    key: "destory",
    value: function destory() {
      this.fire(_TEvent.MapEvent.MAPDESTRORY, {
        map: this
      });
      this.remove();
    }
    /**
     * 单个要素地图定位
     */
  }, {
    key: "locationFeature",
    value: function locationFeature(featCol) {
      var _context;
      var bds = new _mapboxGl.LngLatBounds();
      (0, _forEach["default"])(_context = featCol.features).call(_context, function (d) {
        bds.extend(_GISToolHelper["default"].getFeatureBoundingBox(d));
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
      var bds = new _mapboxGl.LngLatBounds();
      (0, _forEach["default"])(featCols).call(featCols, function (featCol) {
        var _context2;
        (0, _forEach["default"])(_context2 = featCol.features).call(_context2, function (d) {
          bds.extend(_GISToolHelper["default"].getFeatureBoundingBox(d));
        });
      });
      this.fitBounds(bds, {
        maxZoom: 16
      });
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
        var newStep = (0, _parseInt2["default"])(timestamp / 80 % dashArraySequence.length);
        if (newStep !== step) {
          that.setPaintProperty('line-dashed', 'line-dasharray', dashArraySequence[step]);
          step = newStep;
        }
        // Request the next frame of the animation.
        requestAnimationFrame(_animateDashArray);
      };
      _animateDashArray(0);
    }
  }]);
}(_mapboxGl.Map);