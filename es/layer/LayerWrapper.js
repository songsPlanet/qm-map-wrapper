import 'core-js/modules/es.array.push.js';
import _Reflect$construct from '@babel/runtime-corejs3/core-js-stable/reflect/construct';
import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime-corejs3/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime-corejs3/helpers/getPrototypeOf';
import _inherits from '@babel/runtime-corejs3/helpers/inherits';
import BaseLayer from './BaseLayer.js';

function ownKeys(e, r) { var t = _Object$keys(e); if (_Object$getOwnPropertySymbols) { var o = _Object$getOwnPropertySymbols(e); r && (o = _filterInstanceProperty(o).call(o, function (r) { return _Object$getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var _context, _context2; var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _forEachInstanceProperty(_context = ownKeys(Object(t), !0)).call(_context, function (r) { _defineProperty(e, r, t[r]); }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(e, _Object$getOwnPropertyDescriptors(t)) : _forEachInstanceProperty(_context2 = ownKeys(Object(t))).call(_context2, function (r) { _Object$defineProperty(e, r, _Object$getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? _Reflect$construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * 图层扩展
 * @description extend BaseLayer
 */
var LayerWrapper = /*#__PURE__*/function (_BaseLayer) {
  function LayerWrapper(options) {
    var _this;
    _classCallCheck(this, LayerWrapper);
    _this = _callSuper(this, LayerWrapper, [options]);
    _this._options = options;
    return _this;
  }
  _inherits(LayerWrapper, _BaseLayer);
  return _createClass(LayerWrapper, [{
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
}(BaseLayer);

export { LayerWrapper as default };
