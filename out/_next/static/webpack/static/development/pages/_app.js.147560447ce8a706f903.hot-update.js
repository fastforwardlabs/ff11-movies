webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/sample_movie_info.js */ "./data/sample_movie_info.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");
/* harmony import */ var _parts_Tour__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../parts/Tour */ "./parts/Tour.js");











var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/_app.js";








var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_15___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;




var algnames = ['NBSVM', 'BERT'];
var algfiles = ['nbsvm_lime_grouped_pretty.json', 'bert_lime_grouped_pretty.json', 'nbsvm_lime_grouped_pretty_word.json'];
var data_keys = [['nbsvm_data', 'nbsvm_lime_grouped_pretty.json', 'NBSVM'], ['bert_data', 'bert_lime_grouped_pretty.json', 'BERT']];

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(MyApp, _App);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp).call(this, props));
    _this.state = {
      analyze: true,
      data_select: 1,
      show_accuracy: false,
      sort: 'reviews',
      review_sort: 'date',
      nbsvm_data: null,
      compare: false,
      bert_data: null,
      show_info: false
    };
    _this.setAnalyze = _this.setAnalyze.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setReviewSort = _this.setReviewSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setAccuracy = _this.setAccuracy.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setSort = _this.setSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setAlgo = _this.setAlgo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setCompare = _this.setCompare.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp, [{
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      fetch(linkPrefix + '/static/data/' + algfiles[0]).then(function (r) {
        return r.json();
      }).then(function (r) {
        fetch(linkPrefix + '/static/data/names_and_dates.json').then(function (nd) {
          return nd.json();
        }).then(function (nd) {
          var reviews = r.map(function (r, i) {
            var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, r);

            new_r.index = i;
            new_r.author = nd[i].author;
            new_r.date = nd[i].date;
            return new_r;
          });
          var key = data_keys[0][0];

          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, reviews));
        });
      });
      fetch(linkPrefix + '/static/data/' + algfiles[1]).then(function (r) {
        return r.json();
      }).then(function (r) {
        fetch(linkPrefix + '/static/data/names_and_dates.json').then(function (nd) {
          return nd.json();
        }).then(function (nd) {
          var reviews = r.map(function (r, i) {
            var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, r);

            new_r.index = i;
            new_r.author = nd[i].author;
            new_r.date = nd[i].date;
            return new_r;
          });
          var key = data_keys[1][0];

          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, reviews));
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "setAnalyze",
    value: function setAnalyze(value) {
      this.setState({
        analyze: value
      });
    }
  }, {
    key: "setReviewSort",
    value: function setReviewSort(value) {
      this.setState({
        review_sort: value
      });
    }
  }, {
    key: "setSort",
    value: function setSort(value) {
      this.setState({
        sort: value
      });
    }
  }, {
    key: "setAlgo",
    value: function setAlgo(index) {
      this.setState({
        data_select: index
      });
    }
  }, {
    key: "setAccuracy",
    value: function setAccuracy(value) {
      this.setState({
        show_accuracy: value
      });
    }
  }, {
    key: "setCompare",
    value: function setCompare(value) {
      this.setState({
        compare: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$state = this.state,
          analyze = _this$state.analyze,
          sort = _this$state.sort,
          review_sort = _this$state.review_sort,
          show_accuracy = _this$state.show_accuracy,
          show_info = _this$state.show_info;
      var data = this.state[data_keys[this.state.data_select][0]];
      if (analyze === false) show_accuracy = false;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var font_size = 16;
      var line_height = 1.5;
      var grem = font_size * line_height;
      var pathname = this.props.router.pathname;
      var is_front = pathname === '/';
      var is_topic = pathname.startsWith('/topic');
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "2343230763",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}html{background:#222;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;line-height:1.5;background:white;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}p{margin:0;text-indent:1.5rem;}p:first-child{text-indent:0;}a,button{color:inherit;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover,button:hover{opacity:0.75;}a.no-opacity-hover:hover,button.no-opacity-hover:hover{opacity:1;}a.no-underline{-webkit-text-decoration:none;text-decoration:none;}.opacity-inner-hover{-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover .opacity-inner-hover,button:hover .opacity-inner-hover{opacity:0.75;}button{font:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;background:transparent;cursor:pointer;}button:focus{outline:none;}.hover-block{position:absolute;left:0;top:0;right:0;bottom:0;}.hover-block-container .hover-block{display:block;pointer-events:none;opacity:0;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;background:rgba(0,0,0,0.0625);}.hover-block-container:hover .hover-block{display:block;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0STJCLEFBR21DLEFBSU4sQUFHUCxBQWFFLEFBR0YsQUFJSyxBQUlBLEFBS0QsQUFJSCxBQUdXLEFBR1UsQUFJbEIsQUFHQSxBQVVBLEFBR0ssQUFPSixBQU9BLFNBdEVnQixBQWNYLENBaUJyQixHQUpBLEFBY0EsQUFHb0IsQUFVcEIsQ0FwQ0EsQUFJaUMsQUEwQ1gsQUFPVixFQTVFWixFQThEUyxJQWxFZ0IsRUFpRnpCLENBZFEsR0EzQ1IsR0E4QnNCLEFBY1osR0FNRSxLQUxELEtBTXNCLENBMUVqQyxHQXFFQSxFQTNCQSxDQVljLFlBQ0YsT0FWWixHQVdXLEVBckNYLE9Bc0N5QixFQTFCekIscUJBMkJpQixTQWlCa0IsTUFoQm5DLHdCQWlCQSxlQW5FaUIsZUFDQyxnQkFDQyxpQkFDQyxrQkFDaUIsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi4vZGF0YS9zYW1wbGVfbW92aWVfaW5mby5qcydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC1zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgbm91bnMsIGFkamVjdGl2ZXMgfSBmcm9tICcuLi9kYXRhL2NvcnBvcmEuanMnXG5pbXBvcnQgeyByZWQsIGJsdWUsIEJvcmRlciB9IGZyb20gJy4uL3BhcnRzL1N0YXRpYydcbmxldCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5sZXQgbGlua1ByZWZpeCA9IHB1YmxpY1J1bnRpbWVDb25maWcubGlua1ByZWZpeFxuaW1wb3J0IExpbmsgZnJvbSAnLi4vcGFydHMvUHJlZml4ZWRMaW5rJ1xuaW1wb3J0IEJhciBmcm9tICcuLi9wYXJ0cy9CYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcbmltcG9ydCBUb3VyIGZyb20gJy4uL3BhcnRzL1RvdXInXG5cbmxldCBhbGduYW1lcyA9IFsnTkJTVk0nLCAnQkVSVCddXG5sZXQgYWxnZmlsZXMgPSBbXG4gICduYnN2bV9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLFxuICAnYmVydF9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLFxuICAnbmJzdm1fbGltZV9ncm91cGVkX3ByZXR0eV93b3JkLmpzb24nLFxuXVxubGV0IGRhdGFfa2V5cyA9IFtcbiAgWyduYnN2bV9kYXRhJywgJ25ic3ZtX2xpbWVfZ3JvdXBlZF9wcmV0dHkuanNvbicsICdOQlNWTSddLFxuICBbJ2JlcnRfZGF0YScsICdiZXJ0X2xpbWVfZ3JvdXBlZF9wcmV0dHkuanNvbicsICdCRVJUJ10sXG5dXG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge31cblxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5hbHl6ZTogdHJ1ZSxcbiAgICAgIGRhdGFfc2VsZWN0OiAxLFxuICAgICAgc2hvd19hY2N1cmFjeTogZmFsc2UsXG4gICAgICBzb3J0OiAncmV2aWV3cycsXG4gICAgICByZXZpZXdfc29ydDogJ2RhdGUnLFxuICAgICAgbmJzdm1fZGF0YTogbnVsbCxcbiAgICAgIGNvbXBhcmU6IGZhbHNlLFxuICAgICAgYmVydF9kYXRhOiBudWxsLFxuICAgICAgc2hvd19pbmZvOiBmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5zZXRBbmFseXplID0gdGhpcy5zZXRBbmFseXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFJldmlld1NvcnQgPSB0aGlzLnNldFJldmlld1NvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWNjdXJhY3kgPSB0aGlzLnNldEFjY3VyYWN5LmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNvcnQgPSB0aGlzLnNldFNvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWxnbyA9IHRoaXMuc2V0QWxnby5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRDb21wYXJlID0gdGhpcy5zZXRDb21wYXJlLmJpbmQodGhpcylcbiAgfVxuXG4gIGZldGNoRGF0YSgpIHtcbiAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbMF0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhL25hbWVzX2FuZF9kYXRlcy5qc29uJylcbiAgICAgICAgICAudGhlbihuZCA9PiBuZC5qc29uKCkpXG4gICAgICAgICAgLnRoZW4obmQgPT4ge1xuICAgICAgICAgICAgbGV0IHJldmlld3MgPSByLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3X3IgPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICAgICAgICAgICAgICBuZXdfci5pbmRleCA9IGlcbiAgICAgICAgICAgICAgbmV3X3IuYXV0aG9yID0gbmRbaV0uYXV0aG9yXG4gICAgICAgICAgICAgIG5ld19yLmRhdGUgPSBuZFtpXS5kYXRlXG4gICAgICAgICAgICAgIHJldHVybiBuZXdfclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBrZXkgPSBkYXRhX2tleXNbMF1bMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5XTogcmV2aWV3cyB9KVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhLycgKyBhbGdmaWxlc1sxXSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgZmV0Y2gobGlua1ByZWZpeCArICcvc3RhdGljL2RhdGEvbmFtZXNfYW5kX2RhdGVzLmpzb24nKVxuICAgICAgICAgIC50aGVuKG5kID0+IG5kLmpzb24oKSlcbiAgICAgICAgICAudGhlbihuZCA9PiB7XG4gICAgICAgICAgICBsZXQgcmV2aWV3cyA9IHIubWFwKChyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdfciA9IE9iamVjdC5hc3NpZ24oe30sIHIpXG4gICAgICAgICAgICAgIG5ld19yLmluZGV4ID0gaVxuICAgICAgICAgICAgICBuZXdfci5hdXRob3IgPSBuZFtpXS5hdXRob3JcbiAgICAgICAgICAgICAgbmV3X3IuZGF0ZSA9IG5kW2ldLmRhdGVcbiAgICAgICAgICAgICAgcmV0dXJuIG5ld19yXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGtleSA9IGRhdGFfa2V5c1sxXVswXVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiByZXZpZXdzIH0pXG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpXG4gIH1cblxuICBzZXRBbmFseXplKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFuYWx5emU6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRSZXZpZXdTb3J0KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJldmlld19zb3J0OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0U29ydCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0QWxnbyhpbmRleCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlbGVjdDogaW5kZXggfSlcbiAgfVxuXG4gIHNldEFjY3VyYWN5KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfYWNjdXJhY3k6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRDb21wYXJlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhcmU6IHZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgYW5hbHl6ZSwgc29ydCwgcmV2aWV3X3NvcnQsIHNob3dfYWNjdXJhY3ksIHNob3dfaW5mbyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlW2RhdGFfa2V5c1t0aGlzLnN0YXRlLmRhdGFfc2VsZWN0XVswXV1cblxuICAgIGlmIChhbmFseXplID09PSBmYWxzZSkgc2hvd19hY2N1cmFjeSA9IGZhbHNlXG5cbiAgICBsZXQgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBmb250X3NpemUgPSAxNlxuICAgIGxldCBsaW5lX2hlaWdodCA9IDEuNVxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG5cbiAgICBsZXQgaXNfZnJvbnQgPSBwYXRobmFtZSA9PT0gJy8nXG4gICAgbGV0IGlzX3RvcGljID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3RvcGljJylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXG4gICAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXG4gICAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIsXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8tb3BhY2l0eS1ob3Zlcjpob3ZlcixcbiAgICAgICAgICBidXR0b24ubm8tb3BhY2l0eS1ob3Zlcjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLXVuZGVybGluZSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGFjaXR5LWlubmVyLWhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIgLm9wYWNpdHktaW5uZXItaG92ZXIsXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIC5vcGFjaXR5LWlubmVyLWhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2stY29udGFpbmVyIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlci1ibG9jay1jb250YWluZXI6aG92ZXIgLmhvdmVyLWJsb2NrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAke3Nob3dfaW5mbyA/ICdoaWRkZW4nIDogJ2F1dG8nfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGlzX2Zyb250PXtpc19mcm9udH1cbiAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgc2hvd19hY2N1cmFjeT17c2hvd19hY2N1cmFjeX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHtncmVtICogNCArIDF9cHgpYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEgJiYgdGhpcy5zdGF0ZS5uYnN2bV9kYXRhID8gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgICAgICAgICAgZm9udF9zaXplPXtmb250X3NpemV9XG4gICAgICAgICAgICAgICAgbGluZV9oZWlnaHQ9e2xpbmVfaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgICAgYW5hbHl6ZT17YW5hbHl6ZX1cbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIGluZm89e2luZm99XG4gICAgICAgICAgICAgICAgc29ydD17c29ydH1cbiAgICAgICAgICAgICAgICByZXZpZXdfc29ydD17cmV2aWV3X3NvcnR9XG4gICAgICAgICAgICAgICAgc2V0QW5hbHl6ZT17dGhpcy5zZXRBbmFseXplfVxuICAgICAgICAgICAgICAgIHNldFNvcnQ9e3RoaXMuc2V0U29ydH1cbiAgICAgICAgICAgICAgICBzZXRSZXZpZXdTb3J0PXt0aGlzLnNldFJldmlld1NvcnR9XG4gICAgICAgICAgICAgICAgc2V0QWxnbz17dGhpcy5zZXRBbGdvfVxuICAgICAgICAgICAgICAgIGFsZ25hbWVzPXthbGduYW1lc31cbiAgICAgICAgICAgICAgICBkYXRhX3NlbGVjdD17dGhpcy5zdGF0ZS5kYXRhX3NlbGVjdH1cbiAgICAgICAgICAgICAgICBzaG93X2FjY3VyYWN5PXtzaG93X2FjY3VyYWN5fVxuICAgICAgICAgICAgICAgIHNldEFjY3VyYWN5PXt0aGlzLnNldEFjY3VyYWN5fVxuICAgICAgICAgICAgICAgIGNvbXBhcmU9e3RoaXMuc3RhdGUuY29tcGFyZX1cbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlPXt0aGlzLnNldENvbXBhcmV9XG4gICAgICAgICAgICAgICAgbmJzdm1fZGF0YT17dGhpcy5zdGF0ZS5uYnN2bV9kYXRhfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogZ3JlbSAvIDIgfX0+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyMjInLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUZXh0ZmxpY2tzIGlzIGEgbmF0dXJhbCBsYW5ndWFnZSBwcm9jZXNzaW5nIHByb3RvdHlwZSBieSBDbG91ZGVyYSBGYXN0XG4gICAgICAgICAgRm9yd2FyZCBMYWJzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd19pbmZvID8gKFxuICAgICAgICAgIDxUb3VyXG4gICAgICAgICAgICByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfVxuICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgIGZvbnRfc2l6ZT17Zm9udF9zaXplfVxuICAgICAgICAgICAgbGluZV9oZWlnaHQ9e2xpbmVfaGVpZ2h0fVxuICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgaW5mbz17aW5mb31cbiAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICByZXZpZXdfc29ydD17cmV2aWV3X3NvcnR9XG4gICAgICAgICAgICBzZXRBbmFseXplPXt0aGlzLnNldEFuYWx5emV9XG4gICAgICAgICAgICBzZXRTb3J0PXt0aGlzLnNldFNvcnR9XG4gICAgICAgICAgICBzZXRSZXZpZXdTb3J0PXt0aGlzLnNldFJldmlld1NvcnR9XG4gICAgICAgICAgICBzZXRBbGdvPXt0aGlzLnNldEFsZ299XG4gICAgICAgICAgICBhbGduYW1lcz17YWxnbmFtZXN9XG4gICAgICAgICAgICBkYXRhX3NlbGVjdD17dGhpcy5zdGF0ZS5kYXRhX3NlbGVjdH1cbiAgICAgICAgICAgIHNob3dfYWNjdXJhY3k9e3Nob3dfYWNjdXJhY3l9XG4gICAgICAgICAgICBzZXRBY2N1cmFjeT17dGhpcy5zZXRBY2N1cmFjeX1cbiAgICAgICAgICAgIGNvbXBhcmU9e3RoaXMuc3RhdGUuY29tcGFyZX1cbiAgICAgICAgICAgIHNldENvbXBhcmU9e3RoaXMuc2V0Q29tcGFyZX1cbiAgICAgICAgICAgIG5ic3ZtX2RhdGE9e3RoaXMuc3RhdGUubmJzdm1fZGF0YX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "107552866",
        dynamic: [show_info ? 'hidden' : 'auto'],
        __self: this
      }, "body{overflow:".concat(show_info ? 'hidden' : 'auto', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrTzJCLEFBR21ELHNDQUN4QyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL25leHQtbW92aWVzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4uL2RhdGEvc2FtcGxlX21vdmllX2luZm8uanMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQtc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IG5vdW5zLCBhZGplY3RpdmVzIH0gZnJvbSAnLi4vZGF0YS9jb3Jwb3JhLmpzJ1xuaW1wb3J0IHsgcmVkLCBibHVlLCBCb3JkZXIgfSBmcm9tICcuLi9wYXJ0cy9TdGF0aWMnXG5sZXQgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxubGV0IGxpbmtQcmVmaXggPSBwdWJsaWNSdW50aW1lQ29uZmlnLmxpbmtQcmVmaXhcbmltcG9ydCBMaW5rIGZyb20gJy4uL3BhcnRzL1ByZWZpeGVkTGluaydcbmltcG9ydCBCYXIgZnJvbSAnLi4vcGFydHMvQmFyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5pbXBvcnQgVG91ciBmcm9tICcuLi9wYXJ0cy9Ub3VyJ1xuXG5sZXQgYWxnbmFtZXMgPSBbJ05CU1ZNJywgJ0JFUlQnXVxubGV0IGFsZ2ZpbGVzID0gW1xuICAnbmJzdm1fbGltZV9ncm91cGVkX3ByZXR0eS5qc29uJyxcbiAgJ2JlcnRfbGltZV9ncm91cGVkX3ByZXR0eS5qc29uJyxcbiAgJ25ic3ZtX2xpbWVfZ3JvdXBlZF9wcmV0dHlfd29yZC5qc29uJyxcbl1cbmxldCBkYXRhX2tleXMgPSBbXG4gIFsnbmJzdm1fZGF0YScsICduYnN2bV9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLCAnTkJTVk0nXSxcbiAgWydiZXJ0X2RhdGEnLCAnYmVydF9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLCAnQkVSVCddLFxuXVxuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuYWx5emU6IHRydWUsXG4gICAgICBkYXRhX3NlbGVjdDogMSxcbiAgICAgIHNob3dfYWNjdXJhY3k6IGZhbHNlLFxuICAgICAgc29ydDogJ3Jldmlld3MnLFxuICAgICAgcmV2aWV3X3NvcnQ6ICdkYXRlJyxcbiAgICAgIG5ic3ZtX2RhdGE6IG51bGwsXG4gICAgICBjb21wYXJlOiBmYWxzZSxcbiAgICAgIGJlcnRfZGF0YTogbnVsbCxcbiAgICAgIHNob3dfaW5mbzogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMuc2V0QW5hbHl6ZSA9IHRoaXMuc2V0QW5hbHl6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRSZXZpZXdTb3J0ID0gdGhpcy5zZXRSZXZpZXdTb3J0LmJpbmQodGhpcylcbiAgICB0aGlzLnNldEFjY3VyYWN5ID0gdGhpcy5zZXRBY2N1cmFjeS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTb3J0ID0gdGhpcy5zZXRTb3J0LmJpbmQodGhpcylcbiAgICB0aGlzLnNldEFsZ28gPSB0aGlzLnNldEFsZ28uYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0Q29tcGFyZSA9IHRoaXMuc2V0Q29tcGFyZS5iaW5kKHRoaXMpXG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgZmV0Y2gobGlua1ByZWZpeCArICcvc3RhdGljL2RhdGEvJyArIGFsZ2ZpbGVzWzBdKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS9uYW1lc19hbmRfZGF0ZXMuanNvbicpXG4gICAgICAgICAgLnRoZW4obmQgPT4gbmQuanNvbigpKVxuICAgICAgICAgIC50aGVuKG5kID0+IHtcbiAgICAgICAgICAgIGxldCByZXZpZXdzID0gci5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld19yID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgICAgICAgICAgICAgbmV3X3IuaW5kZXggPSBpXG4gICAgICAgICAgICAgIG5ld19yLmF1dGhvciA9IG5kW2ldLmF1dGhvclxuICAgICAgICAgICAgICBuZXdfci5kYXRlID0gbmRbaV0uZGF0ZVxuICAgICAgICAgICAgICByZXR1cm4gbmV3X3JcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQga2V5ID0gZGF0YV9rZXlzWzBdWzBdXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2tleV06IHJldmlld3MgfSlcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbMV0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhL25hbWVzX2FuZF9kYXRlcy5qc29uJylcbiAgICAgICAgICAudGhlbihuZCA9PiBuZC5qc29uKCkpXG4gICAgICAgICAgLnRoZW4obmQgPT4ge1xuICAgICAgICAgICAgbGV0IHJldmlld3MgPSByLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3X3IgPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICAgICAgICAgICAgICBuZXdfci5pbmRleCA9IGlcbiAgICAgICAgICAgICAgbmV3X3IuYXV0aG9yID0gbmRbaV0uYXV0aG9yXG4gICAgICAgICAgICAgIG5ld19yLmRhdGUgPSBuZFtpXS5kYXRlXG4gICAgICAgICAgICAgIHJldHVybiBuZXdfclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBrZXkgPSBkYXRhX2tleXNbMV1bMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5XTogcmV2aWV3cyB9KVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaERhdGEoKVxuICB9XG5cbiAgc2V0QW5hbHl6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmFseXplOiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0UmV2aWV3U29ydCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdfc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldFNvcnQodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldEFsZ28oaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZWxlY3Q6IGluZGV4IH0pXG4gIH1cblxuICBzZXRBY2N1cmFjeSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2FjY3VyYWN5OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0Q29tcGFyZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYXJlOiB2YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGFuYWx5emUsIHNvcnQsIHJldmlld19zb3J0LCBzaG93X2FjY3VyYWN5LCBzaG93X2luZm8gfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZVtkYXRhX2tleXNbdGhpcy5zdGF0ZS5kYXRhX3NlbGVjdF1bMF1dXG5cbiAgICBpZiAoYW5hbHl6ZSA9PT0gZmFsc2UpIHNob3dfYWNjdXJhY3kgPSBmYWxzZVxuXG4gICAgbGV0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgZm9udF9zaXplID0gMTZcbiAgICBsZXQgbGluZV9oZWlnaHQgPSAxLjVcbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuXG4gICAgbGV0IGlzX2Zyb250ID0gcGF0aG5hbWUgPT09ICcvJ1xuICAgIGxldCBpc190b3BpYyA9IHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy90b3BpYycpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLFxuICAgICAgICAgICAgICAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLFxuICAgICAgICAgICAgICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxuICAgICAgICAgICAgICBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSxcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIsXG4gICAgICAgICAgYnV0dG9uLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby11bmRlcmxpbmUge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIC5vcGFjaXR5LWlubmVyLWhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrLWNvbnRhaW5lciAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2MjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2stY29udGFpbmVyOmhvdmVyIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogJHtzaG93X2luZm8gPyAnaGlkZGVuJyA6ICdhdXRvJ307XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBpc19mcm9udD17aXNfZnJvbnR9XG4gICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICBhbmFseXplPXthbmFseXplfVxuICAgICAgICAgIHNob3dfYWNjdXJhY3k9e3Nob3dfYWNjdXJhY3l9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWluSGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7Z3JlbSAqIDQgKyAxfXB4KWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhICYmIHRoaXMuc3RhdGUubmJzdm1fZGF0YSA/IChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICAgICAgICAgIGZvbnRfc2l6ZT17Zm9udF9zaXplfVxuICAgICAgICAgICAgICAgIGxpbmVfaGVpZ2h0PXtsaW5lX2hlaWdodH1cbiAgICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBpbmZvPXtpbmZvfVxuICAgICAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICAgICAgcmV2aWV3X3NvcnQ9e3Jldmlld19zb3J0fVxuICAgICAgICAgICAgICAgIHNldEFuYWx5emU9e3RoaXMuc2V0QW5hbHl6ZX1cbiAgICAgICAgICAgICAgICBzZXRTb3J0PXt0aGlzLnNldFNvcnR9XG4gICAgICAgICAgICAgICAgc2V0UmV2aWV3U29ydD17dGhpcy5zZXRSZXZpZXdTb3J0fVxuICAgICAgICAgICAgICAgIHNldEFsZ289e3RoaXMuc2V0QWxnb31cbiAgICAgICAgICAgICAgICBhbGduYW1lcz17YWxnbmFtZXN9XG4gICAgICAgICAgICAgICAgZGF0YV9zZWxlY3Q9e3RoaXMuc3RhdGUuZGF0YV9zZWxlY3R9XG4gICAgICAgICAgICAgICAgc2hvd19hY2N1cmFjeT17c2hvd19hY2N1cmFjeX1cbiAgICAgICAgICAgICAgICBzZXRBY2N1cmFjeT17dGhpcy5zZXRBY2N1cmFjeX1cbiAgICAgICAgICAgICAgICBjb21wYXJlPXt0aGlzLnN0YXRlLmNvbXBhcmV9XG4gICAgICAgICAgICAgICAgc2V0Q29tcGFyZT17dGhpcy5zZXRDb21wYXJlfVxuICAgICAgICAgICAgICAgIG5ic3ZtX2RhdGE9e3RoaXMuc3RhdGUubmJzdm1fZGF0YX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjIyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgVGV4dGZsaWNrcyBpcyBhIG5hdHVyYWwgbGFuZ3VhZ2UgcHJvY2Vzc2luZyBwcm90b3R5cGUgYnkgQ2xvdWRlcmEgRmFzdFxuICAgICAgICAgIEZvcndhcmQgTGFic1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dfaW5mbyA/IChcbiAgICAgICAgICA8VG91clxuICAgICAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn1cbiAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICBmb250X3NpemU9e2ZvbnRfc2l6ZX1cbiAgICAgICAgICAgIGxpbmVfaGVpZ2h0PXtsaW5lX2hlaWdodH1cbiAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICBhbmFseXplPXthbmFseXplfVxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIGluZm89e2luZm99XG4gICAgICAgICAgICBzb3J0PXtzb3J0fVxuICAgICAgICAgICAgcmV2aWV3X3NvcnQ9e3Jldmlld19zb3J0fVxuICAgICAgICAgICAgc2V0QW5hbHl6ZT17dGhpcy5zZXRBbmFseXplfVxuICAgICAgICAgICAgc2V0U29ydD17dGhpcy5zZXRTb3J0fVxuICAgICAgICAgICAgc2V0UmV2aWV3U29ydD17dGhpcy5zZXRSZXZpZXdTb3J0fVxuICAgICAgICAgICAgc2V0QWxnbz17dGhpcy5zZXRBbGdvfVxuICAgICAgICAgICAgYWxnbmFtZXM9e2FsZ25hbWVzfVxuICAgICAgICAgICAgZGF0YV9zZWxlY3Q9e3RoaXMuc3RhdGUuZGF0YV9zZWxlY3R9XG4gICAgICAgICAgICBzaG93X2FjY3VyYWN5PXtzaG93X2FjY3VyYWN5fVxuICAgICAgICAgICAgc2V0QWNjdXJhY3k9e3RoaXMuc2V0QWNjdXJhY3l9XG4gICAgICAgICAgICBjb21wYXJlPXt0aGlzLnN0YXRlLmNvbXBhcmV9XG4gICAgICAgICAgICBzZXRDb21wYXJlPXt0aGlzLnNldENvbXBhcmV9XG4gICAgICAgICAgICBuYnN2bV9kYXRhPXt0aGlzLnN0YXRlLm5ic3ZtX2RhdGF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_parts_Header__WEBPACK_IMPORTED_MODULE_20__["default"], {
        is_front: is_front,
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          minHeight: "calc(100vh - ".concat(grem * 4 + 1, "px)")
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, data && this.state.nbsvm_data ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        font_size: font_size,
        line_height: line_height,
        grem: grem,
        analyze: analyze,
        data: data,
        info: _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_14__["info"],
        sort: sort,
        review_sort: review_sort,
        setAnalyze: this.setAnalyze,
        setSort: this.setSort,
        setReviewSort: this.setReviewSort,
        setAlgo: this.setAlgo,
        algnames: algnames,
        data_select: this.state.data_select,
        show_accuracy: show_accuracy,
        setAccuracy: this.setAccuracy,
        compare: this.state.compare,
        setCompare: this.setCompare,
        nbsvm_data: this.state.nbsvm_data,
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Loading...")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          background: '#222',
          color: 'white',
          borderTop: 'solid 1px black'
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Textflicks is a natural language processing prototype by Cloudera Fast Forward Labs"), show_info ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_parts_Tour__WEBPACK_IMPORTED_MODULE_21__["default"], (_React$createElement = {
        router: this.props.router,
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "analyze", analyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "info", _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_14__["info"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "sort", sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "review_sort", review_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setAnalyze", this.setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setSort", this.setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setReviewSort", this.setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setAlgo", this.setAlgo), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "algnames", algnames), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "data_select", this.state.data_select), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "show_accuracy", show_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setAccuracy", this.setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "compare", this.state.compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setCompare", this.setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "nbsvm_data", this.state.nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 284
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "__self", this), _React$createElement)) : null);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_13___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.147560447ce8a706f903.hot-update.js.map