"use strict";

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty2(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.push.js");
var _construct = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/reflect/construct"));
var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));
var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));
var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));
var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));
var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));
var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));
var _BaseLayer2 = _interopRequireDefault(require("./BaseLayer.js"));
function ownKeys(e, r) {
  var t = (0, _keys["default"])(e);
  if (_getOwnPropertySymbols["default"]) {
    var o = (0, _getOwnPropertySymbols["default"])(e);
    r && (o = (0, _filter["default"])(o).call(o, function (r) {
      return (0, _getOwnPropertyDescriptor["default"])(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var _context, _context2;
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? (0, _forEach["default"])(_context = ownKeys(Object(t), !0)).call(_context, function (r) {
      (0, _defineProperty3["default"])(e, r, t[r]);
    }) : _getOwnPropertyDescriptors["default"] ? (0, _defineProperties["default"])(e, (0, _getOwnPropertyDescriptors["default"])(t)) : (0, _forEach["default"])(_context2 = ownKeys(Object(t))).call(_context2, function (r) {
      (0, _defineProperty2["default"])(e, r, (0, _getOwnPropertyDescriptor["default"])(t, r));
    });
  }
  return e;
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
 * 图层扩展
 * @description extend BaseLayer
 */
var LayerWrapper = exports["default"] = /*#__PURE__*/function (_BaseLayer) {
  function LayerWrapper(options) {
    var _this;
    (0, _classCallCheck2["default"])(this, LayerWrapper);
    _this = _callSuper(this, LayerWrapper, [options]);
    _this._options = options;
    return _this;
  }
  (0, _inherits2["default"])(LayerWrapper, _BaseLayer);
  return (0, _createClass2["default"])(LayerWrapper, [{
    key: "add",
    value: function add(map, beforeId) {
      var _this$_options = this._options,
        id = _this$_options.id,
        source = _this$_options.source,
        canUpdate = _this$_options.canUpdate;
      var sourceId = this._options.id + '-ds';
      // 直接传id
      if (typeof source === 'string') {
        sourceId = source;
      }
      // add source
      var oldSource = map.getSource(sourceId);
      if (!oldSource && source && typeof source !== 'string') {
        map.addSource(sourceId, source);
      }
      if (canUpdate && (oldSource === null || oldSource === void 0 ? void 0 : oldSource.type) === 'vector') {
        oldSource.setTiles(source.tiles);
      }
      // add layer
      var oldLayer = map.getLayer(id);
      var newSource = map.getSource(sourceId);
      if (!oldLayer && newSource) {
        var layerOptions = _objectSpread(_objectSpread({}, this._options), {}, {
          source: sourceId
        });
        map.addLayer(layerOptions, beforeId);
      }
    }
  }]);
}(_BaseLayer2["default"]);