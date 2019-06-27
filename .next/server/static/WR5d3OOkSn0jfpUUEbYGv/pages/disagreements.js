module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0i/h":
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("p2nX");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "ACBD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return scaleRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return scaleBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return scaleTextRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return scaleTextBlue; });
/* unused harmony export colorExtend */
/* unused harmony export readableSentiment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return class_labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Border; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QmcS");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__);


var red = chroma_js__WEBPACK_IMPORTED_MODULE_1__('#ffbb3a').luminance(0.625);
var blue = chroma_js__WEBPACK_IMPORTED_MODULE_1__('#3affbb').luminance(0.625);
var scaleRed = chroma_js__WEBPACK_IMPORTED_MODULE_1__["scale"](['#ddd', red]).mode('lch');
var scaleBlue = chroma_js__WEBPACK_IMPORTED_MODULE_1__["scale"](['#ddd', blue]).mode('lch');
var scaleTextRed = chroma_js__WEBPACK_IMPORTED_MODULE_1__["scale"](['white', red]).mode('lch');
var scaleTextBlue = chroma_js__WEBPACK_IMPORTED_MODULE_1__["scale"](['white', blue]).mode('lch');
function colorExtend(color, x0, x1, y0, y1) {
  return "-".concat(x0, "px -").concat(y0, "px 0 ").concat(color, ", ").concat(x1, "px -").concat(y0, "px 0 ").concat(color, ", ").concat(x1, "px ").concat(y1, "px 0 ").concat(color, ", -").concat(x0, "px ").concat(y1, "px 0 ").concat(color);
}
function readableSentiment(value) {
  if (value === 0) {
    return 'all negative';
  } else if (value < 0.1) {
    return 'very negative';
  } else if (value < 0.25) {
    return 'mostly negative';
  } else if (value < 0.5) {
    return 'somewhat negative';
  } else if (value === 0.5) {
    return 'split';
  } else if (value < 0.75) {
    return 'somewhat positive';
  } else if (value < 0.9) {
    return 'mostly positive';
  } else if (value < 1) {
    return 'very positive';
  } else if (value === 1) {
    return 'all positive';
  }
}
var class_labels = ['negative', 'positive'];
var Border = function Border() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 1,
      background: 'black',
      position: 'relative',
      marginBottom: -0.5,
      marginTop: -0.5
    }
  });
};

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "P5t4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zZOf");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Higher order component, which is based on 'next/link'
 * When app is deployed on github pages repository which is not the main one
 * e.g https://username.github.io/repository/
 * standard 'next/link' is not wokring properly, it doesn't add the 'reporsitory'
 * to url so instead of expected 'https://username.github.io/repository/about',
 * it would be 'https://username.github.io/about/
 * This HOC solves the problem, by adding the prefix (which is defined in next.config.js)
 * to 'as' property
 */



var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;

var PrefixedLink = function PrefixedLink(_ref) {
  var href = _ref.href,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? href : _ref$as,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    as: "".concat(linkPrefix).concat(as)
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (PrefixedLink);

/***/ }),

/***/ "QmcS":
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TbHi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfwq");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("P5t4");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("QmcS");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ACBD");











