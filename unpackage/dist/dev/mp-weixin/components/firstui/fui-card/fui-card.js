(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/firstui/fui-card/fui-card"],{

/***/ 348:
/*!**********************************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/components/firstui/fui-card/fui-card.vue ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fui-card.vue?vue&type=template&id=40e57dd9&scoped=true& */ 349);
/* harmony import */ var _fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fui-card.vue?vue&type=script&lang=js& */ 351);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _fui_card_vue_vue_type_style_index_0_id_40e57dd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fui-card.vue?vue&type=style&index=0&id=40e57dd9&scoped=true&lang=css& */ 353);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40e57dd9",
  null,
  false,
  _fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/firstui/fui-card/fui-card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 349:
/*!*****************************************************************************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/components/firstui/fui-card/fui-card.vue?vue&type=template&id=40e57dd9&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fui-card.vue?vue&type=template&id=40e57dd9&scoped=true& */ 350);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_template_id_40e57dd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 350:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/weixin-applet/campus-errand-service/campus-errand/components/firstui/fui-card/fui-card.vue?vue&type=template&id=40e57dd9&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 351:
/*!***********************************************************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/components/firstui/fui-card/fui-card.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fui-card.vue?vue&type=script&lang=js& */ 352);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 352:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/weixin-applet/campus-errand-service/campus-errand/components/firstui/fui-card/fui-card.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 = {
  name: "fui-card",
  emits: ['click'],
  props: {
    //card margin值：[上、右、下、左]
    margin: {
      type: Array,
      default: function _default() {
        return ['0', '32rpx'];
      }
    },
    //是否通栏，为true时margin-left，margin-right失效
    full: {
      type: Boolean,
      default: false
    },
    //card 背景色
    background: {
      type: String,
      default: '#fff'
    },
    //card 圆角，非nvue下showBorder为false时生效
    radius: {
      type: String,
      default: '16rpx'
    },
    //阴影：nvue下，android无效
    shadow: {
      type: String,
      default: '0 2rpx 4rpx 0 rgba(2, 4, 38, 0.05)'
    },
    //仅android且nvue下有效，box-shadow失效
    elevation: {
      type: String,
      default: '5px'
    },
    //是否显示card 边框，为true时box-shadow失效
    showBorder: {
      type: Boolean,
      default: false
    },
    //边框颜色，仅nvue下生效
    borderColor: {
      type: String,
      default: '#EEEEEE'
    },
    headerBackground: {
      type: String,
      default: '#fff'
    },
    //是否需要header底部线条
    headerLine: {
      type: Boolean,
      default: true
    },
    //是否需要内容与footer之间线条
    footerLine: {
      type: Boolean,
      default: false
    },
    //header 底部线条颜色，仅nvue有效，非nvue改变颜色使用css变量
    lineColor: {
      type: String,
      default: '#EEEEEE'
    },
    //header padding值：[上、右、下、左]
    padding: {
      type: Array,
      default: function _default() {
        return ['20rpx', '20rpx'];
      }
    },
    //头像，图标图片地址
    src: {
      type: String,
      default: ''
    },
    //图片宽度，单位rpx
    width: {
      type: [Number, String],
      default: 64
    },
    //图片高度，单位rpx
    height: {
      type: [Number, String],
      default: 64
    },
    //图片圆角
    imageRadius: {
      type: String,
      default: '8rpx'
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 30
    },
    color: {
      type: String,
      default: '#7F7F7F'
    },
    tag: {
      type: String,
      default: ''
    },
    tagSize: {
      type: [Number, String],
      default: 24
    },
    tagColor: {
      type: String,
      default: '#b2b2b2'
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    var isNvue = false;
    return {
      isNvue: isNvue
    };
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('click', {
        index: this.index
      });
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ 353:
/*!*******************************************************************************************************************************************************************!*\
  !*** D:/code/weixin-applet/campus-errand-service/campus-errand/components/firstui/fui-card/fui-card.vue?vue&type=style&index=0&id=40e57dd9&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_style_index_0_id_40e57dd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../devTool/HBuilderX/HBuilderX-3.99/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fui-card.vue?vue&type=style&index=0&id=40e57dd9&scoped=true&lang=css& */ 354);
/* harmony import */ var _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_style_index_0_id_40e57dd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_style_index_0_id_40e57dd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_style_index_0_id_40e57dd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_style_index_0_id_40e57dd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_devTool_HBuilderX_HBuilderX_3_99_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fui_card_vue_vue_type_style_index_0_id_40e57dd9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 354:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/weixin-applet/campus-errand-service/campus-errand/components/firstui/fui-card/fui-card.vue?vue&type=style&index=0&id=40e57dd9&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/firstui/fui-card/fui-card.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/firstui/fui-card/fui-card-create-component',
    {
        'components/firstui/fui-card/fui-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(348))
        })
    },
    [['components/firstui/fui-card/fui-card-create-component']]
]);
