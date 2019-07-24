webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./parts/Bar.js":
/*!**********************!*\
  !*** ./parts/Bar.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Static */ "./parts/Static.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Utils */ "./parts/Utils.js");








var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Bar.js";





var infos = {
  'NB-SVM': 'For text classification problems like sentiment analysis it makes sense to choose a simple model based on bag-of-words as the first baseline. In many text classification problems, like topic classification, these types of baseline models may even be the best choice. NB-SVM treats the text as a bag of words and combines a Naive Bayes model (also a reasonable baseline) with a support vector machine. This model has been shown to produce strong linear baselines for text classification, and sentiment analysis in particular.',
  BERT: 'We trained the BERT-Large model without making any custom modifications and defined the entire experiment in a JSON configuration file in the AllenNLP style. We trained on a single GPU for 20 epochs, using an Adam optimizer, and used gradual unfreezing for fine-tuning the layers of the model. Overall, we did very little tuning of the model’s hyperparameters. This limited tuning requirement is one of the greatest benefits of transfer learning: the out-of-the-box performance is already very good, and eking out a further 1-2% of accuracy has diminishing returns and would require expensive-to-acquire knowledge of the model architecture. The final BERT model provides accuracy roughly equivalent to the state-of-the-art model, using just 500 labeled examples for training.'
};