var Bar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Bar, _React$Component);

  function Bar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Bar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Bar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Bar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          nbsvm_data = _this$props.nbsvm_data,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          setAnalyze = _this$props.setAnalyze,
          total = _this$props.total,
          setAlgo = _this$props.setAlgo,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          _this$props$is_front = _this$props.is_front,
          is_front = _this$props$is_front === void 0 ? false : _this$props$is_front;
      var certainty_array = data.map(function (r) {
        if (r.logits[1] > r.logits[0]) {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var pos = _.sortBy(certainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var neg = _.sortBy(certainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(neg));
      var rightwrong = data.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.label === r.class) {
          slice[1] += 1;
        } else {
          slice[0] += 1;
        }

        return slice;
      }, [0, 0]);
      var accuracy = rightwrong[1] / data.length;
      var ncertainty_array = nbsvm_data.map(function (r) {
        if (r.logits[1] > r.logits[0]) {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var npos = _.sortBy(ncertainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var nneg = _.sortBy(ncertainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var ncombined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(npos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nneg));
      var nrightwrong = nbsvm_data.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.label === r.class) {
          slice[1] += 1;
        } else {
          slice[0] += 1;
        }

        return slice;
      }, [0, 0]);
      var naccuracy = nrightwrong[1] / data.length;
      var counts = [combined.filter(function (r) {
        return r.class === 'neg';
      }).length, combined.filter(function (r) {
        return r.class === 'pos';
      }).length];
      var ncounts = [ncombined.filter(function (r) {
        return r.class === 'neg';
      }).length, ncombined.filter(function (r) {
        return r.class === 'pos';
      }).length];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          background: 'white',
          position: 'sticky',
          zIndex: 999,
          top: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'top'
        }
      }, !is_front ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "hover-block-container no-opacity-hover",
        style: {
          display: 'block',
          paddingTop: grem / 2 + grem * 0.125,
          paddingBottom: grem / 2 + grem * 0.125,
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          borderRight: 'solid 1px black',
          position: 'relative',
          textDecoration: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.75,
          height: grem * 0.75,
          border: 'solid 1px black',
          position: 'relative'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          width: grem * 0.75 / 2 - 1,
          height: grem * 0.75 - 2,
          borderRight: 'solid 1px black'
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          height: grem * 0.75 / 2 - 1,
          width: grem * 0.75 - 2,
          borderBottom: 'solid 1px black'
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hover-block"
      }))) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setAnalyze(!analyze);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          height: grem * 2
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: analyze ? 'black' : 'white'
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        }
      }, "Analyze")), analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          display: 'none'
        }
      }, "\u2013"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          paddingLeft: grem / 2 * 0,
          paddingRight: grem / 8
        }
      }, "show:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setAccuracy(!show_accuracy);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 4,
          paddingRight: grem / 4,
          height: grem * 2
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: show_accuracy ? 'black' : 'white'
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        }
      }, "accuracy")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setCompare(!compare);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 4,
          paddingRight: grem / 4,
          height: grem * 2
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: compare ? 'black' : 'white'
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        }
      }, "model comparison")))) : null, analyze && !compare ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          padding: "".concat(show_accuracy && false ? 0 : grem / 2, "px ").concat(grem / 2, "px"),
          flexGrow: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        }
      }, combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            top: 0,
            bottom: 0,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c.class === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__[/* scaleBlue */ "e"])(c.certainty) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__[/* scaleRed */ "f"])(c.certainty)
          }
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative'
        }
      }, combined.length, " ", total ? 'total ' : '', " review", combined.length > 1 ? 's' : '', analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, ' ', "\xB7 ", counts[1], " positive (", Math.round(counts[1] / combined.length * 100), "%)") : null)), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        }
      }, combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            bottom: 0,
            height: grem,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c.label !== c.class ? c.label === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__[/* scaleBlue */ "e"])(1) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__[/* scaleRed */ "f"])(1) : '#ddd'
          }
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative'
        }
      }, rightwrong[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, Math.floor(accuracy * 1000 / 10), "% accuracy (", rightwrong[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, Math.floor(accuracy * 1000 / 10), "% accuracy")))) : null) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_9__[/* Border */ "a"], null)), compare && analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr'
        }
      }, [['NBSVM'], ['BERT']].map(function (item, i) {
        var n = i === 0;
        var cert = n ? ncombined : combined;
        var co = n ? ncounts : counts;
        var rw = n ? nrightwrong : rightwrong;
        var acc = n ? naccuracy : accuracy;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            borderLeft: i === 1 ? 'solid 2px black' : 'none',
            marginLeft: i === 1 ? -1 : 0,
            background: 'white',
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 2,
            paddingTop: grem / 2,
            paddingBottom: grem / 2
          }
        }, item[0]), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            padding: "".concat(show_accuracy && false ? 0 : grem / 2, "px ").concat(grem / 2, "px"),
            flexGrow: 1
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          }
        }, cert.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              top: 0,
              bottom: 0,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.class === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__[/* scaleBlue */ "e"])(c.certainty) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__[/* scaleRed */ "f"])(c.certainty)
            }
          });
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative'
          }
        }, combined.length, " ", total ? 'total ' : '', " review", combined.length > 1 ? 's' : '', analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, ' ', "\xB7 ", co[1], " positive (", Math.round(co[1] / combined.length * 100), "%)") : null)), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          }
        }, cert.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              bottom: 0,
              height: grem,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.label !== c.class ? c.label === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__[/* scaleBlue */ "e"])(1) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__[/* scaleRed */ "f"])(1) : '#ddd'
            }
          });
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative'
          }
        }, rw[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, Math.floor(acc * 1000 / 10), "% accuracy (", rw[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, Math.floor(acc * 1000 / 10), "% accuracy")))) : null));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_9__[/* Border */ "a"], null)) : null);
    }
  }]);

  return Bar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Bar);

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p2nX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UXZV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("P5t4");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("0i/h");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("QmcS");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("TbHi");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ACBD");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("zZOf");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _parts_Review__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("zYD8");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);















