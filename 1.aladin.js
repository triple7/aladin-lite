(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/core/pkg/index.js":
/*!*******************************!*\
  !*** ./src/core/pkg/index.js ***!
  \*******************************/
/*! exports provided: GALCooSys, ICRSJ2000CooSys, CooSystem, WebClient, __wbg_performance_eee010e5e49f08df, __wbg_now_5ae3d18d57dd226f, __wbindgen_object_drop_ref, __wbg_canvas_d93166ac8641cf07, __wbg_instanceof_HtmlCanvasElement_bd2459c62d076bcd, __wbg_setwidth_80b60efe20240a3e, __wbg_setheight_5c308278bb4139ed, __wbg_viewport_7e9633b09867dbf5, __wbg_scissor_19ca00c5404b43a5, __wbindgen_string_new, __wbindgen_memory, __wbg_buffer_bc64154385c04ac4, __wbg_new_48c5d6d65ec9a035, __wbg_subarray_c9acd3f2f4dd697d, __wbg_measureText_31eef5aa3112f9f9, __wbg_width_d6f9d0b10ab84cad, __wbg_bindVertexArray_1c571a32554cb96d, __wbg_bindBuffer_b45faf4508424c2a, __wbg_bufferSubData_3675131e10379877, __wbg_bufferData_813f25df0c990663, __wbg_activeTexture_ce973e4a1ff281c1, __wbg_bindTexture_13c5db7bd22b86cd, __wbg_texSubImage2D_8402d163bc7ded1c, __wbg_blendFuncSeparate_0cede3ddb2462689, __wbg_enable_93767887882fa986, __wbg_cullFace_5c5866af3997fe0b, __wbg_innerWidth_c4fa0fec0fd477b8, __wbindgen_number_get, __wbg_innerHeight_6344b1c89c013158, __wbg_new_72aa46ede1a52e07, __wbg_setcrossOrigin_c71214d15b663eaf, __wbg_new_96f2b9d79dce4775, __wbg_setresponseType_9f98b18162a05cdd, __wbg_createTexture_2e23958a641af64b, __wbindgen_object_clone_ref, __wbg_setonload_2288267f14fd8110, __wbg_setonerror_138979e04b86210f, __wbg_setsrc_43904731d885a248, __wbg_texParameteri_c36a2e80bbd50560, __wbg_texImage2D_d536e4106c099fee, __wbg_createFramebuffer_1c214bda6f062062, __wbg_bindFramebuffer_8e18497643e2e97b, __wbg_framebufferTexture2D_0bb40f642fbd0309, __wbg_createVertexArray_51acb43e08d168a2, __wbg_useProgram_e1334a2752ff3d80, __wbg_createBuffer_34aca55d34936cb7, __wbg_lineWidth_80344f85b6bcac56, __wbg_vertexAttribPointer_8781b6e5c846817e, __wbg_enableVertexAttribArray_bb2bba2941e17b92, __wbg_document_2b44f2a86e03665a, __wbg_getElementsByClassName_8725bf2c2c69b1c0, __wbg_getwithindex_35ac89a9c2662f07, __wbg_setAttribute_b638fce95071fff6, __wbg_getContext_7f0328be9fe8c1ec, __wbg_instanceof_CanvasRenderingContext2d_302c6fce2ddc6344, __wbg_scale_59eef7e0dbbdd0f4, __wbg_texImage2D_c668c00fd97e1eb3, __wbg_log_a39f164b49616cb0, __wbg_newwithbyteoffsetandlength_14c58fd914c5e030, __wbg_new_9aae23408b655f27, __wbg_newwithbyteoffsetandlength_3c8748473807c7cf, __wbg_new_22a33711cf65b661, __wbg_newwithbyteoffsetandlength_4ac754dd0e4a9d36, __wbg_new_82fd9bbed79f6672, __wbindgen_json_serialize, __wbg_vertexAttribDivisor_08529767d8d2fa82, __wbg_deleteBuffer_f10f1dd760bb72fb, __wbg_createProgram_7f512be46ef2090e, __wbg_attachShader_435c833d3ca8f564, __wbg_linkProgram_8bc3021aa40f0948, __wbg_getProgramParameter_4e13e6daab89623e, __wbindgen_boolean_get, __wbg_getProgramInfoLog_41d3ebfde4246fd9, __wbg_getActiveUniform_d20d74f99fd35e8f, __wbg_name_ad1ecd078b0a7b97, __wbg_getUniformLocation_39124d965f679564, __wbg_createShader_c08686de7661eff0, __wbg_shaderSource_2dcc20f3552ae568, __wbg_compileShader_d9cf97450ba46b86, __wbg_getShaderParameter_05fa9af4df7ed8dd, __wbg_getShaderInfoLog_c9bbabb140e03d0f, __wbg_clearColor_816770046d61cafd, __wbg_clear_e3b5c108ec1393b3, __wbg_width_e2288c6b7927b379, __wbg_height_3478f03a55caa6c1, __wbg_uniform1f_f62e4675154cafec, __wbg_uniform2f_607e30643c51a99d, __wbg_drawElementsInstanced_567e09ca4d0b8f70, __wbg_drawElements_c9d953f7687b4f81, __wbg_uniform4f_8c65d1107a8a0b90, __wbg_drawArrays_c98946b902ad6be5, __wbg_uniform1i_5e235ac3cc8f8e9f, __wbg_clearRect_4cdcaefcbab3c61f, __wbg_setfont_b0bab8a26200ff75, __wbg_settextAlign_0aa8708042035018, __wbg_setfillStyle_73b5e2cc68bb713a, __wbg_save_f5781834e52f56f3, __wbg_translate_e974420ae15bb6b6, __wbg_rotate_70ce797918748e67, __wbg_fillText_499ade4210e5dc12, __wbg_restore_5ba2aaf5922b0f0a, __wbg_disable_5a475e28b2154fa9, __wbg_parse_58b7cdbfa2b3e55a, __wbg_getContext_11f724663952b3c1, __wbg_instanceof_WebGl2RenderingContext_f259b779e8a37d5d, __wbindgen_cb_drop, __wbindgen_json_parse, __wbg_uniform1fv_98bfb60e9fd15e8f, __wbg_uniformMatrix4fv_d5ec3891317260a2, __wbg_uniform1iv_f8d808c49b1bca39, __wbg_uniform3f_6255ac5ba78d0304, __wbg_isArray_cf6ef7e2eda8eafb, __wbg_length_4c7aec6f35774e3d, __wbg_get_a8b9619536c590d4, __wbg_response_31eced717be229e9, __wbg_length_e9f6f145de2fede5, __wbg_set_b29de3f25280c6ec, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbg_deleteVertexArray_97d2121cc69fc033, __wbg_disableVertexAttribArray_87802f3a7704cd13, __wbg_deleteTexture_25d82ac6b74470b3, __wbg_self_77eca7b42660e1bb, __wbg_window_51dac01569f1ba70, __wbg_globalThis_34bac2d08ebb9b58, __wbg_global_1c436164a66c9c22, __wbindgen_is_undefined, __wbg_newnoargs_ab5e899738c0eff4, __wbg_call_ab183a630df3a257, __wbg_newwithbyteoffsetandlength_00c580aa4e676e36, __wbg_newwithbyteoffsetandlength_193d0d8755287921, __wbindgen_debug_string, __wbg_blendFunc_434c8a948bfa69fe, __wbg_open_5ea732c83366517a, __wbg_setonload_8bafcddcb9002f04, __wbg_setonerror_e9038c5beb86d4a7, __wbg_send_47081c1d5143d31b, __wbg_texSubImage2D_75f7111706b6361f, __wbindgen_throw, __wbindgen_rethrow, __wbg_instanceof_Window_fbe0320f34c4cd31, __wbindgen_closure_wrapper322, __wbindgen_closure_wrapper326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./src/core/pkg/index_bg.wasm");
/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ "./src/core/pkg/index_bg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GALCooSys", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["GALCooSys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICRSJ2000CooSys", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["ICRSJ2000CooSys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CooSystem", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["CooSystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebClient", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["WebClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_performance_eee010e5e49f08df", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_performance_eee010e5e49f08df"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_now_5ae3d18d57dd226f", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_now_5ae3d18d57dd226f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_drop_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_canvas_d93166ac8641cf07", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_canvas_d93166ac8641cf07"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_HtmlCanvasElement_bd2459c62d076bcd", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_HtmlCanvasElement_bd2459c62d076bcd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setwidth_80b60efe20240a3e", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setwidth_80b60efe20240a3e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setheight_5c308278bb4139ed", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setheight_5c308278bb4139ed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_viewport_7e9633b09867dbf5", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_viewport_7e9633b09867dbf5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_scissor_19ca00c5404b43a5", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_scissor_19ca00c5404b43a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_string_new"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_memory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_bc64154385c04ac4", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_buffer_bc64154385c04ac4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_48c5d6d65ec9a035", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_48c5d6d65ec9a035"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_subarray_c9acd3f2f4dd697d", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_subarray_c9acd3f2f4dd697d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_measureText_31eef5aa3112f9f9", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_measureText_31eef5aa3112f9f9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_d6f9d0b10ab84cad", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_width_d6f9d0b10ab84cad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindVertexArray_1c571a32554cb96d", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindVertexArray_1c571a32554cb96d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBuffer_b45faf4508424c2a", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindBuffer_b45faf4508424c2a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferSubData_3675131e10379877", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bufferSubData_3675131e10379877"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_813f25df0c990663", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bufferData_813f25df0c990663"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_activeTexture_ce973e4a1ff281c1", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_activeTexture_ce973e4a1ff281c1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindTexture_13c5db7bd22b86cd", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindTexture_13c5db7bd22b86cd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_8402d163bc7ded1c", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texSubImage2D_8402d163bc7ded1c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFuncSeparate_0cede3ddb2462689", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendFuncSeparate_0cede3ddb2462689"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_enable_93767887882fa986", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_enable_93767887882fa986"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_cullFace_5c5866af3997fe0b", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_cullFace_5c5866af3997fe0b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerWidth_c4fa0fec0fd477b8", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_innerWidth_c4fa0fec0fd477b8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_get", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_number_get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerHeight_6344b1c89c013158", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_innerHeight_6344b1c89c013158"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_72aa46ede1a52e07", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_72aa46ede1a52e07"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setcrossOrigin_c71214d15b663eaf", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setcrossOrigin_c71214d15b663eaf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_96f2b9d79dce4775", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_96f2b9d79dce4775"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setresponseType_9f98b18162a05cdd", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setresponseType_9f98b18162a05cdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createTexture_2e23958a641af64b", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createTexture_2e23958a641af64b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_clone_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setonload_2288267f14fd8110", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setonload_2288267f14fd8110"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setonerror_138979e04b86210f", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setonerror_138979e04b86210f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setsrc_43904731d885a248", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setsrc_43904731d885a248"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texParameteri_c36a2e80bbd50560", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texParameteri_c36a2e80bbd50560"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texImage2D_d536e4106c099fee", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texImage2D_d536e4106c099fee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createFramebuffer_1c214bda6f062062", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createFramebuffer_1c214bda6f062062"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindFramebuffer_8e18497643e2e97b", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_bindFramebuffer_8e18497643e2e97b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferTexture2D_0bb40f642fbd0309", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_framebufferTexture2D_0bb40f642fbd0309"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createVertexArray_51acb43e08d168a2", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createVertexArray_51acb43e08d168a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_useProgram_e1334a2752ff3d80", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_useProgram_e1334a2752ff3d80"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_34aca55d34936cb7", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createBuffer_34aca55d34936cb7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_lineWidth_80344f85b6bcac56", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_lineWidth_80344f85b6bcac56"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribPointer_8781b6e5c846817e", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_vertexAttribPointer_8781b6e5c846817e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_enableVertexAttribArray_bb2bba2941e17b92", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_enableVertexAttribArray_bb2bba2941e17b92"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_2b44f2a86e03665a", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_document_2b44f2a86e03665a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getElementsByClassName_8725bf2c2c69b1c0", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getElementsByClassName_8725bf2c2c69b1c0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getwithindex_35ac89a9c2662f07", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getwithindex_35ac89a9c2662f07"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setAttribute_b638fce95071fff6", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setAttribute_b638fce95071fff6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_7f0328be9fe8c1ec", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getContext_7f0328be9fe8c1ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_CanvasRenderingContext2d_302c6fce2ddc6344", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_CanvasRenderingContext2d_302c6fce2ddc6344"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_scale_59eef7e0dbbdd0f4", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_scale_59eef7e0dbbdd0f4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texImage2D_c668c00fd97e1eb3", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texImage2D_c668c00fd97e1eb3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_a39f164b49616cb0", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_log_a39f164b49616cb0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_14c58fd914c5e030", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_14c58fd914c5e030"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_9aae23408b655f27", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_9aae23408b655f27"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_3c8748473807c7cf", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_3c8748473807c7cf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_22a33711cf65b661", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_22a33711cf65b661"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_4ac754dd0e4a9d36", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_4ac754dd0e4a9d36"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_82fd9bbed79f6672", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_82fd9bbed79f6672"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_json_serialize", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_json_serialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribDivisor_08529767d8d2fa82", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_vertexAttribDivisor_08529767d8d2fa82"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteBuffer_f10f1dd760bb72fb", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteBuffer_f10f1dd760bb72fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createProgram_7f512be46ef2090e", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createProgram_7f512be46ef2090e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_attachShader_435c833d3ca8f564", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_attachShader_435c833d3ca8f564"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_linkProgram_8bc3021aa40f0948", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_linkProgram_8bc3021aa40f0948"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramParameter_4e13e6daab89623e", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getProgramParameter_4e13e6daab89623e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_boolean_get", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_boolean_get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramInfoLog_41d3ebfde4246fd9", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getProgramInfoLog_41d3ebfde4246fd9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getActiveUniform_d20d74f99fd35e8f", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getActiveUniform_d20d74f99fd35e8f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_name_ad1ecd078b0a7b97", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_name_ad1ecd078b0a7b97"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformLocation_39124d965f679564", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getUniformLocation_39124d965f679564"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShader_c08686de7661eff0", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createShader_c08686de7661eff0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_shaderSource_2dcc20f3552ae568", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_shaderSource_2dcc20f3552ae568"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compileShader_d9cf97450ba46b86", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_compileShader_d9cf97450ba46b86"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderParameter_05fa9af4df7ed8dd", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getShaderParameter_05fa9af4df7ed8dd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderInfoLog_c9bbabb140e03d0f", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getShaderInfoLog_c9bbabb140e03d0f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearColor_816770046d61cafd", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clearColor_816770046d61cafd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clear_e3b5c108ec1393b3", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clear_e3b5c108ec1393b3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_e2288c6b7927b379", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_width_e2288c6b7927b379"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_height_3478f03a55caa6c1", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_height_3478f03a55caa6c1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1f_f62e4675154cafec", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform1f_f62e4675154cafec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2f_607e30643c51a99d", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform2f_607e30643c51a99d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElementsInstanced_567e09ca4d0b8f70", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawElementsInstanced_567e09ca4d0b8f70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElements_c9d953f7687b4f81", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawElements_c9d953f7687b4f81"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4f_8c65d1107a8a0b90", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform4f_8c65d1107a8a0b90"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArrays_c98946b902ad6be5", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_drawArrays_c98946b902ad6be5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1i_5e235ac3cc8f8e9f", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform1i_5e235ac3cc8f8e9f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearRect_4cdcaefcbab3c61f", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clearRect_4cdcaefcbab3c61f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setfont_b0bab8a26200ff75", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setfont_b0bab8a26200ff75"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_settextAlign_0aa8708042035018", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_settextAlign_0aa8708042035018"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setfillStyle_73b5e2cc68bb713a", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setfillStyle_73b5e2cc68bb713a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_save_f5781834e52f56f3", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_save_f5781834e52f56f3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_translate_e974420ae15bb6b6", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_translate_e974420ae15bb6b6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_rotate_70ce797918748e67", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_rotate_70ce797918748e67"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_fillText_499ade4210e5dc12", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_fillText_499ade4210e5dc12"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_restore_5ba2aaf5922b0f0a", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_restore_5ba2aaf5922b0f0a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_disable_5a475e28b2154fa9", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_disable_5a475e28b2154fa9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_parse_58b7cdbfa2b3e55a", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_parse_58b7cdbfa2b3e55a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_11f724663952b3c1", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getContext_11f724663952b3c1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_WebGl2RenderingContext_f259b779e8a37d5d", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_WebGl2RenderingContext_f259b779e8a37d5d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_cb_drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_json_parse", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_json_parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1fv_98bfb60e9fd15e8f", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform1fv_98bfb60e9fd15e8f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix4fv_d5ec3891317260a2", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniformMatrix4fv_d5ec3891317260a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1iv_f8d808c49b1bca39", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform1iv_f8d808c49b1bca39"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3f_6255ac5ba78d0304", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_uniform3f_6255ac5ba78d0304"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_isArray_cf6ef7e2eda8eafb", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_isArray_cf6ef7e2eda8eafb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_4c7aec6f35774e3d", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_length_4c7aec6f35774e3d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_a8b9619536c590d4", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_get_a8b9619536c590d4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_response_31eced717be229e9", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_response_31eced717be229e9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_e9f6f145de2fede5", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_length_e9f6f145de2fede5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_b29de3f25280c6ec", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_b29de3f25280c6ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_59cb74e423758ede"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stack_558ba5917b466edd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_error_4bb6c2a97407129a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteVertexArray_97d2121cc69fc033", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteVertexArray_97d2121cc69fc033"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_disableVertexAttribArray_87802f3a7704cd13", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_disableVertexAttribArray_87802f3a7704cd13"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteTexture_25d82ac6b74470b3", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deleteTexture_25d82ac6b74470b3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_77eca7b42660e1bb", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_self_77eca7b42660e1bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_51dac01569f1ba70", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_window_51dac01569f1ba70"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_34bac2d08ebb9b58", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_globalThis_34bac2d08ebb9b58"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_1c436164a66c9c22", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_global_1c436164a66c9c22"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_is_undefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_ab5e899738c0eff4", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newnoargs_ab5e899738c0eff4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_ab183a630df3a257", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_call_ab183a630df3a257"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_00c580aa4e676e36", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_00c580aa4e676e36"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_193d0d8755287921", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_193d0d8755287921"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_debug_string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFunc_434c8a948bfa69fe", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_blendFunc_434c8a948bfa69fe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_open_5ea732c83366517a", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_open_5ea732c83366517a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setonload_8bafcddcb9002f04", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setonload_8bafcddcb9002f04"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setonerror_e9038c5beb86d4a7", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setonerror_e9038c5beb86d4a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_send_47081c1d5143d31b", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_send_47081c1d5143d31b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_75f7111706b6361f", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_texSubImage2D_75f7111706b6361f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_throw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_rethrow", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_rethrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_fbe0320f34c4cd31", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_Window_fbe0320f34c4cd31"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper322", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper322"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper326", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper326"]; });




/***/ }),

