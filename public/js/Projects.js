(self["webpackChunk"] = self["webpackChunk"] || []).push([["Projects"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_agile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-agile */ "./node_modules/vue-agile/src/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VueAgile: vue_agile__WEBPACK_IMPORTED_MODULE_0__.VueAgile
  },
  props: {
    selectedProject: Object,
    closeWindow: Function
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _ShadowCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShadowCard.vue */ "./resources/js/Components/ShadowCard.vue");
/* harmony import */ var _PopProjectDetails_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopProjectDetails.vue */ "./resources/js/Components/PopProjectDetails.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    projects: Array
  },
  components: {
    CardVue: _ShadowCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PopOver: _PopProjectDetails_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      selectedProject: null
    };
  },
  //Methods
  methods: {
    viewProject: function viewProject(id) {
      this.selectedProject = this.projects.find(function (x) {
        return x.id === id;
      });
    },
    closePopOver: function closePopOver() {
      this.selectedProject = null;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_kinesis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-kinesis */ "./node_modules/vue-kinesis/dist/vue-kinesis.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    KinesisContainer: vue_kinesis__WEBPACK_IMPORTED_MODULE_0__.KinesisContainer,
    KinesisElement: vue_kinesis__WEBPACK_IMPORTED_MODULE_0__.KinesisElement
  },
  data: function data() {
    return {
      hover: false
    };
  },
  props: {
    item: Object,
    txt: Function
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=template&id=333b5c42":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=template&id=333b5c42 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "popover fixed md:h-full w-full overflow-auto flex top-0"
};
var _hoisted_2 = {
  "class": "bg-white md:max-w-xl md:m-auto m-4 rounded-lg"
};
var _hoisted_3 = {
  "class": "relative mb-4 h-8"
};
var _hoisted_4 = {
  "class": "text-2xl text-slate-800 font-bold p-2"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6 text-gray-900",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 18L18 6M6 6l12 12"
})], -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = ["src"];
var _hoisted_8 = {
  "class": "pt-0 pb-8 px-5"
};
var _hoisted_9 = {
  "class": "flex font-medium text-base text-slate-700"
};
var _hoisted_10 = {
  "class": "text-slate-600 text-base mt-4"
};
var _hoisted_11 = {
  "class": "mt-4"
};
var _hoisted_12 = ["href"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Visit Live ");

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-external-link-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_13, _hoisted_14];
var _hoisted_16 = ["href"];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Source ");

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fab fa-github"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_17, _hoisted_18];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VueAgile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VueAgile");

  return $props.selectedProject ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.selectedProject.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "absolute top-2 right-2 cursor-pointer",
    onClick: _cache[0] || (_cache[0] = function () {
      return $props.closeWindow && $props.closeWindow.apply($props, arguments);
    })
  }, _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueAgile, {
    navButtons: true,
    centerMode: true,
    dots: true,
    slidesToShow: 1,
    infinite: false,
    "class": "imgs"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.selectedProject.images, function (img) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
          key: img.id,
          src: img.image,
          alt: "",
          "class": "slide object-contain"
        }, null, 8
        /* PROPS */
        , _hoisted_7);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.selectedProject.tags, function (tag) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      "class": "py-1 capitalize text-xs font-bold mr-3",
      key: tag
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tag.name), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.selectedProject.description), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [$props.selectedProject.demo.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: $props.selectedProject.demo,
    target: "blank",
    "class": "mr-3 disabled:cursor-default mx-auto opacity-75 py-1 px-6 text-[#7510F7] font-semibold rounded-full border-2 border-[#7510F7] shadow-lg block md:inline-block hover:bg-[#7510F7] hover:text-gray-100"
  }, _hoisted_15, 8
  /* PROPS */
  , _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.selectedProject.source,
    target: "blank",
    "class": "disabled:cursor-default md:my-0 my-4 mx-auto opacity-75 py-1 px-6 text-[#7510F7] font-semibold rounded-full border-2 border-[#7510F7] shadow-lg block md:inline-block hover:bg-[#7510F7] hover:text-gray-100"
  }, _hoisted_19, 8
  /* PROPS */
  , _hoisted_16)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Trick the browser to Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "w-full h-full fixed -z-50 top-0",
    onClick: _cache[1] || (_cache[1] = function () {
      return $props.closeWindow && $props.closeWindow.apply($props, arguments);
    })
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=template&id=f07581c0&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=template&id=f07581c0&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f07581c0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container px-2 py-10 mx-auto md:mt-2 bg-gray-200 rounded-2xl md:w-4/5 pb-9 dark:bg-slate-800"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-dark text-3xl text-center mb-7 dark:text-gray-200"
  }, " MY RECENT WORKS ", -1
  /* HOISTED */
  );
});

