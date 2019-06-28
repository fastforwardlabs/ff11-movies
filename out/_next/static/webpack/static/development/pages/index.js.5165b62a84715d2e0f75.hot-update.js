webpackHotUpdate("static/development/pages/index.js",{

/***/ "./parts/MovieGrid.js":
/*!****************************!*\
  !*** ./parts/MovieGrid.js ***!
  \****************************/
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
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");







var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/MovieGrid.js";





var MovieGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MovieGrid, _React$Component);

  function MovieGrid() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MovieGrid);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MovieGrid).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MovieGrid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          info = _this$props.info,
          sort = _this$props.sort,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          show_accuracy = _this$props.show_accuracy,
          hl_options = _this$props.hl_options;
      var sorted = info.map(function (o) {
        var new_o = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, o);

        new_o.children = [];
        new_o.id = o.og_id;
        return new_o;
      });
      var ids = sorted.map(function (o) {
        return o.id;
      });

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
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, function (o) {
          return -o.children.length;
        });
      } else if (sort === 'positive') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
          return o.children.reduce(function (total, r) {
            return r.class === 'pos' ? total - 1 : total;
          }, 0) / o.children.length;
        }, function (o) {
          return -o.children.length;
        }]);
      } else if (sort === 'negative') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
          return -o.children.reduce(function (total, r) {
            return r.class === 'neg' ? total + 1 : total;
          }, 0) / o.children.length;
        }, function (o) {
          return -o.children.length;
        }]);
      } else if (sort === 'accurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
          return o.children.reduce(function (total, r) {
            return r.label !== r.class ? total + 1 : total;
          }, 0) / o.children.length;
        }, function (o) {
          return -o.children.length;
        }]);
      } else if (sort === 'inaccurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
          return -o.children.reduce(function (total, r) {
            return r.label !== r.class ? total + 1 : total;
          }, 0) / o.children.length;
        }, function (o) {
          return -o.children.length;
        }]);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gridColumnGap: 1,
          gridRowGap: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, sorted.map(function (o, i) {
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
        var certainty_array = reviews.map(function (r) {
          if (r.logits[1] > r.logits[0]) {
            return {
              class: r.class,
              label: r.label,
              certainty: r.class_probabilities[1],
              correct: r.class === r.label
            };
          } else {
            return {
              class: r.class,
              label: r.label,
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
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "no-underline hover-block-container no-opacity-hover",
          style: {
            position: 'relative',
            height: 12 * grem,
            cursor: 'zoom-in',
            padding: grem / 2,
            outline: 'solid 1px black'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: '-webkit-box',
            webkitBoxOrient: 'vertical',
            WebkitLineClamp: 7,
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textDecoration: 'underline',
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, topic_info.Year, " \xB7 ", topic_info.Runtime, " \xB7", ' ', topic_info.Rated), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, topic_info.Plot)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'absolute',
            bottom: grem / 2,
            left: grem / 2,
            right: grem / 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, analyze ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
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
              background: c.class === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["scaleBlue"])(c.certainty) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["scaleRed"])(c.certainty)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          });
        })) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, reviews.length, " reviews", analyze ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, "\xB7 ", counts[1], " positive (", Math.floor(counts[1] / combined.length * 100) / 1, "%)") : null), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
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
              background: c.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["scaleBlue"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["scaleRed"])(1)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }, rightwrong[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }, Math.floor(accuracy * 1000 / 10), "% accuracy (", rightwrong[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        }, Math.floor(accuracy * 1000 / 10), "% accuracy"))) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "hover-block",
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.0625)',
            opacity: hl_options.highlight_first_in_grid && i === 0 ? 1 : null
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        })));
      }));
    }
  }]);

  return MovieGrid;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MovieGrid);

/***/ })

})
//# sourceMappingURL=index.js.5165b62a84715d2e0f75.hot-update.js.map