/***/ "./src/core/pkg/index_bg.js":
/*!**********************************!*\
  !*** ./src/core/pkg/index_bg.js ***!
  \**********************************/
/*! exports provided: GALCooSys, ICRSJ2000CooSys, CooSystem, WebClient, __wbg_performance_eee010e5e49f08df, __wbg_now_5ae3d18d57dd226f, __wbindgen_object_drop_ref, __wbg_canvas_d93166ac8641cf07, __wbg_instanceof_HtmlCanvasElement_bd2459c62d076bcd, __wbg_setwidth_80b60efe20240a3e, __wbg_setheight_5c308278bb4139ed, __wbg_viewport_7e9633b09867dbf5, __wbg_scissor_19ca00c5404b43a5, __wbindgen_string_new, __wbindgen_memory, __wbg_buffer_bc64154385c04ac4, __wbg_new_48c5d6d65ec9a035, __wbg_subarray_c9acd3f2f4dd697d, __wbg_measureText_31eef5aa3112f9f9, __wbg_width_d6f9d0b10ab84cad, __wbg_bindVertexArray_1c571a32554cb96d, __wbg_bindBuffer_b45faf4508424c2a, __wbg_bufferSubData_3675131e10379877, __wbg_bufferData_813f25df0c990663, __wbg_activeTexture_ce973e4a1ff281c1, __wbg_bindTexture_13c5db7bd22b86cd, __wbg_texSubImage2D_8402d163bc7ded1c, __wbg_blendFuncSeparate_0cede3ddb2462689, __wbg_enable_93767887882fa986, __wbg_cullFace_5c5866af3997fe0b, __wbg_innerWidth_c4fa0fec0fd477b8, __wbindgen_number_get, __wbg_innerHeight_6344b1c89c013158, __wbg_new_72aa46ede1a52e07, __wbg_setcrossOrigin_c71214d15b663eaf, __wbg_new_96f2b9d79dce4775, __wbg_setresponseType_9f98b18162a05cdd, __wbg_createTexture_2e23958a641af64b, __wbindgen_object_clone_ref, __wbg_setonload_2288267f14fd8110, __wbg_setonerror_138979e04b86210f, __wbg_setsrc_43904731d885a248, __wbg_texParameteri_c36a2e80bbd50560, __wbg_texImage2D_d536e4106c099fee, __wbg_createFramebuffer_1c214bda6f062062, __wbg_bindFramebuffer_8e18497643e2e97b, __wbg_framebufferTexture2D_0bb40f642fbd0309, __wbg_createVertexArray_51acb43e08d168a2, __wbg_useProgram_e1334a2752ff3d80, __wbg_createBuffer_34aca55d34936cb7, __wbg_lineWidth_80344f85b6bcac56, __wbg_vertexAttribPointer_8781b6e5c846817e, __wbg_enableVertexAttribArray_bb2bba2941e17b92, __wbg_document_2b44f2a86e03665a, __wbg_getElementsByClassName_8725bf2c2c69b1c0, __wbg_getwithindex_35ac89a9c2662f07, __wbg_setAttribute_b638fce95071fff6, __wbg_getContext_7f0328be9fe8c1ec, __wbg_instanceof_CanvasRenderingContext2d_302c6fce2ddc6344, __wbg_scale_59eef7e0dbbdd0f4, __wbg_texImage2D_c668c00fd97e1eb3, __wbg_log_a39f164b49616cb0, __wbg_newwithbyteoffsetandlength_14c58fd914c5e030, __wbg_new_9aae23408b655f27, __wbg_newwithbyteoffsetandlength_3c8748473807c7cf, __wbg_new_22a33711cf65b661, __wbg_newwithbyteoffsetandlength_4ac754dd0e4a9d36, __wbg_new_82fd9bbed79f6672, __wbindgen_json_serialize, __wbg_vertexAttribDivisor_08529767d8d2fa82, __wbg_deleteBuffer_f10f1dd760bb72fb, __wbg_createProgram_7f512be46ef2090e, __wbg_attachShader_435c833d3ca8f564, __wbg_linkProgram_8bc3021aa40f0948, __wbg_getProgramParameter_4e13e6daab89623e, __wbindgen_boolean_get, __wbg_getProgramInfoLog_41d3ebfde4246fd9, __wbg_getActiveUniform_d20d74f99fd35e8f, __wbg_name_ad1ecd078b0a7b97, __wbg_getUniformLocation_39124d965f679564, __wbg_createShader_c08686de7661eff0, __wbg_shaderSource_2dcc20f3552ae568, __wbg_compileShader_d9cf97450ba46b86, __wbg_getShaderParameter_05fa9af4df7ed8dd, __wbg_getShaderInfoLog_c9bbabb140e03d0f, __wbg_clearColor_816770046d61cafd, __wbg_clear_e3b5c108ec1393b3, __wbg_width_e2288c6b7927b379, __wbg_height_3478f03a55caa6c1, __wbg_uniform1f_f62e4675154cafec, __wbg_uniform2f_607e30643c51a99d, __wbg_drawElementsInstanced_567e09ca4d0b8f70, __wbg_drawElements_c9d953f7687b4f81, __wbg_uniform4f_8c65d1107a8a0b90, __wbg_drawArrays_c98946b902ad6be5, __wbg_uniform1i_5e235ac3cc8f8e9f, __wbg_clearRect_4cdcaefcbab3c61f, __wbg_setfont_b0bab8a26200ff75, __wbg_settextAlign_0aa8708042035018, __wbg_setfillStyle_73b5e2cc68bb713a, __wbg_save_f5781834e52f56f3, __wbg_translate_e974420ae15bb6b6, __wbg_rotate_70ce797918748e67, __wbg_fillText_499ade4210e5dc12, __wbg_restore_5ba2aaf5922b0f0a, __wbg_disable_5a475e28b2154fa9, __wbg_parse_58b7cdbfa2b3e55a, __wbg_getContext_11f724663952b3c1, __wbg_instanceof_WebGl2RenderingContext_f259b779e8a37d5d, __wbindgen_cb_drop, __wbindgen_json_parse, __wbg_uniform1fv_98bfb60e9fd15e8f, __wbg_uniformMatrix4fv_d5ec3891317260a2, __wbg_uniform1iv_f8d808c49b1bca39, __wbg_uniform3f_6255ac5ba78d0304, __wbg_isArray_cf6ef7e2eda8eafb, __wbg_length_4c7aec6f35774e3d, __wbg_get_a8b9619536c590d4, __wbg_response_31eced717be229e9, __wbg_length_e9f6f145de2fede5, __wbg_set_b29de3f25280c6ec, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbg_deleteVertexArray_97d2121cc69fc033, __wbg_disableVertexAttribArray_87802f3a7704cd13, __wbg_deleteTexture_25d82ac6b74470b3, __wbg_self_77eca7b42660e1bb, __wbg_window_51dac01569f1ba70, __wbg_globalThis_34bac2d08ebb9b58, __wbg_global_1c436164a66c9c22, __wbindgen_is_undefined, __wbg_newnoargs_ab5e899738c0eff4, __wbg_call_ab183a630df3a257, __wbg_newwithbyteoffsetandlength_00c580aa4e676e36, __wbg_newwithbyteoffsetandlength_193d0d8755287921, __wbindgen_debug_string, __wbg_blendFunc_434c8a948bfa69fe, __wbg_open_5ea732c83366517a, __wbg_setonload_8bafcddcb9002f04, __wbg_setonerror_e9038c5beb86d4a7, __wbg_send_47081c1d5143d31b, __wbg_texSubImage2D_75f7111706b6361f, __wbindgen_throw, __wbindgen_rethrow, __wbg_instanceof_Window_fbe0320f34c4cd31, __wbindgen_closure_wrapper322, __wbindgen_closure_wrapper326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALCooSys", function() { return GALCooSys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICRSJ2000CooSys", function() { return ICRSJ2000CooSys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooSystem", function() { return CooSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebClient", function() { return WebClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_performance_eee010e5e49f08df", function() { return __wbg_performance_eee010e5e49f08df; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_now_5ae3d18d57dd226f", function() { return __wbg_now_5ae3d18d57dd226f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_canvas_d93166ac8641cf07", function() { return __wbg_canvas_d93166ac8641cf07; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_HtmlCanvasElement_bd2459c62d076bcd", function() { return __wbg_instanceof_HtmlCanvasElement_bd2459c62d076bcd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setwidth_80b60efe20240a3e", function() { return __wbg_setwidth_80b60efe20240a3e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setheight_5c308278bb4139ed", function() { return __wbg_setheight_5c308278bb4139ed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_viewport_7e9633b09867dbf5", function() { return __wbg_viewport_7e9633b09867dbf5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_scissor_19ca00c5404b43a5", function() { return __wbg_scissor_19ca00c5404b43a5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return __wbindgen_memory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_bc64154385c04ac4", function() { return __wbg_buffer_bc64154385c04ac4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_48c5d6d65ec9a035", function() { return __wbg_new_48c5d6d65ec9a035; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_subarray_c9acd3f2f4dd697d", function() { return __wbg_subarray_c9acd3f2f4dd697d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_measureText_31eef5aa3112f9f9", function() { return __wbg_measureText_31eef5aa3112f9f9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_d6f9d0b10ab84cad", function() { return __wbg_width_d6f9d0b10ab84cad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindVertexArray_1c571a32554cb96d", function() { return __wbg_bindVertexArray_1c571a32554cb96d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBuffer_b45faf4508424c2a", function() { return __wbg_bindBuffer_b45faf4508424c2a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferSubData_3675131e10379877", function() { return __wbg_bufferSubData_3675131e10379877; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_813f25df0c990663", function() { return __wbg_bufferData_813f25df0c990663; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_activeTexture_ce973e4a1ff281c1", function() { return __wbg_activeTexture_ce973e4a1ff281c1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindTexture_13c5db7bd22b86cd", function() { return __wbg_bindTexture_13c5db7bd22b86cd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_8402d163bc7ded1c", function() { return __wbg_texSubImage2D_8402d163bc7ded1c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFuncSeparate_0cede3ddb2462689", function() { return __wbg_blendFuncSeparate_0cede3ddb2462689; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_enable_93767887882fa986", function() { return __wbg_enable_93767887882fa986; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_cullFace_5c5866af3997fe0b", function() { return __wbg_cullFace_5c5866af3997fe0b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerWidth_c4fa0fec0fd477b8", function() { return __wbg_innerWidth_c4fa0fec0fd477b8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_get", function() { return __wbindgen_number_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerHeight_6344b1c89c013158", function() { return __wbg_innerHeight_6344b1c89c013158; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_72aa46ede1a52e07", function() { return __wbg_new_72aa46ede1a52e07; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setcrossOrigin_c71214d15b663eaf", function() { return __wbg_setcrossOrigin_c71214d15b663eaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_96f2b9d79dce4775", function() { return __wbg_new_96f2b9d79dce4775; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setresponseType_9f98b18162a05cdd", function() { return __wbg_setresponseType_9f98b18162a05cdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createTexture_2e23958a641af64b", function() { return __wbg_createTexture_2e23958a641af64b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return __wbindgen_object_clone_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setonload_2288267f14fd8110", function() { return __wbg_setonload_2288267f14fd8110; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setonerror_138979e04b86210f", function() { return __wbg_setonerror_138979e04b86210f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setsrc_43904731d885a248", function() { return __wbg_setsrc_43904731d885a248; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texParameteri_c36a2e80bbd50560", function() { return __wbg_texParameteri_c36a2e80bbd50560; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texImage2D_d536e4106c099fee", function() { return __wbg_texImage2D_d536e4106c099fee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createFramebuffer_1c214bda6f062062", function() { return __wbg_createFramebuffer_1c214bda6f062062; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindFramebuffer_8e18497643e2e97b", function() { return __wbg_bindFramebuffer_8e18497643e2e97b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_framebufferTexture2D_0bb40f642fbd0309", function() { return __wbg_framebufferTexture2D_0bb40f642fbd0309; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createVertexArray_51acb43e08d168a2", function() { return __wbg_createVertexArray_51acb43e08d168a2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_useProgram_e1334a2752ff3d80", function() { return __wbg_useProgram_e1334a2752ff3d80; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_34aca55d34936cb7", function() { return __wbg_createBuffer_34aca55d34936cb7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_lineWidth_80344f85b6bcac56", function() { return __wbg_lineWidth_80344f85b6bcac56; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribPointer_8781b6e5c846817e", function() { return __wbg_vertexAttribPointer_8781b6e5c846817e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_enableVertexAttribArray_bb2bba2941e17b92", function() { return __wbg_enableVertexAttribArray_bb2bba2941e17b92; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_2b44f2a86e03665a", function() { return __wbg_document_2b44f2a86e03665a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getElementsByClassName_8725bf2c2c69b1c0", function() { return __wbg_getElementsByClassName_8725bf2c2c69b1c0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getwithindex_35ac89a9c2662f07", function() { return __wbg_getwithindex_35ac89a9c2662f07; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setAttribute_b638fce95071fff6", function() { return __wbg_setAttribute_b638fce95071fff6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_7f0328be9fe8c1ec", function() { return __wbg_getContext_7f0328be9fe8c1ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_CanvasRenderingContext2d_302c6fce2ddc6344", function() { return __wbg_instanceof_CanvasRenderingContext2d_302c6fce2ddc6344; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_scale_59eef7e0dbbdd0f4", function() { return __wbg_scale_59eef7e0dbbdd0f4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texImage2D_c668c00fd97e1eb3", function() { return __wbg_texImage2D_c668c00fd97e1eb3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_a39f164b49616cb0", function() { return __wbg_log_a39f164b49616cb0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_14c58fd914c5e030", function() { return __wbg_newwithbyteoffsetandlength_14c58fd914c5e030; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_9aae23408b655f27", function() { return __wbg_new_9aae23408b655f27; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_3c8748473807c7cf", function() { return __wbg_newwithbyteoffsetandlength_3c8748473807c7cf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_22a33711cf65b661", function() { return __wbg_new_22a33711cf65b661; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_4ac754dd0e4a9d36", function() { return __wbg_newwithbyteoffsetandlength_4ac754dd0e4a9d36; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_82fd9bbed79f6672", function() { return __wbg_new_82fd9bbed79f6672; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_json_serialize", function() { return __wbindgen_json_serialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribDivisor_08529767d8d2fa82", function() { return __wbg_vertexAttribDivisor_08529767d8d2fa82; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteBuffer_f10f1dd760bb72fb", function() { return __wbg_deleteBuffer_f10f1dd760bb72fb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createProgram_7f512be46ef2090e", function() { return __wbg_createProgram_7f512be46ef2090e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_attachShader_435c833d3ca8f564", function() { return __wbg_attachShader_435c833d3ca8f564; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_linkProgram_8bc3021aa40f0948", function() { return __wbg_linkProgram_8bc3021aa40f0948; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramParameter_4e13e6daab89623e", function() { return __wbg_getProgramParameter_4e13e6daab89623e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_boolean_get", function() { return __wbindgen_boolean_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramInfoLog_41d3ebfde4246fd9", function() { return __wbg_getProgramInfoLog_41d3ebfde4246fd9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getActiveUniform_d20d74f99fd35e8f", function() { return __wbg_getActiveUniform_d20d74f99fd35e8f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_name_ad1ecd078b0a7b97", function() { return __wbg_name_ad1ecd078b0a7b97; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformLocation_39124d965f679564", function() { return __wbg_getUniformLocation_39124d965f679564; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShader_c08686de7661eff0", function() { return __wbg_createShader_c08686de7661eff0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_shaderSource_2dcc20f3552ae568", function() { return __wbg_shaderSource_2dcc20f3552ae568; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_compileShader_d9cf97450ba46b86", function() { return __wbg_compileShader_d9cf97450ba46b86; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderParameter_05fa9af4df7ed8dd", function() { return __wbg_getShaderParameter_05fa9af4df7ed8dd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderInfoLog_c9bbabb140e03d0f", function() { return __wbg_getShaderInfoLog_c9bbabb140e03d0f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearColor_816770046d61cafd", function() { return __wbg_clearColor_816770046d61cafd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clear_e3b5c108ec1393b3", function() { return __wbg_clear_e3b5c108ec1393b3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_e2288c6b7927b379", function() { return __wbg_width_e2288c6b7927b379; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_height_3478f03a55caa6c1", function() { return __wbg_height_3478f03a55caa6c1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1f_f62e4675154cafec", function() { return __wbg_uniform1f_f62e4675154cafec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform2f_607e30643c51a99d", function() { return __wbg_uniform2f_607e30643c51a99d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElementsInstanced_567e09ca4d0b8f70", function() { return __wbg_drawElementsInstanced_567e09ca4d0b8f70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElements_c9d953f7687b4f81", function() { return __wbg_drawElements_c9d953f7687b4f81; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4f_8c65d1107a8a0b90", function() { return __wbg_uniform4f_8c65d1107a8a0b90; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArrays_c98946b902ad6be5", function() { return __wbg_drawArrays_c98946b902ad6be5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1i_5e235ac3cc8f8e9f", function() { return __wbg_uniform1i_5e235ac3cc8f8e9f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearRect_4cdcaefcbab3c61f", function() { return __wbg_clearRect_4cdcaefcbab3c61f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setfont_b0bab8a26200ff75", function() { return __wbg_setfont_b0bab8a26200ff75; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_settextAlign_0aa8708042035018", function() { return __wbg_settextAlign_0aa8708042035018; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setfillStyle_73b5e2cc68bb713a", function() { return __wbg_setfillStyle_73b5e2cc68bb713a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_save_f5781834e52f56f3", function() { return __wbg_save_f5781834e52f56f3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_translate_e974420ae15bb6b6", function() { return __wbg_translate_e974420ae15bb6b6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_rotate_70ce797918748e67", function() { return __wbg_rotate_70ce797918748e67; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_fillText_499ade4210e5dc12", function() { return __wbg_fillText_499ade4210e5dc12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_restore_5ba2aaf5922b0f0a", function() { return __wbg_restore_5ba2aaf5922b0f0a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_disable_5a475e28b2154fa9", function() { return __wbg_disable_5a475e28b2154fa9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_parse_58b7cdbfa2b3e55a", function() { return __wbg_parse_58b7cdbfa2b3e55a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_11f724663952b3c1", function() { return __wbg_getContext_11f724663952b3c1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_WebGl2RenderingContext_f259b779e8a37d5d", function() { return __wbg_instanceof_WebGl2RenderingContext_f259b779e8a37d5d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return __wbindgen_cb_drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_json_parse", function() { return __wbindgen_json_parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1fv_98bfb60e9fd15e8f", function() { return __wbg_uniform1fv_98bfb60e9fd15e8f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix4fv_d5ec3891317260a2", function() { return __wbg_uniformMatrix4fv_d5ec3891317260a2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1iv_f8d808c49b1bca39", function() { return __wbg_uniform1iv_f8d808c49b1bca39; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform3f_6255ac5ba78d0304", function() { return __wbg_uniform3f_6255ac5ba78d0304; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_isArray_cf6ef7e2eda8eafb", function() { return __wbg_isArray_cf6ef7e2eda8eafb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_4c7aec6f35774e3d", function() { return __wbg_length_4c7aec6f35774e3d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_a8b9619536c590d4", function() { return __wbg_get_a8b9619536c590d4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_response_31eced717be229e9", function() { return __wbg_response_31eced717be229e9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_e9f6f145de2fede5", function() { return __wbg_length_e9f6f145de2fede5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_b29de3f25280c6ec", function() { return __wbg_set_b29de3f25280c6ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteVertexArray_97d2121cc69fc033", function() { return __wbg_deleteVertexArray_97d2121cc69fc033; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_disableVertexAttribArray_87802f3a7704cd13", function() { return __wbg_disableVertexAttribArray_87802f3a7704cd13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deleteTexture_25d82ac6b74470b3", function() { return __wbg_deleteTexture_25d82ac6b74470b3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_77eca7b42660e1bb", function() { return __wbg_self_77eca7b42660e1bb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_51dac01569f1ba70", function() { return __wbg_window_51dac01569f1ba70; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_34bac2d08ebb9b58", function() { return __wbg_globalThis_34bac2d08ebb9b58; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_1c436164a66c9c22", function() { return __wbg_global_1c436164a66c9c22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_ab5e899738c0eff4", function() { return __wbg_newnoargs_ab5e899738c0eff4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_ab183a630df3a257", function() { return __wbg_call_ab183a630df3a257; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_00c580aa4e676e36", function() { return __wbg_newwithbyteoffsetandlength_00c580aa4e676e36; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_193d0d8755287921", function() { return __wbg_newwithbyteoffsetandlength_193d0d8755287921; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFunc_434c8a948bfa69fe", function() { return __wbg_blendFunc_434c8a948bfa69fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_open_5ea732c83366517a", function() { return __wbg_open_5ea732c83366517a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setonload_8bafcddcb9002f04", function() { return __wbg_setonload_8bafcddcb9002f04; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setonerror_e9038c5beb86d4a7", function() { return __wbg_setonerror_e9038c5beb86d4a7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_send_47081c1d5143d31b", function() { return __wbg_send_47081c1d5143d31b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_texSubImage2D_75f7111706b6361f", function() { return __wbg_texSubImage2D_75f7111706b6361f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_rethrow", function() { return __wbindgen_rethrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_fbe0320f34c4cd31", function() { return __wbg_instanceof_Window_fbe0320f34c4cd31; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper322", function() { return __wbindgen_closure_wrapper322; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper326", function() { return __wbindgen_closure_wrapper326; });
/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./src/core/pkg/index_bg.wasm");


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetFloat64Memory0 = new Float64Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetFloat64Memory0;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory0;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_export_2"].get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}

function logError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            let error = (function () {
                try {
                    return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
                } catch(_) {
                    return "<failed to stringify thrown value>";
                }
            }());
            console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
            throw e;
        }
    };
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
function __wbg_adapter_28(arg0, arg1, arg2) {
    try {
        _assertNum(arg0);
        _assertNum(arg1);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["_dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h867d6adb7454a940"](arg0, arg1, addBorrowedObject(arg2));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_export_2"].get(state.dtor)(state.a, state.b);
                state.a = 0;

            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_31(arg0, arg1) {
    _assertNum(arg0);
    _assertNum(arg1);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["_dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfd6e00bd353bc71d"](arg0, arg1);
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint32Memory0 = new Uint32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint32Memory0;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4);
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function getArrayF64FromWasm0(ptr, len) {
    return getFloat64Memory0().subarray(ptr / 8, ptr / 8 + len);
}
/**
* @returns {number}
*/
function GALCooSys() {
    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["GALCooSys"]();
    return ret >>> 0;
}