var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_13___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;


var algfiles = ['nbsvm_lime_grouped_pretty.json', 'bert_lime_grouped_pretty.json'];
var data_keys = [['nbsvm_data', 'nbsvm_lime_grouped_pretty.json', 'NBSVM'], ['bert_data', 'bert_lime_grouped_pretty.json', 'BERT']];

var Disagree =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Disagree, _React$Component);

  function Disagree(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Disagree);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Disagree).call(this, props));
    _this.state = {
      nbsvm_data: null,
      bert_data: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Disagree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      data_keys.map(function (k) {
        fetch(linkPrefix + '/static/data/' + k[1]).then(function (r) {
          return r.json();
        }).then(function (r) {
          fetch(linkPrefix + '/static/data/names_and_dates.json').then(function (nd) {
            return nd.json();
          }).then(function (nd) {
            var reviews = r.map(function (r, i) {
              var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, r);

              new_r.index = i;
              new_r.author = nd[i].author;
              new_r.date = nd[i].date;
              return new_r;
            });

            _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, k[0], reviews));
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          font_size = _this$props.font_size,
          line_height = _this$props.line_height,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          info = _this$props.info,
          reviews = _this$props.reviews,
          setAnalyze = _this$props.setAnalyze,
          sort = _this$props.sort,
          setSort = _this$props.setSort,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy;
      var _this$state = this.state,
          nbsvm_data = _this$state.nbsvm_data,
          bert_data = _this$state.bert_data;
      var loaded = nbsvm_data && bert_data;
      var combined, disagreements;

      if (loaded) {
        combined = nbsvm_data.map(function (n, i) {
          return {
            nbsvm: n,
            bert: bert_data[i]
          };
        });
        disagreements = combined.filter(function (c) {
          return c.nbsvm.class !== c.bert.class;
        });
      }

      return loaded ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          position: 'sticky',
          zIndex: 99,
          top: 0,
          padding: grem / 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: grem,
          borderBottom: 'solid 1px black',
          background: 'white'
        }, "display", 'none')
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "NBSVM"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "BERT")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          maxWidth: 700 * 2 + grem * 2,
          padding: grem / 2,
          margin: "0 auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          marginBottom: grem
        }
      }, "Reviews where the NBSVM and BERT classification disagree:"), disagreements.map(function (d, i) {
        var review_info = lodash__WEBPACK_IMPORTED_MODULE_15__["find"](info, {
          og_id: d.nbsvm.url
        });

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            paddingBottom: grem
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Review for", ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
          href: "/topic2?id=".concat(review_info.id)
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, review_info.Title)), ' ', "by ", d.nbsvm.author, " \xB7", ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
          href: "/review?id=".concat(d.index)
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, d.nbsvm.date, " days ago"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            margin: '0 auto',
            gridColumnGap: grem
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            padding: 0
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Review__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
          r: d.nbsvm,
          i: i,
          grem: grem,
          analyze: true,
          show_accuracy: false,
          threshold: 0,
          hide_author: true,
          classification_label: "NBSVM "
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            padding: 0
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Review__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
          r: d.bert,
          i: i,
          grem: grem,
          analyze: true,
          show_accuracy: false,
          threshold: 0,
          hide_author: true,
          classification_label: "BERT "
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            marginTop: -grem,
            marginBottom: grem,
            background: d.nbsvm.label === d.nbsvm.class ? d.nbsvm.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_12__[/* scaleBlue */ "e"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_12__[/* scaleRed */ "f"])(1) : d.bert.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_12__[/* scaleBlue */ "e"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_12__[/* scaleRed */ "f"])(1)
          }
        }, "label: ", d.nbsvm.label === 'pos' ? 'positive' : 'negative', ' ', "\xB7", ' ', d.nbsvm.label === d.nbsvm.class ? 'NBSVM correct' : 'BERT correct'));
      }))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          padding: grem / 2
        }
      }, "Loading...");
    }
  }]);

  return Disagree;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Disagree);

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zYD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ACBD");










