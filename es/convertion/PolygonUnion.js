import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import 'core-js/modules/es.array.push.js';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import PolygonClipping from 'polygon-clipping';

var PolygonUnion = /*#__PURE__*/_createClass(function PolygonUnion(features, id) {
  var _this = this;
  _classCallCheck(this, PolygonUnion);
  _defineProperty(this, "_features", void 0);
  _defineProperty(this, "_id", void 0);
  _defineProperty(this, "unionFeature", function () {
    var polygon = _this.recreatePolygon();
    var result = _this.merge(polygon);
    return result;
  });
  /**
   * 将querySourceFeature返回数据重构成Polygon类型
   * @returns []
   */
  _defineProperty(this, "recreatePolygon", function () {
    var _context;
    var polygons = [];
    _forEachInstanceProperty(_context = _this._features).call(_context, function (feat) {
      if (feat.geometry.type === 'MultiPolygon') {
        var flatPolygons = [];
        _this.multiPolygonToPolygon(feat.geometry.coordinates, flatPolygons);
        _forEachInstanceProperty(flatPolygons).call(flatPolygons, function (poly) {
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
  _defineProperty(this, "multiPolygonToPolygon", function (multi, polygons) {
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
  _defineProperty(this, "merge", function (inputs) {
    var polygonCoords = _mapInstanceProperty(inputs).call(inputs, function (i) {
      return i.geometry.coordinates;
    });
    var unionCoords = PolygonClipping.union(polygonCoords);
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

export { PolygonUnion, PolygonUnion as default };