var _hoisted_3 = {
  "class": "flex flex-wrap justify-center gap-x-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CardVue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CardVue");

  var _component_PopOver = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PopOver");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.projects, function (project, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "mt-3",
      "data-aos": "zoom-in-left",
      "data-aos-once": "false",
      "data-aos-delay": "50",
      "data-aos-duration": "600",
      "Fdata-aos-easing": "ease-in-out"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CardVue, {
      item: project,
      txt: _ctx.viewProject
    }, null, 8
    /* PROPS */
    , ["item", "txt"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PopOver, {
    selectedProject: _ctx.selectedProject,
    closeWindow: _ctx.closePopOver
  }, null, 8
  /* PROPS */
  , ["selectedProject", "closeWindow"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=template&id=501e3cdb&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=template&id=501e3cdb&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-501e3cdb"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "info"
};
var _hoisted_2 = {
  "class": "text-slate-100 font-semibold"
};
var _hoisted_3 = {
  "class": "tags mt-3"
};
var _hoisted_4 = {
  "class": "tags links"
};
var _hoisted_5 = ["href"];
var _hoisted_6 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_kinesis_element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("kinesis-element");

  var _component_kinesis_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("kinesis-container");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_kinesis_container, {
    duration: 300
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_kinesis_element, {
        strength: 3,
        type: "depth_inv"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": "card",
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return $props.txt($props.item.id);
            }),
            onMouseover: _cache[1] || (_cache[1] = function ($event) {
              return _ctx.hover = true;
            }),
            onMouseleave: _cache[2] || (_cache[2] = function ($event) {
              return _ctx.hover = false;
            })
          }, [$props.item.images.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: 0,
            "class": "overlay",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
              background: "linear-gradient(0deg, #1d1e21 9%, rgb(66 68 76 / 35%) 42%, rgba(34, 35, 38, 0) 146% ), url(".concat(_ctx.hover ? $props.item.images[0].image : $props.item.images[1].image, ") top center/cover")
            })
          }, null, 4
          /* STYLE */
          )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: 1,
            "class": "overlay",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
              background: "linear-gradient(0deg, #1d1e21 9%, rgb(66 68 76 / 35%) 42%, rgba(34, 35, 38, 0) 146% ), url(".concat($props.item.images[0].image, ") top center/cover")
            })
          }, null, 4
          /* STYLE */
          )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_kinesis_element, {
            strength: 2,
            type: "depth_inv"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.title), 1
              /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.item.tags, function (tag) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
              "class": "capitalize text-xs font-bold mr-2 text-slate-400",
              key: tag
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tag.name), 1
            /* TEXT */
            );
          }), 128
          /* KEYED_FRAGMENT */
          ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$props.item.demo.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
            key: 0,
            href: $props.item.demo,
            target: "blank"
          }, "Visit Site", 8
          /* PROPS */
          , _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.item.source.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
            key: 1,
            href: $props.item.source,
            target: "blank"
          }, "Source", 8
          /* PROPS */
          , _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 32
          /* HYDRATE_EVENTS */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card:hover .overlay[data-v-501e3cdb] {\n  box-shadow: inset 0px -363px 292px -300px #2e2f3180;\n  opacity: 1;\n}\n.card[data-v-501e3cdb] {\n  width: 320px;\n  height: 480px;\n  background: #212225;\n  border-radius: 0.8rem;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.card img[data-v-501e3cdb] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n  z-index: 0;\n  border-radius: 0px 0px 2rem 2rem;\n}\n.card .overlay[data-v-501e3cdb] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  transform: scale(1.02);\n  border-radius: 1rem;\n  box-shadow: inset 0px 0px 0px 0px #92959a;\n  opacity: 0.7;\n}\n.card .info[data-v-501e3cdb] {\n  padding: 0 1.3rem 2rem 1.3rem;\n  z-index: 3;\n  position: absolute;\n  bottom: 0;\n}\n.card .info h3[data-v-501e3cdb] {\n  grid-area: txt;\n  font-weight: 500;\n  font-size: 1.7rem;\n  line-height: 1.4;\n  margin-bottom: 0rem;\n  margin-top: 0;\n}\n.card .info .tags[data-v-501e3cdb] {\n  display: flex;\n  gap: 0.7rem;\n  font-weight: 500;\n  font-size: 0.8rem;\n  color: var(--txt-med);\n}\n.card .info .tags.links a[data-v-501e3cdb] {\n  color: white;\n  text-decoration: none;\n  margin-top: 0.6rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.agile {\n    position: relative;\n}\n.agile--ssr .agile__slides--cloned {\n    display: none\n}\n.agile--ssr .agile__slides > * {\n    overflow: hidden;\n    width: 0\n}\n.agile--ssr .agile__slides > *:first-child {\n    width: 100%\n}\n.agile--rtl .agile__track,\n  .agile--rtl .agile__slides,\n  .agile--rtl .agile__actions,\n  .agile--rtl .agile__dots {\n    flex-direction: row-reverse;\n}\n.agile:focus, .agile:active, .agile *:focus, .agile *:active {\n    outline: none;\n}\n.agile__list {\n    display: block;\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n.agile__track {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n}\n.agile__actions {\n    display: flex;\n    justify-content: space-between;\n}\n.agile--no-nav-buttons .agile__actions {\n    justify-content: center;\n}\n.agile__slides {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    flex-shrink: unset;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.agile--disabled .agile__slides {\n    display: block;\n    width: 100%;\n}\n.agile__slide {\n    display: block;\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.agile__slide,\n  .agile__slide * {\n    -webkit-user-drag: none;\n}\n.agile--fade .agile__slide {\n    opacity: 0;\n    position: relative;\n    z-index: 0;\n}\n.agile--fade .agile__slide--active {\n    opacity: 1;\n    z-index: 2;\n}\n.agile--fade .agile__slide--expiring {\n    opacity: 1;\n    transition-duration: 0s;\n    z-index: 1;\n}\n.agile__nav-button[disabled] {\n    cursor: default;\n}\n.agile__dots {\n    align-items: center;\n    display: flex;\n    list-style: none;\n    padding: 0;\n    white-space: nowrap;\n}\n.agile__dot button {\n    cursor: pointer;\n    display: block;\n    font-size: 0;\n    line-height: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ndiv.agile__actions {\n    padding: 0 0.7rem;\n}\ndiv.agile__actions > button {\n    color: rgb(0, 0, 0);\n    font-size: xx-large;\n    font-weight: bold;\n}\ndiv.agile__actions > button:disabled {\n    color: #979292;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media screen and (max-width: 680px) {\n.project-card[data-v-f07581c0] {\n        grid-template:\n            \"thumb\"\n            \"title\"\n            \"time\"\n            \"desc\"\n            \"link\"\n            \"pins\" !important;\n        grid-template-columns: auto !important;\n        grid-template-rows: 1fr auto auto auto auto !important;\n        height: auto !important;\n        gap: 0.5rem !important;\n        max-width: 400px;\n        margin: auto;\n}\n.project-card h3[data-v-f07581c0] {\n        -webkit-line-clamp: 4 !important;\n}\n}\n.links > a[data-v-f07581c0]:hover {\n    text-decoration: underline;\n}\n.links > a[data-v-f07581c0] {\n    color: #545454;\n    font-weight: 600;\n    text-decoration: none;\n}\n.tag[data-v-f07581c0]:hover {\n    text-decoration: underline;\n}\n.links[data-v-f07581c0] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    color: gray !important;\n    cursor: default;\n}\n.tags[data-v-f07581c0] {\n    color: gray;\n    /* font-style: italic; */\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n}\nh3[data-v-f07581c0] {\n    font-weight: 500 !important;\n    color: hsl(25 5% 15% / 1);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n}\na.tag[data-v-f07581c0] {\n    margin: 0 !important;\n    color: gray !important;\n    font-weight: 400 !important;\n    text-decoration: none;\n    /* font-style: italic; */\n}\n.link a[data-v-f07581c0] {\n    color: gray;\n    font-weight: 400;\n    font-style: italic;\n}\n.link[data-v-f07581c0] {\n    padding: 0.5rem 1rem 0.5rem 0rem;\n}\n.pins.group > button[data-v-f07581c0] {\n    margin-bottom: 0.7rem;\n}\n.pins > button[data-v-f07581c0]:focus {\n    border: 1px solid black !important;\n    outline: 0;\n}\n.pins > button[data-v-f07581c0]:hover {\n    background: #efefef87;\n    border: 1px solid gray;\n    cursor: pointer;\n}\n.pins > button[data-v-f07581c0] {\n    color: #494949;\n    border-radius: 100px;\n    cursor: default;\n    margin-right: 0.7rem;\n    display: inline-block;\n    background: rgb(0 0 0 / 0.04);\n    letter-spacing: 0.03rem;\n    padding: 0.4em 1.4em;\n    font-size: 15px;\n    border: 1px solid transparent;\n}\n\n/* .pins { */\n\n/* display: flex; */\n\n/* } */\nimg[data-v-f07581c0] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.thumbnail[data-v-f07581c0] {\n    grid-area: thumb;\n    border-radius: 0.5rem;\n    overflow: hidden;\n    /* width: 100px; */\n    /* height: 60px; */\n}\n.description[data-v-f07581c0] {\n    color: hsl(0 0% 25% / 1);\n    max-width: 500px;\n    margin: 0;\n    /* font-family: 'Merriweather', 'Montserrat', sans-serif; */\n    /* font-style: italic; */\n    /* font-weight: 300; */\n    font-size: 15px;\n    max-height: 80px;\n    /* line-height: 1.7; */\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n.time[data-v-f07581c0] {\n    color: gray;\n    font-size: 14px;\n    margin: 0.1rem 0;\n}\n.project-card > a[data-v-f07581c0] {\n    text-decoration: none;\n}\n.project-card > a[data-v-f07581c0]:hover {\n    text-decoration: underline;\n}\n.project-card h3[data-v-f07581c0] {\n    margin-top: 0rem;\n    margin-bottom: 0rem;\n    font-weight: 400;\n    /* letter-spacing: 0.02rem; */\n    font-size: x-large;\n}\n.project-card[data-v-f07581c0] {\n    display: grid;\n    grid-template:\n        \"thumb title\"\n        \"thumb time\"\n        \"thumb desc\"\n        \"thumb link\"\n        \"thumb pins\";\n    grid-template-rows: auto auto 1fr auto;\n    grid-template-columns: auto 1fr;\n    height: 180px;\n    -moz-column-gap: 2rem;\n         column-gap: 2rem;\n    padding: 2.5rem 0rem;\n    /* border-bottom: 1px solid hsl(0 0% 90% / 1); */\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lodash.orderby/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.orderby/index.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = orderBy;


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShadowCard_vue_vue_type_style_index_0_id_501e3cdb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShadowCard_vue_vue_type_style_index_0_id_501e3cdb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShadowCard_vue_vue_type_style_index_0_id_501e3cdb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Agile_vue_vue_type_style_index_0_id_60be9220_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Agile.vue?vue&type=style&index=0&id=60be9220&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Agile_vue_vue_type_style_index_0_id_60be9220_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Agile_vue_vue_type_style_index_0_id_60be9220_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopProjectDetails_vue_vue_type_style_index_0_id_333b5c42_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopProjectDetails_vue_vue_type_style_index_0_id_333b5c42_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopProjectDetails_vue_vue_type_style_index_0_id_333b5c42_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_f07581c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_f07581c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_f07581c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-agile/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vue-agile/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "VueAgile": () => (/* reexport safe */ _Agile_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Agile_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agile.vue */ "./node_modules/vue-agile/src/Agile.vue");


const install = Vue => {
  Vue.component('agile', _Agile_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  install
});




/***/ }),

/***/ "./node_modules/vue-agile/src/mixins/handlers.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-agile/src/mixins/handlers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Handlers methods for mouse/touch events
 */
