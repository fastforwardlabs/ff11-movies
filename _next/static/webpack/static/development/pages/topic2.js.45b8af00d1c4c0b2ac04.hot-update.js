webpackHotUpdate("static/development/pages/topic2.js",{

/***/ "./pages/topic2.js":
/*!*************************!*\
  !*** ./pages/topic2.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");








var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/topic2.js";










var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_14___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;
var class_labels = ['negative', 'positive'];

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Page, _React$Component);

  function Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Page).call(this, props));
    _this.state = {
      show_all_positive: false,
      show_all_negative: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          font_size = _this$props.font_size,
          line_height = _this$props.line_height,
          grem = _this$props.grem,
          router = _this$props.router,
          analyze = _this$props.analyze,
          data = _this$props.data,
          info = _this$props.info,
          setAnalyze = _this$props.setAnalyze,
          review_sort = _this$props.review_sort,
          setReviewSort = _this$props.setReviewSort,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy;
      var info_ids = info.map(function (o) {
        return o.og_id;
      });
      var topic_info = info[info_ids.indexOf(router.query.id)];
      var reviews = data.filter(function (o) {
        return o.url === router.query.id;
      }).map(function (r, i) {
        var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, r);

        new_r.author = lodash__WEBPACK_IMPORTED_MODULE_12__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_13__["adjectives"]).toLowerCase().replace('-', '') + '_' + lodash__WEBPACK_IMPORTED_MODULE_12__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_13__["nouns"]).toLowerCase().replace('-', '');
        new_r.date = i * 2 + 3 + ' days ago';
        return new_r;
      });
      var counts = reviews.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.class_probabilities[1] > r.class_probabilities[0]) {
          slice[1] += 1;
        } else {
          slice[0] += 1;
        }

        return slice;
      }, [0, 0]);
      var certainty_array = reviews.map(function (r) {
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

      var pos = lodash__WEBPACK_IMPORTED_MODULE_12__["sortBy"](certainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var neg = lodash__WEBPACK_IMPORTED_MODULE_12__["sortBy"](certainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(neg));
      var sorted = reviews.slice();

      if (review_sort === 'date') {} else if (review_sort === 'positive') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_12__["sortBy"](sorted, function (r) {
          var sort_val;
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1] - 1;
          if (r.class === 'neg') sort_val = r.class_probabilities[0] - 0;
          return sort_val;
        });
      } else if (review_sort === 'negative') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_12__["sortBy"](sorted, function (r) {
          var sort_val;
          if (r.class === 'pos') sort_val = r.class_probabilities[1] - 0;
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0] - 1;
          return sort_val;
        });
      } else if (review_sort === 'accurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_12__["sortBy"](sorted, [function (r) {
          return r.class === r.label ? 0 : 1;
        }, function (r) {
          var sort_val;
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1];
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0];
          return sort_val;
        }]);
      } else if (review_sort === 'inaccurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_12__["sortBy"](sorted, [function (r) {
          return r.class === r.label ? 1 : 0;
        }, function (r) {
          var sort_val;
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1];
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0];
          return sort_val;
        }]);
      }

      var top_sentences = reviews.map(function (r) {
        var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_12__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_12__["max"](r.lime_scores)));

        function scaleScore(value) {
          if (value < 0) {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleTextRed"])(Math.abs(value) / max);
          } else {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleTextBlue"])(Math.abs(value) / max);
          }
        }

        var sentences = r.lime_tokens.map(function (t, i) {
          var score = r.lime_scores[i];
          var scaled = Math.abs(r.lime_scores[i]) / max;
          return {
            token: t,
            score: score,
            class: r.class,
            scaled_score: scaled,
            background: scaleScore(score),
            author: r.author,
            date: r.date
          };
        });

        var sorted = lodash__WEBPACK_IMPORTED_MODULE_12__["sortBy"](sentences, 'score');

        if (r.class === 'pos') sorted = sorted.reverse();
        return sorted[0];
      });
      var top_pos = top_sentences.filter(function (s) {
        return s.class === 'pos';
      });
      var top_neg = top_sentences.filter(function (s) {
        return s.class === 'neg';
      });
      var show_limit = 4;
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          paddingBottom: grem * 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        grem: grem,
        setAnalyze: setAnalyze,
        analyze: analyze,
        combined: combined,
        total: false,
        setAlgo: this.props.setAlgo,
        algnames: this.props.algnames,
        data_select: this.props.data_select,
        rightwrong: rightwrong,
        accuracy: accuracy,
        show_accuracy: show_accuracy,
        setAccuracy: setAccuracy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          maxWidth: 700,
          margin: '0 auto',
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, topic_info.Year, " \xB7 ", topic_info.Runtime, " \xB7", ' ', topic_info.Rated), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, topic_info.Plot)), analyze ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          height: grem,
          position: 'relative',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, analyze ? combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            top: 0,
            bottom: 0,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c.class === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleBlue"])(c.certainty) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleRed"])(c.certainty)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        });
      }) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, reviews.length, " reviews", analyze ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "\xB7 ", counts[1], " positive (", Math.floor(counts[1] / combined.length * 1000) / 10, "%)") : null))), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            bottom: 0,
            height: grem,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c.label !== c.class ? c.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleBlue"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleRed"])(1) : '#ddd'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, rightwrong[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, Math.floor(accuracy * 1000 / 10), "% accuracy (", rightwrong[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, Math.floor(accuracy * 1000 / 10), "% accuracy"))) : null) : null, analyze ? [['positive', top_pos, this.state.show_all_positive, 'show_all_positive'], ['negative', top_neg, this.state.show_all_negative, 'show_all_negative']].map(function (a) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            marginBottom: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, a[1].length, " ", a[0], " review highlights"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
          },
          __self: this
        }, a[1].slice(0, a[2] ? Infinity : show_limit).map(function (s, i) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            style: {},
            __source: {
              fileName: _jsxFileName,
              lineNumber: 323
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            style: {
              backgroundImage: "linear-gradient(".concat(s.background, ", ").concat(s.background, ")"),
              backgroundSize: '4px 7px',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: "0 0.85em",
              paddingBottom: 2
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            },
            __self: this
          }, s.token), ' ', "by ", s.author, " ", s.date, ' ', a[1].length < show_limit && a[1].length - 1 === i ? '' : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 341
            },
            __self: this
          }, "\xB7"), ' ');
        }), ' ', a[1].length > show_limit ? !a[2] ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          style: {
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            return _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a[3], true));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          },
          __self: this
        }, "show all") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          style: {
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            return _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a[3], false));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        }, "show less") : null));
      }) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex',
          paddingBottom: grem / 2 - 0.5,
          borderBottom: 'solid 1px black',
          marginBottom: grem / 2 - 0.5,
          marginLeft: -grem / 2,
          marginRight: -grem / 2,
          position: 'sticky',
          top: 0,
          paddingTop: grem / 2,
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          marginTop: -grem / 2,
          background: 'white',
          zIndex: 99
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex',
          paddingRight: grem / 4,
          marginLeft: -grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          paddingLeft: grem / 4,
          paddingRight: grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, reviews.length, " reviews sorted by most:"), (analyze ? show_accuracy ? [['recent', 'date'], ['positive', 'positive'], ['negative', 'negative'], ['accurate', 'accurate'], ['inaccurate', 'inaccurate']] : [['recent', 'date'], ['positive', 'positive'], ['negative', 'negative']] : [['recent', 'date']]).map(function (a) {
        return review_sort === a[1] ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            background: '#222',
            color: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, a[0]) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
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
            lineNumber: 423
          },
          __self: this
        }, a[0]);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, sorted.map(function (r, i) {
        var winner_name = r.class;
        var winner_index, scaleWinner, scaleLoser;

        if (r.class_probabilities[1] > r.class_probabilities[0]) {
          winner_index = 1;
          scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleBlue"];
          scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleRed"];
        } else {
          winner_index = 0;
          scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleRed"];
          scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleBlue"];
        }

        var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_12__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_12__["max"](r.lime_scores)));

        function scaleScore(value) {
          if (value < 0) {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleTextRed"])(Math.abs(value) / max);
          } else {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleTextBlue"])(Math.abs(value) / max);
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            marginBottom: grem / 2,
            paddingBottom: grem / 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 467
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            marginBottom: grem * 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 473
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 476
          },
          __self: this
        }, r.author, " wrote \xB7 ", r.date), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 479
          },
          __self: this
        }, r.lime_tokens.map(function (t, i) {
          var score = r.lime_scores[i];
          var background = analyze ? Math.abs(score) / max > 0.5 ? scaleScore(score) : 0 : 'transparent';
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 488
            },
            __self: this
          }, ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            style: {
              backgroundImage: "linear-gradient(".concat(background, ", ").concat(background, ")"),
              backgroundSize: '4px 5px',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: "0 0.85em",
              paddingBottom: 2
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 490
            },
            __self: this
          }, t), ' ');
        }))))), analyze ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            marginTop: grem * 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 509
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            background: scaleWinner(r.class_probabilities[winner_index])
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 510
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517
          },
          __self: this
        }, class_labels[winner_index], " review"), ' ', "\xB7", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          },
          __self: this
        }, Math.floor(r.class_probabilities[winner_index] * 1000) / 10, "% certainty")), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            background: r.label === r.class ? '#ddd' : r.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleBlue"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_16__["scaleRed"])(1)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 527
          },
          __self: this
        }, "label: ", r.label === 'pos' ? 'positive' : 'negative', ' ', "\xB7", ' ', r.label === r.class ? 'accurate' : 'inaccurate', ' ') : null) : null);
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, "See all movies and shows"))))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Page));

/***/ })

})
//# sourceMappingURL=topic2.js.45b8af00d1c4c0b2ac04.hot-update.js.map