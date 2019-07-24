webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/Disagreements.js":
/*!********************************!*\
  !*** ./pages/Disagreements.js ***!
  \********************************/
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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/Head */ "./node_modules/next/Head.js");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Reviews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Reviews */ "./parts/Reviews.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/Disagreements.js";









var linkPrefix = "";

var Disagree =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Disagree, _React$Component);

  function Disagree(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Disagree);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Disagree).call(this, props));
    _this.state = {
      show_all: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Disagree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

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
          nbsvm_data = _this$props.nbsvm_data,
          data = _this$props.data,
          hl_options = _this$props.hl_options,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          review_sort = _this$props.review_sort,
          setReviewSort = _this$props.setReviewSort,
          setCompare = _this$props.setCompare;
      var show_all = this.state.show_all;
      compare = true;
      var disagreements = [];
      var ndisagreements = [];

      for (var i = 0; i < data.length; i++) {
        if (data[i]["class"] !== nbsvm_data[i]["class"]) {
          disagreements.push(data[i]);
          ndisagreements.push(nbsvm_data[i]);
        }
      }

      disagreements = lodash__WEBPACK_IMPORTED_MODULE_13__["sortBy"](disagreements, 'date');
      ndisagreements = lodash__WEBPACK_IMPORTED_MODULE_13__["sortBy"](ndisagreements, 'date'); // overwrite

      analyze = true;
      show_accuracy = true;
      compare = true;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_Head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Textflix:\xA0Disagreements")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        grem: grem,
        setAnalyze: setAnalyze,
        analyze: analyze,
        setAlgo: this.props.setAlgo,
        algnames: this.props.algnames,
        data_select: this.props.data_select,
        show_accuracy: true,
        setAccuracy: setAccuracy,
        compare: true,
        setCompare: setCompare,
        data: disagreements,
        nbsvm_data: ndisagreements,
        hl_options: hl_options,
        analyze_locked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: 700,
          padding: grem / 2,
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Reviews where the NB-SVM model and the pretrained BERT model disagree on the classification:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          position: 'relative',
          background: hl_options.highlight_reviews_block ? '#eee' : 'white',
          transition: 'background 0.1s linear'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: compare ? 700 * 2 + grem + 2 : 700,
          margin: '0 auto',
          display: compare ? 'grid' : 'block',
          gridTemplateColumns: '1fr 1fr'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderRight: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Reviews__WEBPACK_IMPORTED_MODULE_12__["default"], {
        reviews: show_all ? ndisagreements : ndisagreements.slice(0, 40),
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        review_sort: 'date',
        setReviewSort: setReviewSort,
        info: info,
        show_title: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderLeft: compare ? 'solid 1px black' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Reviews__WEBPACK_IMPORTED_MODULE_12__["default"], {
        reviews: show_all ? disagreements : disagreements.slice(0, 40),
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        review_sort: 'date',
        setReviewSort: setReviewSort,
        info: info,
        show_title: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })), !show_all ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: 700,
          margin: '0 auto',
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        style: {
          textDecoration: 'underline'
        },
        onClick: function onClick() {
          _this2.setState({
            show_all: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "show all")) : null);
    }
  }]);

  return Disagree;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Disagree);

/***/ })

})
//# sourceMappingURL=_app.js.62977d18996dd3b54d85.hot-update.js.map