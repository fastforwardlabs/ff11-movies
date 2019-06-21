webpackHotUpdate("static/development/pages/topic2.js",{

/***/ "./pages/topic2.js":
/*!*************************!*\
  !*** ./pages/topic2.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/topic2.js";









var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_5___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;
var class_labels = ['negative', 'positive'];
var Page = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(function (_ref) {
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
  });
  var sorted = reviews.slice();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      maxWidth: 700,
      margin: '0 auto',
      padding: grem / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: grem
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textIndent: grem
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, topic_info.Plot)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: grem
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Positive review highlights"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textIndent: grem
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, top_pos.map(function (s) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        backgroundImage: "linear-gradient(".concat(s.background, ", ").concat(s.background, ")"),
        backgroundSize: '4px 7px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: "0 0.85em",
        paddingBottom: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, s.token);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: grem
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, reviews.length, " reviews"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, sorted.map(function (r, i) {
    var winner_name = r.class;
    var winner_index, scaleWinner, scaleLoser;

    if (r.class_probabilities[1] > r.class_probabilities[0]) {
      winner_index = 1;
      scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_7__["scaleBlue"];
      scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_7__["scaleRed"];
    } else {
      winner_index = 0;
      scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_7__["scaleRed"];
      scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_7__["scaleBlue"];
    }

    var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_3__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_3__["max"](r.lime_scores)));

    function scaleScore(value) {
      if (value < 0) {
        return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_7__["scaleRed"])(Math.abs(value) / max);
      } else {
        return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_7__["scaleBlue"])(Math.abs(value) / max);
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginBottom: grem * 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginBottom: grem / 2 * 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textIndent: grem
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_3__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_4__["adjectives"]).toLowerCase().replace('-', '') + '-' + lodash__WEBPACK_IMPORTED_MODULE_3__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_4__["nouns"]).toLowerCase().replace('-', ''), ' ', "wrote \xB7 ", i * 2 + 3, " days ago"), r.lime_tokens.map(function (t, i) {
      var score = r.lime_scores[i];
      var background = scaleScore(score);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          backgroundImage: "linear-gradient(".concat(background, ", ").concat(background, ")"),
          backgroundSize: '4px 5px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: "0 0.85em",
          paddingBottom: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, t));
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        background: scaleWinner(r.class_probabilities[winner_index]),
        textIndent: grem
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, class_labels[winner_index], " review"), " \xB7", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, Math.round(r.class_probabilities[winner_index] * 100), "% certainty")));
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=topic2.js.7d17405eae71980d421b.hot-update.js.map