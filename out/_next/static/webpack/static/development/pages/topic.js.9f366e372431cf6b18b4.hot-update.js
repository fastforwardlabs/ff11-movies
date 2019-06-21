webpackHotUpdate("static/development/pages/topic.js",{

/***/ "./pages/topic.js":
/*!************************!*\
  !*** ./pages/topic.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");

var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/topic.js";









var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_6___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;
var class_labels = ['negative', 'positive'];
var Page = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (_ref) {
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
  var counts = reviews.reduce(function (counts, r) {
    var slice = counts.slice();

    if (r.class_probabilities[1] > r.class_probabilities[0]) {
      slice[1] += 1;
    } else {
      slice[0] += 1;
    }

    return slice;
  }, [0, 0]);
  var winner_count_index = 0;
  if (counts[1] > counts[0]) winner_count_index = 1;
  var winner_names = ['negative', 'positive'];
  var winner_name = winner_names[winner_count_index];
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
        certainty: r.class_probabilities[1]
      };
    } else {
      return {
        class: r.class,
        certainty: r.class_probabilities[0]
      };
    }
  });

  var pos = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](certainty_array.filter(function (r) {
    return r.class === 'pos';
  }), 'certainty').reverse();

  var neg = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](certainty_array.filter(function (r) {
    return r.class === 'neg';
  }), 'certainty');

  var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(neg));
  var sorted = reviews.slice();

  if (review_sort === 'date') {} else if (review_sort === 'positive') {
    sorted = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](sorted, function (r) {
      var sort_val;
      if (r.class === 'pos') sort_val = r.class_probabilities[1];
      if (r.class === 'neg') sort_val = r.class_probabilities[0] - 1;
      return sort_val;
    });
    sorted = sorted.reverse();
  } else if (review_sort === 'negative') {
    sorted = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](sorted, function (r) {
      var sort_val;
      if (r.class === 'pos') sort_val = r.class_probabilities[1] - 1;
      if (r.class === 'neg') sort_val = r.class_probabilities[0];
      return sort_val;
    });
    sorted = sorted.reverse();
  }

  var top_sentences = reviews.map(function (r) {
    var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_4__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_4__["max"](r.lime_scores)));

    function scaleScore(value) {
      if (value < 0) {
        return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(Math.abs(value) / max);
      } else {
        return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(Math.abs(value) / max);
      }
    }

    var sentences = r.lime_tokens.map(function (t, i) {
      var score = r.lime_scores[i];
      console.log(Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["colorExtend"])(scaleScore(score), 1));
      var scaled = Math.abs(r.lime_scores[i]) / max;
      return {
        token: t,
        score: score,
        class: r.class,
        scaled_score: scaled,
        background: scaleScore(score)
      };
    });

    var sorted = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](sentences, 'score');

    if (r.class === 'pos') sorted = sorted.reverse();
    return sorted[0];
  });
  console.log(top_sentences);
  var top_pos = top_sentences.filter(function (s) {
    return s.class === 'pos';
  });
  var top_neg = top_sentences.filter(function (s) {
    return s.class === 'neg';
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      paddingBottom: grem * 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      maxWidth: 840,
      margin: "0 auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      overflow: 'hidden',
      marginBottom: grem
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      float: 'left',
      position: 'relative',
      marginRight: grem
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: topic_info.Poster,
    style: {
      filter: "grayscale(100%) contrast(10) brightness(2) opacity(85%)",
      border: 'solid 1px black',
      width: 220,
      float: 'left'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), analyze ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      mixBlendMode: 'multiply'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, combined.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'absolute',
        left: "".concat(1 / combined.length * i * 100, "%"),
        top: 0,
        bottom: 0,
        width: "".concat(1 / combined.length * 100 + 0.05, "%"),
        background: c.class === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(c.certainty) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(c.certainty)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    });
  })) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontSize: font_size * 2,
      lineHeight: 1.25,
      marginBottom: grem / 1,
      fontWeight: 700,
      paddingTop: grem / 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, topic_info.Plot)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginBottom: grem / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Review highlights"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      borderBottom: "solid ".concat(grem / 2, "px ").concat(Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(1)),
      borderLeft: "solid ".concat(grem / 2, "px ").concat(Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(1)),
      borderRight: "solid ".concat(grem / 2, "px ").concat(Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(1)),
      marginLeft: -grem / 2,
      marginRight: -grem / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "".concat(grem / 4, "px ").concat(grem / 2 * 0, "px"),
      background: Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(1)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Positive"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      border: 'solid 1px black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      overflowX: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: grem / 2,
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, top_pos.map(function (s) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        border: 'solid 1px black',
        padding: grem / 2,
        width: 300,
        minWidth: 300,
        height: 200,
        marginRight: grem
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        backgroundImage: "linear-gradient(".concat(s.background, ", ").concat(s.background, ")"),
        backgroundSize: '4px 7px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: "0 0.85em",
        paddingBottom: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, s.token));
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginBottom: grem,
      borderBottom: "solid ".concat(grem / 2, "px ").concat(Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(1)),
      borderLeft: "solid ".concat(grem / 2, "px ").concat(Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(1)),
      borderRight: "solid ".concat(grem / 2, "px ").concat(Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(1)),
      marginLeft: -grem / 2,
      marginRight: -grem / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "".concat(grem / 4, "px ").concat(grem / 2 * 0, "px"),
      background: Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(1)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "Negative"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      border: 'solid 1px black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      overflowX: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: grem / 2,
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, top_neg.map(function (s) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        border: 'solid 1px black',
        padding: grem / 2,
        width: 300,
        minWidth: 300,
        height: 200,
        marginRight: grem
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        backgroundImage: "linear-gradient(".concat(s.background, ", ").concat(s.background, ")"),
        backgroundSize: '4px 7px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: "0 0.85em",
        paddingBottom: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, s.token));
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "".concat(grem / 4, "px ", 0, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "Reviews"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      padding: "".concat(grem / 4, "px ", 0, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "".concat(grem / 4, "px ").concat(grem / 4, "px"),
      marginLeft: -grem / 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Sort reviews by:"), [['date', 'date'], ['positive', 'positive'], ['negative', 'negative']].map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, p[1] === review_sort ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        padding: "".concat(grem / 4, "px ").concat(grem / 4, "px"),
        background: '#222',
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, p[0]) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return setReviewSort(p[1]);
      },
      style: {
        padding: "".concat(grem / 4, "px ").concat(grem / 4, "px"),
        textDecoration: 'underline'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, p[0]));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: grem / 2,
      border: 'solid 1px black',
      position: 'relative',
      marginBottom: grem / 1,
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, analyze ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      mixBlendMode: 'multiply'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, combined.map(function (c, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'absolute',
        left: "".concat(1 / combined.length * i * 100, "%"),
        top: 0,
        bottom: 0,
        width: "".concat(1 / combined.length * 100 + 0.05, "%"),
        background: c.class === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(c.certainty) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(c.certainty)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: this
    });
  })) : null, reviews.length, " reviews", analyze ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, ' ', "\xB7", ' ', counts[1] > counts[0] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, Math.round(counts[1] / combined.length * 100), "% positive") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, Math.round(counts[0] / combined.length * 100), "% negative")) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, sorted.map(function (r, i) {
    var winner_name = r.class;
    var winner_index, scaleWinner, scaleLoser;

    if (r.class_probabilities[1] > r.class_probabilities[0]) {
      winner_index = 1;
      scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"];
      scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"];
    } else {
      winner_index = 0;
      scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"];
      scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"];
    }

    var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_4__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_4__["max"](r.lime_scores)));

    function scaleScore(value) {
      if (value < 0) {
        return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(Math.abs(value) / max);
      } else {
        return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(Math.abs(value) / max);
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        borderTop: "solid ".concat(grem / 2, "px ").concat(scaleWinner(r.class_probabilities[winner_index])),
        borderLeft: "solid ".concat(grem / 2, "px ").concat(scaleWinner(r.class_probabilities[winner_index])),
        borderRight: "solid ".concat(grem / 2, "px ").concat(scaleWinner(r.class_probabilities[winner_index])),
        marginLeft: -grem / 2,
        marginRight: -grem / 2,
        marginBottom: grem / 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        border: 'solid 1px black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512
      },
      __self: this
    }, analyze ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        padding: "".concat(grem / 4, "px ").concat(grem / 2, "px"),
        // borderTop: `solid ${grem / 2}px ${scaleWinner(
        //   r.class_probabilities[winner_index]
        // )}`,
        background: scaleWinner(r.class_probabilities[winner_index]),
        display: 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526
      },
      __self: this
    }, class_labels[winner_index], " review"), ' ', "\xB7", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        lineHeight: 1.5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      },
      __self: this
    }, Math.round(r.class_probabilities[winner_index] * 100), "% certainty")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        padding: grem / 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        lineHeight: 1.5,
        fontSize: font_size * 0.875,
        marginBottom: grem / 8,
        display: 'flex',
        justifyContent: 'space-between'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_4__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_5__["adjectives"]).toLowerCase().replace('-', '') + '-' + lodash__WEBPACK_IMPORTED_MODULE_4__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_5__["nouns"]).toLowerCase().replace('-', ''), ' ', "wrote \xB7 ", i * 2 + 3, " days ago"), r.lime_tokens.map(function (t, i) {
      var score = r.lime_scores[i];
      var background = scaleScore(score);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          backgroundImage: "linear-gradient(".concat(background, ", ").concat(background, ")"),
          backgroundSize: '4px 7px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: "0 0.85em",
          paddingBottom: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, t));
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: scaleWinner(r.class_probabilities[winner_index]),
        padding: "".concat(grem / 4, "px ").concat(grem / 4, "px"),
        fontSize: font_size * 0.875,
        lineHeight: 1.5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597
      },
      __self: this
    }, class_labels[winner_index], " review"), " \xB7", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        lineHeight: 1.5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598
      },
      __self: this
    }, Math.round(r.class_probabilities[winner_index] * 100), "% certainty")));
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    grem: grem,
    setAnalyze: setAnalyze,
    analyze: analyze,
    combined: combined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=topic.js.9f366e372431cf6b18b4.hot-update.js.map