"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _router = _interopRequireDefault(require("next/router"));

var Router =
/*#__PURE__*/
function (_NextRouter) {
  (0, _inherits2["default"])(Router, _NextRouter);

  function Router() {
    (0, _classCallCheck2["default"])(this, Router);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Router).apply(this, arguments));
  }

  (0, _createClass2["default"])(Router, [{
    key: "change",
    value: function () {
      var _change = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(method, _url, _as, options) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Router.lastAs = _as;
                (0, _get2["default"])((0, _getPrototypeOf2["default"])(Router.prototype), "change", this).call(this, method, _url, _as, options);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function change(_x, _x2, _x3, _x4) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "urlIsNew",
    value: function urlIsNew(pathname, query) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Router.prototype), "urlIsNew", this).call(this, pathname, query) || Router.lastAs !== this.asPath;
    }
  }]);
  return Router;
}(_router["default"]);

exports["default"] = Router;
(0, _defineProperty2["default"])(Router, "lastAs", void 0);