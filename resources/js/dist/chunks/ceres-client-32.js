(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    paddingClasses: String,
    paddingStyles: String
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: {
    availability: function availability() {
      var currentVariation = this.$store.getters["".concat(this.itemId, "/currentItemVariation")];
      return currentVariation && currentVariation.variation && currentVariation.variation.availability;
    },
    classes: function classes() {
      return ["availability", "badge", "availability-" + (this.availability && this.availability.id), this.paddingClasses];
    },
    name: function name() {
      return this.availability && this.availability.names && this.availability.names.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=template&id=3f09aa68&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=template&id=3f09aa68& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "single-item-info-card my-4" }, [
    _c("ul", { staticClass: "list-group list-group-flush" }, [
      _c("li", { staticClass: "list-group-item" }, [
        _c("div", { staticClass: "row mb-1" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 mb-1" }, [
            _c("div", { staticClass: "d-flex justify-content-between" }, [
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(_vm._s(_vm.name))
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(1)
        ])
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-2" }, [
      _c("img", {
        attrs: {
          src:
            "https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/assets/img/single-item-icons/truck.svg",
          width: "22",
          height: "22"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-1" }, [
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c("span", [_vm._v("Standard-Lieferung")]),
        _vm._v(" "),
        _c("span", { staticClass: "font-weight-bold" }, [_vm._v(" kostenlos")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-group-item mb-1" }, [
      _c("img", {
        staticClass: "lazyload",
        attrs: {
          src:
            "https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/assets/img/single-item-icons/package.svg",
          width: "22",
          height: "22"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "ml-2" }, [_vm._v("Kostenloser Versand &")]),
      _vm._v(" R??ckversand\n    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-group-item mb-1" }, [
      _c("img", {
        staticClass: "lazyload",
        attrs: {
          src:
            "https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/assets/img/single-item-icons/backarrow.svg",
          width: "22",
          height: "22"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "ml-2" }, [_vm._v("31 Tage R??ckgaberecht")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-group-item mb-1" }, [
      _c("img", {
        staticClass: "lazyload",
        attrs: {
          src:
            "https://cdn02.plentymarkets.com/6wg68w8zahno/frontend/assets/img/single-item-icons/feather.svg",
          width: "22",
          height: "22"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "ml-2" }, [_vm._v("Direkt vom Hersteller")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/app/components/item/ItemAvailability.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemAvailability.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemAvailability_vue_vue_type_template_id_3f09aa68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemAvailability.vue?vue&type=template&id=3f09aa68& */ "./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=template&id=3f09aa68&");
/* harmony import */ var _ItemAvailability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemAvailability.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemAvailability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemAvailability_vue_vue_type_template_id_3f09aa68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemAvailability_vue_vue_type_template_id_3f09aa68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/ItemAvailability.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemAvailability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemAvailability.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemAvailability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=template&id=3f09aa68&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=template&id=3f09aa68& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemAvailability_vue_vue_type_template_id_3f09aa68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemAvailability.vue?vue&type=template&id=3f09aa68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemAvailability.vue?vue&type=template&id=3f09aa68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemAvailability_vue_vue_type_template_id_3f09aa68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemAvailability_vue_vue_type_template_id_3f09aa68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=ceres-client-32.js.map