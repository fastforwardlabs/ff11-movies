webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/sample_movie_info.js */ "./data/sample_movie_info.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/Utils */ "./parts/Utils.js");
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");
/* harmony import */ var _parts_Tour__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../parts/Tour */ "./parts/Tour.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_19__);








var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/_app.js";












var algnames = ['NBSVM', 'BERT'];
var algfiles = ['nbsvm_lime_500_prototype_pretty.json', 'bert_lime_500_prototype_pretty.json', 'nbsvm_lime_grouped_pretty_word.json'];
var data_keys = [['nbsvm_data', 'nbsvm_lime_500_grouped_pretty.json', 'NBSVM'], ['bert_data', 'bert_lime_500_prototype_pretty.json', 'BERT']];
var linkPrefix = "";

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp).call(this, props));
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
    _this.setAnalyze = _this.setAnalyze.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setReviewSort = _this.setReviewSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setAccuracy = _this.setAccuracy.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setSort = _this.setSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setAlgo = _this.setAlgo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setCompare = _this.setCompare.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.showInfo = _this.showInfo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, [{
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      fetch(linkPrefix + '/static/data/names_and_dates.json').then(function (nd) {
        return nd.json();
      }).then(function (nd) {
        fetch(linkPrefix + '/static/data/' + algfiles[0]).then(function (r) {
          return r.json();
        }).then(function (r) {
          var reviews = r.map(function (r, i) {
            var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, r);

            new_r.index = i;
            new_r.author = nd[i].author;
            new_r.date = nd[i].date;
            new_r["class"] = r.class_probabilities[0] > r.class_probabilities[1] ? 'neg' : 'pos';
            return new_r;
          });
          var key = data_keys[0][0];

          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, reviews));
        });
        fetch(linkPrefix + '/static/data/' + algfiles[1]).then(function (r) {
          return r.json();
        }).then(function (r) {
          var reviews = r.map(function (r, i) {
            var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, r);

            new_r.index = i;
            new_r.author = nd[i].author;
            new_r.date = nd[i].date;
            new_r["class"] = r.class_probabilities[0] > r.class_probabilities[1] ? 'neg' : 'pos';
            return new_r;
          });
          var key = data_keys[1][0];

          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, reviews));
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      var pathname = this.props.router.pathname;
      var is_front = pathname === '/';
      if (is_front) this.setState({
        show_info: true
      });
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
    key: "showInfo",
    value: function showInfo(value) {
      this.setState({
        show_info: value
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
      var Component = this.props.Component;
      var font_size = 16;
      var line_height = 1.5;
      var grem = font_size * line_height;
      var pathname = this.props.router.pathname;
      var is_front = pathname === '/';
      var is_topic = pathname.startsWith('/topic');
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "og:title",
        content: "Textflix",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "description",
        content: "Textflix uses movie reviews to show how machine learning can unlock the data embedded in unstructured text.",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "og:description",
        content: "Textflix uses movie reviews to show how machine learning can unlock the data embedded in unstructured text.",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "og:image",
        content: "https://experiments.fastforwardlabs.com/static/images/textflix-screenshot.png",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        property: "og:url",
        content: "https://textflix.fastforwardlabs.com",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2343230763",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}html{background:#222;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;line-height:1.5;background:white;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}p{margin:0;text-indent:1.5rem;}p:first-child{text-indent:0;}a,button{color:inherit;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover,button:hover{opacity:0.75;}a.no-opacity-hover:hover,button.no-opacity-hover:hover{opacity:1;}a.no-underline{-webkit-text-decoration:none;text-decoration:none;}.opacity-inner-hover{-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover .opacity-inner-hover,button:hover .opacity-inner-hover{opacity:0.75;}button{font:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;background:transparent;cursor:pointer;}button:focus{outline:none;}.hover-block{position:absolute;left:0;top:0;right:0;bottom:0;}.hover-block-container .hover-block{display:block;pointer-events:none;opacity:0;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;background:rgba(0,0,0,0.0625);}.hover-block-container:hover .hover-block{display:block;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSzJCLEFBR21DLEFBSU4sQUFHUCxBQWFFLEFBR0YsQUFJSyxBQUlBLEFBS0QsQUFJSCxBQUdXLEFBR1UsQUFJbEIsQUFHQSxBQVVBLEFBR0ssQUFPSixBQU9BLFNBdEVnQixBQWNYLENBaUJyQixHQUpBLEFBY0EsQUFHb0IsQUFVcEIsQ0FwQ0EsQUFJaUMsQUEwQ1gsQUFPVixFQTVFWixFQThEUyxJQWxFZ0IsRUFpRnpCLENBZFEsR0EzQ1IsR0E4QnNCLEFBY1osR0FNRSxLQUxELEtBTXNCLENBMUVqQyxHQXFFQSxFQTNCQSxDQVljLFlBQ0YsT0FWWixHQVdXLEVBckNYLE9Bc0N5QixFQTFCekIscUJBMkJpQixTQWlCa0IsTUFoQm5DLHdCQWlCQSxlQW5FaUIsZUFDQyxnQkFDQyxpQkFDQyxrQkFDaUIsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi4vZGF0YS9zYW1wbGVfbW92aWVfaW5mby5qcydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC1zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgcmVkLCBibHVlLCBCb3JkZXIgfSBmcm9tICcuLi9wYXJ0cy9TdGF0aWMnXG5pbXBvcnQgeyBwIH0gZnJvbSAnLi4vcGFydHMvVXRpbHMnXG5pbXBvcnQgQmFyIGZyb20gJy4uL3BhcnRzL0JhcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vcGFydHMvSGVhZGVyJ1xuaW1wb3J0IFRvdXIgZnJvbSAnLi4vcGFydHMvVG91cidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcblxubGV0IGFsZ25hbWVzID0gWydOQlNWTScsICdCRVJUJ11cbmxldCBhbGdmaWxlcyA9IFtcbiAgJ25ic3ZtX2xpbWVfNTAwX3Byb3RvdHlwZV9wcmV0dHkuanNvbicsXG4gICdiZXJ0X2xpbWVfNTAwX3Byb3RvdHlwZV9wcmV0dHkuanNvbicsXG4gICduYnN2bV9saW1lX2dyb3VwZWRfcHJldHR5X3dvcmQuanNvbicsXG5dXG5sZXQgZGF0YV9rZXlzID0gW1xuICBbJ25ic3ZtX2RhdGEnLCAnbmJzdm1fbGltZV81MDBfZ3JvdXBlZF9wcmV0dHkuanNvbicsICdOQlNWTSddLFxuICBbJ2JlcnRfZGF0YScsICdiZXJ0X2xpbWVfNTAwX3Byb3RvdHlwZV9wcmV0dHkuanNvbicsICdCRVJUJ10sXG5dXG5cbmxldCBsaW5rUHJlZml4ID0gcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkxcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbmFseXplOiB0cnVlLFxuICAgICAgZGF0YV9zZWxlY3Q6IDEsXG4gICAgICBzaG93X2FjY3VyYWN5OiBmYWxzZSxcbiAgICAgIHNvcnQ6ICdyZXZpZXdzJyxcbiAgICAgIHJldmlld19zb3J0OiAnZGF0ZScsXG4gICAgICBuYnN2bV9kYXRhOiBudWxsLFxuICAgICAgY29tcGFyZTogZmFsc2UsXG4gICAgICBiZXJ0X2RhdGE6IG51bGwsXG4gICAgICBzaG93X2luZm86IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnNldEFuYWx5emUgPSB0aGlzLnNldEFuYWx5emUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0UmV2aWV3U29ydCA9IHRoaXMuc2V0UmV2aWV3U29ydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRBY2N1cmFjeSA9IHRoaXMuc2V0QWNjdXJhY3kuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U29ydCA9IHRoaXMuc2V0U29ydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRBbGdvID0gdGhpcy5zZXRBbGdvLmJpbmQodGhpcylcbiAgICB0aGlzLnNldENvbXBhcmUgPSB0aGlzLnNldENvbXBhcmUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2hvd0luZm8gPSB0aGlzLnNob3dJbmZvLmJpbmQodGhpcylcbiAgfVxuXG4gIGZldGNoRGF0YSgpIHtcbiAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS9uYW1lc19hbmRfZGF0ZXMuanNvbicpXG4gICAgICAudGhlbihuZCA9PiBuZC5qc29uKCkpXG4gICAgICAudGhlbihuZCA9PiB7XG4gICAgICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhLycgKyBhbGdmaWxlc1swXSlcbiAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgICAgbGV0IHJldmlld3MgPSByLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3X3IgPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICAgICAgICAgICAgICBuZXdfci5pbmRleCA9IGlcbiAgICAgICAgICAgICAgbmV3X3IuYXV0aG9yID0gbmRbaV0uYXV0aG9yXG4gICAgICAgICAgICAgIG5ld19yLmRhdGUgPSBuZFtpXS5kYXRlXG4gICAgICAgICAgICAgIG5ld19yLmNsYXNzID1cbiAgICAgICAgICAgICAgICByLmNsYXNzX3Byb2JhYmlsaXRpZXNbMF0gPiByLmNsYXNzX3Byb2JhYmlsaXRpZXNbMV1cbiAgICAgICAgICAgICAgICAgID8gJ25lZydcbiAgICAgICAgICAgICAgICAgIDogJ3BvcydcbiAgICAgICAgICAgICAgcmV0dXJuIG5ld19yXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGtleSA9IGRhdGFfa2V5c1swXVswXVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiByZXZpZXdzIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgZmV0Y2gobGlua1ByZWZpeCArICcvc3RhdGljL2RhdGEvJyArIGFsZ2ZpbGVzWzFdKVxuICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgICAgICBsZXQgcmV2aWV3cyA9IHIubWFwKChyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdfciA9IE9iamVjdC5hc3NpZ24oe30sIHIpXG4gICAgICAgICAgICAgIG5ld19yLmluZGV4ID0gaVxuICAgICAgICAgICAgICBuZXdfci5hdXRob3IgPSBuZFtpXS5hdXRob3JcbiAgICAgICAgICAgICAgbmV3X3IuZGF0ZSA9IG5kW2ldLmRhdGVcbiAgICAgICAgICAgICAgbmV3X3IuY2xhc3MgPVxuICAgICAgICAgICAgICAgIHIuY2xhc3NfcHJvYmFiaWxpdGllc1swXSA+IHIuY2xhc3NfcHJvYmFiaWxpdGllc1sxXVxuICAgICAgICAgICAgICAgICAgPyAnbmVnJ1xuICAgICAgICAgICAgICAgICAgOiAncG9zJ1xuICAgICAgICAgICAgICByZXR1cm4gbmV3X3JcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQga2V5ID0gZGF0YV9rZXlzWzFdWzBdXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2tleV06IHJldmlld3MgfSlcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hEYXRhKClcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuICAgIGxldCBpc19mcm9udCA9IHBhdGhuYW1lID09PSAnLydcbiAgICBpZiAoaXNfZnJvbnQpIHRoaXMuc2V0U3RhdGUoeyBzaG93X2luZm86IHRydWUgfSlcbiAgfVxuXG4gIHNldEFuYWx5emUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYW5hbHl6ZTogdmFsdWUgfSlcbiAgfVxuXG4gIHNldFJldmlld1NvcnQodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmV2aWV3X3NvcnQ6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRTb3J0KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnQ6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRBbGdvKGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFfc2VsZWN0OiBpbmRleCB9KVxuICB9XG5cbiAgc2V0QWNjdXJhY3kodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd19hY2N1cmFjeTogdmFsdWUgfSlcbiAgfVxuXG4gIHNldENvbXBhcmUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFyZTogdmFsdWUgfSlcbiAgfVxuXG4gIHNob3dJbmZvKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfaW5mbzogdmFsdWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBhbmFseXplLCBzb3J0LCByZXZpZXdfc29ydCwgc2hvd19hY2N1cmFjeSwgc2hvd19pbmZvIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGVbZGF0YV9rZXlzW3RoaXMuc3RhdGUuZGF0YV9zZWxlY3RdWzBdXVxuXG4gICAgaWYgKGFuYWx5emUgPT09IGZhbHNlKSBzaG93X2FjY3VyYWN5ID0gZmFsc2VcblxuICAgIGxldCB7IENvbXBvbmVudCB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBmb250X3NpemUgPSAxNlxuICAgIGxldCBsaW5lX2hlaWdodCA9IDEuNVxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG5cbiAgICBsZXQgaXNfZnJvbnQgPSBwYXRobmFtZSA9PT0gJy8nXG4gICAgbGV0IGlzX3RvcGljID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3RvcGljJylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUZXh0ZmxpeFwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIlRleHRmbGl4IHVzZXMgbW92aWUgcmV2aWV3cyB0byBzaG93IGhvdyBtYWNoaW5lIGxlYXJuaW5nIGNhbiB1bmxvY2sgdGhlIGRhdGEgZW1iZWRkZWQgaW4gdW5zdHJ1Y3R1cmVkIHRleHQuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiVGV4dGZsaXggdXNlcyBtb3ZpZSByZXZpZXdzIHRvIHNob3cgaG93IG1hY2hpbmUgbGVhcm5pbmcgY2FuIHVubG9jayB0aGUgZGF0YSBlbWJlZGRlZCBpbiB1bnN0cnVjdHVyZWQgdGV4dC5cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2V4cGVyaW1lbnRzLmZhc3Rmb3J3YXJkbGFicy5jb20vc3RhdGljL2ltYWdlcy90ZXh0ZmxpeC1zY3JlZW5zaG90LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3RleHRmbGl4LmZhc3Rmb3J3YXJkbGFicy5jb21cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJyxcbiAgICAgICAgICAgICAgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJyxcbiAgICAgICAgICAgICAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICAgICAgbW9ub3NwYWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEsXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlcixcbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby1vcGFjaXR5LWhvdmVyOmhvdmVyLFxuICAgICAgICAgIGJ1dHRvbi5uby1vcGFjaXR5LWhvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8tdW5kZXJsaW5lIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wYWNpdHktaW5uZXItaG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciAub3BhY2l0eS1pbm5lci1ob3ZlcixcbiAgICAgICAgICBidXR0b246aG92ZXIgLm9wYWNpdHktaW5uZXItaG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlci1ibG9jay1jb250YWluZXIgLmhvdmVyLWJsb2NrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrLWNvbnRhaW5lcjpob3ZlciAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICR7c2hvd19pbmZvID8gJ2hpZGRlbicgOiAnYXV0byd9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgaXNfZnJvbnQ9e2lzX2Zyb250fVxuICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgYW5hbHl6ZT17YW5hbHl6ZX1cbiAgICAgICAgICBzaG93X2FjY3VyYWN5PXtzaG93X2FjY3VyYWN5fVxuICAgICAgICAgIHNob3dJbmZvPXt0aGlzLnNob3dJbmZvfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1pbkhlaWdodDogYGNhbGMoMTAwdmggLSAke2dyZW0gKiA0ICsgMX1weClgLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLmNvbXBhcmUgPyA2MDAgOiAnYXV0bycsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhICYmIHRoaXMuc3RhdGUubmJzdm1fZGF0YSA/IChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICBmb250X3NpemU9e2ZvbnRfc2l6ZX1cbiAgICAgICAgICAgICAgICBsaW5lX2hlaWdodD17bGluZV9oZWlnaHR9XG4gICAgICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgICAgICBhbmFseXplPXthbmFseXplfVxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgaW5mbz17aW5mb31cbiAgICAgICAgICAgICAgICBzb3J0PXtzb3J0fVxuICAgICAgICAgICAgICAgIHJldmlld19zb3J0PXtyZXZpZXdfc29ydH1cbiAgICAgICAgICAgICAgICBzZXRBbmFseXplPXt0aGlzLnNldEFuYWx5emV9XG4gICAgICAgICAgICAgICAgc2V0U29ydD17dGhpcy5zZXRTb3J0fVxuICAgICAgICAgICAgICAgIHNldFJldmlld1NvcnQ9e3RoaXMuc2V0UmV2aWV3U29ydH1cbiAgICAgICAgICAgICAgICBzZXRBbGdvPXt0aGlzLnNldEFsZ299XG4gICAgICAgICAgICAgICAgYWxnbmFtZXM9e2FsZ25hbWVzfVxuICAgICAgICAgICAgICAgIGRhdGFfc2VsZWN0PXt0aGlzLnN0YXRlLmRhdGFfc2VsZWN0fVxuICAgICAgICAgICAgICAgIHNob3dfYWNjdXJhY3k9e3Nob3dfYWNjdXJhY3l9XG4gICAgICAgICAgICAgICAgc2V0QWNjdXJhY3k9e3RoaXMuc2V0QWNjdXJhY3l9XG4gICAgICAgICAgICAgICAgY29tcGFyZT17dGhpcy5zdGF0ZS5jb21wYXJlfVxuICAgICAgICAgICAgICAgIHNldENvbXBhcmU9e3RoaXMuc2V0Q29tcGFyZX1cbiAgICAgICAgICAgICAgICBuYnN2bV9kYXRhPXt0aGlzLnN0YXRlLm5ic3ZtX2RhdGF9XG4gICAgICAgICAgICAgICAgaGxfb3B0aW9ucz17e319XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwdmggLSAke2dyZW0gKiAyfXB4YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcGFkZGluZzogcChncmVtIC8gMiwgZ3JlbSAvIDQpLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyMjInLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDQpIH19PlxuICAgICAgICAgICAgVGV4dGZsaXggaXMgYSBuYXR1cmFsIGxhbmd1YWdlIHByb2Nlc3NpbmcgcHJvdG90eXBlIGJ5IENsb3VkZXJhIEZhc3RcbiAgICAgICAgICAgIEZvcndhcmQgTGFic1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rpc2FncmVlbWVudHNcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsIHBhZGRpbmc6IHAoMCwgZ3JlbSAvIDQpIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEaXNhZ3JlZW1lbnRzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzaG93X2luZm8gPyAoXG4gICAgICAgICAgPFRvdXJcbiAgICAgICAgICAgIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9XG4gICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgZm9udF9zaXplPXtmb250X3NpemV9XG4gICAgICAgICAgICBsaW5lX2hlaWdodD17bGluZV9oZWlnaHR9XG4gICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgYW5hbHl6ZT17YW5hbHl6ZX1cbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBpbmZvPXtpbmZvfVxuICAgICAgICAgICAgc29ydD17c29ydH1cbiAgICAgICAgICAgIHJldmlld19zb3J0PXtyZXZpZXdfc29ydH1cbiAgICAgICAgICAgIHNldEFuYWx5emU9e3RoaXMuc2V0QW5hbHl6ZX1cbiAgICAgICAgICAgIHNldFNvcnQ9e3RoaXMuc2V0U29ydH1cbiAgICAgICAgICAgIHNldFJldmlld1NvcnQ9e3RoaXMuc2V0UmV2aWV3U29ydH1cbiAgICAgICAgICAgIHNldEFsZ289e3RoaXMuc2V0QWxnb31cbiAgICAgICAgICAgIGFsZ25hbWVzPXthbGduYW1lc31cbiAgICAgICAgICAgIGRhdGFfc2VsZWN0PXt0aGlzLnN0YXRlLmRhdGFfc2VsZWN0fVxuICAgICAgICAgICAgc2hvd19hY2N1cmFjeT17c2hvd19hY2N1cmFjeX1cbiAgICAgICAgICAgIHNldEFjY3VyYWN5PXt0aGlzLnNldEFjY3VyYWN5fVxuICAgICAgICAgICAgY29tcGFyZT17dGhpcy5zdGF0ZS5jb21wYXJlfVxuICAgICAgICAgICAgc2V0Q29tcGFyZT17dGhpcy5zZXRDb21wYXJlfVxuICAgICAgICAgICAgbmJzdm1fZGF0YT17dGhpcy5zdGF0ZS5uYnN2bV9kYXRhfVxuICAgICAgICAgICAgc2hvd0luZm89e3RoaXMuc2hvd0luZm99XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "107552866",
        dynamic: [show_info ? 'hidden' : 'auto'],
        __self: this
      }, "body{overflow:".concat(show_info ? 'hidden' : 'auto', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwUDJCLEFBR21ELHNDQUN4QyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL25leHQtbW92aWVzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4uL2RhdGEvc2FtcGxlX21vdmllX2luZm8uanMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQtc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IHJlZCwgYmx1ZSwgQm9yZGVyIH0gZnJvbSAnLi4vcGFydHMvU3RhdGljJ1xuaW1wb3J0IHsgcCB9IGZyb20gJy4uL3BhcnRzL1V0aWxzJ1xuaW1wb3J0IEJhciBmcm9tICcuLi9wYXJ0cy9CYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcbmltcG9ydCBUb3VyIGZyb20gJy4uL3BhcnRzL1RvdXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5cbmxldCBhbGduYW1lcyA9IFsnTkJTVk0nLCAnQkVSVCddXG5sZXQgYWxnZmlsZXMgPSBbXG4gICduYnN2bV9saW1lXzUwMF9wcm90b3R5cGVfcHJldHR5Lmpzb24nLFxuICAnYmVydF9saW1lXzUwMF9wcm90b3R5cGVfcHJldHR5Lmpzb24nLFxuICAnbmJzdm1fbGltZV9ncm91cGVkX3ByZXR0eV93b3JkLmpzb24nLFxuXVxubGV0IGRhdGFfa2V5cyA9IFtcbiAgWyduYnN2bV9kYXRhJywgJ25ic3ZtX2xpbWVfNTAwX2dyb3VwZWRfcHJldHR5Lmpzb24nLCAnTkJTVk0nXSxcbiAgWydiZXJ0X2RhdGEnLCAnYmVydF9saW1lXzUwMF9wcm90b3R5cGVfcHJldHR5Lmpzb24nLCAnQkVSVCddLFxuXVxuXG5sZXQgbGlua1ByZWZpeCA9IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMXG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5hbHl6ZTogdHJ1ZSxcbiAgICAgIGRhdGFfc2VsZWN0OiAxLFxuICAgICAgc2hvd19hY2N1cmFjeTogZmFsc2UsXG4gICAgICBzb3J0OiAncmV2aWV3cycsXG4gICAgICByZXZpZXdfc29ydDogJ2RhdGUnLFxuICAgICAgbmJzdm1fZGF0YTogbnVsbCxcbiAgICAgIGNvbXBhcmU6IGZhbHNlLFxuICAgICAgYmVydF9kYXRhOiBudWxsLFxuICAgICAgc2hvd19pbmZvOiBmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5zZXRBbmFseXplID0gdGhpcy5zZXRBbmFseXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFJldmlld1NvcnQgPSB0aGlzLnNldFJldmlld1NvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWNjdXJhY3kgPSB0aGlzLnNldEFjY3VyYWN5LmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNvcnQgPSB0aGlzLnNldFNvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWxnbyA9IHRoaXMuc2V0QWxnby5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRDb21wYXJlID0gdGhpcy5zZXRDb21wYXJlLmJpbmQodGhpcylcbiAgICB0aGlzLnNob3dJbmZvID0gdGhpcy5zaG93SW5mby5iaW5kKHRoaXMpXG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgZmV0Y2gobGlua1ByZWZpeCArICcvc3RhdGljL2RhdGEvbmFtZXNfYW5kX2RhdGVzLmpzb24nKVxuICAgICAgLnRoZW4obmQgPT4gbmQuanNvbigpKVxuICAgICAgLnRoZW4obmQgPT4ge1xuICAgICAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbMF0pXG4gICAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgICAudGhlbihyID0+IHtcbiAgICAgICAgICAgIGxldCByZXZpZXdzID0gci5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld19yID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgICAgICAgICAgICAgbmV3X3IuaW5kZXggPSBpXG4gICAgICAgICAgICAgIG5ld19yLmF1dGhvciA9IG5kW2ldLmF1dGhvclxuICAgICAgICAgICAgICBuZXdfci5kYXRlID0gbmRbaV0uZGF0ZVxuICAgICAgICAgICAgICBuZXdfci5jbGFzcyA9XG4gICAgICAgICAgICAgICAgci5jbGFzc19wcm9iYWJpbGl0aWVzWzBdID4gci5jbGFzc19wcm9iYWJpbGl0aWVzWzFdXG4gICAgICAgICAgICAgICAgICA/ICduZWcnXG4gICAgICAgICAgICAgICAgICA6ICdwb3MnXG4gICAgICAgICAgICAgIHJldHVybiBuZXdfclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBrZXkgPSBkYXRhX2tleXNbMF1bMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5XTogcmV2aWV3cyB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhLycgKyBhbGdmaWxlc1sxXSlcbiAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgICAgbGV0IHJldmlld3MgPSByLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3X3IgPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICAgICAgICAgICAgICBuZXdfci5pbmRleCA9IGlcbiAgICAgICAgICAgICAgbmV3X3IuYXV0aG9yID0gbmRbaV0uYXV0aG9yXG4gICAgICAgICAgICAgIG5ld19yLmRhdGUgPSBuZFtpXS5kYXRlXG4gICAgICAgICAgICAgIG5ld19yLmNsYXNzID1cbiAgICAgICAgICAgICAgICByLmNsYXNzX3Byb2JhYmlsaXRpZXNbMF0gPiByLmNsYXNzX3Byb2JhYmlsaXRpZXNbMV1cbiAgICAgICAgICAgICAgICAgID8gJ25lZydcbiAgICAgICAgICAgICAgICAgIDogJ3BvcydcbiAgICAgICAgICAgICAgcmV0dXJuIG5ld19yXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGtleSA9IGRhdGFfa2V5c1sxXVswXVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiByZXZpZXdzIH0pXG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcbiAgICBsZXQgaXNfZnJvbnQgPSBwYXRobmFtZSA9PT0gJy8nXG4gICAgaWYgKGlzX2Zyb250KSB0aGlzLnNldFN0YXRlKHsgc2hvd19pbmZvOiB0cnVlIH0pXG4gIH1cblxuICBzZXRBbmFseXplKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFuYWx5emU6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRSZXZpZXdTb3J0KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJldmlld19zb3J0OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0U29ydCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0QWxnbyhpbmRleCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlbGVjdDogaW5kZXggfSlcbiAgfVxuXG4gIHNldEFjY3VyYWN5KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfYWNjdXJhY3k6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRDb21wYXJlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhcmU6IHZhbHVlIH0pXG4gIH1cblxuICBzaG93SW5mbyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2luZm86IHZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgYW5hbHl6ZSwgc29ydCwgcmV2aWV3X3NvcnQsIHNob3dfYWNjdXJhY3ksIHNob3dfaW5mbyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlW2RhdGFfa2V5c1t0aGlzLnN0YXRlLmRhdGFfc2VsZWN0XVswXV1cblxuICAgIGlmIChhbmFseXplID09PSBmYWxzZSkgc2hvd19hY2N1cmFjeSA9IGZhbHNlXG5cbiAgICBsZXQgeyBDb21wb25lbnQgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgZm9udF9zaXplID0gMTZcbiAgICBsZXQgbGluZV9oZWlnaHQgPSAxLjVcbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuXG4gICAgbGV0IGlzX2Zyb250ID0gcGF0aG5hbWUgPT09ICcvJ1xuICAgIGxldCBpc190b3BpYyA9IHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy90b3BpYycpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiVGV4dGZsaXhcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJUZXh0ZmxpeCB1c2VzIG1vdmllIHJldmlld3MgdG8gc2hvdyBob3cgbWFjaGluZSBsZWFybmluZyBjYW4gdW5sb2NrIHRoZSBkYXRhIGVtYmVkZGVkIGluIHVuc3RydWN0dXJlZCB0ZXh0LlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIlRleHRmbGl4IHVzZXMgbW92aWUgcmV2aWV3cyB0byBzaG93IGhvdyBtYWNoaW5lIGxlYXJuaW5nIGNhbiB1bmxvY2sgdGhlIGRhdGEgZW1iZWRkZWQgaW4gdW5zdHJ1Y3R1cmVkIHRleHQuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9leHBlcmltZW50cy5mYXN0Zm9yd2FyZGxhYnMuY29tL3N0YXRpYy9pbWFnZXMvdGV4dGZsaXgtc2NyZWVuc2hvdC5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly90ZXh0ZmxpeC5mYXN0Zm9yd2FyZGxhYnMuY29tXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXG4gICAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXG4gICAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIsXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8tb3BhY2l0eS1ob3Zlcjpob3ZlcixcbiAgICAgICAgICBidXR0b24ubm8tb3BhY2l0eS1ob3Zlcjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLXVuZGVybGluZSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGFjaXR5LWlubmVyLWhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIgLm9wYWNpdHktaW5uZXItaG92ZXIsXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIC5vcGFjaXR5LWlubmVyLWhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2stY29udGFpbmVyIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlci1ibG9jay1jb250YWluZXI6aG92ZXIgLmhvdmVyLWJsb2NrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAke3Nob3dfaW5mbyA/ICdoaWRkZW4nIDogJ2F1dG8nfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGlzX2Zyb250PXtpc19mcm9udH1cbiAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgc2hvd19hY2N1cmFjeT17c2hvd19hY2N1cmFjeX1cbiAgICAgICAgICBzaG93SW5mbz17dGhpcy5zaG93SW5mb31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHtncmVtICogNCArIDF9cHgpYCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5jb21wYXJlID8gNjAwIDogJ2F1dG8nLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YSAmJiB0aGlzLnN0YXRlLm5ic3ZtX2RhdGEgPyAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgZm9udF9zaXplPXtmb250X3NpemV9XG4gICAgICAgICAgICAgICAgbGluZV9oZWlnaHQ9e2xpbmVfaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgICAgYW5hbHl6ZT17YW5hbHl6ZX1cbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIGluZm89e2luZm99XG4gICAgICAgICAgICAgICAgc29ydD17c29ydH1cbiAgICAgICAgICAgICAgICByZXZpZXdfc29ydD17cmV2aWV3X3NvcnR9XG4gICAgICAgICAgICAgICAgc2V0QW5hbHl6ZT17dGhpcy5zZXRBbmFseXplfVxuICAgICAgICAgICAgICAgIHNldFNvcnQ9e3RoaXMuc2V0U29ydH1cbiAgICAgICAgICAgICAgICBzZXRSZXZpZXdTb3J0PXt0aGlzLnNldFJldmlld1NvcnR9XG4gICAgICAgICAgICAgICAgc2V0QWxnbz17dGhpcy5zZXRBbGdvfVxuICAgICAgICAgICAgICAgIGFsZ25hbWVzPXthbGduYW1lc31cbiAgICAgICAgICAgICAgICBkYXRhX3NlbGVjdD17dGhpcy5zdGF0ZS5kYXRhX3NlbGVjdH1cbiAgICAgICAgICAgICAgICBzaG93X2FjY3VyYWN5PXtzaG93X2FjY3VyYWN5fVxuICAgICAgICAgICAgICAgIHNldEFjY3VyYWN5PXt0aGlzLnNldEFjY3VyYWN5fVxuICAgICAgICAgICAgICAgIGNvbXBhcmU9e3RoaXMuc3RhdGUuY29tcGFyZX1cbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlPXt0aGlzLnNldENvbXBhcmV9XG4gICAgICAgICAgICAgICAgbmJzdm1fZGF0YT17dGhpcy5zdGF0ZS5uYnN2bV9kYXRhfVxuICAgICAgICAgICAgICAgIGhsX29wdGlvbnM9e3t9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHtncmVtICogMn1weGAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvYWRpbmcuLi5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IHAoZ3JlbSAvIDIsIGdyZW0gLyA0KSxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjIyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBwKDAsIGdyZW0gLyA0KSB9fT5cbiAgICAgICAgICAgIFRleHRmbGl4IGlzIGEgbmF0dXJhbCBsYW5ndWFnZSBwcm9jZXNzaW5nIHByb3RvdHlwZSBieSBDbG91ZGVyYSBGYXN0XG4gICAgICAgICAgICBGb3J3YXJkIExhYnNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kaXNhZ3JlZW1lbnRzXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLCBwYWRkaW5nOiBwKDAsIGdyZW0gLyA0KSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGlzYWdyZWVtZW50c1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd19pbmZvID8gKFxuICAgICAgICAgIDxUb3VyXG4gICAgICAgICAgICByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfVxuICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgIGZvbnRfc2l6ZT17Zm9udF9zaXplfVxuICAgICAgICAgICAgbGluZV9oZWlnaHQ9e2xpbmVfaGVpZ2h0fVxuICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgaW5mbz17aW5mb31cbiAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICByZXZpZXdfc29ydD17cmV2aWV3X3NvcnR9XG4gICAgICAgICAgICBzZXRBbmFseXplPXt0aGlzLnNldEFuYWx5emV9XG4gICAgICAgICAgICBzZXRTb3J0PXt0aGlzLnNldFNvcnR9XG4gICAgICAgICAgICBzZXRSZXZpZXdTb3J0PXt0aGlzLnNldFJldmlld1NvcnR9XG4gICAgICAgICAgICBzZXRBbGdvPXt0aGlzLnNldEFsZ299XG4gICAgICAgICAgICBhbGduYW1lcz17YWxnbmFtZXN9XG4gICAgICAgICAgICBkYXRhX3NlbGVjdD17dGhpcy5zdGF0ZS5kYXRhX3NlbGVjdH1cbiAgICAgICAgICAgIHNob3dfYWNjdXJhY3k9e3Nob3dfYWNjdXJhY3l9XG4gICAgICAgICAgICBzZXRBY2N1cmFjeT17dGhpcy5zZXRBY2N1cmFjeX1cbiAgICAgICAgICAgIGNvbXBhcmU9e3RoaXMuc3RhdGUuY29tcGFyZX1cbiAgICAgICAgICAgIHNldENvbXBhcmU9e3RoaXMuc2V0Q29tcGFyZX1cbiAgICAgICAgICAgIG5ic3ZtX2RhdGE9e3RoaXMuc3RhdGUubmJzdm1fZGF0YX1cbiAgICAgICAgICAgIHNob3dJbmZvPXt0aGlzLnNob3dJbmZvfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_parts_Header__WEBPACK_IMPORTED_MODULE_17__["default"], {
        is_front: is_front,
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        showInfo: this.showInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          minHeight: "calc(100vh - ".concat(grem * 4 + 1, "px)"),
          background: 'white',
          minWidth: this.state.compare ? 600 : 'auto'
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, data && this.state.nbsvm_data ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, {
        font_size: font_size,
        line_height: line_height,
        grem: grem,
        analyze: analyze,
        data: data,
        info: _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_12__["info"],
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
        hl_options: {},
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          height: "calc(100vh - ".concat(grem * 2, "px")
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "Loading...")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_15__["p"])(grem / 2, grem / 4),
          background: '#222',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between'
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_15__["p"])(0, grem / 4)
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "Textflix is a natural language processing prototype by Cloudera Fast Forward Labs"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_19___default.a, {
        href: "/disagreements",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        style: {
          textDecoration: 'underline',
          padding: Object(_parts_Utils__WEBPACK_IMPORTED_MODULE_15__["p"])(0, grem / 4)
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "Disagreements")))), show_info ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_parts_Tour__WEBPACK_IMPORTED_MODULE_18__["default"], (_React$createElement = {
        router: this.props.router,
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "analyze", analyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "info", _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_12__["info"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "sort", sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "review_sort", review_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAnalyze", this.setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setSort", this.setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setReviewSort", this.setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAlgo", this.setAlgo), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "algnames", algnames), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "data_select", this.state.data_select), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "show_accuracy", show_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAccuracy", this.setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "compare", this.state.compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setCompare", this.setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "nbsvm_data", this.state.nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "showInfo", this.showInfo), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 330
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)) : null);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.04594b712c18bbf0eb13.hot-update.js.map