var Review =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Review, _React$Component);

  function Review() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Review);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Review).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Review, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          r = _this$props.r,
          i = _this$props.i,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          show_accuracy = _this$props.show_accuracy,
          is_review = _this$props.is_review,
          _this$props$threshold = _this$props.threshold,
          threshold = _this$props$threshold === void 0 ? 0.5 : _this$props$threshold,
          _this$props$hide_auth = _this$props.hide_author,
          hide_author = _this$props$hide_auth === void 0 ? false : _this$props$hide_auth,
          _this$props$classific = _this$props.classification_label,
          classification_label = _this$props$classific === void 0 ? '' : _this$props$classific;
      var winner_index, scaleWinner, scaleLoser;
      var winner_name = r.class;

      if (r.class_probabilities[1] > r.class_probabilities[0]) {
        winner_index = 1;
        scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* scaleBlue */ "e"];
        scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* scaleRed */ "f"];
      } else {
        winner_index = 0;
        scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* scaleRed */ "f"];
        scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* scaleBlue */ "e"];
      }

      var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_7__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_7__["max"](r.lime_scores)));

      function scaleScore(value) {
        if (value < 0) {
          return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* scaleTextRed */ "h"])(Math.abs(value) / max);
        } else {
          return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* scaleTextBlue */ "g"])(Math.abs(value) / max);
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: grem
        }
      }, analyze ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginTop: grem * 0,
          marginBottom: grem * 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          background: scaleWinner(r.class_probabilities[winner_index])
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, classification_label, "classification:", ' ', _parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* class_labels */ "c"][winner_index]), ' ', "\xB7", ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {}
      }, Math.floor(r.class_probabilities[winner_index] * 1000) / 10, "% certainty")), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          background: r.label === r.class ? '#ddd' : r.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* scaleBlue */ "e"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__[/* scaleRed */ "f"])(1)
        }
      }, "label: ", r.label === 'pos' ? 'positive' : 'negative', " \xB7", ' ', r.label === r.class ? 'accurate' : 'inaccurate', " classification") : null) : null, !hide_author ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem * 0
        }
      }, "by ", r.author, " \xB7", ' ', is_review ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, r.date, " days ago") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/review?id=".concat(r.index)
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, r.date, " days ago"))) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: grem * 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem * 1
        }
      }, r.lime_tokens.map(function (t, i) {
        var score = r.lime_scores[i];
        var background = analyze ? Math.abs(score) / max > threshold ? scaleScore(score) : 0 : 'transparent';
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          style: {
            backgroundImage: "linear-gradient(".concat(background, ", ").concat(background, ")"),
            backgroundSize: '4px 5px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: "0 0.85em",
            paddingBottom: 2
          }
        }, t), ' ');
      }))))));
    }
  }]);

  return Review;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Review);

/***/ }),

/***/ "zZOf":
/***/ (function(module, exports) {

module.exports = require("next-server/config");

/***/ })

/******/ });