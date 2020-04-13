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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Home = __webpack_require__(/*! ./components/Home */ \"./src/client/components/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _HitsList = __webpack_require__(/*! ./components/HitsList */ \"./src/client/components/HitsList.js\");\n\nvar _HitsList2 = _interopRequireDefault(_HitsList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n    path: '/',\n    component: _Home2.default,\n    exact: true\n}, {\n    loadData: _HitsList.loadData,\n    path: '/hits',\n    component: _HitsList2.default,\n    exact: true\n}];\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.loadMoreHits = exports.updatehFeedVote = exports.updatehHits = exports.fetchHits = exports.api = exports.UPDATE_FEED_VOTE = exports.LOAD_MORE_HITS = exports.UPDATE_HITS = exports.FETCH_HITS = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_HITS = exports.FETCH_HITS = 'fetch_hits';\nvar UPDATE_HITS = exports.UPDATE_HITS = 'update_hits';\nvar LOAD_MORE_HITS = exports.LOAD_MORE_HITS = 'load_more_hits';\nvar UPDATE_FEED_VOTE = exports.UPDATE_FEED_VOTE = 'update_feed_vote';\n\nvar api = exports.api = 'https://hn.algolia.com/api/v1/search?tags=front_page';\n\nvar fetchHits = exports.fetchHits = function fetchHits() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return _axios2.default.get(api);\n\n                        case 2:\n                            res = _context.sent;\n\n                            dispatch({\n                                type: FETCH_HITS,\n                                payload: res\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar updatehHits = exports.updatehHits = function updatehHits(created_at_i) {\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            dispatch({\n                                type: UPDATE_HITS,\n                                created_at_i: created_at_i\n                            });\n\n                        case 1:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x2) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\nvar updatehFeedVote = exports.updatehFeedVote = function updatehFeedVote(created_at_i) {\n    return function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            dispatch({\n                                type: UPDATE_FEED_VOTE,\n                                created_at_i: created_at_i\n                            });\n\n                        case 1:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x3) {\n            return _ref3.apply(this, arguments);\n        };\n    }();\n};\n\nvar loadMoreHits = exports.loadMoreHits = function loadMoreHits() {\n    return function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            _context4.next = 2;\n                            return _axios2.default.get(api);\n\n                        case 2:\n                            res = _context4.sent;\n\n                            dispatch({\n                                type: LOAD_MORE_HITS,\n                                payload: res\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined);\n        }));\n\n        return function (_x4) {\n            return _ref4.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/HitsList.js":
/*!*******************************************!*\
  !*** ./src/client/components/HitsList.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.loadData = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HitsList = function (_Component) {\n    _inherits(HitsList, _Component);\n\n    function HitsList() {\n        _classCallCheck(this, HitsList);\n\n        return _possibleConstructorReturn(this, (HitsList.__proto__ || Object.getPrototypeOf(HitsList)).apply(this, arguments));\n    }\n\n    _createClass(HitsList, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.fetchHits();\n        }\n    }, {\n        key: 'renderHits',\n        value: function renderHits() {\n            return this.props.tgaData.map(function (hit) {\n                return _react2.default.createElement(\n                    'li',\n                    { key: hit.created_at_i },\n                    hit.title\n                );\n            });\n        }\n    }, {\n        key: 'nthIndex',\n        value: function nthIndex(str, pat, n) {\n            var L = str.length,\n                i = -1;\n            while (n-- && i++ < L) {\n                i = str.indexOf(pat, i);\n                if (i < 0) break;\n            }\n            return i;\n        }\n    }, {\n        key: 'hideNews',\n        value: function hideNews(index) {\n            this.props.updatehHits(index);\n        }\n    }, {\n        key: 'loadMoreFeeds',\n        value: function loadMoreFeeds() {\n            this.props.loadMoreHits();\n        }\n    }, {\n        key: 'updateVotes',\n        value: function updateVotes(index) {\n            this.props.updatehFeedVote(index);\n        }\n    }, {\n        key: 'renderTable',\n        value: function renderTable() {\n            var _this2 = this;\n\n            return this.props.tgaData.map(function (hit, index) {\n                var points = hit.points,\n                    num_comments = hit.num_comments,\n                    author = hit.author,\n                    title = hit.title,\n                    url = hit.url,\n                    created_at_i = hit.created_at_i;\n\n                return _react2.default.createElement(\n                    'tr',\n                    { key: author + '_' + points, style: { fontSize: '10px', backgroundColor: index % 2 == 0 ? '#e6e6df' : '#f6f6ef' } },\n                    _react2.default.createElement(\n                        'td',\n                        { style: { padding: '10px' } },\n                        points\n                    ),\n                    _react2.default.createElement(\n                        'td',\n                        { style: { paddingRight: '0px' } },\n                        num_comments\n                    ),\n                    _react2.default.createElement(\n                        'td',\n                        { style: { cursor: 'pointer' }, onClick: function onClick() {\n                                return _this2.updateVotes(created_at_i);\n                            } },\n                        _react2.default.createElement('i', { style: { fontSize: '20px', paddingTop: '10px' }, className: 'fa fa-sort-asc', 'aria-hidden': 'true' })\n                    ),\n                    _react2.default.createElement(\n                        'td',\n                        { style: { paddingLeft: '10px' } },\n                        _react2.default.createElement(\n                            'span',\n                            { style: { fontSize: '14px' } },\n                            title\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { style: { color: '#828282', padding: '0 4px 0 4px' } },\n                            '(',\n                            url.substring(0, _this2.nthIndex(url, '/', 3)) || 'http://abc.com',\n                            ') by'\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { style: { color: 'black' } },\n                            author\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { style: { color: '#828282', paddingLeft: '4px' } },\n                            Math.abs(new Date().getHours() - new Date(created_at_i).getHours()),\n                            ' hours ago'\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { style: { paddingLeft: '4px', color: '#c7c8cb' } },\n                            '[ ',\n                            _react2.default.createElement(\n                                'span',\n                                { style: { color: 'black', cursor: 'pointer' }, onClick: function onClick() {\n                                        return _this2.hideNews(created_at_i);\n                                    } },\n                                'hide'\n                            ),\n                            ' ]'\n                        )\n                    )\n                );\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            var bottomColor = this.props.tgaData.length % 2 == 0 ? '#e6e6df' : '#f6f6ef';\n            return _react2.default.createElement(\n                'div',\n                { style: { margin: '50px' } },\n                _react2.default.createElement(\n                    'div',\n                    { style: { backgroundColor: '#ff6600', padding: '6px' } },\n                    _react2.default.createElement(\n                        'span',\n                        { style: { fontSize: '10px' } },\n                        _react2.default.createElement('i', { style: { fontSize: '14px' }, className: 'fa fa-jpy', 'aria-hidden': 'true' })\n                    ),\n                    _react2.default.createElement(\n                        'span',\n                        { style: { fontSize: '14px', color: '#fff', paddingLeft: '30px' } },\n                        'top'\n                    ),\n                    _react2.default.createElement('span', { style: { borderRight: '1px solid black', height: '30px', paddingLeft: '10px' } }),\n                    _react2.default.createElement(\n                        'span',\n                        { style: { fontSize: '14px', paddingLeft: '10px' } },\n                        'new'\n                    )\n                ),\n                _react2.default.createElement(\n                    'table',\n                    { id: 'feeds', style: { display: 'block', border: '1px solid #eee' } },\n                    _react2.default.createElement(\n                        'tbody',\n                        { style: { display: 'grid' } },\n                        this.renderTable()\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { style: { backgroundColor: bottomColor, padding: '6px' } },\n                    _react2.default.createElement(\n                        'span',\n                        { onClick: function onClick() {\n                                return _this3.loadMoreFeeds();\n                            }, style: { fontSize: '14px', color: '#ff6600', cursor: 'pointer', paddingLeft: '30px' } },\n                        'More'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return HitsList;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n    return {\n        tgaData: state.tgaData\n    };\n}\n\nfunction loadData(store) {\n    return store.dispatch((0, _actions.fetchHits)());\n};\n\nexports.loadData = loadData;\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchHits: _actions.fetchHits, updatehHits: _actions.updatehHits, loadMoreHits: _actions.loadMoreHits, updatehFeedVote: _actions.updatehFeedVote })(HitsList);\n\n//# sourceURL=webpack:///./src/client/components/HitsList.js?");

/***/ }),

