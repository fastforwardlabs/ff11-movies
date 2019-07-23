webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./parts/Tour.js":
/*!***********************!*\
  !*** ./parts/Tour.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/Head */ "./node_modules/next/Head.js");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Scene__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Scene */ "./parts/Scene.js");
/* harmony import */ var _pages_Topic2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/Topic2 */ "./pages/Topic2.js");
/* harmony import */ var _pages_Index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/Index */ "./pages/Index.js");
/* harmony import */ var _pages_Disagreements__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages/Disagreements */ "./pages/Disagreements.js");








var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Tour.js";









var choreography = [0, 1];

var Tour =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Tour, _React$Component);

  function Tour(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Tour);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Tour).call(this, props));
    _this.state = {
      scroll: 0,
      step: 0,
      offsets: null,
      wh: null
    };
    _this.scrollRef = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.frameRef = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.scrollNext = _this.scrollNext.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Tour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        wh: window.innerHeight
      });
      var scroller = this.scrollRef.current;
      var framer = this.frameRef.current;
      var wh = this.state.wh || window.innerHeight;

      var offsets = this.state.offsets || _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(scroller.querySelectorAll('.scene')).map(function (n) {
        return n.offsetTop;
      });

      this.setState({
        offsets: offsets
      });
      scroller.addEventListener('scroll', function () {
        var last = offsets.length * wh;

        for (var i = 0; i < offsets.length; i++) {
          var r = offsets.length - 1 - i;
          var thresh = offsets[r];

          if (scroller.scrollTop > thresh - wh * (31 / 32)) {
            if (r === offsets.length - 1) {
              _this2.props.showInfo(false);

              _this2.setState({
                step: 0
              });
            } else {
              _this2.setState({
                step: r
              });
            }

            break;
          }
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var grem = this.props.grem;
      var step = this.state.step;
      var prev_step = prevState.step;
      var smooth = 'smooth';

      if (step !== 0 && step !== prev_step) {
        var scroller = document.getElementById('frame-scroller');

        if (step === 8) {
          var scroll_to = document.getElementById('sentences-block').offsetTop - grem * 2;
          scroller.scroll({
            left: 0,
            top: scroll_to,
            behavior: smooth
          });
        } else if (step === 7) {
          var _scroll_to = document.getElementById('reviews-block').offsetTop - grem * 2;

          scroller.scroll({
            left: 0,
            top: _scroll_to,
            behavior: smooth
          });
        } else if (step === 9) {
          scroller.scroll({
            left: 0,
            top: 0
          });
        } else if (step === 12) {
          var _scroll_to2 = document.getElementById('reviews-block').offsetTop - grem * 3;

          scroller.scroll({
            left: 0,
            top: _scroll_to2,
            behavior: smooth
          });
        } else if (step === 13) {
          var _scroll_to3 = document.getElementById('reviews-block').offsetTop - grem * 5;

          scroller.scroll({
            left: 0,
            top: _scroll_to3,
            behavior: smooth
          });
        } else if (step === 14) {
          var _scroll_to4 = document.getElementById('reviews-block').offsetTop - grem * 5;

          scroller.scroll({
            left: 0,
            top: _scroll_to4,
            behavior: smooth
          });
        } else if (step < 16) {
          scroller.scroll({
            left: 0,
            top: 0,
            behavior: 'auto'
          });
        }
      }
    }
  }, {
    key: "scrollNext",
    value: function scrollNext() {
      var current = this.state.step;
      var scroller = this.scrollRef.current;
      scroller.scroll({
        left: 0,
        top: this.state.offsets[current + 1] - this.state.wh * (10 / 16),
        behavior: 'smooth'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement,
          _React$createElement2,
          _React$createElement3,
          _this3 = this;

      var _this$props = this.props,
          font_size = _this$props.font_size,
          line_height = _this$props.line_height,
          data_select = _this$props.data_select,
          grem = _this$props.grem,
          router = _this$props.router,
          analyze = _this$props.analyze,
          data = _this$props.data,
          info = _this$props.info,
          setAnalyze = _this$props.setAnalyze,
          review_sort = _this$props.review_sort,
          setReviewSort = _this$props.setReviewSort,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          nbsvm_data = _this$props.nbsvm_data,
          sort = _this$props.sort,
          showInfo = _this$props.showInfo,
          setSort = _this$props.setSort;
      var _this$props2 = this.props,
          show_info = _this$props2.show_info,
          reviews_length = _this$props2.reviews_length,
          movies_length = _this$props2.movies_length;
      var _this$state = this.state,
          wh = _this$state.wh,
          step = _this$state.step;
      var index_sort = 'reviews';
      if (step === 3) index_sort = 'positive';
      if (step === 4) index_sort = 'negative';
      var index_accuracy = false;
      if (step > 9) index_accuracy = true;
      var reviews_accuracy = false;
      if (step > 9) reviews_accuracy = true;
      var review_id = 'tt0317740';
      if (step > 9) review_id = 'tt0069994';
      var reviews_sort = 'date';
      if (step > 11) reviews_sort = 'inaccurate';
      if (step > 13) reviews_sort = 'date';
      var reviews_compare = false;
      if (step > 12) reviews_compare = true;
      var hl_options = {}; // if (step === 2 || step === 6) hl_options.highlight_analysis_bar = true
      // if (step === 3 || step === 4) hl_options.highlight_first_in_grid = true
      // if (step === 7) hl_options.highlight_reviews_block = true
      // if (step === 8) hl_options.highlight_sentences_block = true

      var space = 0.75;
      var next = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: grem * 0,
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.scrollNext,
        style: {
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Next \u2193"));
      var scene_bar = false ? undefined : function (num) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            marginTop: -grem / 2,
            marginLeft: -grem / 2,
            marginRight: -grem / 2,
            marginBottom: grem / 2,
            display: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
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
            lineNumber: 189
          },
          __self: this
        }, "Screen ", num), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          style: {
            paddingTop: grem / 4,
            paddingBottom: grem / 4,
            paddingLeft: grem / 2,
            paddingRight: grem / 2,
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            showInfo(false);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["Border"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }));
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999
        },
        ref: this.frameRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, step > 0 && step < 16 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "frame-scroller",
        style: {
          position: 'fixed',
          left: 0,
          top: grem * 2,
          right: 0,
          bottom: 0,
          background: 'white',
          overflow: 'hidden',
          // borderLeft: `solid ${grem / 2}px #222`,
          height: 'calc(100vh - 3rem)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, data !== null && nbsvm_data !== null ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, step > 0 && step < 5 || step > 8 && step < 11 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_pages_Index__WEBPACK_IMPORTED_MODULE_15__["default"], (_React$createElement = {
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "analyze", step === 1 ? false : true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "info", info), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "sort", index_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "review_sort", review_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAnalyze", setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setSort", setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setReviewSort", setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "show_accuracy", index_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAccuracy", setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "router", {
        query: {
          id: 'tt0762073'
        }
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "compare", compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setCompare", setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "nbsvm_data", nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "hl_options", hl_options), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 248
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)) : null, step > 4 && step < 15 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_pages_Topic2__WEBPACK_IMPORTED_MODULE_14__["default"], (_React$createElement2 = {
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "analyze", step < 6 ? false : true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "info", info), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "sort", sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "review_sort", reviews_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setAnalyze", setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setSort", setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setReviewSort", setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "show_accuracy", reviews_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setAccuracy", setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "router", {
        query: {
          id: review_id
        }
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "compare", reviews_compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setCompare", setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "nbsvm_data", nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "hl_options", hl_options), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "tour", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 272
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "__self", this), _React$createElement2)) : null, step === 15 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_pages_Disagreements__WEBPACK_IMPORTED_MODULE_16__["default"], (_React$createElement3 = {
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "analyze", step < 6 ? false : true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "info", info), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "sort", sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "review_sort", reviews_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "setAnalyze", setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "setSort", setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "setReviewSort", setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "show_accuracy", reviews_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "setAccuracy", setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "router", {
        query: {
          id: review_id
        }
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "compare", reviews_compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "setCompare", setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "nbsvm_data", nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "hl_options", hl_options), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "__source", {
        fileName: _jsxFileName,
        lineNumber: 297
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement3, "__self", this), _React$createElement3)) : null) : null) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          overflow: 'auto',
          background: 'rgba(0,0,0,0.0625)',
          cursor: step > 0 ? 's-resize' : 'pointer'
        },
        ref: this.scrollRef,
        onClick: function onClick() {
          if (step === 0) {
            showInfo(false);
          } else {
            _this3.scrollNext();
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, step > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          right: grem / 2,
          top: grem / 2,
          color: 'white',
          zIndex: 999
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          textDecoration: 'underline'
        },
        onClick: function onClick() {
          showInfo(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "Quit")) : null), step > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          background: '#222',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "Tour")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, wh !== null ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingLeft: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, step, " of 16") : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          opacity: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, "Quit"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        one_screen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
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
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
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
          lineNumber: 430
        },
        __self: this
      }, "Info"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          paddingTop: grem / 4,
          paddingBottom: grem / 4,
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          textDecoration: 'underline'
        },
        onClick: function onClick() {
          showInfo(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_12__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, "Textflix is a sentiment analysis prototype by", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }, "Cloudera Fast Forward Labs"), ", built to accompany our report on transfer learning for natural language processing. It uses movie reviews to show how machine learning can unlock the data embedded in large amounts of unstructured text."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, "Textflix features over 1,000 text reviews for 50 movies and TV shows. The", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          whiteSpace: 'nowrap'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          background: analyze ? 'black' : 'white',
          display: 'inline-block',
          marginLeft: grem * (1 / 8),
          marginRight: grem * (1 / 16)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }), ' ', "Analyze"), ' ', "option uses a model pretrained with", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://github.com/google-research/bert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, "BERT"), " to classify each review as", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          background: _parts_Static__WEBPACK_IMPORTED_MODULE_12__["blue"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, "positive"), " or", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          background: _parts_Static__WEBPACK_IMPORTED_MODULE_12__["red"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, "negative"), ". Trained on only 500 labeled reviews, the model achieves 92% accuracy. Textflix lets you explore each classification at the sentence level and compare the model's performance to a baseline NB-SVM model."), ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, "We recommend", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          textDecoration: 'underline'
        },
        onClick: this.scrollNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, "scrolling to take the interactive tour \u2193"), ' ', "but you can also", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          textDecoration: 'underline'
        },
        onClick: function onClick() {
          showInfo(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, "jump right in"), "."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, "1. The overview page features an eclectic mix of fifty movie and TV shows. Without sentiment analysis, the only thing we can tell you about their reviews is how many there are."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, "2. With sentiment analysis, we can show the percent of positive reviews for each movie. Now a user can see the general sentiment for a movie without reading every review. Our app is now much more useful to a user trying to decide which movie to see."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, "3. We can now do things like sort by most positive reviews, and find out that ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, "What Alice Saw"), ", an indie thriller from 2003, is the most liked movie."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, "4. Or sort by most negative and find out ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, "Flood"), ", a disaster movie that most reviewers found unconvincing, is the most disliked."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, "5. Now let's look at an individual movie. Without sentiment analysis you would have to read through the reviews one-by-one to get a sense for how people feel about the 2003", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }, "The Italian Job"), "."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, "6. With analysis you can immediately see that the reviews are", ' ', "generally (70%) positive."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, "7. For each review you can see both the model's classification and certainty. We use an interpretability technique called LIME to determine how each sentence is affecting the classification. We underline the sentences that contribute most strongly to the classification. This added interpretability helps us understand how the model is making its decisions."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, "8. In addition to underlining important sentences within the review, we use the highest scoring sentences as highlights. Showing, at a glance, what people most liked and disliked about the movie."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        },
        __self: this
      }, "9. So far we've shown you how analysis can unlock the data embedded within text. Now we're going to look at the options that show model performance."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, "10. The ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, "show accuracy"), " option exposes how the model's classifications compare to the original rating entered by the reviewer. Our model achieves 93% accuracy for the 1,021 reviews in the dataset."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, "11. On the topic page, you can examine the model's accuracy on a review by review basis."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        },
        __self: this
      }, "12. You can sort the reviews by ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        },
        __self: this
      }, "inaccurate"), " to focus on the ones it got wrong."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617
        },
        __self: this
      }, "13. Finally, you can use the ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        },
        __self: this
      }, "model comparison"), " option to see how our model compares to one trained without the benefit of transfer learning. This mode introduces a split-screen, with the baseline model on the left and our main model on the right."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        },
        __self: this
      }, "14. You can sort the reviews by recent to get a view of each review side-by-side. Often the underlined sentences can help you understand disagreements between the two models."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        },
        __self: this
      }, "15. If you want to get a more thorough look at the disagreements, check out the ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      }, "Disagreements"), " page, linked to at the bottom of each page, to see a list of all the reviews where the models disagreed. You'll notice that our model is the winner of the majority of the disagreements."), next), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: space,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644
        },
        __self: this
      }, "Fin. That's the end of our tour. Now you're ready to explore Textflix yourself."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.scrollNext,
        style: {
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649
        },
        __self: this
      }, "End tour \u2193"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_13__["default"], {
        grem: grem,
        spacer: 1,
        wh: wh,
        trans: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        },
        __self: this
      }))));
    }
  }]);

  return Tour;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tour);

/***/ })

})
//# sourceMappingURL=_app.js.2b68f242f9f01430a99f.hot-update.js.map