const mixin = {
  methods: {
    handleMouseDown (e) {
      this.isMouseDown = true

      if (e.type.indexOf('touch') !== -1) {
        this.dragStartX = e.touches[0].clientX
        this.dragStartY = e.touches[0].clientY
      }
      if (e.type.indexOf('mouse') !== -1) {
        this.dragStartX = e.clientX
        this.dragStartY = e.clientY
      }
    },

    handleMouseMove (e) {
      let positionX
      let positionY
      if (e.type.indexOf('touch') !== -1) {
        positionX = e.touches[0].clientX
        positionY = e.touches[0].clientY
      }
      if (e.type.indexOf('mouse') !== -1) {
        positionX = e.clientX
        positionY = e.clientY
      }
      const dragDistanceX = Math.abs(positionX - this.dragStartX)
      const dragDistanceY = Math.abs(positionY - this.dragStartY)
      if (dragDistanceX > 3 * dragDistanceY) {
        this.disableScroll()
        this.dragDistance = positionX - this.dragStartX
      }
    },

    handleMouseUp () {
      this.isMouseDown = false
      this.enableScroll()
    },

    handleMouseOver (element) {
      if (this.settings.autoplay) {
        if ((element === 'dot' && this.settings.pauseOnDotsHover) || (element === 'track' && this.settings.pauseOnHover)) {
          this.isAutoplayPaused = true
        }
      }
    },

    handleMouseOut (element) {
      if (this.settings.autoplay) {
        if ((element === 'dot' && this.settings.pauseOnDotsHover) || (element === 'track' && this.settings.pauseOnHover)) {
          this.isAutoplayPaused = false
        }
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixin);


/***/ }),

/***/ "./node_modules/vue-agile/src/mixins/helpers.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-agile/src/mixins/helpers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Helpers methods
 */
const mixin = {
  methods: {
    /**
     * Set window & container width
     */
    getWidth () {
      if (this.isSSR) {
        return false
      }

      this.widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      this.widthContainer = this.$refs.list.clientWidth
    },

    /**
     * Convert HTML Collection to JS Array
     */
    htmlCollectionToArray (collection) {
      return Array.prototype.slice.call(collection, 0)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixin);


/***/ }),

/***/ "./node_modules/vue-agile/src/mixins/methods.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-agile/src/mixins/methods.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * All not public methods doesn't classified elsewhere
 */
const mixin = {
  methods: {
    clearAutoPlayPause () {
      clearTimeout(this.autoplayTimeout)
      this.autoplayRemaining = null
    },

    disableAutoPlay () {
      clearInterval(this.autoplayInterval)
      this.autoplayInterval = null
    },

    disableScroll () {
      document.ontouchmove = e => e.preventDefault()
    },

    enableScroll () {
      document.ontouchmove = () => true
    },

    restartAutoPlay () {
      this.disableAutoPlay()
      this.toggleAutoPlay()
    },

    toggleAutoPlay () {
      const enabled = (!this.settings.unagile && this.settings.autoplay)

      if (!this.autoplayInterval && enabled) {
        this.autoplayInterval = setInterval(() => {
          if (!document.hidden) {
            if (!this.canGoToNext) {
              this.disableAutoPlay()
            } else {
              this.goToNext()
            }
          }
        }, this.settings.autoplaySpeed)
      } else {
        this.disableAutoPlay()
      }
    },

    toggleFade () {
      const enabled = (!this.settings.unagile && this.settings.fade)

      for (let i = 0; i < this.countSlides; i++) {
        this.slides[i].style.transition = (enabled) ? 'opacity ' + this.settings.timing + ' ' + this.settings.speed + 'ms' : 'none'
        this.slides[i].style.transform = (enabled) ? `translate(-${i * this.widthSlide}px)` : 'none'
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixin);


/***/ }),

/***/ "./node_modules/vue-agile/src/mixins/preparations.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-agile/src/mixins/preparations.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Carousel preparation methods
 */
const mixin = {
  methods: {
    /**
     * Prepare slides classes and styles
     */
    prepareSlides () {
      this.slides = this.htmlCollectionToArray(this.$refs.slides.children)

      // Probably timeout needed
      if (this.slidesCloned) {
        this.slidesClonedBefore = this.htmlCollectionToArray(this.$refs.slidesClonedBefore.children)
        this.slidesClonedAfter = this.htmlCollectionToArray(this.$refs.slidesClonedAfter.children)
      }

      for (const slide of this.slidesAll) {
        slide.classList.add('agile__slide')
      }
    },

    /**
     *  Prepare slides active/current classes
     */
    prepareSlidesClasses () {
      if (this.currentSlide === null) {
        return false
      }

      // Remove active & current classes
      for (let i = 0; i < this.countSlides; i++) {
        this.slides[i].classList.remove('agile__slide--active')
        this.slides[i].classList.remove('agile__slide--current')
      }

      // Add active & current class for current slide
      setTimeout(() => this.slides[this.currentSlide].classList.add('agile__slide--active'), this.changeDelay)

      let start = (this.slidesCloned) ? this.countSlides + this.currentSlide : this.currentSlide

      if (this.centerMode) {
        start -= (Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0))
      }

      // To account for the combination of infinite = false and centerMode = true, ensure we don't overrun the bounds of the slide count.
      for (let i = Math.max(start, 0); i < Math.min(start + this.settings.slidesToShow, this.countSlides); i++) {
        this.slidesAll[i].classList.add('agile__slide--current')
      }
    },

    /**
     * Prepare carousel styles
     */
    prepareCarousel () {
      // Prepare track
      if (this.settings.unagile) {
        this.translateX = 0
      } else {
        if (this.currentSlide === null && this.countSlides) {
          this.currentSlide = this.settings.initialSlide
        }

        if (this.currentSlide > this.countSlides) {
          this.currentSlide = this.countSlides - 1
        }

        this.goTo(this.currentSlide, false, false)
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixin);


/***/ }),

/***/ "./node_modules/vue-agile/src/mixins/settings.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-agile/src/mixins/settings.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_orderby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.orderby */ "./node_modules/lodash.orderby/index.js");
/* harmony import */ var lodash_orderby__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_orderby__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Component settings
 */



const mixin = {
  props: {
    /**
     * Set the carousel to be the navigation of other carousels
     */
    asNavFor: {
      type: Array,
      default: function () {
        return []
      }
    },

    /**
     * Enable autoplay
     */
    autoplay: {
      type: Boolean,
      default: false
    },

    /**
     * Autoplay interval in milliseconds
     */
    autoplaySpeed: {
      type: Number,
      default: 3000
    },

    /**
     * Enable centered view when slidesToShow > 1
     */
    centerMode: {
      type: Boolean,
      default: false
    },

    /**
     * Slides padding in center mode
     */
    centerPadding: {
      type: String,
      default: '15%'
    },

    /**
     * Slide change delay in milliseconds
     */
    changeDelay: {
      type: Number,
      default: 0
    },

    /**
     * Enable dot indicators/pagination
     */
    dots: {
      type: Boolean,
      default: true
    },

    /**
     * Enable fade effect
     */
    fade: {
      type: Boolean,
      default: false
    },

    /**
     * Infinite loop sliding
     */
    infinite: {
      type: Boolean,
      default: true
    },

    /**
     * Index of slide to start on
     */
    initialSlide: {
      type: Number,
      default: 0
    },

    /**
     * Enable mobile first calculation for responsive settings
     */
    mobileFirst: {
      type: Boolean,
      default: true
    },

    /**
     * Enable prev/next navigation buttons
     */
    navButtons: {
      type: Boolean,
      default: true
    },

    /**
     * All settings as one object
     */
    options: {
      type: Object,
      default: () => null
    },

    /**
     * Pause autoplay when a dot is hovered
     */
    pauseOnDotsHover: {
      type: Boolean,
      default: false
    },

    /**
     * Pause autoplay when a slide is hovered
     */
    pauseOnHover: {
      type: Boolean,
      default: true
    },

    /**
     * Object containing breakpoints and settings objects
     */
    responsive: {
      type: Array,
      default: () => null
    },

    /**
     * Enable right-to-left mode
     */
    rtl: {
      type: Boolean,
      default: false
    },

    /**
     * Number of slides to scroll
     */
    slidesToScroll: {
      type: Number,
      default: 1
    },

    /**
     * Number of slides to show
     */
    slidesToShow: {
      type: Number,
      default: 1
    },

    /**
     * Slide animation speed in milliseconds
     */
    speed: {
      type: Number,
      default: 300
    },

    /**
     * Swipe distance
     */
    swipeDistance: {
      type: Number,
      default: 50
    },

    /**
     * Throttle delay in milliseconds
     */
    throttleDelay: {
      type: Number,
      default: 500
    },

    /**
     * Transition timing function
     * Available: ease, linear, ease-in, ease-out, ease-in-out
     */
    timing: {
      type: String,
      default: 'ease',
      validator: value => {
        return ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'].indexOf(value) !== -1
      }
    },

    /**
     * Disable Agile carousel
     */
    unagile: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // Initial settings based on props and options object
    initialSettings: function () {
      // options prop is excluded
      let { options, ...initialSettings } = this.$props

      // Join settings from options
      if (options) {
        initialSettings = { ...initialSettings, ...options }
      }

      // Sort breakpoints
      if (initialSettings.responsive) {
        initialSettings.responsive = lodash_orderby__WEBPACK_IMPORTED_MODULE_0___default()(initialSettings.responsive, 'breakpoint')
      }

      return initialSettings
    },

    // Settings for current breakpoint
    settings: function () {
      const { responsive, ...settings } = this.initialSettings

      if (responsive) {
        responsive.forEach(option => {
          if (settings.mobileFirst ? option.breakpoint < this.widthWindow : option.breakpoint > this.widthWindow) {
            for (const key in option.settings) {
              settings[key] = option.settings[key]
            }
          }
        })
      }

      return settings
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixin);


/***/ }),

/***/ "./node_modules/vue-agile/src/mixins/throttle.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-agile/src/mixins/throttle.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Throttle methods by lodash
 */



const mixin = {
  created () {
    this.goTo = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.goTo, this.throttleDelay)
    this.getWidth = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.getWidth, 500)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixin);


/***/ }),

