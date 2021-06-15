webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/main.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/sass/main.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: \"Abril Fatface\";\n  src: url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap\"); }\n\ninput {\n  margin: 1rem;\n  border: 0.2px solid #d9cac5;\n  padding: 0.4rem;\n  border-radius: 5px; }\n  input:focus {\n    border: 0.2px solid #d9cac5; }\n\nbutton {\n  border: 0.2px solid #d9cac5;\n  padding: 0.4rem;\n  border-radius: 5px; }\n  button:hover {\n    cursor: pointer;\n    background-color: #d9cac5; }\n\nform {\n  border-radius: 10px;\n  width: 50vw;\n  background: #8c7e7b;\n  margin: 2rem;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  color: #261e1c;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.main {\n  background-color: #d9cac5;\n  border-radius: 15px; }\n\nh1 {\n  font-family: \"Abril Fatface\", serif;\n  letter-spacing: 0.1rem;\n  font-weight: 500;\n  margin-top: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 4rem;\n  color: #8c7e7b;\n  text-shadow: #d9cac5 0.2rem 0.2rem 0.2rem; }\n\nh2 {\n  font-size: 2rem;\n  text-align: center; }\n\nh3 {\n  font-size: 1.5rem; }\n\ndiv {\n  font-size: 10rem; }\n\n.country {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50vw;\n  border-radius: 10px;\n  margin: 2rem;\n  flex-direction: column;\n  background-color: #f2f2f2; }\n  .country .flag {\n    width: 25vw; }\n", "",{"version":3,"sources":["webpack://src/sass/_abstracts.scss","webpack://src/sass/_components.scss","webpack://src/sass/_layouts.scss"],"names":[],"mappings":"AAEA;EACE,4BAA4B;EAC5B,+EAA+E,EAAA;;ACHjF;EACE,YAAY;EACZ,2BDcU;ECbV,eAAe;EACf,kBAAkB,EAAA;EAJpB;IAMI,2BDUQ,EAAA;;ACNZ;EACE,2BDKU;ECJV,eAAe;EACf,kBAAkB,EAAA;EAHpB;IAKI,eAAe;IACf,yBDAQ,EAAA;;ACKZ;EACE,mBAAmB;EACnB,WAAW;EACX,mBDNU;ECOV,YAAY;EACZ,aAAa;EDHb,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AEzBrB;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,cFYU;EAIV,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AEfrB;EACE,yBFKU;EEJV,mBAAmB,EAAA;;AAErB;EACE,mCAAmC;EACnC,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EFKhB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EELnB,eAAe;EACf,cFHU;EEIV,yCAAqC,EAAA;;AAEvC;EACE,eAAe;EACf,kBAAkB,EAAA;;AAEpB;EACE,iBAAiB,EAAA;;AAEnB;EACE,gBAAgB,EAAA;;AAKlB;EFdE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EEcnB,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,yBF5BU,EAAA;EEsBZ;IAQI,WAAW,EAAA","sourcesContent":["// >>> fonts <<<\n\n@font-face {\n  font-family: \"Abril Fatface\";\n  src: url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap\");\n}\n@import url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap\");\n\n// >>> variables <<<\n// $nameYourVariable: giveItAValue;\n// use variable = $nameOfVariable\n\n// colors\n// https://color.adobe.com/search?q=pastelle\n\n// Anthrazit Color-Scheme:\n$a1: #f2f2f2;\n$a2: #d9cac5;\n$a3: #594d4a;\n$a4: #8c7e7b;\n$a5: #261e1c;\n\n// >>> mixins <<<\n@mixin flex-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n// @mixin name {\n// }\n","// >>> inputs <<<\ninput {\n  margin: 1rem;\n  border: 0.2px solid $a2;\n  padding: 0.4rem;\n  border-radius: 5px;\n  &:focus {\n    border: 0.2px solid $a2;\n  }\n} // >>> buttons <<<\n\nbutton {\n  border: 0.2px solid $a2;\n  padding: 0.4rem;\n  border-radius: 5px;\n  &:hover {\n    cursor: pointer;\n    background-color: $a2;\n  }\n}\n\n// >>> forms <<<\nform {\n  border-radius: 10px;\n  width: 50vw;\n  background: $a4;\n  margin: 2rem;\n  padding: 1rem;\n  @include flex-box;\n}\n\n// >>> lists <<<\n","// >>> BasicSetup <<<\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  color: $a5;\n  @include flex-box;\n}\n.main {\n  background-color: $a2;\n  border-radius: 15px;\n}\nh1 {\n  font-family: \"Abril Fatface\", serif;\n  letter-spacing: 0.1rem;\n  font-weight: 500;\n  margin-top: 5rem;\n  @include flex-box;\n  font-size: 4rem;\n  color: $a4;\n  text-shadow: $a2 0.2rem 0.2rem 0.2rem;\n}\nh2 {\n  font-size: 2rem;\n  text-align: center;\n}\nh3 {\n  font-size: 1.5rem;\n}\ndiv {\n  font-size: 10rem;\n}\n// >>> Header <<<\n\n// >>> MainPart <<<\n.country {\n  @include flex-box;\n  width: 50vw;\n  border-radius: 10px;\n  margin: 2rem;\n  flex-direction: column;\n  background-color: $a1;\n  .flag {\n    width: 25vw;\n  }\n}\n// >>> Footer <<<\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.baa6ef5416639d13688c.hot-update.js.map