/**
* @returns {number}
*/
function ICRSJ2000CooSys() {
    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["ICRSJ2000CooSys"]();
    return ret >>> 0;
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_exn_store"](addHeapObject(e));
        }
    };
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
    if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetFloat32Memory0 = new Float32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI32FromWasm0(ptr, len) {
    return getInt32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
*/
const CooSystem = Object.freeze({ ICRSJ2000:0,"0":"ICRSJ2000",GAL:1,"1":"GAL", });
/**
*/
class WebClient {

    static __wrap(ptr) {
        const obj = Object.create(WebClient.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_webclient_free"](ptr);
    }
    /**
    * Create a new web client
    * @param {any} shaders
    * @param {any} resources
    */
    constructor(shaders, resources) {
        try {
            var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_new"](addBorrowedObject(shaders), addBorrowedObject(resources));
            return WebClient.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Main update method
    * The force parameter ensures to force the update of some elements
    * even if the camera has not moved
    * @param {number} dt
    * @param {boolean} force
    */
    update(dt, force) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertBoolean(force);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_update"](this.ptr, dt, force);
    }
    /**
    * Resize the window
    * @param {number} width
    * @param {number} height
    */
    resize(width, height) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_resize"](this.ptr, width, height);
    }
    /**
    * Update our WebGL Water application.
    * @param {boolean} force
    */
    render(force) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertBoolean(force);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_render"](this.ptr, force);
    }
    /**
    * Change the current projection of the HiPS
    * @param {string} name
    */
    setProjection(name) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setProjection"](this.ptr, ptr0, len0);
    }
    /**
    * Change the current projection of the HiPS
    * @param {boolean} reversed
    */
    setLongitudeReversed(reversed) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertBoolean(reversed);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setLongitudeReversed"](this.ptr, reversed);
    }
    /**
    * Image surveys
    * Check whether the app is ready
    *
    * Aladin Lite is in a good state when the root tiles of the
    * HiPS chosen have all been retrieved and accessible for the GPU
    *
    * The javascript can change the HiPSes only if aladin lite is ready
    * @returns {boolean}
    */
    isReady() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_isReady"](this.ptr);
        return ret !== 0;
    }
    /**
    * @param {any[]} surveys
    */
    setImageSurveys(surveys) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passArrayJsValueToWasm0(surveys, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setImageSurveys"](this.ptr, ptr0, len0);
    }
    /**
    * Move a layer forward
    *
    * # Panics
    *
    * If the layer specified is not found
    * @param {string} layer_name
    */
    moveImageSurveysLayerForward(layer_name) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(layer_name, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_moveImageSurveysLayerForward"](this.ptr, ptr0, len0);
    }
    /**
    * @param {number} opacity
    * @param {string} layer_name
    */
    setOpacityLayer(opacity, layer_name) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(layer_name, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setOpacityLayer"](this.ptr, opacity, ptr0, len0);
    }
    /**
    * Grid
    * Change grid color
    * @param {number} red
    * @param {number} green
    * @param {number} blue
    * @param {number} alpha
    */
    setGridColor(red, green, blue, alpha) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setGridColor"](this.ptr, red, green, blue, alpha);
    }
    /**
    * Enable the draw of the grid
    */
    enableGrid() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_enableGrid"](this.ptr);
    }
    /**
    * Disable the draw of the grid
    */
    disableGrid() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_disableGrid"](this.ptr);
    }
    /**
    */
    hideGridLabels() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_hideGridLabels"](this.ptr);
    }
    /**
    */
    showGridLabels() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_showGridLabels"](this.ptr);
    }
    /**
    * ICRS in J2000 to galactic conversion functions
    * @returns {number}
    */
    cooSystem() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_cooSystem"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} coo_system
    */
    setCooSystem(coo_system) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertNum(coo_system);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setCooSystem"](this.ptr, coo_system);
    }
    /**
    * @param {number} lon
    * @param {number} lat
    * @returns {Float64Array | undefined}
    */
    J20002Gal(lon, lat) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_J20002Gal"](retptr, this.ptr, lon, lat);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF64FromWasm0(r0, r1).slice();
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1 * 8);
            }
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](16);
        }
    }
    /**
    * @param {number} lon
    * @param {number} lat
    * @returns {Float64Array | undefined}
    */
    Gal2J2000(lon, lat) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_Gal2J2000"](retptr, this.ptr, lon, lat);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF64FromWasm0(r0, r1).slice();
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1 * 8);
            }
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](16);
        }
    }
    /**
    * Camera moving functions
    * @returns {number}
    */
    getFieldOfView() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_getFieldOfView"](this.ptr);
        return ret;
    }
    /**
    * Set directly the field of view (for pinch zooming)
    * @param {number} fov
    */
    setFieldOfView(fov) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setFieldOfView"](this.ptr, fov);
    }
    /**
    * @param {number} theta
    */
    setRotationAroundCenter(theta) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setRotationAroundCenter"](this.ptr, theta);
    }
    /**
    * @returns {number}
    */
    getRotationAroundCenter() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_getRotationAroundCenter"](this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    getMaxFieldOfView() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_getMaxFieldOfView"](this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    getClipZoomFactor() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_getClipZoomFactor"](this.ptr);
        return ret;
    }
    /**
    * Set directly the center position
    * @param {number} lon
    * @param {number} lat
    */
    setCenter(lon, lat) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setCenter"](this.ptr, lon, lat);
    }
    /**
    * Set directly the center position
    * @returns {Float64Array}
    */
    getCenter() {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_getCenter"](retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayF64FromWasm0(r0, r1).slice();
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1 * 8);
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](16);
        }
    }
    /**
    * Initiate a finite state machine that will move to a specific location
    * @param {number} lon
    * @param {number} lat
    */
    moveToLocation(lon, lat) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_moveToLocation"](this.ptr, lon, lat);
    }
    /**
    * @param {number} s1x
    * @param {number} s1y
    * @param {number} s2x
    * @param {number} s2y
    */
    goFromTo(s1x, s1y, s2x, s2y) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_goFromTo"](this.ptr, s1x, s1y, s2x, s2y);
    }
    /**
    * World to screen projection
    *
    * Coordinates must be given in ICRS J2000
    * They will be converted accordingly to the current frame of Aladin Lite
    * @param {number} lon
    * @param {number} lat
    * @returns {Float64Array | undefined}
    */
    worldToScreen(lon, lat) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_worldToScreen"](retptr, this.ptr, lon, lat);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF64FromWasm0(r0, r1).slice();
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1 * 8);
            }
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](16);
        }
    }
    /**
    * @param {any[]} sources
    * @returns {Float64Array}
    */
    worldToScreenVec(sources) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](-16);
            _assertNum(this.ptr);
            var ptr0 = passArrayJsValueToWasm0(sources, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
            var len0 = WASM_VECTOR_LEN;
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_worldToScreenVec"](retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayF64FromWasm0(r0, r1).slice();
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1 * 8);
            return v1;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](16);
        }
    }
    /**
    * @param {number} pos_x
    * @param {number} pos_y
    * @returns {Float64Array | undefined}
    */
    screenToWorld(pos_x, pos_y) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_screenToWorld"](retptr, this.ptr, pos_x, pos_y);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF64FromWasm0(r0, r1).slice();
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1 * 8);
            }
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](16);
        }
    }
    /**
    * Tell the backend when the left mouse button has been
    * released. This is useful for beginning inerting
    */
    releaseLeftButtonMouse() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_releaseLeftButtonMouse"](this.ptr);
    }
    /**
    * Tell the backend when the left mouse button has been pressed
    */
    pressLeftMouseButton() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_pressLeftMouseButton"](this.ptr);
    }
    /**
    * @param {number} delta
    */
    registerWheelEvent(delta) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_registerWheelEvent"](this.ptr, delta);
    }
    /**
    * Catalogs
    * @param {string} name_catalog
    * @param {any} data
    * @param {string} colormap
    */
    addCatalog(name_catalog, data, colormap) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name_catalog, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(colormap, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len1 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_addCatalog"](this.ptr, ptr0, len0, addHeapObject(data), ptr1, len1);
    }
    /**
    * @returns {boolean}
    */
    isCatalogLoaded() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_isCatalogLoaded"](this.ptr);
        return ret !== 0;
    }
    /**
    * @param {string} name_catalog
    * @param {string} colormap
    */
    setCatalogColormap(name_catalog, colormap) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name_catalog, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(colormap, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len1 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setCatalogColormap"](this.ptr, ptr0, len0, ptr1, len1);
    }
    /**
    * Set the heatmap global opacity
    * @param {string} name_catalog
    * @param {number} opacity
    */
    setCatalogOpacity(name_catalog, opacity) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name_catalog, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setCatalogOpacity"](this.ptr, ptr0, len0, opacity);
    }
    /**
    * @param {string} name_catalog
    * @param {number} strength
    */
    setCatalogKernelStrength(name_catalog, strength) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name_catalog, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_setCatalogKernelStrength"](this.ptr, ptr0, len0, strength);
    }
    /**
    * Utilities
    * @param {number} lon1
    * @param {number} lat1
    * @param {number} lon2
    * @param {number} lat2
    * @returns {Float64Array}
    */
    projectLine(lon1, lat1, lon2, lat2) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_projectLine"](retptr, this.ptr, lon1, lat1, lon2, lat2);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayF64FromWasm0(r0, r1).slice();
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1 * 8);
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](16);
        }
    }
    /**
    * @returns {any}
    */
    getAvailableColormapList() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["webclient_getAvailableColormapList"](this.ptr);
        return takeObject(ret);
    }
}