/***/ "./node_modules/vue-agile/src/mixins/watchers.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-agile/src/mixins/watchers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Component watchers
 */
const mixin = {
  watch: {
    // Recalculate settings
    currentBreakpoint () {
      // this.prepareSettings()
      this.$emit('breakpoint', { breakpoint: this.currentBreakpoint })
    },

    // Watch current slide change
    currentSlide () {
      this.prepareSlidesClasses()

      // Set start time of slide
      this.autoplayStartTimestamp = (this.settings.autoplay) ? +new Date() : null

      this.$emit('after-change', { currentSlide: this.currentSlide })
    },

    // Watch drag distance change
    dragDistance () {
      if (this.isMouseDown) {
        const { rtl } = this.settings
        const dragDistance = this.dragDistance * (rtl ? -1 : 1)

        if (dragDistance > this.swipeDistance && this.canGoToPrev) {
          this.goToPrev()
          this.handleMouseUp()
        }

        if (dragDistance < -1 * this.swipeDistance && this.canGoToNext) {
          this.goToNext()
          this.handleMouseUp()
        }
      }
    },

    isAutoplayPaused (nevValue) {
      if (nevValue) {
        // Store current slide remaining time and disable auto play mode
        this.remaining = this.settings.autoplaySpeed - (+new Date() - this.autoplayStartTimestamp)
        this.disableAutoPlay()
        this.clearAutoPlayPause()
      } else {
        // Go to next after remaining time and rerun auto play mode
        this.autoplayTimeout = setTimeout(() => {
          this.clearAutoPlayPause()
          this.goToNext()
          this.toggleAutoPlay()
        }, this.remaining)
      }
    },

    'settings.autoplay' () {
      this.toggleAutoPlay()
    },

    'settings.fade' () {
      this.toggleFade()
    },

    'settings.unagile' () {
      // this.prepareSlides()
      // this.prepareCarousel()
    },

    widthSlide () {
      for (let i = 0; i < this.countSlidesAll; i++) {
        // console.log(this.widthSlide)
        // console.log(this.settings)
        this.slidesAll[i].style.width = `${this.widthSlide}${(this.widthSlide !== 'auto') ? 'px' : ''}`
      }
    },

    // Watch window width change
    widthWindow (newValue, oldValue) {
      if (oldValue) {
        this.prepareCarousel()
        this.toggleFade()
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixin);


/***/ }),

/***/ "./node_modules/vue-kinesis/dist/vue-kinesis.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-kinesis/dist/vue-kinesis.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "KinesisAudio": () => (/* binding */ script),
/* harmony export */   "KinesisContainer": () => (/* binding */ script$1),
/* harmony export */   "KinesisDistance": () => (/* binding */ script$2),
/* harmony export */   "KinesisElement": () => (/* binding */ script$3),
/* harmony export */   "KinesisScroll": () => (/* binding */ script$4)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var motionMixin = {
  props: {
    type: {
      type: String,
      default: 'translate' // translate, rotate, scale, scaleX, scaleY, depth, depth_inv, custom

    },
    transformOrigin: {
      type: String,
      default: 'center'
    },
    originX: {
      type: Number,
      default: 50
    },
    originY: {
      type: Number,
      default: 50
    },
    strength: {
      type: Number,
      default: 10
    },
    audioIndex: {
      type: Number,
      default: 50
    },
    axis: {
      type: String,
      default: null
    },
    maxX: {
      type: Number,
      default: null
    },
    maxY: {
      type: Number,
      default: null
    },
    minX: {
      type: Number,
      default: null
    },
    minY: {
      type: Number,
      default: null
    },
    cycle: {
      type: Number,
      default: 0
    }
  },
  methods: {
    strengthManager() {
      return this.type === 'depth' || this.type === 'depth_inv' ? Math.abs(this.strength) : this.strength;
    }

  }
};

var script = {
  name: 'KinesisAudio',
  inject: ['context'],
  mixins: [motionMixin],
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    audioIndex: {
      type: Number,
      default: 50
    }
  },
  computed: {
    transform() {
      return this.transformAudio();
    },

    transformParameters() {
      return {
        transitionProperty: 'transform',
        transitionDuration: this.transitionDuration,
        transformOrigin: this.transformOrigin,
        transitionTimingFunction: this.transitionTimingFunction
      };
    },

    transitionDuration() {
      const {
        duration
      } = this.context;
      return `${duration}ms`;
    },

    transitionTimingFunction() {
      return this.context.easing;
    }

  },
  methods: {
    transformAudio() {
      const {
        audioData
      } = this.context;
      if (!this.context.audioData) return;
      const transformType = this.type;
      const {
        strength
      } = this;
      let amplitude;
      let transform; // eslint-disable-next-line default-case

      switch (transformType) {
        case 'translate':
          amplitude = audioData ? audioData[0][this.audioIndex] : 0;
          transform = `translate3d(${amplitude * strength}px, 0, 0)`;
          break;

        case 'rotate':
          amplitude = audioData ? audioData[0][this.audioIndex] : 0;
          transform = `rotate3d(0,0,1,${amplitude * strength / 10}deg)`;
          break;

        case 'scale':
          // eslint-disable-next-line no-nested-ternary
          amplitude = audioData ? audioData[0][this.audioIndex] / strength < 1 ? 1 : audioData[0][this.audioIndex] / (strength * 2) : 1;
          transform = `scale(${amplitude})`;
          break;
      } // eslint-disable-next-line consistent-return


      return {
        transform
      };
    }

  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.tag), {
    style: { ...$options.transform,
      ...$options.transformParameters
    }
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["style"]);
}

script.render = render;

function inViewport(element) {
  const isInViewport = element.bottom >= 0 && element.right >= 0 && element.top <= (window.innerHeight || document.documentElement.clientHeight) && element.left <= (window.innerWidth || document.documentElement.clientWidth);
  return isInViewport;
}

function throttle(callback, delay, type) {
  let last;
  let timer; // eslint-disable-next-line func-names

  return function () {
    const context = this;
    let newDelay;

    if (type === 'scroll') {
      newDelay = delay;
    } else {
      newDelay = context.duration > 1000 ? delay : context.duration / 10;
    }

    const now = +new Date(); // eslint-disable-next-line prefer-rest-params

    const args = arguments;

    if (last && now < last + newDelay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        requestAnimationFrame(() => {
          last = now;
          callback.apply(context, args);
        });
      }, newDelay);
    } else {
      requestAnimationFrame(() => {
        last = now;
        callback.apply(context, args);
      });
    }
  };
}

