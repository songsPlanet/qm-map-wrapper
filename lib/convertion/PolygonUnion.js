"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PolygonUnion = void 0;
require("core-js/modules/es.array.push.js");
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _polygonClipping = _interopRequireDefault(require("polygon-clipping"));
var PolygonUnion = exports["default"] = exports.PolygonUnion = /*#__PURE__*/(0, _createClass2["default"])(function PolygonUnion(features, id) {
  var _this = this;
  (0, _classCallCheck2["default"])(this, PolygonUnion);
  (0, _defineProperty2["default"])(this, "_features", void 0);
  (0, _defineProperty2["default"])(this, "_id", void 0);
  (0, _defineProperty2["default"])(this, "unionFeature", function () {
    var polygon = _this.recreatePolygon();
    var result = _this.merge(polygon);
    return result;
  });
  /**
   * 将querySourceFeature返回数据重构成Polygon类型
   * @returns []
   */
  (0, _defineProperty2["default"])(this, "recreatePolygon", function () {
    var _context;
    var polygons = [];
    (0, _forEach["default"])(_context = _this._features).call(_context, function (feat) {
      if (feat.geometry.type === 'MultiPolygon') {
        var flatPolygons = [];
        _this.multiPolygonToPolygon(feat.geometry.coordinates, flatPolygons);
        (0, _forEach["default"])(flatPolygons).call(flatPolygons, function (poly) {
          polygons.push({
            type: 'Feature',
            geometry: {
              coordinates: [poly],
              type: 'Polygon'
            },
            properties: feat.properties
          });
        });
      } else if (feat.geometry.type === 'Polygon') {
        polygons.push({
          type: 'Feature',
          geometry: feat.geometry,
          properties: feat.properties
        });
      }
    });
    return polygons;
  });
  /**
   * 将MultiPolygon转换为Polygon
   * @param multi: MultiPolygon坐标
   * @param polygons: 转换后Polygon
   * @returns []
   */
  (0, _defineProperty2["default"])(this, "multiPolygonToPolygon", function (multi, polygons) {
    for (var i = 0; i < multi.length; i++) {
      if (multi[i].length > 1 && multi[i][0].length === 2) {
        polygons.push(multi[i]);
      } else {
        _this.multiPolygonToPolygon(multi[i], polygons);
      }
    }
  });
  /**
   * 将Polygon合并为MultiPolygon
   * @param inputs: Polygon数据
   * @returns []
   */
  (0, _defineProperty2["default"])(this, "merge", function (inputs) {
    var polygonCoords = (0, _map["default"])(inputs).call(inputs, function (i) {
      return i.geometry.coordinates;
    });
    var unionCoords = _polygonClipping["default"].union(polygonCoords);
    var output = {
      id: _this._id,
      type: 'Feature',
      geometry: {
        type: 'MultiPolygon',
        coordinates: unionCoords
      },
      properties: inputs[0].properties
    };
    return output;
  });
  this._id = id;
  this._features = features;
});