const __wbg_performance_eee010e5e49f08df = logError(function(arg0) {
    var ret = getObject(arg0).performance;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_now_5ae3d18d57dd226f = logError(function(arg0) {
    var ret = getObject(arg0).now();
    return ret;
});

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbg_canvas_d93166ac8641cf07 = logError(function(arg0) {
    var ret = getObject(arg0).canvas;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_instanceof_HtmlCanvasElement_bd2459c62d076bcd = logError(function(arg0) {
    var ret = getObject(arg0) instanceof HTMLCanvasElement;
    _assertBoolean(ret);
    return ret;
});

const __wbg_setwidth_80b60efe20240a3e = logError(function(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
});

const __wbg_setheight_5c308278bb4139ed = logError(function(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
});

const __wbg_viewport_7e9633b09867dbf5 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).viewport(arg1, arg2, arg3, arg4);
});

const __wbg_scissor_19ca00c5404b43a5 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).scissor(arg1, arg2, arg3, arg4);
});

const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

const __wbindgen_memory = function() {
    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"];
    return addHeapObject(ret);
};

const __wbg_buffer_bc64154385c04ac4 = logError(function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
});

const __wbg_new_48c5d6d65ec9a035 = logError(function(arg0) {
    var ret = new Float32Array(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_subarray_c9acd3f2f4dd697d = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_measureText_31eef5aa3112f9f9 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).measureText(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

const __wbg_width_d6f9d0b10ab84cad = logError(function(arg0) {
    var ret = getObject(arg0).width;
    return ret;
});

const __wbg_bindVertexArray_1c571a32554cb96d = logError(function(arg0, arg1) {
    getObject(arg0).bindVertexArray(getObject(arg1));
});

const __wbg_bindBuffer_b45faf4508424c2a = logError(function(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
});

const __wbg_bufferSubData_3675131e10379877 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferSubData(arg1 >>> 0, arg2, getObject(arg3));
});

const __wbg_bufferData_813f25df0c990663 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
});

