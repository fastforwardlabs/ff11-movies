webpackHotUpdate("static/development/pages/topic.js",{

/***/ "./pages/topic.js":
/*!************************!*\
  !*** ./pages/topic.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/sample_movie_info.js */ "./data/sample_movie_info.js");
/* harmony import */ var _data_first_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/first_names.js */ "./data/first_names.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chroma-js */ "../../node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/topic.js";







var class_labels = ['negative', 'positive'];
var red = chroma_js__WEBPACK_IMPORTED_MODULE_4__('red').luminance(0.35);
var blue = chroma_js__WEBPACK_IMPORTED_MODULE_4__('blue').luminance(0.35);
var scaleRed = chroma_js__WEBPACK_IMPORTED_MODULE_4__["scale"](['white', red]).mode('lch');
var scaleBlue = chroma_js__WEBPACK_IMPORTED_MODULE_4__["scale"](['white', blue]).mode('lch');
var Page = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(function (_ref) {
  var font_size = _ref.font_size,
      line_height = _ref.line_height,
      grem = _ref.grem,
      router = _ref.router,
      analyze = _ref.analyze,
      data = _ref.data;
  var info_ids = _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_2__["info"].map(function (o) {
    return o.og_id;
  });
  var topic_info = _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_2__["info"][info_ids.indexOf(router.query.id)];
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: grem,
      paddingBottom: grem * 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      maxWidth: 840,
      border: 'solid 1px black',
      borderBottom: 'none',
      margin: "0 auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: grem / 2,
      borderBottom: 'solid 1px black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: font_size * 2,
      lineHeight: 1.25,
      marginBottom: grem / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, topic_info.Plot)), analyze ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: grem / 2,
      position: 'relative',
      borderBottom: 'solid 1px black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, Math.round(counts[winner_count_index] / reviews.length * 1000) / 10, "% ", winner_name, " reviews")) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, reviews.map(function (r) {
    var winner_name = r.class;
    var winner_index, scaleWinner, scaleLoser;

    if (r.class_probabilities[1] > r.class_probabilities[0]) {
      winner_index = 1;
      scaleWinner = scaleBlue;
      scaleLoser = scaleRed;
    } else {
      winner_index = 0;
      scaleWinner = scaleRed;
      scaleLoser = scaleBlue;
    }

    var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_5__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_5__["max"](r.lime_scores)));

    function scaleScore(value) {
      if (value < 0) {
        return scaleRed(Math.abs(value) / max);
      } else {
        return scaleBlue(Math.abs(value) / max);
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        borderBottom: 'solid 1px black',
        display: 'grid',
        gridTemplateColumns: "180px 1fr"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: grem / 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/images/cifar_".concat(Math.floor(Math.random() * 130), ".png"),
      style: {
        width: grem * 2,
        height: grem * 2,
        filter: "grayscale(100%) contrast(2) brightness(2)",
        imageRendering: 'pixelated'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        fontSize: font_size * 0.875,
        lineHeight: 1.5,
        wordBreak: 'break-word'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_5__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_6__["adjectives"]).toLowerCase().replace('-', '') + lodash__WEBPACK_IMPORTED_MODULE_5__["sample"](_data_corpora_js__WEBPACK_IMPORTED_MODULE_6__["nouns"]).toLowerCase().replace('-', ''))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        borderLeft: 'solid 1px black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, analyze ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: "".concat(grem / 4, "px ").concat(grem / 2, "px"),
        background: scaleWinner(r.class_probabilities[winner_index])
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "classification: ", class_labels[winner_index], " (", Math.round(r.class_probabilities[winner_index] * 100), "%)") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: grem
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, r.lime_tokens.map(function (t, i) {
      var score = r.lime_scores[i];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          background: analyze ? scaleScore(score) : 'transparent'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, t));
    }))));
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=topic.js.5fca7b0d3e17bb6510fd.hot-update.js.map