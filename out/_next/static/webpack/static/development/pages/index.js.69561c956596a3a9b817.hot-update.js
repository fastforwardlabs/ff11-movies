webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");







var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/index.js";







var class_labels = ['negative', 'positive'];

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
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
          analyze = _this$props.analyze,
          data = _this$props.data,
          info = _this$props.info,
          reviews = _this$props.reviews,
          setAnalyze = _this$props.setAnalyze,
          sort = _this$props.sort,
          setSort = _this$props.setSort;
      var sorted = info.map(function (o) {
        var new_o = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, o);

        new_o.children = [];
        new_o.id = o.og_id;
        return new_o;
      });
      var ids = sorted.map(function (o) {
        return o.id;
      });

      if (data !== null) {
        for (var i = 0; i < data.length; i++) {
          var o = data[i];
          var id = o.url;
          var index = ids.indexOf(id);

          if (index === -1) {
            console.log('miss');
          } else {
            sorted[index].children.push(o);
          }
        }

        if (sort === 'reviews') {
          sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
            return o.children.length;
          }]);
          sorted.reverse();
        } else if (sort === 'positive') {
          sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
            return o.children.reduce(function (total, r) {
              return r.class === 'neg' ? total + 1 : total;
            }, 0) / o.children.length;
          }]);
        } else if (sort === 'negative') {
          sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
            return o.children.reduce(function (total, r) {
              return r.class === 'neg' ? total + 1 : total;
            }, 0) / o.children.length;
          }]).reverse();
        }
      }

      var pos_count = data.reduce(function (total, o) {
        if (o.class === 'pos') {
          return total = total + 1;
        } else {
          return total;
        }
      }, 0);
      var neg_count = data.reduce(function (total, o) {
        if (o.class === 'neg') {
          return total = total + 1;
        } else {
          return total;
        }
      }, 0); // overloading this variables, will probably come back to bite me

      var winner_name = 'positive';
      if (neg_count > pos_count) winner_name = 'negative';
      var total_counts = [neg_count, pos_count];
      var certainty_array = data.map(function (r) {
        if (r.logits[1] > r.logits[0]) {
          return {
            class: r.class,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            class: r.class,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var pos = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](certainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var neg = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](certainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(neg));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingBottom: grem / 2,
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          paddingLeft: grem / 2,
          paddingRight: grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, sorted.length, " movies & shows sorted by:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex',
          paddingRight: grem / 4,
          paddingTop: grem / 2,
          paddingBottom: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, (analyze ? [['most reviews', 'reviews'], ['most positive', 'positive'], ['most negative', 'negative']] : [['most reviews', 'reviews']]).map(function (a) {
        return sort === a[1] ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            outline: 'solid 1px black'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, a[0]) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          onClick: function onClick() {
            setSort(a[1]);
          },
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            textDecoration: 'underline'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, a[0]);
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingBottom: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          borderBottom: 'none',
          margin: "-1px -1px -1px -1px",
          display: 'grid',
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gridColumnGap: grem,
          gridRowGap: grem,
          padding: "0 ".concat(grem / 2, "px")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, data ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, sorted.map(function (o, i) {
        var topic_info = o;
        var reviews = data.filter(function (r) {
          return r.url === o.id;
        });
        var counts = reviews.reduce(function (counts, r) {
          var slice = counts.slice();

          if (r.logits[1] > r.logits[0]) {
            slice[1] += 1;
          } else {
            slice[0] += 1;
          }

          return slice;
        }, [0, 0]);
        var actual = reviews.reduce(function (counts, r) {
          var slice = counts.slice();

          if (r.label === 'pos') {
            slice[1] += 1;
          } else if (r.label === 'neg') {
            slice[0] += 1;
          }

          return slice;
        }, [0, 0]);
        var rightwrong = reviews.reduce(function (counts, r) {
          var slice = counts.slice();

          if (r.label === r.class) {
            slice[1] += 1;
          } else {
            slice[0] += 1;
          }

          return slice;
        }, [0, 0]);
        var accuracy = rightwrong[1] / reviews.length;
        var winner_count_index = 0;
        if (counts[1] > counts[0]) winner_count_index = 1;
        var winner_names = ['negative', 'positive'];
        var winner_name = winner_names[winner_count_index];
        var certainty_array = reviews.map(function (r) {
          if (r.logits[1] > r.logits[0]) {
            return {
              class: r.class,
              certainty: r.class_probabilities[1]
            };
          } else {
            return {
              class: r.class,
              certainty: r.class_probabilities[0]
            };
          }
        });

        var pos = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](certainty_array.filter(function (r) {
          return r.class === 'pos';
        }), 'certainty').reverse();

        var neg = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](certainty_array.filter(function (r) {
          return r.class === 'neg';
        }), 'certainty');

        var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(neg));
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
          href: "/topic2?id=".concat(o.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "no-underline hover-block-container no-opacity-hover",
          style: {
            position: 'relative',
            height: 12 * grem,
            cursor: 'zoom-in'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: -grem / 2 - 0.5,
            top: -grem / 2 - 0.5,
            right: -grem / 2 - 0.5,
            bottom: -grem / 2 - 0.5,
            border: 'solid 1px black'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }), analyze ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            height: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, combined.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              bottom: 0,
              height: grem,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.class === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleBlue"])(c.certainty) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleRed"])(c.certainty)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 341
            },
            __self: this
          });
        }))) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: '-webkit-box',
            webkitBoxOrient: 'vertical',
            WebkitLineClamp: 7,
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textDecoration: 'underline',
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          },
          __self: this
        }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          },
          __self: this
        }, topic_info.Year, " \xB7 ", topic_info.Runtime, ' ', "\xB7 ", topic_info.Rated), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          },
          __self: this
        }, topic_info.Plot)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'absolute',
            bottom: 0,
            left: 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 392
          },
          __self: this
        }, reviews.length, " reviews \xB7 ", counts[1], ' ', "positive (", Math.floor(counts[1] / combined.length * 100) / 1, "%)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          },
          __self: this
        }, Math.floor(accuracy * 1000 / 10), " what")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "hover-block",
          style: {
            position: 'absolute',
            left: -grem / 2 - 0.5,
            top: -grem / 2 - 0.5,
            right: -grem / 2 - 0.5,
            bottom: -grem / 2 - 0.5,
            background: 'rgba(0,0,0,0.0625)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
          },
          __self: this
        })));
      })) : null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        setAnalyze: setAnalyze,
        analyze: analyze,
        combined: combined,
        total: true,
        setAlgo: this.props.setAlgo,
        algnames: this.props.algnames,
        data_select: this.props.data_select,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.69561c956596a3a9b817.hot-update.js.map