const __wbg_activeTexture_ce973e4a1ff281c1 = logError(function(arg0, arg1) {
    getObject(arg0).activeTexture(arg1 >>> 0);
});

const __wbg_bindTexture_13c5db7bd22b86cd = logError(function(arg0, arg1, arg2) {
    getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
});

const __wbg_texSubImage2D_8402d163bc7ded1c = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
});

const __wbg_blendFuncSeparate_0cede3ddb2462689 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
});

const __wbg_enable_93767887882fa986 = logError(function(arg0, arg1) {
    getObject(arg0).enable(arg1 >>> 0);
});

const __wbg_cullFace_5c5866af3997fe0b = logError(function(arg0, arg1) {
    getObject(arg0).cullFace(arg1 >>> 0);
});

const __wbg_innerWidth_c4fa0fec0fd477b8 = handleError(function(arg0) {
    var ret = getObject(arg0).innerWidth;
    return addHeapObject(ret);
});

const __wbindgen_number_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'number' ? obj : undefined;
    if (!isLikeNone(ret)) {
        _assertNum(ret);
    }
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

const __wbg_innerHeight_6344b1c89c013158 = handleError(function(arg0) {
    var ret = getObject(arg0).innerHeight;
    return addHeapObject(ret);
});

const __wbg_new_72aa46ede1a52e07 = handleError(function() {
    var ret = new Image();
    return addHeapObject(ret);
});

