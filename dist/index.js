"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

var _react = _interopRequireDefault(require("react"));

var _url = require("url");

var _link = _interopRequireDefault(require("next/link"));

var _router = _interopRequireDefault(require("next/router"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys2["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; (0, _forEach["default"])(_context5 = ownKeys(source, true)).call(_context5, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context6; (0, _forEach["default"])(_context6 = ownKeys(source)).call(_context6, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

module.exports = function (opts) {
  return new Routes(opts);
};

var Routes =
/*#__PURE__*/
function () {
  function Routes() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$Link = _ref.Link,
        Link = _ref$Link === void 0 ? _link["default"] : _ref$Link,
        _ref$Router = _ref.Router,
        Router = _ref$Router === void 0 ? _router["default"] : _ref$Router,
        locale = _ref.locale,
        _ref$hideDefaultLocal = _ref.hideDefaultLocale,
        hideDefaultLocale = _ref$hideDefaultLocal === void 0 ? false : _ref$hideDefaultLocal;

    (0, _classCallCheck2["default"])(this, Routes);
    this.routes = [];
    this.Link = this.getLink(Link);
    this.Router = this.getRouter(Router);
    this.locale = locale;
    this.defaultLocale = locale;
    this.hideDefaultLocale = hideDefaultLocale;
  }

  (0, _createClass2["default"])(Routes, [{
    key: "add",
    value: function add(name) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.locale;
      var pattern = arguments.length > 2 ? arguments[2] : undefined;
      var page = arguments.length > 3 ? arguments[3] : undefined;
      var data = arguments.length > 4 ? arguments[4] : undefined;
      var update = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var options;

      if (name instanceof Object) {
        options = name;

        if (!options.name) {
          throw new Error("Unnamed routes not supported");
        }

        name = options.name;

        if (!options.page) {
          options.page = options.name;
        }

        locale = options.locale || this.locale;
        update = options.update || false;
      } else {
        if ((0, _typeof2["default"])(page) === 'object') {
          data = page;
          page = name;
        } else {
          page = page || name;
        }

        options = {
          name: name,
          locale: locale,
          pattern: pattern,
          page: page
        };

        if (data) {
          options.data = data;
        }
      }

      options.hideLocale = !!this.hideDefaultLocale && options.locale === this.defaultLocale;

      if (this.findByName(name, locale)) {
        if (update) {
          var _context;

          // remove old route on update
          this.routes = (0, _filter["default"])(_context = this.routes).call(_context, function (route) {
            return route.name !== name || route.locale !== locale;
          });
        } else {
          throw new Error("Route \"".concat(name, "\" already exists"));
        }
      }

      this.routes.push(new Route(options));
      return this;
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this.locale = locale;
    }
  }, {
    key: "setRoutes",
    value: function setRoutes(routes) {
      var _this = this;

      if ((0, _isArray["default"])(routes)) {
        this.routes = [];
        (0, _forEach["default"])(routes).call(routes, function (route) {
          _this.add(route.name, route.locale, route.pattern, route.page, route.data);
        });
      } else if ((0, _typeof2["default"])(routes) === 'object') {
        this.routes = [];
        this.add(routes.name, routes.locale, routes.pattern, routes.page, routes.data);
      } else {
        throw new Error('Data passed to setRoutes is neither an array nor an object');
      }
    }
  }, {
    key: "findByName",
    value: function findByName(name, locale) {
      if (name) {
        var _context2;

        return (0, _filter["default"])(_context2 = this.routes).call(_context2, function (route) {
          return route.name === name && route.locale === locale;
        })[0];
      }
    }
  }, {
    key: "match",
    value: function match(url) {
      var _context3;

      var parsedUrl = (0, _url.parse)(url, true);
      var pathname = parsedUrl.pathname,
          query = parsedUrl.query;
      return (0, _reduce["default"])(_context3 = this.routes).call(_context3, function (result, route) {
        var _context4;

        if (result.route) {
          return result;
        }

        var params = route.match(pathname);

        if (!params) {
          return result;
        }

        (0, _forEach["default"])(_context4 = (0, _keys2["default"])(params)).call(_context4, function (key) {
          params[key] = decodeURIComponent(params[key]);
        });
        return _objectSpread({}, result, {
          route: route,
          params: params,
          query: _objectSpread({}, query, {}, params, {
            nextRoute: route.name
          })
        });
      }, {
        query: query,
        parsedUrl: parsedUrl
      });
    }
  }, {
    key: "findAndGetUrls",
    value: function findAndGetUrls(name, locale, params) {
      locale = locale || this.locale;
      var route = this.findByName(name, locale);

      if (route) {
        return {
          route: route,
          urls: route.getUrls(params),
          byName: true
        };
      } else {
        return {
          route: this.routes[0],
          urls: this.routes[0].getUrls(params),
          byName: true // throw new Error(`Route "${name}" not found`)

        };
      }
    }
  }, {
    key: "getRequestHandler",
    value: function getRequestHandler(app, customHandler) {
      var _this2 = this;

      var nextHandler = app.getRequestHandler();
      return function (req, res) {
        var _this2$match = _this2.match(req.url),
            route = _this2$match.route,
            query = _this2$match.query,
            parsedUrl = _this2$match.parsedUrl;

        if (route) {
          req.locale = route.locale;
          req.nextRoute = route;

          if (customHandler) {
            customHandler({
              req: req,
              res: res,
              route: route,
              query: query
            });
          } else {
            app.render(req, res, route.page, query);
          }
        } else {
          nextHandler(req, res, parsedUrl);
        }
      };
    }
  }, {
    key: "getLink",
    value: function getLink(Link) {
      var _this3 = this;

      var LinkRoutes = function LinkRoutes(props) {
        var href = props.href,
            locale = props.locale,
            params = props.params,
            newProps = (0, _objectWithoutProperties2["default"])(props, ["href", "locale", "params"]);
        var locale2 = locale || _this3.locale;
        var parsedUrl = (0, _url.parse)(href);

        if (parsedUrl.hostname !== null || href[0] === '/' || href[0] === '#') {
          var propsToPass;

          if (Link.propTypes) {
            var allowedKeys = (0, _keys2["default"])(Link.propTypes);
            propsToPass = (0, _reduce["default"])(allowedKeys).call(allowedKeys, function (obj, key) {
              props.hasOwnProperty(key) && (obj[key] = props[key]);
              return obj;
            }, {});
          } else {
            propsToPass = props;
          }

          return _react["default"].createElement(Link, propsToPass);
        }

        (0, _assign["default"])(newProps, _this3.findAndGetUrls(href, locale2, params).urls);
        return _react["default"].createElement(Link, newProps);
      };

      return LinkRoutes;
    }
  }, {
    key: "getRouter",
    value: function getRouter(Router) {
      var _this4 = this;

      var wrap = function wrap(method) {
        return function (route, params, locale, options) {
          var _this4$findAndGetUrls = _this4.findAndGetUrls(route, locale, params),
              byName = _this4$findAndGetUrls.byName,
              _this4$findAndGetUrls2 = _this4$findAndGetUrls.urls,
              as = _this4$findAndGetUrls2.as,
              href = _this4$findAndGetUrls2.href;

          return Router[method](href, as, byName ? options : params);
        };
      };

      Router.pushRoute = wrap('push');
      Router.replaceRoute = wrap('replace');
      Router.prefetchRoute = wrap('prefetch');
      return Router;
    }
  }]);
  return Routes;
}();

var Route =
/*#__PURE__*/
function () {
  function Route(_ref2) {
    var _context7;

    var name = _ref2.name,
        locale = _ref2.locale,
        pattern = _ref2.pattern,
        page = _ref2.page,
        data = _ref2.data,
        hideLocale = _ref2.hideLocale;
    (0, _classCallCheck2["default"])(this, Route);

    if (!name && !page) {
      throw new Error("Missing page to render for route \"".concat(pattern, "\""));
    }

    this.name = name;
    this.locale = locale;
    this.pattern = name === 'homepage' ? '' : pattern || "/".concat(name);
    this.page = page.replace(/(^|\/)homepage/, '').replace(/^\/?/, '/');
    this.regex = (0, _pathToRegexp["default"])(this.pattern, this.keys = []);
    this.keyNames = (0, _map["default"])(_context7 = (0, _keys["default"])(this)).call(_context7, function (key) {
      return key.name;
    });
    this.toPath = _pathToRegexp["default"].compile(this.pattern);
    this.data = data || {};
    this.hideLocale = hideLocale || false;
  }

  (0, _createClass2["default"])(Route, [{
    key: "match",
    value: function match(path) {
      if (!this.hideLocale && path.substring(1, this.locale.length + 1) === this.locale) {
        path = path.substring(this.locale.length + 1);

        if (!path) {
          return {};
        }
      }

      var values = this.regex.exec(path);

      if (values) {
        return this.valuesToParams((0, _slice["default"])(values).call(values, 1));
      }
    }
  }, {
    key: "valuesToParams",
    value: function valuesToParams(values) {
      var _this5 = this;

      return (0, _reduce["default"])(values).call(values, function (params, val, i) {
        return (0, _assign["default"])(params, (0, _defineProperty3["default"])({}, (0, _keys["default"])(_this5)[i].name, val));
      }, {});
    }
  }, {
    key: "getHref",
    value: function getHref() {
      var _context8;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _concat["default"])(_context8 = "".concat(this.page, "?")).call(_context8, toQuerystring(_objectSpread({}, params, {
        nextRoute: this.name
      })));
    }
  }, {
    key: "getAs",
    value: function getAs() {
      var _this6 = this,
          _context10;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var as = (this.hideLocale ? '' : '/' + this.locale) + this.toPath(params);
      var keys = (0, _keys2["default"])(params);
      var qsKeys = (0, _filter["default"])(keys).call(keys, function (key) {
        var _context9;

        return (0, _indexOf["default"])(_context9 = _this6.keyNames).call(_context9, key) === -1;
      });

      if (as === '') {
        as = '/';
      }

      if (!qsKeys.length) return as;
      var qsParams = (0, _reduce["default"])(qsKeys).call(qsKeys, function (qs, key) {
        return (0, _assign["default"])(qs, (0, _defineProperty3["default"])({}, key, params[key]));
      }, {});
      return (0, _concat["default"])(_context10 = "".concat(as, "?")).call(_context10, toQuerystring(qsParams));
    }
  }, {
    key: "getUrls",
    value: function getUrls(params) {
      var as = this.getAs(params);
      var href = this.getHref(params);
      return {
        as: as,
        href: href
      };
    }
  }]);
  return Route;
}();

var toQuerystring = function toQuerystring(obj) {
  var _context11;

  return (0, _map["default"])(_context11 = (0, _keys2["default"])(obj)).call(_context11, function (key) {
    var value = obj[key];

    if ((0, _isArray["default"])(value)) {
      value = value.join('/');
    }

    return [encodeURIComponent(key), encodeURIComponent(value)].join('=');
  }).join('&');
};