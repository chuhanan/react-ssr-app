module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var AppState = (_class = function () {
  function AppState() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: "zzz", count: 1 },
        count = _ref.count,
        name = _ref.name;

    _classCallCheck(this, AppState);

    _initDefineProp(this, "count", _descriptor, this);

    _initDefineProp(this, "name", _descriptor2, this);

    this.name = name;
    this.count = count;
  }

  AppState.prototype.add = function add() {
    this.count += 2;
  };

  AppState.prototype.toJson = function toJson() {
    return {
      count: this.count,
      name: this.name
    };
  };

  _createClass(AppState, [{
    key: "Msg",
    get: function get() {
      return this.name + " and count is " + this.count;
    }
  }]);

  return AppState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "Msg", [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "Msg"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "add", [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);



var appState = new AppState();

// setInterval(() => {
//   appState.add()
// }, 2000)

// autorun(() => {
//   console.log(appState.Msg)
// })

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AppState, "AppState", "/Users/zsn/zsn_project/REACT/z-node/client/store/app-state.js");

  __REACT_HOT_LOADER__.register(appState, "appState", "/Users/zsn/zsn_project/REACT/z-node/client/store/app-state.js");
}();

;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_App__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_store_store__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreMap", function() { return __WEBPACK_IMPORTED_MODULE_4__client_store_store__["a"]; });






//让mobx在服务端渲染的时候不会重复的渲染
//导致computed重复计算 内存溢出
Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["useStaticRendering"])(true);

var _default = function _default(stores, routerContext, url) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_mobx_react__["Provider"],
    stores,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["StaticRouter"],
      { context: routerContext, location: url },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__views_App__["a" /* default */], null)
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);


;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zsn/zsn_project/REACT/z-node/client/server-entry.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_router__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @ts-nocheck




var App = function (_Component) {
  _inherits(App, _Component);

  function App(props, context) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _Component.call(this, props, context));
  }

  App.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
        { to: '/' },
        '\u9996\u9875'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
        { to: '/detail' },
        '\u8BE6\u60C5'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__config_router__["a" /* default */], null)
    );
  };

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = App;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/zsn/zsn_project/REACT/z-node/client/views/App.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zsn/zsn_project/REACT/z-node/client/views/App.jsx');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_topic_list__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_topic_detail__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_test_test_api__ = __webpack_require__(12);






var _default = function _default() {
  return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/', key: 'home', render: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: '/list' });
    }, exact: true }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/list', key: 'list', component: __WEBPACK_IMPORTED_MODULE_2__views_topic_list__["a" /* default */], exact: true }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/detail', key: 'detail', component: __WEBPACK_IMPORTED_MODULE_3__views_topic_detail__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/test', key: 'test', component: __WEBPACK_IMPORTED_MODULE_4__views_test_test_api__["a" /* default */] })];
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zsn/zsn_project/REACT/z-node/client/config/router.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_app_state__ = __webpack_require__(3);
var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TopicList = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])("appState"), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = function (_Component) {
  _inherits(TopicList, _Component);

  function TopicList() {
    _classCallCheck(this, TopicList);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TopicList.prototype.componentDidMount = function componentDidMount() {
    var a = 1;
  };

  TopicList.prototype.asyncBootstrap = function asyncBootstrap() {
    var _this2 = this;

    return new Promise(function (resolve) {
      setTimeout(function () {
        _this2.props.appState.count = 3333;
        resolve(true);
      });
    });
  };

  TopicList.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'description' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          null,
          'this is helmet'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'TopicList'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        this.props.appState.Msg
      )
    );
  };

  return TopicList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);


TopicList.propTypes = {
  appState: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_4__store_app_state__["a" /* default */]).isRequired
};

var _default = TopicList;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopicList, 'TopicList', '/Users/zsn/zsn_project/REACT/z-node/client/views/topic-list/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zsn/zsn_project/REACT/z-node/client/views/topic-list/index.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TopicDetail = function (_Component) {
  _inherits(TopicDetail, _Component);

  function TopicDetail() {
    _classCallCheck(this, TopicDetail);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TopicDetail.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'TopicDetail'
      )
    );
  };

  return TopicDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = TopicDetail;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopicDetail, 'TopicDetail', '/Users/zsn/zsn_project/REACT/z-node/client/views/topic-detail/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zsn/zsn_project/REACT/z-node/client/views/topic-detail/index.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var baseUrl = "https://cnodejs.org/api/v1";

var TestApi = function (_Component) {
  _inherits(TestApi, _Component);

  function TestApi() {
    var _temp, _this, _ret;

    _classCallCheck(this, TestApi);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onLogin = function () {
      var _this2;

      return (_this2 = _this).__onLogin__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.getTopics = function () {
      var _this3;

      return (_this3 = _this).__getTopics__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TestApi.prototype.__onLogin__REACT_HOT_LOADER__ = function __onLogin__REACT_HOT_LOADER__() {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/user/login', {
      accesstoken: ""
    }).then(function (res) {
      console.log(res);
    }).catch(function (err) {
      console.log('err', err);
    });
  };

  TestApi.prototype.__getTopics__REACT_HOT_LOADER__ = function __getTopics__REACT_HOT_LOADER__() {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/topics').then(function (res) {
      console.log(res);
    }).catch(function (err) {
      console.log('err', err);
    });
  };

  TestApi.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.getTopics },
        '\u83B7\u53D6\u8BC4\u8BBA'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.onLogin },
        '\u767B\u5F55'
      )
    );
  };

  return TestApi;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = TestApi;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(baseUrl, 'baseUrl', '/Users/zsn/zsn_project/REACT/z-node/client/views/test/test-api.js');

  __REACT_HOT_LOADER__.register(TestApi, 'TestApi', '/Users/zsn/zsn_project/REACT/z-node/client/views/test/test-api.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zsn/zsn_project/REACT/z-node/client/views/test/test-api.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createStoreMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_state__ = __webpack_require__(3);


var AppState = __WEBPACK_IMPORTED_MODULE_0__app_state__["a" /* default */];

var _default = {
  AppState: AppState
};
/* unused harmony default export */ var _unused_webpack_default_export = (_default);

var createStoreMap = function createStoreMap() {
  return {
    appState: new AppState()
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AppState, 'AppState', '/Users/zsn/zsn_project/REACT/z-node/client/store/store.js');

  __REACT_HOT_LOADER__.register(createStoreMap, 'createStoreMap', '/Users/zsn/zsn_project/REACT/z-node/client/store/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/zsn/zsn_project/REACT/z-node/client/store/store.js');
}();

;

/***/ })
/******/ ]);