var baseMixin = {
  props: {
    active: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1000
    },
    easing: {
      type: String,
      default: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
};

var perspectiveMixin = {
  props: {
    perspective: {
      type: Number,
      default: 1000
    }
  },
  computed: {
    style() {
      return {
        perspective: `${this.perspective}px`
      };
    }

  }
};

var audioMixin = {
  props: {
    audio: {
      type: String,
      required: false
    },
    playAudio: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      analyser: null,
      audioArray: null,
      audioData: null,
      audioRef: null,
      wasPlayed: false,
      isPlaying: false
    };
  },

  watch: {
    audio() {
      this.wasPlayed = false;
      this.isPlaying = false;
    },

    playAudio(play) {
      if (play) {
        this.play();
      } else {
        this.stop();
      }
    }

  },
  methods: {
    play() {
      if (!this.active) return;

      if (!this.wasPlayed) {
        this.handleAudio();
        this.wasPlayed = true;
      }

      this.isPlaying = true;
      this.audioRef.play();
      this.getSongData();
    },

    stop() {
      this.isPlaying = false;
      this.audioRef.pause();
    },

    handleAudio() {
      const {
        audio
      } = this.$refs;
      this.audioRef = audio;
      const context = new AudioContext();
      const src = context.createMediaElementSource(audio);
      const analyser = context.createAnalyser();
      src.connect(analyser);
      analyser.connect(context.destination);
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const audioArray = new Uint8Array(bufferLength);
      this.audioArray = audioArray;
      this.analyser = analyser;
    },

    getSongData() {
      if (this.isPlaying) {
        this.analyser.getByteFrequencyData(this.audioArray);
        this.audioData = new Array(this.audioArray); // @Todo reactivity issue

        requestAnimationFrame(this.getSongData);
      }
    }

  }
};

function isTouch() {
  try {
    return /Mobi|Android/i.test(navigator.userAgent);
  } catch (e) {
    return true;
  }
}

var containerEvents = {
  props: {
    event: {
      type: String,
      default: 'move' // move, scroll

    }
  },

  data() {
    return {
      eventMap: {
        orientation: 'deviceorientation',
        scroll: 'scroll',
        move: isTouch() ? 'deviceorientation' : null
      }
    };
  },

  methods: {
    addEvents() {
      if (this.eventMap[this.event]) {
        window.addEventListener(this.eventMap[this.event], this.handleMovement, true);
      }
    },

    removeEvents() {
      if (this.eventMap[this.event]) {
        window.removeEventListener(this.eventMap[this.event], this.handleMovement, true);
      }
    }

  },
  watch: {
    event(newVal, oldVal) {
      if (this.eventMap[newVal]) {
        window.addEventListener(this.eventMap[newVal], this.handleMovement, true);
      }

      if (this.eventMap[oldVal]) {
        window.addEventListener(this.eventMap[oldVal], this.handleMovement, true);
      }
    }

  }
};

function getCoordinates (x, y) {
  return {
    x,
    y
  };
}

function getCenter (element) {
  return getCoordinates(element ? element.width / 2 : 0, element ? element.height / 2 : 0);
}

function mouseMovement (action) {
  const {
    target,
    event
  } = action;
  const x = event.clientX;
  const y = event.clientY;
  const relativeX = x - target.left;
  const relativeY = y - target.top;
  const center = getCenter(target);
  const mouseMovementX = relativeX / center.x;
  const mouseMovementY = relativeY / center.y;
  return { ...getCoordinates(mouseMovementX, mouseMovementY),
    target
  };
}

function orientationElement (action) {
  const {
    event,
    target
  } = action;
  const x = event.gamma / 45;
  const y = event.beta / 90;
  return { ...getCoordinates(x, y),
    target
  };
}

function scrollMovement (target) {
  const x = (target.left - window.innerWidth) / (target.width + window.innerWidth);
  const y = (target.top - window.innerHeight) / (target.height + window.innerHeight);
  return { ...getCoordinates(x, y),
    target
  };
}

var script$1 = {
  name: "KinesisContainer",
  mixins: [baseMixin, perspectiveMixin, audioMixin, containerEvents],

  provide() {
    const context = {};
    const providedProps = ["audioData", "duration", "easing", "event", "eventData", "isMoving", "movement", "shape"];
    providedProps.forEach(prop => Object.defineProperty(context, prop, {
      enumerable: true,
      get: () => this[prop]
    }));
    return {
      context
    };
  },

  data() {
    return {
      movement: {
        x: 0,
        y: 0
      },
      isMoving: false,
      shape: null,
      leftOnce: false,
      eventData: {
        x: 0,
        y: 0
      }
    };
  },

  mounted() {
    this.addEvents();
  },

  beforeUnmount() {
    this.removeEvents();
  },

  methods: {
    // eslint-disable-next-line func-names
    handleMovement: throttle(function (event) {
      if (!this.active) return;

      if (!this.isMoving && !this.leftOnce) {
        // fixes the specific case when mouseenter didn't trigger on page refresh
        this.isMoving = true;
      }

      this.shape = this.$el.getBoundingClientRect();
      const isInViewport = inViewport(this.shape);

      if (this.event === "move" && this.isMoving && !isTouch()) {
        this.movement = mouseMovement({
          target: this.shape,
          event
        });
        this.eventData = getCoordinates(event.clientX, event.clientY);
      } else if ((this.event === "orientation" || this.event === "move" && isTouch()) && isInViewport) {
        this.movement = orientationElement({
          target: this.shape,
          event
        });
      } else if (this.event === "scroll" && isInViewport && !!this.shape.height) {
        this.movement = scrollMovement(this.shape);
      }
    }, 100),

    handleMovementStart() {
      if (!this.active) return;
      this.isMoving = true;
    },

    handleMovementStop() {
      if (!this.active) return; // fixes the specific case when mouseenter didn't trigger on page refresh

      this.leftOnce = true;
      this.isMoving = false;
    }

  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.tag), {
    onMousemove: $options.handleMovement,
    onMouseenter: $options.handleMovementStart,
    onMouseleave: $options.handleMovementStop,
    style: _ctx.style
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), _ctx.audio ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("audio", {
      key: 0,
      type: "audio/mpeg",
      onEnded: _cache[1] || (_cache[1] = (...args) => _ctx.stop && _ctx.stop(...args)),
      ref: "audio"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("source", {
      src: _ctx.audio
    }, null, 8, ["src"])], 544)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)]),
    _: 3
  }, 8, ["onMousemove", "onMouseenter", "onMouseleave", "style"]);
}

script$1.render = render$1;

var script$2 = {
  name: 'KinesisDistance',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      type: String,
      default: 'translate' // translate, rotate, scale, scaleX, scaleY, depth, custom

    },
    transformOrigin: {
      type: String,
      default: 'center'
    },
    originX: {
      type: Number,
      default: 50
    },
    originY: {
      type: Number,
      default: 50
    },
    strength: {
      type: Number,
      default: 10
    },
    axis: {
      type: String,
      default: null
    },
    maxX: {
      type: Number,
      default: null
    },
    maxY: {
      type: Number,
      default: null
    },
    minX: {
      type: Number,
      default: null
    },
    minY: {
      type: Number,
      default: null
    },
    distance: {
      type: Number,
      default: 100
    },
    cycle: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1001
    },
    easing: {
      type: String,
      default: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    perspective: {
      type: Number,
      default: 1000
    }
  },

  data() {
    return {
      pointer: {
        x: 0,
        y: 0
      },
      transform: {},
      component: 'kidistance',
      throttle: 500
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleMovement);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleMovement);
  },

  computed: {
    style() {
      return {
        perspective: `${this.perspective}px`
      };
    },

    transformParameters() {
      return {
        position: 'relative',
        transitionProperty: 'transform',
        transitionDuration: this.transitionDuration,
        transformOrigin: this.transformOrigin,
        transitionTimingFunction: this.easing
      };
    },

    transitionDuration() {
      return `${this.duration}ms`;
    }

  },
  methods: {
    getCoordinates(x, y) {
      const shape = this.$el.getBoundingClientRect();
      return {
        x: x + shape.left,
        y: y + shape.top
      };
    },

    getDistance(x1, x2, y1, y2) {
      return Math.floor(Math.hypot(x2 - x1, y2 - y1));
    },

    // eslint-disable-next-line func-names
    handleMovement: throttle(function (event) {
      window.addEventListener('mousemove', this.handleMovement);
      const {
        pointer
      } = this;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      this.transformBehavior();
    }, 50),

    transformBehavior() {
      const shape = this.$el.getBoundingClientRect();
      const center = this.getCoordinates(shape.width / 2, shape.height / 2);
      const distance = this.getDistance(this.pointer.x, center.x, this.pointer.y, center.y);

      if (distance > this.distance) {
        this.transform = {};
        this.throttle = 500;
        return;
      }

      this.throttle = 50;
      const transform = `scale(${distance / this.distance})`; // Add radius from which the transfrom will start

      this.transform = {
        transform
      };
    },

    scaleMovement(x, y) {
      const {
        type
      } = this;
      const movement = Math.sign(this.strength) * (Math.abs(x) + Math.abs(y)) / 10 + 1;
      return `scale3d(${type === 'scaleX' || type === 'scale' ? movement : 1},
      ${type === 'scaleY' || type === 'scale' ? movement : 1},
      1)`;
    }

  }
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.tag), {
    style: { ...$data.transform,
      ...$options.transformParameters
    }
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["style"]);
}

