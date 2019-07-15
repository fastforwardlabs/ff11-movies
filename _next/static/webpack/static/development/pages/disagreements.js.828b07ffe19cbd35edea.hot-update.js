webpackHotUpdate("static/development/pages/disagreements.js",{

/***/ "./parts/Reviews.js":
/*!**************************!*\
  !*** ./parts/Reviews.js ***!
  \**************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Review__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/Review */ "./parts/Review.js");





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Reviews.js";





var Reviews =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Reviews, _React$Component);

  function Reviews() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Reviews);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Reviews).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Reviews, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          info = _this$props.info,
          sort = _this$props.sort,
          grem = _this$props.grem,
          reviews = _this$props.reviews,
          analyze = _this$props.analyze,
          show_accuracy = _this$props.show_accuracy,
          review_sort = _this$props.review_sort,
          setReviewSort = _this$props.setReviewSort,
          _this$props$show_titl = _this$props.show_title,
          show_title = _this$props$show_titl === void 0 ? false : _this$props$show_titl,
          _this$props$data_type = _this$props.data_type,
          data_type = _this$props$data_type === void 0 ? 'base' : _this$props$data_type;
      var sorted = reviews.slice();

      if (review_sort === 'date') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_6__["sortBy"](sorted, 'date');
      } else if (review_sort === 'positive') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_6__["sortBy"](sorted, function (r) {
          var sort_val;
          if (r["class"] === 'pos') sort_val = 1 - r.class_probabilities[1] - 1;
          if (r["class"] === 'neg') sort_val = r.class_probabilities[0] - 0;
          return sort_val;
        });
      } else if (review_sort === 'negative') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_6__["sortBy"](sorted, function (r) {
          var sort_val;
          if (r["class"] === 'pos') sort_val = r.class_probabilities[1] - 0;
          if (r["class"] === 'neg') sort_val = 1 - r.class_probabilities[0] - 1;
          return sort_val;
        });
      } else if (review_sort === 'accurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_6__["sortBy"](sorted, [function (r) {
          return r["class"] === r.label ? 0 : 1;
        }, function (r) {
          var sort_val;
          if (r["class"] === 'pos') sort_val = 1 - r.class_probabilities[1];
          if (r["class"] === 'neg') sort_val = 1 - r.class_probabilities[0];
          return sort_val;
        }]);
      } else if (review_sort === 'inaccurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_6__["sortBy"](sorted, [function (r) {
          return r["class"] === r.label ? 1 : 0;
        }, function (r) {
          var sort_val;
          if (r["class"] === 'pos') sort_val = 1 - r.class_probabilities[1];
          if (r["class"] === 'neg') sort_val = 1 - r.class_probabilities[0];
          return sort_val;
        }]);
      }

      console.log(sorted[0]);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, sorted.map(function (r, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Review__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: 'reviews_' + r.index + '_' + data_type,
          r: r,
          i: i,
          grem: grem,
          analyze: analyze,
          show_accuracy: show_accuracy,
          info: info,
          show_title: show_title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      }));
    }
  }]);

  return Reviews;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ })

})
//# sourceMappingURL=disagreements.js.828b07ffe19cbd35edea.hot-update.js.map