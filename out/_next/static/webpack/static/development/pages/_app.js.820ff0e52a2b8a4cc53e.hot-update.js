webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./parts/Bar.js":
/*!**********************!*\
  !*** ./parts/Bar.js ***!
  \**********************/
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
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Static */ "./parts/Static.js");






var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Bar.js";





var Bar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Bar, _React$Component);

  function Bar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Bar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Bar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Bar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          nbsvm_data = _this$props.nbsvm_data,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          setAnalyze = _this$props.setAnalyze,
          total = _this$props.total,
          setAlgo = _this$props.setAlgo,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          _this$props$is_front = _this$props.is_front,
          is_front = _this$props$is_front === void 0 ? false : _this$props$is_front;
      var certainty_array = data.map(function (r) {
        if (r.logits[1] > r.logits[0]) {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var pos = _.sortBy(certainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var neg = _.sortBy(certainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(neg));
      var rightwrong = data.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.label === r.class) {
          slice[1] += 1;
        } else {
          slice[0] += 1;
        }

        return slice;
      }, [0, 0]);
      var accuracy = rightwrong[1] / data.length;
      var ncertainty_array = nbsvm_data.map(function (r) {
        if (r.logits[1] > r.logits[0]) {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var npos = _.sortBy(ncertainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var nneg = _.sortBy(ncertainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var ncombined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(npos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nneg));
      var nrightwrong = nbsvm_data.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.label === r.class) {
          slice[1] += 1;
        } else {
          slice[0] += 1;
        }

        return slice;
      }, [0, 0]);
      var naccuracy = nrightwrong[1] / data.length;
      var counts = [combined.filter(function (r) {
        return r.class === 'neg';
      }).length, combined.filter(function (r) {
        return r.class === 'pos';
      }).length];
      var ncounts = [ncombined.filter(function (r) {
        return r.class === 'neg';
      }).length, ncombined.filter(function (r) {
        return r.class === 'pos';
      }).length];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          background: 'white',
          position: 'sticky',
          zIndex: 999,
          top: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'top'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, !is_front ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "hover-block-container no-opacity-hover",
        style: {
          display: 'block',
          paddingTop: grem / 2 + grem * 0.125,
          paddingBottom: grem / 2 + grem * 0.125,
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          borderRight: 'solid 1px black',
          position: 'relative',
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.75,
          height: grem * 0.75,
          border: 'solid 1px black',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          width: grem * 0.75 / 2 - 1,
          height: grem * 0.75 - 2,
          borderRight: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          height: grem * 0.75 / 2 - 1,
          width: grem * 0.75 - 2,
          borderBottom: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hover-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setAnalyze(!analyze);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          height: grem * 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: analyze ? 'black' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Analyze")), analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "\u2013"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          paddingLeft: grem / 2 * 0,
          paddingRight: grem / 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "show:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setAccuracy(!show_accuracy);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 4,
          paddingRight: grem / 4,
          height: grem * 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: show_accuracy ? 'black' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "accuracy")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setCompare(!compare);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 4,
          paddingRight: grem / 4,
          height: grem * 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: compare ? 'black' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "model comparison")))) : null, analyze && !compare ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          padding: "".concat(show_accuracy && false ? 0 : grem / 2, "px ").concat(grem / 2, "px"),
          flexGrow: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
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
            background: c.class === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleBlue"])(c.certainty) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleRed"])(c.certainty)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, combined.length, " ", total ? 'total ' : '', " review", combined.length > 1 ? 's' : '', analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, ' ', "\xB7 ", counts[1], " positive (", Math.round(counts[1] / combined.length * 100), "%)") : null)), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            bottom: 0,
            height: grem,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c.label !== c.class ? chroma_js__WEBPACK_IMPORTED_MODULE_8__('#ea3573').luminance(0.3) : chroma_js__WEBPACK_IMPORTED_MODULE_8__('#3573ea').luminance(0.5)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, rightwrong[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, Math.floor(accuracy * 1000 / 10), "% accuracy (", rightwrong[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, Math.floor(accuracy * 1000 / 10), "% accuracy")))) : null) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_9__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      })), compare && analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, [['NBSVM'], ['BERT']].map(function (item, i) {
        var n = i === 0;
        var cert = n ? ncombined : combined;
        var co = n ? ncounts : counts;
        var rw = n ? nrightwrong : rightwrong;
        var acc = n ? naccuracy : accuracy;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            borderLeft: i === 1 ? 'solid 2px black' : 'none',
            marginLeft: i === 1 ? -1 : 0,
            background: 'white',
            display: 'flex'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 2,
            paddingTop: grem / 2,
            paddingBottom: grem / 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          },
          __self: this
        }, item[0]), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            padding: "".concat(show_accuracy && false ? 0 : grem / 2, "px ").concat(grem / 2, "px"),
            flexGrow: 1
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }, cert.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              top: 0,
              bottom: 0,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.class === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleBlue"])(c.certainty) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleRed"])(c.certainty)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 412
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          },
          __self: this
        }, combined.length, " ", total ? 'total ' : '', " review", combined.length > 1 ? 's' : '', analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431
          },
          __self: this
        }, ' ', "\xB7 ", co[1], " positive (", Math.round(co[1] / combined.length * 100), "%)") : null)), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, cert.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              bottom: 0,
              height: grem,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.label !== c.class ? c.label === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleBlue"])(1) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleRed"])(1) : '#ddd'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 449
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 467
          },
          __self: this
        }, rw[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, Math.floor(acc * 1000 / 10), "% accuracy (", rw[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
          },
          __self: this
        }, Math.floor(acc * 1000 / 10), "% accuracy")))) : null));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_9__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      })) : null);
    }
  }]);

  return Bar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ })

})
//# sourceMappingURL=_app.js.820ff0e52a2b8a4cc53e.hot-update.js.map