script$2.render = render$2;

/* eslint-disable default-case */
var transformMixin = {
  methods: {
    transformSwitch(type, x, y, s) {
      let transform;

      switch (type) {
        case 'translate':
          transform = this.translateMovement(x, y);
          break;

        case 'rotate':
          transform = this.rotateMovement(x, y);
          break;

        case 'depth':
          transform = this.depthMovement(x, y, s);
          break;

        case 'depth_inv':
          transform = this.depthMovement(-x, -y, s);
          break;

        case 'scale':
          transform = this.scaleMovement(x, y);
          break;
      }

      return transform;
    },

    translateMovement(x, y) {
      return `translate3d(${-x}px, ${-y}px, 0)`;
    },

    rotateMovement(x, y) {
      let movement;

      if (!this.axis) {
        movement = x + y;
      } else if (this.axis === 'x') {
        movement = 2 * x;
      } else if (this.axis === 'y') {
        movement = 2 * y;
      }

      return `rotate3d(0,0,1,${movement}deg)`;
    },

    depthMovement(x, y, s) {
      return `rotateX(${-y}deg) rotateY(${x}deg) translate3d(0,0,${s * 2}px)`;
    },

    scaleMovement(x, y) {
      const {
        type
      } = this;
      const movement = Math.sign(this.strength) * (Math.abs(x) + Math.abs(y)) / 10 + 1;
      return `scale3d(${type === 'scaleX' || type === 'scale' ? movement : 1},
            ${type === 'scaleY' || type === 'scale' ? movement : 1},
            1)`;
    }

  }
};

function elementMovement (action) {
  const {
    y,
    x,
    target,
    originX = 50,
    strength = 10,
    event = null
  } = action;
  let {
    originY = 50
  } = action;

  if (event === 'scroll') {
    originY = -originY / 2;
  }

  const movementX = (x - originX / 50) * strength;
  const movementY = (y - originY / 50) * strength;
  return { ...getCoordinates(movementX, movementY),
    target
  };
}

/* eslint-disable no-nested-ternary */
function clamp (value, min, max) {
  return max && value > max ? max : min && value < min ? min : value;
}

function cyclicMovement (cycleData) {
  const {
    referencePosition,
    elementPosition,
    spanningRange,
    cycles
  } = cycleData;
  const radialPosition = (referencePosition - elementPosition) * (Math.PI * 2) / spanningRange;
  const cycle = spanningRange * Math.sin(radialPosition * cycles);
  return cycle / (spanningRange / 2);
}

var script$3 = {
  name: 'KinesisElement',
  mixins: [motionMixin, transformMixin],
  inject: ['context'],
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    transform() {
      return this.transformMovement();
    },

    getContext() {
      return this.context;
    },

    transformParameters() {
      return {
        transitionProperty: 'transform',
        transitionDuration: this.transitionDuration,
        transformOrigin: this.transformOrigin,
        transitionTimingFunction: this.transitionTimingFunction
      };
    },

    transitionDuration() {
      const {
        duration
      } = this.context;
      return `${duration}ms`;
    },

    transitionTimingFunction() {
      return this.context.easing;
    },

    isTouch() {
      return isTouch();
    }

  },
  methods: {
    transformMovement() {
      const {
        context
      } = this;
      if (!context.isMoving && context.event === 'move') return {};
      let movementX;
      let movementY;
      const eventTrigger = context.event;
      const strength = this.strengthManager();

      if (this.cycle <= 0) {
        const {
          x,
          y
        } = elementMovement({ ...context.movement,
          originX: this.originX,
          originY: this.originY,
          strength
        });
        const isScroll = eventTrigger === 'scroll';

        if (!isScroll) {
          movementX = this.axis === 'y' ? 0 : clamp(x, this.minX, this.maxX);
          movementY = this.axis === 'x' ? 0 : clamp(y, this.minY, this.maxY);
        }

        if (isScroll) {
          const scrollMovement = elementMovement({
            x: context.movement.x,
            y: context.movement.y,
            originX: this.originX,
            originY: this.originY,
            strength,
            event: context.event
          }).y;
          movementX = this.axis === 'x' ? scrollMovement : 0;
          movementY = this.axis === 'y' || !this.axis ? scrollMovement : 0;
        }
      } else if (this.cycle > 0) {
        const {
          shape,
          eventData
        } = context;

        if (shape) {
          const cycleX = this.axis === 'x' ? cyclicMovement({
            referencePosition: eventTrigger === 'scroll' ? 0 : eventData.x,
            elementPosition: shape.left,
            spanningRange: eventTrigger === 'scroll' ? window.innerWidth : shape.width,
            cycles: this.cycle
          }) : 0;
          const cycleY = this.axis === 'y' || !this.axis ? cyclicMovement({
            referencePosition: eventTrigger === 'scroll' ? 0 : eventData.y,
            elementPosition: shape.top,
            spanningRange: eventTrigger === 'scroll' ? window.innerHeight : shape.height,
            cycles: this.cycle
          }) : 0;
          movementX = cycleX * strength;
          movementY = cycleY * strength;
        }
      }

      let transformType = this.type;
      transformType = transformType === 'scaleX' || transformType === 'scaleY' ? 'scale' : transformType;
      const transform = this.transformSwitch(transformType, movementX, movementY, this.strength);
      return {
        transform
      };
    }

  }
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.tag), {
    style: { ...$options.transform,
      ...$options.transformParameters
    }
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["style"]);
}

script$3.render = render$3;

var script$4 = {
  name: 'KinesisScroll',
  mixins: [baseMixin, perspectiveMixin, motionMixin, transformMixin],

  data() {
    return {
      transform: {}
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, {
      passive: true
    });
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll, {
      passive: true
    });
  },

  computed: {
    transformParameters() {
      return {
        transitionProperty: 'transform',
        transitionDuration: this.transitionDuration,
        transformOrigin: this.transformOrigin,
        transitionTimingFunction: this.easing
      };
    },

    transitionDuration() {
      return `${this.duration}ms`;
    }

  },
  methods: {
    getCycleMovement(xPos, yPos, width, height, shape) {
      const x = (xPos - shape.left) * (Math.PI * 2) / width;
      const y = (yPos - shape.top) * (Math.PI * 2) / height;
      this.cycleMovement = {
        x,
        y,
        width,
        height
      };
    },

    handleScroll: throttle( // eslint-disable-next-line func-names
    function () {
      if (!this.active) return;
      const shape = this.$el.getBoundingClientRect();
      const isInViewport = inViewport(shape);

      if (isInViewport && !!shape.height) {
        this.transformBehavior(shape);
      }
    }, 19, 'scroll'),

    transformBehavior(shape) {
      let movementX;
      let movementY;
      const scrollPosition = (shape.top - window.innerHeight) / (shape.height + window.innerHeight);

      if (this.cycle <= 0) {
        const scrollMovement = scrollPosition * this.strength;
        movementX = this.axis === 'x' ? scrollMovement : 0;
        movementY = this.axis === 'y' || !this.axis ? scrollMovement : 0;

        if (this.maxX) {
          movementX = Math.min(movementX, this.maxX);
        }

        if (this.minX) {
          movementX = Math.max(movementX, this.minX);
        }

        if (this.maxY) {
          movementY = Math.min(movementY, this.maxY);
        }

        if (this.minY) {
          movementY = Math.max(movementY, this.minY);
        }
      } else if (this.cycle > 0) {
        const {
          x,
          y,
          width,
          height
        } = this.getCycleMovement(0, 0, window.innerWidth, window.innerHeight, shape);
        const cycleX = width * Math.sin(x * this.cycle);
        const cycleY = height * Math.sin(y * this.cycle);
        movementX = this.axis === 'x' ? cycleX / (width / 2) * this.strength : 0;
        movementY = this.axis === 'y' || !this.axis ? cycleY / (height / 2) * this.strength : 0;
      }

      let transformType = this.type;
      transformType = transformType === 'scaleX' || transformType === 'scaleY' ? 'scale' : transformType;
      const transform = this.transformSwitch(transformType, movementX, movementY, this.strength);
      this.transform = {
        transform
      };
    }

  }
};

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.tag), {
    style: { ...$data.transform,
      ...$options.transformParameters
    }
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["style"]);
}

