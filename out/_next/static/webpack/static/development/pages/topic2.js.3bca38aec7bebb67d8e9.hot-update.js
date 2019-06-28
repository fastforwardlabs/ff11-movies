webpackHotUpdate("static/development/pages/topic2.js",{

/***/ "./parts/Review.js":
/*!*************************!*\
  !*** ./parts/Review.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Review.js";





var Review =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Review, _React$Component);

  function Review() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Review);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Review).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Review, [{
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
        scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"];
        scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"];
      } else {
        winner_index = 0;
        scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"];
        scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"];
      }

      var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_7__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_7__["max"](r.lime_scores)));

      function scaleScore(value) {
        if (value < 0) {
          return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleTextRed"])(Math.abs(value) / max);
        } else {
          return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleTextBlue"])(Math.abs(value) / max);
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, analyze ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginTop: grem * 0,
          marginBottom: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          background: scaleWinner(r.class_probabilities[winner_index])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, classification_label, "classification:", ' ', _parts_Static__WEBPACK_IMPORTED_MODULE_8__["class_labels"][winner_index]), ' ', "\xB7", ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, Math.floor(r.class_probabilities[winner_index] * 1000) / 10, "% certainty")), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          background: r.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(1)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "label: ", r.label === 'pos' ? 'positive' : 'negative', " \xB7", ' ', r.label === r.class ? 'accurate' : 'inaccurate', " classification") : null) : null, !hide_author ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "by ", r.author, " \xB7", ' ', is_review ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, r.date, " days ago") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/review?id=".concat(r.index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, r.date, " days ago"))) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem * 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, r.lime_tokens.map(function (t, i) {
        var score = r.lime_scores[i];
        var background = analyze ? Math.abs(score) / max > threshold ? scaleScore(score) : 0 : 'transparent';
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          style: {
            backgroundImage: "linear-gradient(".concat(background, ", ").concat(background, ")"),
            backgroundSize: '4px 5px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: "0 0.85em",
            paddingBottom: 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, t), ' ');
      }))))));
    }
  }]);

  return Review;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ })

})
//# sourceMappingURL=topic2.js.3bca38aec7bebb67d8e9.hot-update.js.map