"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
var BaseLayer = exports["default"] = /*#__PURE__*/function () {
  function BaseLayer(options) {
    (0, _classCallCheck2["default"])(this, BaseLayer);
    (0, _defineProperty2["default"])(this, "_options", void 0);
    this._options = options;
  }
  return (0, _createClass2["default"])(BaseLayer, [{
    key: "options",
    get: function get() {
      return this._options;
    }
  }, {
    key: "onAdd",
    value: function onAdd(map, beforeId) {
      // isAdd
      if (this._options.isAdd === false) {
        this._options.isAdd = false;
        return;
      }
      // 查找有效beforeId
      beforeId = map.findValidBeforeId(this._options.id);
      this.add(map, beforeId);
      // isAdd:true
      this._options.isAdd = true;
    }
  }, {
    key: "onRemove",
    value: function onRemove(map, removeSource) {
      if (this._options.isAdd) {
        return;
      }
      var flag = map.getLayer(this._options.id);
      if (flag) {
        // remove layer
        map.removeLayer(this._options.id);
      }
      var sourceId = this._options.id + '-ds';
      // remove source
      if (removeSource) {
        map.removeSource(sourceId);
      }
      // isAdd:false
      this._options.isAdd = false;
    }
  }]);
}();