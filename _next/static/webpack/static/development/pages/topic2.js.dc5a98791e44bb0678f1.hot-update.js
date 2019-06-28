webpackHotUpdate("static/development/pages/topic2.js",{

/***/ "./pages/topic2.js":
/*!*************************!*\
  !*** ./pages/topic2.js ***!
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Sentences__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Sentences */ "./parts/Sentences.js");
/* harmony import */ var _parts_Reviews__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/Reviews */ "./parts/Reviews.js");





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/topic2.js";












var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_11___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _React$Component);

  function Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).call(this, props));
    _this.state = {
      show_all_positive: false,
      show_all_negative: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          font_size = _this$props.font_size,
          line_height = _this$props.line_height,
          data_select = _this$props.data_select,
          grem = _this$props.grem,
          router = _this$props.router,
          analyze = _this$props.analyze,
          data = _this$props.data,
          info = _this$props.info,
          setAnalyze = _this$props.setAnalyze,
          review_sort = _this$props.review_sort,
          setReviewSort = _this$props.setReviewSort,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          nbsvm_data = _this$props.nbsvm_data;
      console.log(this.props);
      var info_ids = info.map(function (o) {
        return o.og_id;
      });
      var topic_info = info[info_ids.indexOf(router.query.id)];
      var reviews = data.filter(function (o) {
        return o.url === router.query.id;
      });
      var nreviews = nbsvm_data.filter(function (o) {
        return o.url === router.query.id;
      }); // compare and show_accuracy only when analyze is on

      show_accuracy = show_accuracy && analyze;
      compare = compare && analyze;
      var stick_top = grem * 2;
      if (show_accuracy || compare) stick_top = grem * 3;

      if (show_accuracy && compare) {
        stick_top = grem * 5;
      } else if (show_accuracy) {
        stick_top = grem * 3;
      } else if (compare) {
        stick_top = grem * 4;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        setAnalyze: setAnalyze,
        analyze: analyze,
        setAlgo: this.props.setAlgo,
        algnames: this.props.algnames,
        data_select: this.props.data_select,
        show_accuracy: show_accuracy,
        setAccuracy: setAccuracy,
        compare: compare,
        setCompare: setCompare,
        data: reviews,
        nbsvm_data: nreviews,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: 700,
          margin: '0 auto',
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, topic_info.Year, " \xB7 ", topic_info.Runtime, " \xB7", ' ', topic_info.Rated), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, topic_info.Plot, ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.imdb.com/title/".concat(topic_info.imdbID),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "IMDB \u2192"))))), analyze ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          zIndex: 998,
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
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
          lineNumber: 117
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderRight: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Sentences__WEBPACK_IMPORTED_MODULE_14__["default"], {
        grem: grem,
        reviews: nreviews,
        analyze: analyze,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderLeft: compare ? 'solid 1px black' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Sentences__WEBPACK_IMPORTED_MODULE_14__["default"], {
        grem: grem,
        reviews: reviews,
        analyze: analyze,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })))) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          position: 'sticky',
          top: stick_top,
          background: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: compare ? 700 * 2 + grem : 700,
          margin: '0 auto',
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: 'flex',
          paddingRight: grem / 4,
          marginLeft: -grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          paddingLeft: grem / 4,
          paddingRight: grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, reviews.length, " reviews sorted by most:"), (analyze ? show_accuracy ? [['recent', 'date'], ['positive', 'positive'], ['negative', 'negative'], ['accurate', 'accurate'], ['inaccurate', 'inaccurate']] : [['recent', 'date'], ['positive', 'positive'], ['negative', 'negative']] : [['recent', 'date']]).map(function (a) {
        return review_sort === a[1] ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            background: '#222',
            color: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, a[0]) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          onClick: function onClick() {
            setReviewSort(a[1]);
          },
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            textDecoration: 'underline'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, a[0]);
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: compare ? 700 * 2 + grem + 2 : 700,
          margin: '0 auto',
          display: compare ? 'grid' : 'block',
          gridTemplateColumns: '1fr 1fr'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderRight: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Reviews__WEBPACK_IMPORTED_MODULE_15__["default"], {
        reviews: nreviews,
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        review_sort: review_sort,
        setReviewSort: setReviewSort,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderLeft: compare ? 'solid 1px black' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Reviews__WEBPACK_IMPORTED_MODULE_15__["default"], {
        reviews: reviews,
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        review_sort: review_sort,
        setReviewSort: setReviewSort,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Page));

/***/ })

})
//# sourceMappingURL=topic2.js.dc5a98791e44bb0678f1.hot-update.js.map