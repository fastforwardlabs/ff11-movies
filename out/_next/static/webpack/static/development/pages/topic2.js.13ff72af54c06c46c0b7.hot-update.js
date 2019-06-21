webpackHotUpdate("static/development/pages/topic2.js",{

/***/ "./pages/topic2.js":
/*!*************************!*\
  !*** ./pages/topic2.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");






var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/topic2.js";









var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_11___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;
var class_labels = ['negative', 'positive'];

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Page, _React$Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, [{
    key: "render",
    value: function render(_ref) {
      var font_size = _ref.font_size,
          line_height = _ref.line_height,
          grem = _ref.grem,
          router = _ref.router,
          analyze = _ref.analyze,
          data = _ref.data,
          info = _ref.info,
          setAnalyze = _ref.setAnalyze,
          review_sort = _ref.review_sort,
          setReviewSort = _ref.setReviewSort;
      var info_ids = info.map(function (o) {
        return o.og_id;
      });
      var topic_info = info[info_ids.indexOf(router.query.id)];
      var reviews = data.filter(function (o) {
        return o.url === router.query.id;
      }).map(function (r, i) {
        var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, r);

        new_r.author = lodash__WEBPACK_IMPORTED_MODULE_9__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_10__["adjectives"]).toLowerCase().replace('-', '') + '-' + lodash__WEBPACK_IMPORTED_MODULE_9__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_10__["nouns"]).toLowerCase().replace('-', '');
        new_r.date = i * 2 + 3 + ' days ago';
        return new_r;
      });
      var sorted = reviews.slice();
      var top_sentences = reviews.map(function (r) {
        var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_9__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_9__["max"](r.lime_scores)));

        function scaleScore(value) {
          if (value < 0) {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleRed"])(Math.abs(value) / max);
          } else {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleBlue"])(Math.abs(value) / max);
          }
        }

        var sentences = r.lime_tokens.map(function (t, i) {
          var score = r.lime_scores[i];
          console.log(Object(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["colorExtend"])(scaleScore(score), 1));
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

        var sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sentences, 'score');

        if (r.class === 'pos') sorted = sorted.reverse();
        return sorted[0];
      });
      var top_pos = top_sentences.filter(function (s) {
        return s.class === 'pos';
      });
      var top_neg = top_sentences.filter(function (s) {
        return s.class === 'neg';
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
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
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, topic_info.Plot)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Positive review highlights"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, top_pos.slice(0, 4).map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          style: {
            backgroundImage: "linear-gradient(".concat(s.background, ", ").concat(s.background, ")"),
            backgroundSize: '4px 7px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: "0 0.85em",
            paddingBottom: 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, s.token), ' ', "by ", s.author, " ", s.date, " \u2022", ' ');
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, reviews.length, " reviews"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, sorted.map(function (r, i) {
        var winner_name = r.class;
        var winner_index, scaleWinner, scaleLoser;

        if (r.class_probabilities[1] > r.class_probabilities[0]) {
          winner_index = 1;
          scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleBlue"];
          scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleRed"];
        } else {
          winner_index = 0;
          scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleRed"];
          scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleBlue"];
        }

        var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_9__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_9__["max"](r.lime_scores)));

        function scaleScore(value) {
          if (value < 0) {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleRed"])(Math.abs(value) / max);
          } else {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["scaleBlue"])(Math.abs(value) / max);
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            marginBottom: grem * 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            marginBottom: grem / 2 * 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "by ", r.author, " ", r.date), r.lime_tokens.map(function (t, i) {
          var score = r.lime_scores[i];
          var background = scaleScore(score);
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {
              backgroundImage: "linear-gradient(".concat(background, ", ").concat(background, ")"),
              backgroundSize: '4px 5px',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: "0 0.85em",
              paddingBottom: 2
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, t), ' ');
        })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            background: scaleWinner(r.class_probabilities[winner_index]) // textIndent: grem,

          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, class_labels[winner_index], " review"), " \xB7", ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          style: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, Math.round(r.class_probabilities[winner_index] * 100), "% certainty")));
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Page));

/***/ })

})
//# sourceMappingURL=topic2.js.13ff72af54c06c46c0b7.hot-update.js.map