const __wbg_setcrossOrigin_c71214d15b663eaf = logError(function(arg0, arg1, arg2) {
    getObject(arg0).crossOrigin = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
});

const __wbg_new_96f2b9d79dce4775 = handleError(function() {
    var ret = new XMLHttpRequest();
    return addHeapObject(ret);
});

const __wbg_setresponseType_9f98b18162a05cdd = logError(function(arg0, arg1) {
    getObject(arg0).responseType = takeObject(arg1);
});

const __wbg_createTexture_2e23958a641af64b = logError(function(arg0) {
    var ret = getObject(arg0).createTexture();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

const __wbg_setonload_2288267f14fd8110 = logError(function(arg0, arg1) {
    getObject(arg0).onload = getObject(arg1);
});

const __wbg_setonerror_138979e04b86210f = logError(function(arg0, arg1) {
    getObject(arg0).onerror = getObject(arg1);
});

const __wbg_setsrc_43904731d885a248 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).src = getStringFromWasm0(arg1, arg2);
});

const __wbg_texParameteri_c36a2e80bbd50560 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
});

const __wbg_texImage2D_d536e4106c099fee = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9 === 0 ? undefined : getArrayU8FromWasm0(arg9, arg10));
});

const __wbg_createFramebuffer_1c214bda6f062062 = logError(function(arg0) {
    var ret = getObject(arg0).createFramebuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_bindFramebuffer_8e18497643e2e97b = logError(function(arg0, arg1, arg2) {
    getObject(arg0).bindFramebuffer(arg1 >>> 0, getObject(arg2));
});

const __wbg_framebufferTexture2D_0bb40f642fbd0309 = logError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4), arg5);
});

