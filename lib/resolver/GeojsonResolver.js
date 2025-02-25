"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.error.to-string.js");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));
var GeojsonResolver = exports["default"] = /*#__PURE__*/function () {
  /**
  * 创建一个新的GeojsonResolver实例
  * @param queryFunction 用于查询数据的函数
  * @param param 可选参数，传递给queryFunction
  */
  function GeojsonResolver(queryFunction, param) {
    (0, _classCallCheck2["default"])(this, GeojsonResolver);
    (0, _defineProperty2["default"])(this, "queryFunction", void 0);
    (0, _defineProperty2["default"])(this, "param", void 0);
    this.queryFunction = queryFunction;
    this.param = param;
  }
  /**
  * 从指定的API加载GeoJSON数据到Mapbox GL JS地图
  * @param source GeoJSON数据接口的URL
  * @returns Promise<any> 加载结果的Promise
  */
  return (0, _createClass2["default"])(GeojsonResolver, [{
    key: "load",
    value: function () {
      var _load = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(source) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.queryFunction(this.param);
            case 3:
              result = _context.sent;
              source.setData(result);
              console.log('成功加载GeoJSON图层');
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error('加载GeoJSON数据失败:', _context.t0);
              throw new Error("Failed to load GeoJSON data: ".concat(_context.t0.message));
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 8]]);
      }));
      function load(_x) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }]);
}();