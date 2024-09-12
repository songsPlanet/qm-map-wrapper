import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import 'core-js/modules/es.array.push.js';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _findIndexInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/find-index';
import LayerWrapper from './LayerWrapper.js';

/**
 * 图层组
 * 43description 多个图层作为一个对象控制
 */
var LayerGroupWrapper = /*#__PURE__*/function () {
  function LayerGroupWrapper(options) {
    var _context,
      _this = this;
    _classCallCheck(this, LayerGroupWrapper);
    _defineProperty(this, "_options", void 0);
    _defineProperty(this, "_layers", []);
    this._options = options;
    _forEachInstanceProperty(_context = options.layers).call(_context, function (item) {
      var layer;
      if ('layers' in item) {
        layer = new LayerGroupWrapper(item);
      } else {
        layer = new LayerWrapper(item);
      }
      _this._layers.push(layer);
    });
  }
  return _createClass(LayerGroupWrapper, [{
    key: "options",
    get: function get() {
      return this._options;
    }
  }, {
    key: "layers",
    get: function get() {
      return this._layers;
    }
  }, {
    key: "onAdd",
    value: function onAdd(map, beforeId) {
      var _context2;
      _forEachInstanceProperty(_context2 = this._layers).call(_context2, function (layer) {
        map.addLayerWrapper(layer, beforeId);
      });
      this.updateOptions();
    }
  }, {
    key: "onRemove",
    value: function onRemove(map) {
      var _context3;
      _forEachInstanceProperty(_context3 = this._layers).call(_context3, function (layer) {
        map.removeLayerWrapper(layer, false);
      });
      this.updateOptions();
    }
  }, {
    key: "updateOptions",
    value: function updateOptions() {
      var _context4;
      // 更新group isAdd
      var isAdd = _findIndexInstanceProperty(_context4 = this._layers).call(_context4, function (d) {
        return d.options.isAdd;
      }) > -1;
      this._options.isAdd = isAdd;
    }
  }]);
}();

export { LayerGroupWrapper as default };