script$4.render = render$4;

const install = function installVueKinesis(app) {
  app.component(script.name, script);
  app.component(script$1.name, script$1);
  app.component(script$2.name, script$2);
  app.component(script$3.name, script$3);
  app.component(script$4.name, script$4);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (install);



/***/ }),

/***/ "./node_modules/vue-agile/src/Agile.vue":
/*!**********************************************!*\
  !*** ./node_modules/vue-agile/src/Agile.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Agile_vue_vue_type_template_id_60be9220__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agile.vue?vue&type=template&id=60be9220 */ "./node_modules/vue-agile/src/Agile.vue?vue&type=template&id=60be9220");
/* harmony import */ var _Agile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Agile.vue?vue&type=script&lang=js */ "./node_modules/vue-agile/src/Agile.vue?vue&type=script&lang=js");
/* harmony import */ var _Agile_vue_vue_type_style_index_0_id_60be9220_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Agile.vue?vue&type=style&index=0&id=60be9220&lang=css */ "./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css");
/* harmony import */ var F_xampp_htdocs_PORTFOLIO_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_PORTFOLIO_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Agile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Agile_vue_vue_type_template_id_60be9220__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/vue-agile/src/Agile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/handlers */ "./node_modules/vue-agile/src/mixins/handlers.js");
/* harmony import */ var _mixins_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/helpers */ "./node_modules/vue-agile/src/mixins/helpers.js");
/* harmony import */ var _mixins_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/methods */ "./node_modules/vue-agile/src/mixins/methods.js");
/* harmony import */ var _mixins_preparations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/preparations */ "./node_modules/vue-agile/src/mixins/preparations.js");
/* harmony import */ var _mixins_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/settings */ "./node_modules/vue-agile/src/mixins/settings.js");
/* harmony import */ var _mixins_throttle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/throttle */ "./node_modules/vue-agile/src/mixins/throttle.js");
/* harmony import */ var _mixins_watchers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixins/watchers */ "./node_modules/vue-agile/src/mixins/watchers.js");

  
  
  
  
  
  
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'agile',

    mixins: [_mixins_handlers__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_helpers__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_methods__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_preparations__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_settings__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_throttle__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_watchers__WEBPACK_IMPORTED_MODULE_6__["default"]],

    emits: ['before-change', 'after-change', 'breakpoint'],

    data () {
      return {
        autoplayInterval: null,
        autoplayRemaining: null,
        autoplayStartTimestamp: null,
        autoplayTimeout: null,
        currentSlide: null,
        dragDistance: 0,
        dragStartX: 0,
        dragStartY: 0,
        isAutoplayPaused: false,
        isMouseDown: false,
        slides: [],
        slidesClonedAfter: [],
        slidesClonedBefore: [],
        isSSR: (typeof window === 'undefined'),
        transitionDelay: 0,
        translateX: 0,
        widthWindow: 0,
        widthContainer: 0
      }
    },

    computed: {
      breakpoints: function () {
        return (!this.initialSettings.responsive) ? [] : this.initialSettings.responsive.map(item => item.breakpoint)
      },

      canGoToPrev: function () {
        return (this.settings.infinite || this.currentSlide > 0)
      },

      canGoToNext: function () {
        return (this.settings.infinite || this.currentSlide < this.countSlides - 1)
      },

      countSlides: function () {
        return (this.isSSR) ? this.htmlCollectionToArray(this.$slots.default).length : this.slides.length
      },

      countSlidesAll: function () {
        return this.slidesAll.length
      },

      currentBreakpoint: function () {
        const breakpoints = this.breakpoints.map(item => item).reverse()
        return (this.initialSettings.mobileFirst) ? breakpoints.find(item => item < this.widthWindow) || 0 : breakpoints.find(item => item > this.widthWindow) || null
      },

      marginX: function () {
        if (this.settings.unagile) {
          return 0
        }

        let marginX = (this.slidesCloned) ? this.countSlides * this.widthSlide : 0

        // Center mode margin
        if (this.settings.centerMode) {
          marginX -= (Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0)) * this.widthSlide
        }

        return (this.settings.rtl) ? marginX : -1 * marginX
      },

      slidesCloned: function () {
        return (!this.settings.unagile && !this.settings.fade && this.settings.infinite)
      },

      slidesAll: function () {
        return (this.slidesCloned) ? [...this.slidesClonedBefore, ...this.slides, ...this.slidesClonedAfter] : this.slides
      },

      widthSlide: function () {
        return (!this.settings.unagile) ? this.widthContainer / this.settings.slidesToShow : 'auto'
      }
    },

    mounted () {
      // Windows resize listener
      window.addEventListener('resize', this.getWidth)

      // Mouse and touch events
      this.$refs.track.addEventListener('touchstart', this.handleMouseDown)
      this.$refs.track.addEventListener('touchend', this.handleMouseUp)
      this.$refs.track.addEventListener('touchmove', this.handleMouseMove)
      this.$refs.track.addEventListener('mousedown', this.handleMouseDown)
      this.$refs.track.addEventListener('mouseup', this.handleMouseUp)
      this.$refs.track.addEventListener('mousemove', this.handleMouseMove)

      // Init
      this.isSSR = false
      this.reload()
    },

    // Vue 3
    beforeUnmount () {
      this.destroy()
    },

    methods: {
      destroy () {
        window.removeEventListener('resize', this.getWidth)

        this.$refs.track.removeEventListener('touchstart', this.handleMouseDown)
        this.$refs.track.removeEventListener('touchend', this.handleMouseUp)
        this.$refs.track.removeEventListener('touchmove', this.handleMouseMove)
        this.$refs.track.removeEventListener('mousedown', this.handleMouseDown)
        this.$refs.track.removeEventListener('mouseup', this.handleMouseUp)
        this.$refs.track.removeEventListener('mousemove', this.handleMouseMove)

        this.disableAutoPlay()
      },

      // Return current breakpoint
      getCurrentBreakpoint () {
        return this.currentBreakpoint
      },

      // Return settings for current breakpoint
      getCurrentSettings () {
        return this.settings
      },

      // Return current slide index
      getCurrentSlide () {
        return this.currentSlide
      },

      // Return initial settings
      getInitialSettings () {
        return this.initialSettings
      },

      // Go to slide
      goTo (n, transition = true, asNav = false) {
        // Break goTo() if unagile is active
        if (this.settings.unagile) {
          return false
        }

        if (!asNav) {
          this.settings.asNavFor.forEach(carousel => {
            if (carousel) {
              carousel.goTo(n, transition, true)
            }
          })
        }

        let slideNextReal = n

        if (transition) {
          if (this.settings.infinite && n < 0) {
            slideNextReal = this.countSlides - 1
          } else if (n >= this.countSlides) {
            slideNextReal = 0
          }

          this.$emit('before-change', { currentSlide: this.currentSlide, nextSlide: slideNextReal })

          this.currentSlide = slideNextReal

          if (n !== slideNextReal) {
            setTimeout(() => {
              this.goTo(slideNextReal, false)
            }, this.settings.speed)
          }
        }

        const translateX = (!this.settings.fade) ? n * this.widthSlide * this.settings.slidesToScroll : 0
        this.transitionDelay = (transition) ? this.speed : 0

        if (this.infinite || (this.currentSlide + this.slidesToShow <= this.countSlides)) {
          this.translateX = (this.settings.rtl) ? translateX : -1 * translateX
        }
      },

      // Go to next slide
      goToNext () {
        if (this.canGoToNext) {
          this.goTo(this.currentSlide + 1)
        }
      },

      // Go to previous slide
      goToPrev () {
        if (this.canGoToPrev) {
          this.goTo(this.currentSlide - 1)
        }
      },

      // Reload carousel
      reload () {
        this.getWidth()
        this.prepareSlides()
        this.prepareCarousel()
        this.toggleFade()
        this.toggleAutoPlay()
      }
    }
  });


/***/ }),

