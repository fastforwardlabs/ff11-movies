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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");






var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/index.js";







var class_labels = ['negative', 'positive'];

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
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
          sort = _this$props.sort;
      var sorted = info.map(function (o) {
        return {
          title: o.Title,
          id: o.og_id,
          plot: o.Plot,
          poster: o.Poster,
          children: []
        };
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
          sorted = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](sorted, [function (o) {
            return o.children.length;
          }]);
          sorted.reverse();
        } else {
          sorted = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](sorted, [function (o) {
            return o.children.reduce(function (total, r) {
              return r.class === 'neg' ? total + 1 : total;
            }, 0) / o.children.length;
          }]);
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

      var pos = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](certainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var neg = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](certainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(neg));
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingBottom: grem * 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          borderBottom: 'none',
          margin: "0 auto",
          display: 'grid',
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gridColumnGap: grem,
          gridRowGap: grem,
          padding: "0 ".concat(grem / 2, "px")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, data ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, sorted.map(function (o, i) {
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

        var pos = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](certainty_array.filter(function (r) {
          return r.class === 'pos';
        }), 'certainty').reverse();

        var neg = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](certainty_array.filter(function (r) {
          return r.class === 'neg';
        }), 'certainty');

        var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(neg));
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
          href: "/topic?id=".concat(o.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "no-underline over-hover-container",
          style: {
            border: 'solid 1px black',
            position: 'relative',
            overflow: 'hidden',
            height: 13 * grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            height: grem * 7,
            backgroundImage: "url(".concat(o.poster, ")"),
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            // filter: `grayscale(100%) contrast(10) brightness(2) opacity(85%)`,
            // imageRendering: 'pixelated',
            filter: "grayscale(1)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }), analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            topj: 0,
            height: grem * 8,
            mixBlendMode: 'multiply'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, combined.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              top: 0,
              bottom: 0,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.class === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["scaleBlue"])(c.certainty) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["scaleRed"])(c.certainty)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 274
            },
            __self: this
          });
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: grem / 4,
            mixBlendMode: 'multiply'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, combined.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              top: 0,
              bottom: 0,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.class === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["scaleBlue"])(c.certainty) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["scaleRed"])(c.certainty)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 304
            },
            __self: this
          });
        }))) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            borderTop: "solid 1px black"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            padding: grem / 2,
            background: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            fontWeight: 700
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        }, o.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            fontSize: font_size * 0.875,
            lineHeight: line_height,
            height: grem * 0.875 * 3,
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, o.plot)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            fontSize: font_size * 0.875,
            position: 'relative',
            borderTop: 'solid 1px black',
            padding: "".concat(grem / 4, "px ").concat(grem / 2, "px ").concat(grem * 3 / 8, "px ").concat(grem / 2, "px")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          },
          __self: this
        }, o.children.length, " reviews", analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          },
          __self: this
        }, ' ', "\xB7", ' ', Math.round(counts[winner_count_index] / reviews.length * 100), "% ", winner_name) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            display: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          },
          __self: this
        }, analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          },
          __self: this
        }, Math.round(counts[winner_count_index] / reviews.length * 1000) / 10, "% ", winner_name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394
          },
          __self: this
        }, counts[1], " | ", counts[0]), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          },
          __self: this
        }, "actual: ", actual[1], " | ", actual[0]), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }, "accuracy:", ' ', Math.round(accuracy * 1000) / 10, "%")) : null)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "over-hover",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        })));
      })) : null))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        grem: grem,
        setAnalyze: setAnalyze,
        analyze: analyze,
        combined: combined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.31a044744a2ee208db52.hot-update.js.map