const __wbg_createVertexArray_51acb43e08d168a2 = logError(function(arg0) {
    var ret = getObject(arg0).createVertexArray();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_useProgram_e1334a2752ff3d80 = logError(function(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
});

const __wbg_createBuffer_34aca55d34936cb7 = logError(function(arg0) {
    var ret = getObject(arg0).createBuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_lineWidth_80344f85b6bcac56 = logError(function(arg0, arg1) {
    getObject(arg0).lineWidth(arg1);
});

const __wbg_vertexAttribPointer_8781b6e5c846817e = logError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
});

const __wbg_enableVertexAttribArray_bb2bba2941e17b92 = logError(function(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
});

const __wbg_document_2b44f2a86e03665a = logError(function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_getElementsByClassName_8725bf2c2c69b1c0 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getElementsByClassName(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

const __wbg_getwithindex_35ac89a9c2662f07 = logError(function(arg0, arg1) {
    var ret = getObject(arg0)[arg1 >>> 0];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_setAttribute_b638fce95071fff6 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
});

const __wbg_getContext_7f0328be9fe8c1ec = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_instanceof_CanvasRenderingContext2d_302c6fce2ddc6344 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof CanvasRenderingContext2D;
    _assertBoolean(ret);
    return ret;
});

const __wbg_scale_59eef7e0dbbdd0f4 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).scale(arg1, arg2);
});

const __wbg_texImage2D_c668c00fd97e1eb3 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4 >>> 0, arg5 >>> 0, getObject(arg6));
});

const __wbg_log_a39f164b49616cb0 = logError(function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
});

const __wbg_newwithbyteoffsetandlength_14c58fd914c5e030 = logError(function(arg0, arg1, arg2) {
    var ret = new Int32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_new_9aae23408b655f27 = logError(function(arg0) {
    var ret = new Int32Array(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_newwithbyteoffsetandlength_3c8748473807c7cf = logError(function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_new_22a33711cf65b661 = logError(function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_newwithbyteoffsetandlength_4ac754dd0e4a9d36 = logError(function(arg0, arg1, arg2) {
    var ret = new Int16Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_new_82fd9bbed79f6672 = logError(function(arg0) {
    var ret = new Int16Array(getObject(arg0));
    return addHeapObject(ret);
});

const __wbindgen_json_serialize = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = JSON.stringify(obj === undefined ? null : obj);
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_vertexAttribDivisor_08529767d8d2fa82 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
});

const __wbg_deleteBuffer_f10f1dd760bb72fb = logError(function(arg0, arg1) {
    getObject(arg0).deleteBuffer(getObject(arg1));
});

const __wbg_createProgram_7f512be46ef2090e = logError(function(arg0) {
    var ret = getObject(arg0).createProgram();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_attachShader_435c833d3ca8f564 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
});

const __wbg_linkProgram_8bc3021aa40f0948 = logError(function(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
});

const __wbg_getProgramParameter_4e13e6daab89623e = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbindgen_boolean_get = function(arg0) {
    const v = getObject(arg0);
    var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    _assertNum(ret);
    return ret;
};

const __wbg_getProgramInfoLog_41d3ebfde4246fd9 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_getActiveUniform_d20d74f99fd35e8f = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getActiveUniform(getObject(arg1), arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_name_ad1ecd078b0a7b97 = logError(function(arg0, arg1) {
    var ret = getObject(arg1).name;
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_getUniformLocation_39124d965f679564 = logError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_createShader_c08686de7661eff0 = logError(function(arg0, arg1) {
    var ret = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_shaderSource_2dcc20f3552ae568 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
});

const __wbg_compileShader_d9cf97450ba46b86 = logError(function(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
});

const __wbg_getShaderParameter_05fa9af4df7ed8dd = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_getShaderInfoLog_c9bbabb140e03d0f = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_clearColor_816770046d61cafd = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
});

const __wbg_clear_e3b5c108ec1393b3 = logError(function(arg0, arg1) {
    getObject(arg0).clear(arg1 >>> 0);
});

const __wbg_width_e2288c6b7927b379 = logError(function(arg0) {
    var ret = getObject(arg0).width;
    _assertNum(ret);
    return ret;
});

const __wbg_height_3478f03a55caa6c1 = logError(function(arg0) {
    var ret = getObject(arg0).height;
    _assertNum(ret);
    return ret;
});

const __wbg_uniform1f_f62e4675154cafec = logError(function(arg0, arg1, arg2) {
    getObject(arg0).uniform1f(getObject(arg1), arg2);
});

const __wbg_uniform2f_607e30643c51a99d = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2f(getObject(arg1), arg2, arg3);
});

const __wbg_drawElementsInstanced_567e09ca4d0b8f70 = logError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
});

const __wbg_drawElements_c9d953f7687b4f81 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
});

const __wbg_uniform4f_8c65d1107a8a0b90 = logError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).uniform4f(getObject(arg1), arg2, arg3, arg4, arg5);
});

