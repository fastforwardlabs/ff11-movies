webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./pages/Index.js":
/*!************************!*\
  !*** ./pages/Index.js ***!
  \************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parts/Utils */ "./parts/Utils.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_MovieGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/MovieGrid */ "./parts/MovieGrid.js");





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/Index.js";










var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {// let data = this.props.data
      // let boxed = data.reduce((dict, current) => {
      //   let slice = Object.assign({}, dict)
      //   if (slice[current.url] === undefined) {
      //     slice[current.url] = 'exists'
      //   }
      //   return slice
      // }, {})
      // let movie_keys = Object.keys(boxed)
      // var promises = movie_keys.map((k, i) => {
      //   return fetch(`http://www.omdbapi.com/?apikey=af4abd65&i=${k}`)
      //     .then(r => r.json())
      //     .then(json => {
      //       let og_id = k
      //       if (json.Title === '#DUPE#') {
      //         return fetch(
      //           `http://www.omdbapi.com/?apikey=af4abd65&i=${json.imdbID}`
      //         )
      //           .then(r => r.json())
      //           .then(json => {
      //             let json_mod = Object.assign({}, json)
      //             json_mod.og_id = og_id
      //             return json_mod
      //           })
      //       } else {
      //         let json_mod = Object.assign({}, json)
      //         json_mod.og_id = og_id
      //         return json_mod
      //       }
      //     })
      // })
      // Promise.all(promises).then(function(results) {
      //   console.log(JSON.stringify(results))
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          font_size = _this$props.font_size,
          line_height = _this$props.line_height,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          data = _this$props.data,
          info = _this$props.info,
          reviews = _this$props.reviews,
          setAnalyze = _this$props.setAnalyze,
          sort = _this$props.sort,
          setSort = _this$props.setSort,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          nbsvm_data = _this$props.nbsvm_data,
          _this$props$hl_option = _this$props.hl_options,
          hl_options = _this$props$hl_option === void 0 ? {} : _this$props$hl_option; // compare and show_accuracy only when analyze is on

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
        style: {
          paddingBottom: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Textflix")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        grem: grem,
        setAnalyze: setAnalyze,
        analyze: analyze,
        total: true,
        setAlgo: this.props.setAlgo,
        algnames: this.props.algnames,
        data_select: this.props.data_select,
        show_accuracy: show_accuracy,
        setAccuracy: setAccuracy,
        compare: compare,
        setCompare: setCompare,
        data: data,
        nbsvm_data: nbsvm_data,
        is_front: true,
        hl_options: hl_options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          position: 'relative',
          // top: stick_top,
          background: 'white',
          zIndex: 99
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_11__["p"])(grem / 2, grem / 4)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_11__["p"])(0, grem / 4)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, data.length, " movies & shows sorted by most:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, (analyze ? show_accuracy ? [['reviews', 'reviews'], ['positive', 'positive'], ['negative', 'negative'], ['accurate', 'accurate'], ['inaccurate', 'inaccurate']] : [['reviews', 'reviews'], ['positive', 'positive'], ['negative', 'negative']] : [['reviews', 'reviews']]).map(function (a) {
        return sort === a[1] ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: a[0],
          style: {
            background: '#222',
            color: 'white',
            padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_11__["p"])(0, grem / 4)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, a[0]) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          key: a[0],
          onClick: function onClick() {
            setSort(a[1]);
          },
          style: {
            textDecoration: 'underline',
            padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_11__["p"])(0, grem / 4)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, a[0]);
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: compare ? 'grid' : 'block',
          gridTemplateColumns: '1fr 1fr',
          marginBottom: -grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginRight: -1,
          borderRight: 'solid 2px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginRight: -1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_MovieGrid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: nbsvm_data,
        info: info,
        grem: grem,
        sort: sort,
        analyze: analyze,
        show_accuracy: show_accuracy,
        hl_options: hl_options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_MovieGrid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: data,
        info: info,
        grem: grem,
        sort: sort,
        analyze: analyze,
        show_accuracy: show_accuracy,
        hl_options: hl_options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=_app.js.6053db71220aefb0dc12.hot-update.js.map