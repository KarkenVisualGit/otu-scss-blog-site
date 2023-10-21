/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CarouselLogic.js":
/*!******************************!*\
  !*** ./src/CarouselLogic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarouselLogic)
/* harmony export */ });
class CarouselLogic {
  constructor(itemsLength) {
    this.carouselItemsLength = itemsLength;
    this.marker = 0;
  }
  getCarouselItemsLength() {
    return this.carouselItemsLength;
  }
  incrementSlide() {
    this.marker = (this.marker + 1) % this.carouselItemsLength;
  }
  decrementSlide() {
    this.marker = this.marker === 0 ? this.carouselItemsLength - 1 : this.marker - 1;
  }
  setMarker(position) {
    this.marker = position;
  }
  getMarker() {
    return this.marker;
  }
}

/***/ }),

/***/ "./src/CarouselUI.js":
/*!***************************!*\
  !*** ./src/CarouselUI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarouselUI)
/* harmony export */ });
/* harmony import */ var _CarouselLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselLogic.js */ "./src/CarouselLogic.js");

class CarouselUI {
  constructor(logic) {
    this.logic = logic;
    this.init();
    this.autoPlay();
  }
  init() {
    this.container = document.querySelector(".carousel");
    this.triggerNext = this.container.querySelector(".js-carousel-nav_next");
    this.triggerPrev = this.container.querySelector(".js-carousel-nav_prev");
    this.carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
    this.selectedItem = document.querySelector(".carousel-item_isSelected");
    this.marker = this.carouselItems.indexOf(this.selectedItem);
    this.bulletNav();
    this.bindEvents();
  }
  bindEvents() {
    this.triggerNext.addEventListener("click", e => {
      e.preventDefault();
      this.nextSlide();
    });
    this.triggerPrev.addEventListener("click", e => {
      e.preventDefault();
      this.prevSlide();
    });
    this.container.querySelectorAll(".js-carousel-bulletNav-control").forEach((bullet, index) => {
      bullet.addEventListener("click", e => {
        e.preventDefault();
        this.bulletNavControl(index);
      });
    });
    this.container.addEventListener("wheel", e => {
      if (e.deltaY > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
      this.updateBulletNav();
      e.preventDefault();
    }, {
      passive: false
    });
    this.container.addEventListener("mouseenter", () => {
      this.stopAutoPlay();
    });
    this.container.addEventListener("mouseleave", () => {
      this.autoPlay();
    });
  }
  autoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }
  updateBulletNav() {
    const bullets = this.container.querySelectorAll(".js-carousel-bulletNav-control");
    bullets.forEach((bullet, index) => {
      if (index === this.logic.getMarker()) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
  }
  updateMarker() {
    const position = this.logic.getMarker();
    this.selectedItem.classList.remove("carousel-item_isSelected");
    this.selectedItem = this.carouselItems[position];
    this.selectedItem.classList.add("carousel-item_isSelected");
    this.carouselItems.forEach(item => item.classList.add("hidden"));
    this.selectedItem.classList.remove("hidden");
    this.updateBulletNav();
  }
  incrementSlide() {
    this.marker = (this.marker + 1) % this.carouselItems.length;
  }
  decrementSlide() {
    this.marker = this.marker === 0 ? this.carouselItems.length - 1 : this.marker - 1;
  }
  nextSlide() {
    this.logic.incrementSlide();
    this.updateMarker();
  }
  prevSlide() {
    this.logic.decrementSlide();
    this.updateMarker();
  }
  bulletNav() {
    const bulletNav = document.createElement("ul");
    bulletNav.className = "carousel-bulletNav";
    for (let i = 0; i < this.carouselItems.length; i += 1) {
      const li = document.createElement("li");
      li.className = "carousel-bulletNav-control js-carousel-bulletNav-control";
      const a = document.createElement("a");
      li.appendChild(a);
      bulletNav.appendChild(li);
    }
    this.container.appendChild(bulletNav);
  }
  bulletNavControl(index) {
    this.logic.setMarker(index);
    this.updateMarker();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const logic = new _CarouselLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelectorAll(".carousel-item").length);
  return new CarouselUI(logic);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/FiraSans-Regular.woff2 */ "./src/fonts/FiraSans-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/image-1.jpg */ "./src/images/image-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/image-2.jpg */ "./src/images/image-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Fira Sans";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400, 500, 600, 700, 800;
  font-style: normal;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.blog-nav,
.footer_blog {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 10px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-size: 1.5rem;
  color: #03658c;
}
.blog-nav a,
.footer_blog a {
  color: #03658c;
  text-decoration: none;
}
@media only screen and (max-width: 580px) {
  .blog-nav,
  .footer_blog {
    flex-direction: column;
  }
}

body {
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  align-items: center;
  min-height: 100%;
}

.blog-card {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.6%;
  background: #fff;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
}
.blog-card a {
  color: inherit;
}
.blog-card a:hover {
  color: #5ad67d;
}
.blog-card:hover .blog-card__photo {
  transform: scale(1.3);
}
.blog-card:hover .blog-card__photo1 {
  transform: scale(1.3);
}
.blog-card__meta {
  position: relative;
  z-index: 0;
  height: 200px;
}
.blog-card__photo {
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
}
.blog-card__details, .blog-card__details ul {
  margin: auto;
  padding: 0;
  list-style: none;
}
.blog-card__details {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100%;
  margin: auto;
  transition: left 0.2s;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px;
  width: 100%;
  font-size: 0.9rem;
}
.blog-card__details a {
  text-decoration: dotted underline;
}
.blog-card__details ul li {
  display: inline-block;
}
.blog-card__details--author:before {
  font: var(--fa-font-solid);
  margin-right: 10px;
  content: "\\f007";
}
.blog-card__details--date:before {
  font: var(--fa-font-solid);
  margin-right: 10px;
  content: "\\f133";
}
.blog-card__details--tags ul:before {
  font: var(--fa-font-solid);
  content: "\\f02b";
  margin-right: 10px;
}
.blog-card__details--tags li {
  margin-right: 2px;
}
.blog-card__details--tags li:first-child {
  margin-left: -4px;
}
.blog-card__description {
  padding: 1rem;
  background: #fff;
  position: relative;
  z-index: 1;
}
.blog-card__description h1,
.blog-card__description h2 {
  font-family: "Fira Sans", sans-serif;
}
.blog-card__description--title {
  line-height: 1;
  margin: 0;
  font-size: 1.7rem;
}
.blog-card__description--subtitle {
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #a2a2a2;
  margin-top: 5px;
}
.blog-card__description--read-more {
  text-align: right;
}
.blog-card__description--read-more a {
  color: #5ad67d;
  display: inline-block;
  position: relative;
}
.blog-card__description--read-more a:after {
  content: "\\f061";
  font-weight: 900;
  font: var(--fa-font-solid);
  margin-left: -10px;
  opacity: 0;
  vertical-align: middle;
  transition: margin 0.3s, opacity 0.3s;
}
.blog-card__description--read-more a:hover:after {
  margin-left: 5px;
  opacity: 1;
}
.blog-card p {
  position: relative;
  margin: 1rem 0 0;
}
.blog-card p:first-of-type {
  margin-top: 1.25rem;
}
.blog-card p:first-of-type:before {
  content: "";
  position: absolute;
  height: 5px;
  background: #5ad67d;
  width: 35px;
  top: -0.75rem;
  border-radius: 3px;
}
.blog-card:hover .blog-card__details {
  left: 0%;
}
@media (min-width: 640px) {
  .blog-card {
    flex-direction: row;
    max-width: 700px;
  }
  .blog-card .blog-card__meta {
    flex-basis: 40%;
    height: auto;
  }
  .blog-card .blog-card__description {
    flex-basis: 60%;
  }
  .blog-card .blog-card__description:before {
    content: "";
    background: #fff;
    width: 30px;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
}

.blog-card__photo1 {
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
}
@media (min-width: 640px) {
  .blog-card.alt {
    flex-direction: row-reverse;
  }
  .blog-card.alt .blog-card__description:before {
    left: inherit;
    right: -10px;
  }
  .blog-card.alt .blog-card__details {
    padding-left: 25px;
  }
}

.carousel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 650px;
  position: relative;
  margin: 0 auto;
}
.carousel-viewport {
  display: flex;
  overflow-x: hidden;
}
.carousel-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transition: all 1s ease-in-out;
}
.carousel-item {
  max-width: 100%;
  animation: flip-scale-down-ver 0.5s linear both;
}
@keyframes flip-scale-down-ver {
  0% {
    transform: scale(1) rotateY(-180deg);
  }
  50% {
    transform: scale(0.4) rotateY(-90deg);
  }
  100% {
    transform: scale(1) rotateY(0);
  }
}
.carousel-item.hidden {
  display: none;
}
.carousel-item img {
  width: 100%;
  max-width: 100%;
}
.carousel-item_isSelected {
  opacity: 1;
  transform: translateX(0);
}
.carousel-nav {
  width: 35px;
  height: 35px;
  border: 4px solid #bdbdbd;
  position: absolute;
  top: 40%;
  border-radius: 50%;
}
.carousel-nav:hover {
  cursor: pointer;
  box-shadow: 0px 0px 4px 2px #f22005;
  transition: all 0.35s ease-in-out;
}
.carousel-bulletNav {
  text-align: center;
  overflow: hidden;
  list-style-type: none;
}
.carousel-bulletNav-control {
  display: inline-block;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  background-color: #000000;
  border-radius: 50%;
  cursor: pointer;
}
.carousel-bulletNav-control.active, .carousel-bulletNav-control:hover, .carousel-bulletNav-control:focus {
  background-color: #f00b0b;
  width: 25px;
  height: 25px;
  cursor: grab;
}

.carousel-nav_prev {
  left: -55px;
}

.carousel-nav_next {
  right: -55px;
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  position: relative;
  top: 2px;
  border-radius: 5px;
}
.arrow::before {
  content: " ";
  position: absolute;
}
.arrow_left {
  left: 8px;
  border-top: 12px solid transparent;
  border-bottom: 11px solid transparent;
  border-right: 10px solid #f22005;
}
.arrow_left::before {
  top: -8px;
  left: 4px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 6px solid #ff0f0f;
}
.arrow_right {
  left: 11px;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid #f22005;
}
.arrow_right::before {
  top: -8px;
  left: -12px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 6px solid #ff0000;
}

@media (max-width: 768px) {
  .carousel {
    width: 100%;
  }
  .carousel-nav {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_common.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800\");\n\n@font-face {\n  font-family: \"Fira Sans\";\n  src: url(../fonts/FiraSans-Regular.woff2);\n  font-weight: 400, 500, 600, 700, 800;\n  font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n","@import \"base\";\n@import \"common\";\n\n.blog-card {\n  &__photo1 {\n    position: absolute;\n    background-image: url(../images/image-2.jpg);\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n  }\n\n  @media (min-width: 640px) {\n    &.alt {\n      flex-direction: row-reverse;\n\n      .blog-card__description {\n        &:before {\n          left: inherit;\n          right: -10px;\n        }\n      }\n\n      .blog-card__details {\n        padding-left: 25px;\n      }\n    }\n  }\n}\n\n.carousel {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 650px;\n  position: relative;\n  margin: 0 auto;\n\n  &-viewport {\n    display: flex;\n    overflow-x: hidden;\n    // width: 650px;\n  }\n\n  &-list {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    transition: all 1s ease-in-out;\n  }\n\n  &-item {\n    // width: 650px;\n    max-width: 100%;\n    // opacity: 0;\n    // transform: translateX(-10%);\n    // transition: opacity 0.3s ease, transform 0.3s ease;\n    animation: flip-scale-down-ver 0.5s linear both;\n\n    @keyframes flip-scale-down-ver {\n      0% {\n        transform: scale(1) rotateY(-180deg);\n      }\n\n      50% {\n        transform: scale(0.4) rotateY(-90deg);\n      }\n\n      100% {\n        transform: scale(1) rotateY(0);\n      }\n    }\n\n    &.hidden {\n      display: none;\n    }\n\n    & img {\n      width: 100%;\n      max-width: 100%;\n    }\n\n    &_isSelected {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n\n  &-nav {\n    width: 35px;\n    height: 35px;\n    border: 4px solid #bdbdbd;\n    position: absolute;\n    top: 40%;\n    border-radius: 50%;\n\n    &:hover {\n      cursor: pointer;\n      box-shadow: 0px 0px 4px 2px #f22005;\n      transition: all 0.35s ease-in-out;\n    }\n  }\n\n  &-bulletNav {\n    text-align: center;\n    overflow: hidden;\n    list-style-type: none;\n\n    &-control {\n      display: inline-block;\n      margin-right: 10px;\n      width: 15px;\n      height: 15px;\n      background-color: #000000;\n      border-radius: 50%;\n      cursor: pointer;\n\n      &.active,\n      &:hover,\n      &:focus {\n        background-color: #f00b0b;\n        width: 25px;\n        height: 25px;\n        cursor: grab;\n      }\n    }\n  }\n}\n\n.carousel-nav_prev {\n  left: -55px;\n}\n\n.carousel-nav_next {\n  right: -55px;\n}\n\n.arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  position: relative;\n  top: 2px;\n  border-radius: 5px;\n\n  &::before {\n    content: \" \";\n    position: absolute;\n  }\n\n  &_left {\n    left: 8px;\n    border-top: 12px solid transparent;\n    border-bottom: 11px solid transparent;\n    border-right: 10px solid #f22005;\n\n    &::before {\n      top: -8px;\n      left: 4px;\n      border-top: 8px solid transparent;\n      border-bottom: 8px solid transparent;\n      border-right: 6px solid #ff0f0f;\n    }\n  }\n\n  &_right {\n    left: 11px;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    border-left: 12px solid #f22005;\n\n    &::before {\n      top: -8px;\n      left: -12px;\n      border-top: 8px solid transparent;\n      border-bottom: 8px solid transparent;\n      border-left: 6px solid #ff0000;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .carousel {\n    width: 100%;\n\n    &-nav {\n      display: none;\n    }\n  }\n}\n",".blog-nav,\n.footer_blog {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  margin: 10px;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-family: \"Fira Sans\", sans-serif;\n  font-size: 1.5rem;\n  color: #03658c;\n\n  a {\n    color: #03658c;\n    text-decoration: none;\n  }\n\n  @media only screen and (max-width: 580px) {\n    flex-direction: column;\n  }\n}\n\nbody {\n  background: #f1f1f1;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  align-items: center;\n  min-height: 100%;\n}\n\n$color_white: #fff;\n$color_prime: #5ad67d;\n$color_grey: #e2e2e2;\n$color_grey_dark: #a2a2a2;\n\n.blog-card {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem auto;\n  box-shadow: 0 3px 7px -1px rgba(#000, 0.1);\n  margin-bottom: 1.6%;\n  background: $color_white;\n  line-height: 1.4;\n  font-family: sans-serif;\n  border-radius: 5px;\n  overflow: hidden;\n  z-index: 0;\n\n  a {\n    color: inherit;\n\n    &:hover {\n      color: $color_prime;\n    }\n  }\n\n  &:hover {\n    .blog-card__photo {\n      transform: scale(1.3);\n    }\n\n    .blog-card__photo1 {\n      transform: scale(1.3);\n    }\n  }\n\n  &__meta {\n    position: relative;\n    z-index: 0;\n    height: 200px;\n  }\n\n  &__photo {\n    position: absolute;\n    background-image: url(../images/image-1.jpg);\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n  }\n\n  &__details,\n  &__details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n  }\n\n  &__details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -100%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(#000, 0.6);\n    color: $color_white;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n\n    a {\n      text-decoration: dotted underline;\n    }\n\n    ul li {\n      display: inline-block;\n    }\n\n    &--author:before {\n      font: var(--fa-font-solid);\n      margin-right: 10px;\n      content: \"\\f007\";\n    }\n\n    &--date:before {\n      font: var(--fa-font-solid);\n      margin-right: 10px;\n      content: \"\\f133\";\n    }\n\n    &--tags {\n      ul:before {\n        font: var(--fa-font-solid);\n        content: \"\\f02b\";\n        margin-right: 10px;\n      }\n\n      li {\n        margin-right: 2px;\n\n        &:first-child {\n          margin-left: -4px;\n        }\n      }\n    }\n  }\n\n  &__description {\n    padding: 1rem;\n    background: $color_white;\n    position: relative;\n    z-index: 1;\n\n    h1,\n    h2 {\n      font-family: \"Fira Sans\", sans-serif;\n    }\n\n    &--title {\n      line-height: 1;\n      margin: 0;\n      font-size: 1.7rem;\n    }\n\n    &--subtitle {\n      font-size: 1rem;\n      font-weight: 300;\n      text-transform: uppercase;\n      color: $color_grey_dark;\n      margin-top: 5px;\n    }\n\n    &--read-more {\n      text-align: right;\n\n      a {\n        color: $color_prime;\n        display: inline-block;\n        position: relative;\n\n        &:after {\n          content: \"\\f061\";\n          font-weight: 900;\n          font: var(--fa-font-solid);\n          margin-left: -10px;\n          opacity: 0;\n          vertical-align: middle;\n          transition:\n            margin 0.3s,\n            opacity 0.3s;\n        }\n\n        &:hover:after {\n          margin-left: 5px;\n          opacity: 1;\n        }\n      }\n    }\n  }\n\n  p {\n    position: relative;\n    margin: 1rem 0 0;\n\n    &:first-of-type {\n      margin-top: 1.25rem;\n\n      &:before {\n        content: \"\";\n        position: absolute;\n        height: 5px;\n        background: $color_prime;\n        width: 35px;\n        top: -0.75rem;\n        border-radius: 3px;\n      }\n    }\n  }\n\n  &:hover {\n    .blog-card__details {\n      left: 0%;\n    }\n  }\n\n  @media (min-width: 640px) {\n    flex-direction: row;\n    max-width: 700px;\n\n    .blog-card__meta {\n      flex-basis: 40%;\n      height: auto;\n    }\n\n    .blog-card__description {\n      flex-basis: 60%;\n\n      &:before {\n        content: \"\";\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/FiraSans-Regular.woff2":
/*!******************************************!*\
  !*** ./src/fonts/FiraSans-Regular.woff2 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/FiraSans-Regular-36d608bce4251664d580.woff2";

/***/ }),

/***/ "./src/images/image-1.jpg":
/*!********************************!*\
  !*** ./src/images/image-1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-1-386f2ebc2dc95819c9f4.jpg";

/***/ }),

/***/ "./src/images/image-2.jpg":
/*!********************************!*\
  !*** ./src/images/image-2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-2-2fbb0d943061380283ef.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _CarouselUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselUI.js */ "./src/CarouselUI.js");


})();

/******/ })()
;
//# sourceMappingURL=index.da7e0447.js.map