/***/ "./src/client/components/Home.js":
/*!***************************************!*\
  !*** ./src/client/components/Home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HitsList = __webpack_require__(/*! ./HitsList */ \"./src/client/components/HitsList.js\");\n\nvar _HitsList2 = _interopRequireDefault(_HitsList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_HitsList2.default, null)\n    );\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/client/components/Home.js?");

/***/ }),

/***/ "./src/client/reducers/hitsReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/hitsReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nfunction shuffleArray(array) {\n    for (var i = array.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var temp = array[i];\n        array[i] = array[j];\n        array[j] = temp;\n    }\n    return array;\n}\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.FETCH_HITS:\n            return action.payload.data.hits;\n        case _actions.UPDATE_HITS:\n            return state.filter(function (result) {\n                return result.created_at_i !== action.created_at_i;\n            });\n        case _actions.LOAD_MORE_HITS:\n            return shuffleArray(action.payload.data.hits);\n        case _actions.UPDATE_FEED_VOTE:\n            return state.map(function (item) {\n                if (item.created_at_i === action.created_at_i) {\n                    item.num_comments = item.num_comments + 1;\n                }\n                return item;\n            });\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/hitsReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _hitsReducer = __webpack_require__(/*! ./hitsReducer */ \"./src/client/reducers/hitsReducer.js\");\n\nvar _hitsReducer2 = _interopRequireDefault(_hitsReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    tgaData: _hitsReducer2.default\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\n    return store;\n};\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store) {\n\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: {} },\n            _react2.default.createElement(\n                'div',\n                null,\n                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n            )\n        )\n    ));\n\n    return '\\n        <html>\\n            <head>\\n            <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\\n            </head>\\n            <body>\\n                <div id=\"root\">' + content + '</div>\\n                <script src=\"bundle.client.js\"></script>\\n            </body>\\n        </html>\\n    ';\n};\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar port = process.env.PORT || 3000;\n\napp.use(_express2.default.static('public'));\napp.get('*', function (req, res) {\n    var store = (0, _createStore2.default)();\n    try {\n        var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n            var route = _ref.route;\n\n            route.loadData ? route.loadData(store) : null;\n        });\n\n        Promise.all(promises).then(function () {\n            res.send((0, _renderer2.default)(req, store));\n        });\n    } catch (error) {\n        console.log('error in app', error);\n    }\n});\n\napp.listen(port, function () {\n    console.log('Server started at port ' + port);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });