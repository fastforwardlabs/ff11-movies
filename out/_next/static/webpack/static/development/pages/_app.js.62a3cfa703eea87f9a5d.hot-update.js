webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./parts/Sentences.js":
/*!****************************!*\
  !*** ./parts/Sentences.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");






var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Sentences.js";





var Sentences =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sentences, _React$Component);

  function Sentences(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sentences);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Sentences).call(this, props));
    _this.state = {
      show_all_positive: false,
      show_all_negative: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sentences, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          reviews = _this$props.reviews,
          analyze = _this$props.analyze,
          grem = _this$props.grem;
      var top_sentences = reviews.map(function (r) {
        var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_8__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_8__["max"](r.lime_scores)));

        function scaleScore(value) {
          if (value < 0) {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_9__["scaleTextRed"])(Math.abs(value) / max);
          } else {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_9__["scaleTextBlue"])(Math.abs(value) / max);
          }
        }

        var sentences = r.lime_tokens.map(function (t, i) {
          var score = r.lime_scores[i];
          var scaled = Math.abs(r.lime_scores[i]) / max;
          return {
            token: t,
            score: score,
            "class": r["class"],
            scaled_score: scaled,
            background: scaleScore(score),
            author: r.author,
            date: r.date,
            index: r.index
          };
        });

        var sorted = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](sentences, 'score');

        if (r["class"] === 'pos') sorted = sorted.reverse();
        return sorted[0];
      });

      var top_pos = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](top_sentences.filter(function (s) {
        return s["class"] === 'pos';
      }), 'date');

      var top_neg = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](top_sentences.filter(function (s) {
        return s["class"] === 'neg';
      }), 'date');

      var show_limit = 4;
      return analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, [['positive', top_pos, this.state.show_all_positive, 'show_all_positive'], ['negative', top_neg, this.state.show_all_negative, 'show_all_negative']].map(function (a, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            marginBottom: i == 0 ? grem : 0
          },
          key: a[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, a[1].length, " ", a[0], " review highlights"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, a[1].slice(0, a[2] ? Infinity : show_limit).map(function (s, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {},
            key: s.token,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {
              backgroundImage: "linear-gradient(".concat(s.background, ", ").concat(s.background, ")"),
              backgroundSize: '4px 7px',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: "0 0.85em",
              paddingBottom: 2
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, s.token), ' ', "by ", s.author, ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/review?id=".concat(s.index),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, s.date, " days ago")), ' ', a[1].length < show_limit && a[1].length - 1 === i ? '' : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, "\xB7"), ' ');
        }), ' ', a[1].length > show_limit ? !a[2] ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          style: {
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            return _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a[3], true));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "show all") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          style: {
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            return _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a[3], false));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "show less") : null));
      })) : null;
    }
  }]);

  return Sentences;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sentences);

/***/ })

})
//# sourceMappingURL=_app.js.62a3cfa703eea87f9a5d.hot-update.js.map