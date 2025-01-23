import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import 'core-js/modules/es.error.cause.js';
import 'core-js/modules/es.error.to-string.js';

var GeojsonResolver = /*#__PURE__*/function () {
  function GeojsonResolver(queryFunction) {
    _classCallCheck(this, GeojsonResolver);
    _defineProperty(this, "queryFunction", void 0);
    this.queryFunction = queryFunction;
  }
  /**
  * 从指定的API加载GeoJSON数据到Mapbox GL JS地图
  * @param source GeoJSON数据接口的URL
  * @returns Promise<any> 加载结果的Promise
  */
  return _createClass(GeojsonResolver, [{
    key: "load",
    value: (function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(source) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
    }())
  }]);
}();

export { GeojsonResolver as default };
