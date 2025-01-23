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
  function GeojsonResolver(queryFunction) {
    (0, _classCallCheck2["default"])(this, GeojsonResolver);
    (0, _defineProperty2["default"])(this, "queryFunction", void 0);
    this.queryFunction = queryFunction;
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
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.queryFunction) {
                _context.next = 2;
                break;
              }
              throw new Error('Query function is not set');
            case 2:
              _context.prev = 2;
              _context.next = 5;
              return this.queryFunction().then(function (res) {
                source.setData(res.data);
                console.log('Success loading GeoJSON Layer:');
              });
            case 5:
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);
              console.error('Error loading GeoJSON data:', _context.t0);
              throw _context.t0;
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 7]]);
      }));
      function load(_x) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }]);
}();