var Bar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Bar, _React$Component);

  function Bar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Bar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Bar).call(this, props));
    _this.state = {
      show_info: null
    };
    _this.showInfo = _this.showInfo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Bar, [{
    key: "showInfo",
    value: function showInfo(setting) {
      this.setState({
        show_info: setting
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
          is_front = _this$props$is_front === void 0 ? false : _this$props$is_front,
          hl_options = _this$props.hl_options,
          _this$props$analyze_l = _this$props.analyze_locked,
          analyze_locked = _this$props$analyze_l === void 0 ? false : _this$props$analyze_l;
      var show_info = this.state.show_info;
      var certainty_array = data.map(function (r) {
        if (r.logits[1] > r.logits[0]) {
          return {
            "class": r["class"],
            label: r.label,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            "class": r["class"],
            label: r.label,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var pos = _.sortBy(certainty_array.filter(function (r) {
        return r["class"] === 'pos';
      }), 'certainty').reverse();

      var neg = _.sortBy(certainty_array.filter(function (r) {
        return r["class"] === 'neg';
      }), 'certainty');

      var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(neg));
      var rightwrong = data.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.label === r["class"]) {
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
            "class": r["class"],
            label: r.label,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            "class": r["class"],
            label: r.label,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var npos = _.sortBy(ncertainty_array.filter(function (r) {
        return r["class"] === 'pos';
      }), 'certainty').reverse();

      var nneg = _.sortBy(ncertainty_array.filter(function (r) {
        return r["class"] === 'neg';
      }), 'certainty');

      var ncombined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(npos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(nneg));
      var nrightwrong = nbsvm_data.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.label === r["class"]) {
          slice[1] += 1;
        } else {
          slice[0] += 1;
        }

        return slice;
      }, [0, 0]);
      var naccuracy = nrightwrong[1] / data.length;
      var counts = [combined.filter(function (r) {
        return r["class"] === 'neg';
      }).length, combined.filter(function (r) {
        return r["class"] === 'pos';
      }).length];
      var ncounts = [ncombined.filter(function (r) {
        return r["class"] === 'neg';
      }).length, ncombined.filter(function (r) {
        return r["class"] === 'pos';
      }).length];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          background: 'white',
          transition: 'background 0.1s linear',
          position: 'sticky',
          zIndex: 999,
          top: 0,
          minWidth: compare ? 600 : 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          padding: Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["p"])(grem / 2, grem / 4),
          alignItems: 'top'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, !is_front && false ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "hover-block-container no-opacity-hover",
        style: {
          display: 'block',
          padding: Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["p"])(grem / 2 + grem * 0.125, grem / 2),
          marginLeft: -grem / 4,
          marginTop: -grem / 4,
          marginRight: grem / 4,
          marginBottom: -(grem / 4 + 1),
          borderRight: 'solid 1px black',
          borderBottom: 'solid 1px black',
          position: 'relative',
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: grem * 0.75,
          height: grem * 0.75,
          border: 'solid 1px black',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
          lineNumber: 178
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
          lineNumber: 188
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hover-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          if (!analyze_locked) setAnalyze(!analyze);
        },
        style: {
          display: 'flex',
          alignItems: 'center',
          padding: Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["p"])(0, grem / 4),
          opacity: analyze_locked ? 1 : null,
          cursor: analyze_locked ? 'default' : 'pointer',
          height: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          background: analyze ? 'black' : 'white',
          marginRight: grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textDecoration: analyze_locked ? 'none' : 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Analyze", analyze ? ':' : '')), analyze ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          if (!analyze_locked) setAccuracy(!show_accuracy);
        },
        style: {
          display: 'flex',
          opacity: analyze_locked ? 1 : null,
          cursor: analyze_locked ? 'default' : 'pointer',
          padding: Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["p"])(0, grem / 4),
          alignItems: 'center',
          height: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          marginRight: grem / 4,
          border: 'solid 1px black',
          background: show_accuracy ? 'black' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textDecoration: analyze_locked ? 'none' : 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "accuracy")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          if (!analyze_locked) setCompare(!compare);
        },
        style: {
          display: 'flex',
          opacity: analyze_locked ? 1 : null,
          cursor: analyze_locked ? 'default' : 'pointer',
          padding: Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["p"])(0, grem / 4),
          alignItems: 'center',
          height: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          background: compare ? 'black' : 'white',
          marginRight: grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textDecoration: analyze_locked ? 'none' : 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "model comparison")))) : null, analyze && !compare ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          padding: Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["p"])(show_accuracy && false ? 0 : 0, grem / 4),
          flexGrow: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: 'certainty_' + i,
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            top: 0,
            bottom: 0,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c["class"] === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_11__["scaleBlue"])(c.certainty) : Object(_Static__WEBPACK_IMPORTED_MODULE_11__["scaleRed"])(c.certainty)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, combined.length, " ", total ? 'total ' : '', " review", combined.length > 1 ? 's' : '', analyze ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, ' ', "\xB7 ", counts[1], " positive (", Math.round(counts[1] / combined.length * 100), "%)") : null)), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: 'certainty2_' + i,
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            bottom: 0,
            height: grem,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c.label !== c["class"] ? c.label === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_11__["scaleBlue"])(1) : Object(_Static__WEBPACK_IMPORTED_MODULE_11__["scaleRed"])(1) : 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, rightwrong[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, Math.floor(accuracy * 1000 / 10), "% accuracy (", rightwrong[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, Math.floor(accuracy * 1000 / 10), "% accuracy")))) : null) : null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_11__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      })), compare && analyze ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, [['NB-SVM'], ['BERT']].map(function (item, i) {
        var n = i === 0;
        var cert = n ? ncombined : combined;
        var co = n ? ncounts : counts;
        var rw = n ? nrightwrong : rightwrong;
        var acc = n ? naccuracy : accuracy;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: 'items_' + item[0],
          style: {
            borderLeft: i === 1 ? 'solid 2px black' : 'none',
            marginLeft: i === 1 ? -1 : 0,
            background: 'white',
            display: 'flex'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 2,
            paddingTop: grem / 2,
            paddingBottom: grem / 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        }, item[0], ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          onClick: function onClick() {
            _this2.showInfo(item[0]);
          },
          style: {
            textDecoration: 'underline'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }, "?")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            padding: "".concat(show_accuracy && false ? 0 : grem / 2, "px ").concat(grem / 2, "px"),
            flexGrow: 1
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        }, cert.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            key: 'certaint3_' + i,
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              top: 0,
              bottom: 0,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c["class"] === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_11__["scaleBlue"])(c.certainty) : Object(_Static__WEBPACK_IMPORTED_MODULE_11__["scaleRed"])(c.certainty)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 435
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 451
          },
          __self: this
        }, combined.length, " ", total ? 'total ' : '', " review", combined.length > 1 ? 's' : '', analyze ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          },
          __self: this
        }, ' ', "\xB7 ", co[1], " positive (", Math.round(co[1] / combined.length * 100), "%)") : null)), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 465
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 466
          },
          __self: this
        }, cert.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            key: 'accuracy_' + i,
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              bottom: 0,
              height: grem,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.label !== c["class"] ? c.label === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_11__["scaleBlue"])(1) : Object(_Static__WEBPACK_IMPORTED_MODULE_11__["scaleRed"])(1) : '#fff'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 473
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 492
          },
          __self: this
        }, rw[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        }, Math.floor(acc * 1000 / 10), "% accuracy (", rw[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 499
          },
          __self: this
        }, Math.floor(acc * 1000 / 10), "% accuracy")))) : null));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_11__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      })) : null, show_info !== null ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          overflow: 'auto',
          background: "repeating-linear-gradient(\n              ".concat(0, "deg,\n              rgba(0,0,0,0.1) 0px,\n              rgba(0,0,0,0.1) 2px,\n              rgba(0,0,0,0) 2px,\n              rgba(0,0,0,0) 4px\n            )")
        },
        onClick: function onClick() {
          _this2.showInfo(null);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          background: 'transparent',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          paddingLeft: grem / 3,
          paddingRight: grem / 3,
          paddingBottom: '100vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "scene",
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          marginTop: 'auto',
          cursor: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
          maxWidth: 700,
          width: '100%',
          margin: '0 auto',
          background: 'white',
          border: 'solid 1px black',
          // boxShadow: '6px 8px #222',
          padding: grem / 2
        }, "background", 'white'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: -grem / 2,
          marginLeft: -grem / 2,
          marginRight: -grem / 2,
          marginBottom: grem / 2,
          background: '#222',
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          paddingTop: grem / 4,
          paddingBottom: grem / 4,
          paddingLeft: grem / 2,
          paddingRight: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }, show_info, " Info"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          paddingTop: grem / 4,
          paddingBottom: grem / 4,
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          textDecoration: 'underline'
        },
        onClick: function onClick() {
          _this2.showInfo(null);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }, "\xD7"))), infos[show_info])))) : null);
    }
  }]);

  return Bar;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ })

})
//# sourceMappingURL=_app.js.602129a80bf9c32c65a3.hot-update.js.map