const __wbg_drawArrays_c98946b902ad6be5 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
});

const __wbg_uniform1i_5e235ac3cc8f8e9f = logError(function(arg0, arg1, arg2) {
    getObject(arg0).uniform1i(getObject(arg1), arg2);
});

const __wbg_clearRect_4cdcaefcbab3c61f = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearRect(arg1, arg2, arg3, arg4);
});

const __wbg_setfont_b0bab8a26200ff75 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).font = getStringFromWasm0(arg1, arg2);
});

const __wbg_settextAlign_0aa8708042035018 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).textAlign = getStringFromWasm0(arg1, arg2);
});

const __wbg_setfillStyle_73b5e2cc68bb713a = logError(function(arg0, arg1) {
    getObject(arg0).fillStyle = getObject(arg1);
});

const __wbg_save_f5781834e52f56f3 = logError(function(arg0) {
    getObject(arg0).save();
});

const __wbg_translate_e974420ae15bb6b6 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).translate(arg1, arg2);
});

const __wbg_rotate_70ce797918748e67 = handleError(function(arg0, arg1) {
    getObject(arg0).rotate(arg1);
});

const __wbg_fillText_499ade4210e5dc12 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
});

const __wbg_restore_5ba2aaf5922b0f0a = logError(function(arg0) {
    getObject(arg0).restore();
});

const __wbg_disable_5a475e28b2154fa9 = logError(function(arg0, arg1) {
    getObject(arg0).disable(arg1 >>> 0);
});

const __wbg_parse_58b7cdbfa2b3e55a = handleError(function(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
});

const __wbg_getContext_11f724663952b3c1 = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_instanceof_WebGl2RenderingContext_f259b779e8a37d5d = logError(function(arg0) {
    var ret = getObject(arg0) instanceof WebGL2RenderingContext;
    _assertBoolean(ret);
    return ret;
});

const __wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    _assertBoolean(ret);
    return ret;
};

const __wbindgen_json_parse = function(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

const __wbg_uniform1fv_98bfb60e9fd15e8f = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform1fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
});

const __wbg_uniformMatrix4fv_d5ec3891317260a2 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
});

const __wbg_uniform1iv_f8d808c49b1bca39 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform1iv(getObject(arg1), getArrayI32FromWasm0(arg2, arg3));
});

const __wbg_uniform3f_6255ac5ba78d0304 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniform3f(getObject(arg1), arg2, arg3, arg4);
});

const __wbg_isArray_cf6ef7e2eda8eafb = logError(function(arg0) {
    var ret = Array.isArray(getObject(arg0));
    _assertBoolean(ret);
    return ret;
});

const __wbg_length_4c7aec6f35774e3d = logError(function(arg0) {
    var ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
});

const __wbg_get_a8b9619536c590d4 = logError(function(arg0, arg1) {
    var ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
});

const __wbg_response_31eced717be229e9 = handleError(function(arg0) {
    var ret = getObject(arg0).response;
    return addHeapObject(ret);
});

const __wbg_length_e9f6f145de2fede5 = logError(function(arg0) {
    var ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
});

const __wbg_set_b29de3f25280c6ec = logError(function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
});

const __wbg_new_59cb74e423758ede = logError(function() {
    var ret = new Error();
    return addHeapObject(ret);
});

const __wbg_stack_558ba5917b466edd = logError(function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_error_4bb6c2a97407129a = logError(function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1);
    }
});

const __wbg_deleteVertexArray_97d2121cc69fc033 = logError(function(arg0, arg1) {
    getObject(arg0).deleteVertexArray(getObject(arg1));
});

const __wbg_disableVertexAttribArray_87802f3a7704cd13 = logError(function(arg0, arg1) {
    getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
});

const __wbg_deleteTexture_25d82ac6b74470b3 = logError(function(arg0, arg1) {
    getObject(arg0).deleteTexture(getObject(arg1));
});

const __wbg_self_77eca7b42660e1bb = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

const __wbg_window_51dac01569f1ba70 = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

const __wbg_globalThis_34bac2d08ebb9b58 = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

const __wbg_global_1c436164a66c9c22 = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    _assertBoolean(ret);
    return ret;
};

const __wbg_newnoargs_ab5e899738c0eff4 = logError(function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
});

const __wbg_call_ab183a630df3a257 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

const __wbg_newwithbyteoffsetandlength_00c580aa4e676e36 = logError(function(arg0, arg1, arg2) {
    var ret = new Uint16Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_newwithbyteoffsetandlength_193d0d8755287921 = logError(function(arg0, arg1, arg2) {
    var ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_blendFunc_434c8a948bfa69fe = logError(function(arg0, arg1, arg2) {
    getObject(arg0).blendFunc(arg1 >>> 0, arg2 >>> 0);
});

const __wbg_open_5ea732c83366517a = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), arg5 !== 0);
});

const __wbg_setonload_8bafcddcb9002f04 = logError(function(arg0, arg1) {
    getObject(arg0).onload = getObject(arg1);
});

const __wbg_setonerror_e9038c5beb86d4a7 = logError(function(arg0, arg1) {
    getObject(arg0).onerror = getObject(arg1);
});

const __wbg_send_47081c1d5143d31b = handleError(function(arg0) {
    getObject(arg0).send();
});

const __wbg_texSubImage2D_75f7111706b6361f = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
});

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const __wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

const __wbg_instanceof_Window_fbe0320f34c4cd31 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    _assertBoolean(ret);
    return ret;
});

const __wbindgen_closure_wrapper322 = logError(function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 60, __wbg_adapter_28);
    return addHeapObject(ret);
});

const __wbindgen_closure_wrapper326 = logError(function(arg0, arg1, arg2) {
    var ret = makeClosure(arg0, arg1, 60, __wbg_adapter_31);
    return addHeapObject(ret);
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ "./node_modules/text-encoding/index.js")["TextDecoder"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! text-encoding */ "./node_modules/text-encoding/index.js")["TextEncoder"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/core/pkg/index_bg.wasm":
/*!************************************!*\
  !*** ./src/core/pkg/index_bg.wasm ***!
  \************************************/
/*! exports provided: memory, __wbg_webclient_free, webclient_new, webclient_update, webclient_resize, webclient_render, webclient_setProjection, webclient_setLongitudeReversed, webclient_isReady, webclient_setImageSurveys, webclient_moveImageSurveysLayerForward, webclient_setOpacityLayer, webclient_setGridColor, webclient_enableGrid, webclient_disableGrid, webclient_hideGridLabels, webclient_showGridLabels, webclient_cooSystem, webclient_setCooSystem, webclient_J20002Gal, webclient_Gal2J2000, webclient_getFieldOfView, webclient_setFieldOfView, webclient_setRotationAroundCenter, webclient_getRotationAroundCenter, webclient_getMaxFieldOfView, webclient_getClipZoomFactor, webclient_setCenter, webclient_getCenter, webclient_moveToLocation, webclient_goFromTo, webclient_worldToScreen, webclient_worldToScreenVec, webclient_screenToWorld, webclient_releaseLeftButtonMouse, webclient_pressLeftMouseButton, webclient_registerWheelEvent, webclient_addCatalog, webclient_isCatalogLoaded, webclient_setCatalogColormap, webclient_setCatalogOpacity, webclient_setCatalogKernelStrength, webclient_projectLine, webclient_getAvailableColormapList, GALCooSys, ICRSJ2000CooSys, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h867d6adb7454a940, _dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfd6e00bd353bc71d, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ "./src/core/pkg/index_bg.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

}]);
//# sourceMappingURL=1.aladin.js.map