(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/address/address"],{

/***/ 220:
/*!**************************************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/main.js?{"page":"pages%2Faddress%2Faddress"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _address = _interopRequireDefault(__webpack_require__(/*! ./pages/address/address.vue */ 221));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_address.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 221:
/*!*******************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/pages/address/address.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.vue?vue&type=template&id=db675620& */ 222);
/* harmony import */ var _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.vue?vue&type=script&lang=js& */ 224);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.vue?vue&type=style&index=0&lang=css& */ 226);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__["render"],
  _address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/address/address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 222:
/*!**************************************************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/pages/address/address.vue?vue&type=template&id=db675620& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./address.vue?vue&type=template&id=db675620& */ 223);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_db675620___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 223:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/weixin-applet/campus-errand-service/campus-errand/pages/address/address.vue?vue&type=template&id=db675620& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 224:
/*!********************************************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/pages/address/address.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./address.vue?vue&type=script&lang=js& */ 225);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 225:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/weixin-applet/campus-errand-service/campus-errand/pages/address/address.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var fuiButton = function fuiButton() {
  __webpack_require__.e(/*! require.ensure | components/firstui/fui-button/fui-button */ "components/firstui/fui-button/fui-button").then((function () {
    return resolve(__webpack_require__(/*! @/components/firstui/fui-button/fui-button.vue */ 336));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var fuiEmpty = function fuiEmpty() {
  __webpack_require__.e(/*! require.ensure | components/firstui/fui-empty/fui-empty */ "components/firstui/fui-empty/fui-empty").then((function () {
    return resolve(__webpack_require__(/*! @/components/firstui/fui-empty/fui-empty.vue */ 343));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var fuiCard = function fuiCard() {
  __webpack_require__.e(/*! require.ensure | components/firstui/fui-card/fui-card */ "components/firstui/fui-card/fui-card").then((function () {
    return resolve(__webpack_require__(/*! @/components/firstui/fui-card/fui-card.vue */ 350));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    fuiButton: fuiButton,
    fuiEmpty: fuiEmpty,
    fuiCard: fuiCard
  },
  created: function created() {
    this.$bus.$on('add-address', this.addAddress);
  },
  mounted: function mounted() {
    this.isEmpty = this.items.length === 0;
  },
  data: function data() {
    return {
      isEmpty: true,
      items: [{
        id: '1',
        building: '楼栋x',
        house_number: 'xxx',
        name: '姓名',
        phone_number: '123456'
      }]
    };
  },
  methods: {
    jumpAddAdress: function jumpAddAdress() {
      console.log("跳转新增地址页面");
      uni.navigateTo({
        url: '/pages/add-address/add-address' // 跳转页面
      });
    },
    addAddress: function addAddress(newAddress) {
      console.log("添加地址");
      // 示例
      // const newAddress = {id: this.items.length+1, building: '楼栋x', room: 'xxx', name: '姓名', phone: "123456"};
      this.items.push(_objectSpread(_objectSpread({}, newAddress), {}, {
        id: this.items.length + 1
      }));
      this.isEmpty = this.items.length === 0;
    },
    removeAddress: function removeAddress(id) {
      console.log("删除地址");
      this.items = this.items.filter(function (item) {
        return item.id != id;
      });
      this.isEmpty = this.items.length === 0;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 226:
/*!****************************************************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/pages/address/address.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./address.vue?vue&type=style&index=0&lang=css& */ 227);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 227:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/weixin-applet/campus-errand-service/campus-errand/pages/address/address.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[220,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/address/address.js.map