/***/ "./resources/js/Components/PopProjectDetails.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/PopProjectDetails.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PopProjectDetails_vue_vue_type_template_id_333b5c42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopProjectDetails.vue?vue&type=template&id=333b5c42 */ "./resources/js/Components/PopProjectDetails.vue?vue&type=template&id=333b5c42");
/* harmony import */ var _PopProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopProjectDetails.vue?vue&type=script&lang=js */ "./resources/js/Components/PopProjectDetails.vue?vue&type=script&lang=js");
/* harmony import */ var _PopProjectDetails_vue_vue_type_style_index_0_id_333b5c42_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css */ "./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css");
/* harmony import */ var F_xampp_htdocs_PORTFOLIO_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_PORTFOLIO_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PopProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PopProjectDetails_vue_vue_type_template_id_333b5c42__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/PopProjectDetails.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Sections/Projects.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/Sections/Projects.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects_vue_vue_type_template_id_f07581c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=f07581c0&scoped=true */ "./resources/js/Components/Sections/Projects.vue?vue&type=template&id=f07581c0&scoped=true");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js */ "./resources/js/Components/Sections/Projects.vue?vue&type=script&lang=js");
/* harmony import */ var _Projects_vue_vue_type_style_index_0_id_f07581c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css */ "./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css");
/* harmony import */ var F_xampp_htdocs_PORTFOLIO_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_PORTFOLIO_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Projects_vue_vue_type_template_id_f07581c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f07581c0"],['__file',"resources/js/Components/Sections/Projects.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/ShadowCard.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/ShadowCard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShadowCard_vue_vue_type_template_id_501e3cdb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShadowCard.vue?vue&type=template&id=501e3cdb&scoped=true */ "./resources/js/Components/ShadowCard.vue?vue&type=template&id=501e3cdb&scoped=true");
/* harmony import */ var _ShadowCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadowCard.vue?vue&type=script&lang=js */ "./resources/js/Components/ShadowCard.vue?vue&type=script&lang=js");
/* harmony import */ var _ShadowCard_vue_vue_type_style_index_0_id_501e3cdb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true */ "./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true");
/* harmony import */ var F_xampp_htdocs_PORTFOLIO_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_PORTFOLIO_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ShadowCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShadowCard_vue_vue_type_template_id_501e3cdb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-501e3cdb"],['__file',"resources/js/Components/ShadowCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/PopProjectDetails.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/PopProjectDetails.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopProjectDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopProjectDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Sections/Projects.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/Sections/Projects.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/ShadowCard.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Components/ShadowCard.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShadowCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShadowCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShadowCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/PopProjectDetails.vue?vue&type=template&id=333b5c42":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/PopProjectDetails.vue?vue&type=template&id=333b5c42 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopProjectDetails_vue_vue_type_template_id_333b5c42__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopProjectDetails_vue_vue_type_template_id_333b5c42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopProjectDetails.vue?vue&type=template&id=333b5c42 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=template&id=333b5c42");


/***/ }),

/***/ "./resources/js/Components/Sections/Projects.vue?vue&type=template&id=f07581c0&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/Sections/Projects.vue?vue&type=template&id=f07581c0&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_f07581c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_f07581c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=template&id=f07581c0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=template&id=f07581c0&scoped=true");


/***/ }),

/***/ "./resources/js/Components/ShadowCard.vue?vue&type=template&id=501e3cdb&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/Components/ShadowCard.vue?vue&type=template&id=501e3cdb&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShadowCard_vue_vue_type_template_id_501e3cdb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShadowCard_vue_vue_type_template_id_501e3cdb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShadowCard.vue?vue&type=template&id=501e3cdb&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=template&id=501e3cdb&scoped=true");


/***/ }),

/***/ "./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShadowCard_vue_vue_type_style_index_0_id_501e3cdb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ShadowCard.vue?vue&type=style&index=0&id=501e3cdb&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Agile_vue_vue_type_style_index_0_id_60be9220_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Agile.vue?vue&type=style&index=0&id=60be9220&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=style&index=0&id=60be9220&lang=css");


/***/ }),

/***/ "./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PopProjectDetails_vue_vue_type_style_index_0_id_333b5c42_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/PopProjectDetails.vue?vue&type=style&index=0&id=333b5c42&lang=css");


/***/ }),

/***/ "./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_f07581c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sections/Projects.vue?vue&type=style&index=0&id=f07581c0&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue-agile/src/Agile.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-agile/src/Agile.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_Agile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_Agile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Agile.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-agile/src/Agile.vue?vue&type=template&id=60be9220":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-agile/src/Agile.vue?vue&type=template&id=60be9220 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Agile_vue_vue_type_template_id_60be9220__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Agile_vue_vue_type_template_id_60be9220__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Agile.vue?vue&type=template&id=60be9220 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=template&id=60be9220");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=template&id=60be9220":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-agile/src/Agile.vue?vue&type=template&id=60be9220 ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = {
  ref: "list",
  class: "agile__list"
}
const _hoisted_2 = {
  ref: "slidesClonedBefore",
  class: "agile__slides agile__slides--cloned"
}
const _hoisted_3 = {
  ref: "slides",
  class: "agile__slides agile__slides--regular"
}
const _hoisted_4 = {
  ref: "slidesClonedAfter",
  class: "agile__slides agile__slides--cloned"
}
const _hoisted_5 = {
  key: 0,
  class: "agile__caption"
}
const _hoisted_6 = {
  key: 1,
  class: "agile__actions"
}
const _hoisted_7 = ["disabled"]
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ← ")
const _hoisted_9 = {
  key: 1,
  ref: "dots",
  class: "agile__dots"
}
const _hoisted_10 = ["onClick"]
const _hoisted_11 = ["disabled"]
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" → ")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{'agile--ssr': $data.isSSR, 'agile--auto-play': _ctx.settings.autoplay, 'agile--disabled': _ctx.settings.unagile, 'agile--fade': _ctx.settings.fade && !_ctx.settings.unagile, 'agile--rtl': _ctx.settings.rtl, 'agile--no-nav-buttons': !_ctx.settings.navButtons}, "agile"]),
    onTouchstart: _cache[6] || (_cache[6] = () => {})
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        ref: "track",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({transform: `translate(${$data.translateX + $options.marginX}px)`, transition: `transform ${_ctx.settings.timing} ${$data.transitionDelay}ms`}),
        class: "agile__track",
        onMouseout: _cache[0] || (_cache[0] = $event => (_ctx.handleMouseOut('track'))),
        onMouseover: _cache[1] || (_cache[1] = $event => (_ctx.handleMouseOver('track')))
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
        ], 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.slidesCloned]
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
        ], 512 /* NEED_PATCH */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
        ], 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.slidesCloned]
        ])
      ], 36 /* STYLE, HYDRATE_EVENTS */)
    ], 512 /* NEED_PATCH */),
    (_ctx.$slots.caption)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "caption")
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (!_ctx.settings.unagile && (_ctx.settings.navButtons || _ctx.settings.dots))
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [
          (_ctx.settings.navButtons && !_ctx.settings.unagile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                key: 0,
                ref: "prevButton",
                disabled: !$options.canGoToPrev,
                "aria-label": "Previous",
                class: "agile__nav-button agile__nav-button--prev",
                type: "button",
                onClick: _cache[2] || (_cache[2] = $event => ($options.goToPrev(), _ctx.restartAutoPlay()))
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prevButton", {}, () => [
                  _hoisted_8
                ])
              ], 8 /* PROPS */, _hoisted_7))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          (_ctx.settings.dots && !_ctx.settings.unagile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_9, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.countSlides, (n) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                    key: n,
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{'agile__dot--current': n - 1 === $data.currentSlide}, "agile__dot"]),
                    onMouseout: _cache[3] || (_cache[3] = $event => (_ctx.handleMouseOut('dot'))),
                    onMouseover: _cache[4] || (_cache[4] = $event => (_ctx.handleMouseOver('dot')))
                  }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      type: "button",
                      onClick: $event => ($options.goTo(n - 1), _ctx.restartAutoPlay())
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 9 /* TEXT, PROPS */, _hoisted_10)
                  ], 34 /* CLASS, HYDRATE_EVENTS */))
                }), 128 /* KEYED_FRAGMENT */))
              ], 512 /* NEED_PATCH */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          (_ctx.settings.navButtons && !_ctx.settings.unagile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                key: 2,
                ref: "nextButton",
                disabled: !$options.canGoToNext,
                "aria-label": "Next",
                class: "agile__nav-button agile__nav-button--next",
                type: "button",
                onClick: _cache[5] || (_cache[5] = $event => ($options.goToNext(), _ctx.restartAutoPlay()))
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "nextButton", {}, () => [
                  _hoisted_12
                ])
              ], 8 /* PROPS */, _hoisted_11))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ], 34 /* CLASS, HYDRATE_EVENTS */))
}

/***/ })

}]);