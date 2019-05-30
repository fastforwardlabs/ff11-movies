webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
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
/* harmony import */ var _data_nbsvm_lime_grouped_pretty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/nbsvm_lime_grouped_pretty */ "./data/nbsvm_lime_grouped_pretty.js");
/* harmony import */ var _data_sample_movie_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/sample_movie_info */ "./data/sample_movie_info.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/index.js";
 // import { data } from '../data/bert_lime_grouped_pretty'
// import { data } from '../data/nbsvm_lime_grouped_pretty_word'







var class_labels = ['negative', 'positive'];
var red = chroma_js__WEBPACK_IMPORTED_MODULE_11__('red').luminance(0.35);
var blue = chroma_js__WEBPACK_IMPORTED_MODULE_11__('blue').luminance(0.35);
var scaleRed = chroma_js__WEBPACK_IMPORTED_MODULE_11__["scale"](['white', red]).mode('lch');
var scaleBlue = chroma_js__WEBPACK_IMPORTED_MODULE_11__["scale"](['white', blue]).mode('lch');

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
    value: function componentDidMount() {// let boxed = data.reduce((dict, current) => {
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
          analyze = _this$props.analyze;
      var sorted = _data_sample_movie_info__WEBPACK_IMPORTED_MODULE_7__["info"].map(function (o) {
        return {
          title: o.Title,
          id: o.og_id,
          plot: o.Plot,
          children: []
        };
      });
      var ids = sorted.map(function (o) {
        return o.id;
      });

      for (var i = 0; i < _data_nbsvm_lime_grouped_pretty__WEBPACK_IMPORTED_MODULE_6__["data"].length; i++) {
        var o = _data_nbsvm_lime_grouped_pretty__WEBPACK_IMPORTED_MODULE_6__["data"][i];
        var id = o.url;
        var index = ids.indexOf(id);

        if (index === -1) {
          console.log('miss');
        } else {
          sorted[index].children.push(o);
        }
      }

      sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
        return o.children.length;
      }]);
      sorted = sorted.slice(0, 1).reverse();
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          paddingTop: grem,
          paddingBottom: grem * 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: 840,
          border: 'solid 1px black',
          borderBottom: 'none',
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: "1fr ".concat(grem * 6, "px"),
          borderBottom: 'solid 1px black',
          fontWeight: 700,
          fontSize: font_size * 0.875
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          lineHeight: line_height,
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "TOPIC"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "REVIEWS")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, sorted.map(function (o, i) {
        var reviews = _data_nbsvm_lime_grouped_pretty__WEBPACK_IMPORTED_MODULE_6__["data"].filter(function (r) {
          return r.url === o.id;
        });
        var counts = reviews.reduce(function (counts, r) {
          var slice = counts.slice();

          if (r.class_probabilities) {
            if (r.class_probabilities[1] > r.class_probabilities[0]) {
              slice[1] += 1;
            } else {
              slice[0] += 1;
            }
          } else {
            if (r.class === 'pos') {
              slice[1] += 1;
            } else if (r.class === 'neg') {
              slice[0] += 1;
            }
          }

          return slice;
        }, [0, 0]);
        var winner_count_index = 0;
        if (counts[1] > counts[0]) winner_count_index = 1;
        var winner_names = ['negative', 'positive'];
        var winner_name = winner_names[winner_count_index];
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "topic?id=".concat(o.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "no-underline gray-hover",
          style: {
            display: 'grid',
            gridTemplateColumns: "1fr ".concat(grem * 6, "px"),
            borderBottom: 'solid 1px black'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            padding: grem / 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            fontWeight: 700,
            textDecoration: 'underline'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, o.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            fontSize: font_size * 0.875,
            lineHeight: line_height
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, o.plot)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            padding: grem / 2,
            fontSize: font_size * 0.875,
            textAlign: 'center',
            display: 'grid',
            alignItems: 'center',
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, analyze ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: "".concat(counts[1] / reviews.length * 100, "%"),
            background: scaleBlue(1)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: "".concat(counts[0] / reviews.length * 100, "%"),
            background: scaleRed(1)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        })) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, o.children.length), analyze ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, Math.round(counts[winner_count_index] / reviews.length * 1000) / 10, "% ", winner_name) : null))));
      }))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.06f26c8587ba91fb5517.hot-update.js.map