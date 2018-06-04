(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<app-side-bar></app-side-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-container {\n  float: left;\n  background: #1e1f27;\n  color: rgba(255, 255, 255, 0.8);\n  width: calc(100% - 200px);\n  height: calc(100% - 60px); }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _truth_truth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truth/truth.module */ "./src/app/truth/truth.module.ts");
/* harmony import */ var _nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav.bar/nav.bar.module */ "./src/app/nav.bar/nav.bar.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _side_bar_side_bar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side.bar/side.bar.module */ "./src/app/side.bar/side.bar.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                _truth_truth_module__WEBPACK_IMPORTED_MODULE_4__["TruthModule"],
                _nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_5__["NavBarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _side_bar_side_bar_module__WEBPACK_IMPORTED_MODULE_7__["SideBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/compiler/compiler.service.ts":
/*!**********************************************!*\
  !*** ./src/app/compiler/compiler.service.ts ***!
  \**********************************************/
/*! exports provided: CompilerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilerService", function() { return CompilerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompilerService = /** @class */ (function () {
    function CompilerService(http) {
        this.http = http;
        this.URL = '/api';
    }
    CompilerService.prototype.mcCluskey = function (expression) {
        return this.http.post(this.URL + '/mcCluskey', { expression: expression });
    };
    CompilerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompilerService);
    return CompilerService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"ui-container\">\r\n  <div class = \"home\">\r\n    <div class = \"home-text\">\r\n      Welcome to this application =) <br>\r\n      TruthTableOfTheTruth is an application to resolve logic expressions using MCCluskey theorem.\r\n    </div>\r\n    <div class = \"home-gradle\" (click) = \"feature( 'truth' )\">\r\n      <div class = \"home-card\">\r\n        <div class = \"home-card-body\">\r\n          <span class = \"fa fa-microchip\"></span>\r\n        </div>\r\n        <div class = \"home-card-info\">\r\n          Simplify with Mc Closkey\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-container {\n  float: left;\n  background: #1e1f27;\n  color: rgba(255, 255, 255, 0.8);\n  width: calc(100% - 200px);\n  height: calc(100% - 60px); }\n\n.home {\n  float: left;\n  padding-top: 70px;\n  padding-left: 0px;\n  overflow-y: auto;\n  float: left;\n  width: calc(100% - 305px);\n  height: calc(100% - 185px); }\n\n.home-text {\n  float: left;\n  width: 100%;\n  min-height: 100px;\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.8);\n  font-family: Verdana, Helvetica;\n  font-weight: normal;\n  text-align: center; }\n\n.home-gradle {\n  float: left;\n  width: 100%;\n  height: calc(100% - 150px);\n  padding-top: 50px; }\n\n.home-card {\n  float: left;\n  width: 150px;\n  height: 150px;\n  margin-left: calc(50vw - 330px);\n  cursor: pointer;\n  background: rgba(51, 130, 194, 0.932);\n  border-radius: 4px;\n  box-shadow: 0px 0px 10px 1px rgba(44, 28, 28, 0.8); }\n\n.home-card:hover {\n  background: rgba(54, 157, 241, 0.932);\n  box-shadow: 0px 0px 10px 1px rgba(85, 47, 47, 0.8); }\n\n.home-card-body {\n  float: left;\n  width: 100%;\n  height: 80px;\n  font-size: 70px;\n  text-align: center;\n  padding-top: 20px;\n  color: white; }\n\n.home-card-info {\n  float: left;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.feature = function (feat) {
        this.router.navigate(['/' + feat]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/nav.bar/nav.bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav.bar/nav.bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"nav-bar\">\n  <div class = \"nav-bar-system-name\">\n    Truth Table of The Truth \n  </div>\n  <div class = \"nav-bar-system-version\">\n    {{ version }}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/nav.bar/nav.bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/nav.bar/nav.bar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-container {\n  float: left;\n  background: #1e1f27;\n  color: rgba(255, 255, 255, 0.8);\n  width: calc(100% - 200px);\n  height: calc(100% - 60px); }\n\n.nav-bar {\n  float: left;\n  width: 100%;\n  height: 60px;\n  background: #1e1f27;\n  box-shadow: 0px 0px 7px 2px #26d4ff; }\n\n.nav-bar-system-name {\n  float: left;\n  padding-left: 20px;\n  width: 300px;\n  height: 100%;\n  text-align: center;\n  font-size: 20px;\n  line-height: 60px;\n  color: rgba(17, 128, 192, 0.932);\n  font-weight: bold;\n  font-family: Verdana; }\n\n.nav-bar-system-version {\n  float: left;\n  width: 150px;\n  height: 100%;\n  padding-left: 10px;\n  padding-top: 7px;\n  color: rgba(38, 212, 255, 0.932);\n  font-family: paradise;\n  line-height: 50px;\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/nav.bar/nav.bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav.bar/nav.bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.version = '0.0.0  Dev';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav.bar.component.html */ "./src/app/nav.bar/nav.bar.component.html"),
            styles: [__webpack_require__(/*! ./nav.bar.component.scss */ "./src/app/nav.bar/nav.bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/nav.bar/nav.bar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nav.bar/nav.bar.module.ts ***!
  \*******************************************/
/*! exports provided: NavBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarModule", function() { return NavBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.bar.component */ "./src/app/nav.bar/nav.bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NavBarModule = /** @class */ (function () {
    function NavBarModule() {
    }
    NavBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]],
            exports: [_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]]
        })
    ], NavBarModule);
    return NavBarModule;
}());



/***/ }),

/***/ "./src/app/shared/template.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/template.directive.ts ***!
  \**********************************************/
/*! exports provided: TemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDirective", function() { return TemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateDirective = /** @class */ (function () {
    function TemplateDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    TemplateDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[template-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], TemplateDirective);
    return TemplateDirective;
}());



/***/ }),

/***/ "./src/app/side.bar/side.bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side.bar/side.bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"side-bar\">\n  <div [ngClass] = \"active === 'home'  ? 'side-bar-option side-bar-option-active' : 'side-bar-option'\" routerLink = \"/home\">\n    <span class = \"fa fa-home side-bar-span\"></span> HOME\n  </div>\n  <div [ngClass] = \"active === 'truth' ? 'side-bar-option side-bar-option-active' : 'side-bar-option'\" routerLink = \"/truth\">\n    <span class = \"fa fa-microchip side-bar-span\"></span> TRUTH\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/side.bar/side.bar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/side.bar/side.bar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-container {\n  float: left;\n  background: #1e1f27;\n  color: rgba(255, 255, 255, 0.8);\n  width: calc(100% - 200px);\n  height: calc(100% - 60px); }\n\n.side-bar {\n  float: left;\n  height: calc(100% - 110px);\n  width: 200px;\n  padding-top: 50px;\n  font-family: Verdana, Helvetica;\n  background: #1e1f27; }\n\n.side-bar-option {\n  float: left;\n  width: calc(100% - 35px);\n  height: 60px;\n  line-height: 60px;\n  color: rgba(255, 255, 255, 0.8);\n  text-align: left;\n  font-size: 14px;\n  padding-left: 20px;\n  cursor: pointer;\n  border: none;\n  box-shadow: none;\n  outline: none; }\n\n.side-bar-option-active {\n  border-left: 3px solid rgba(46, 140, 216, 0.932); }\n\n.side-bar-option-active > span {\n  color: rgba(46, 140, 216, 0.932); }\n\n.side-bar-span {\n  font-size: 18px;\n  padding-right: 10px; }\n"

/***/ }),

/***/ "./src/app/side.bar/side.bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side.bar/side.bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.active = event.url.replace('/', '').split("#")[0];
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.active = event.urlAfterRedirects.replace('/', '').split("#")[0];
            }
        });
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side.bar.component.html */ "./src/app/side.bar/side.bar.component.html"),
            styles: [__webpack_require__(/*! ./side.bar.component.scss */ "./src/app/side.bar/side.bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/side.bar/side.bar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/side.bar/side.bar.module.ts ***!
  \*********************************************/
/*! exports provided: ROUTES, SideBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarModule", function() { return SideBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _side_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side.bar.component */ "./src/app/side.bar/side.bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _truth_truth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../truth/truth.component */ "./src/app/truth/truth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'truth', component: _truth_truth_component__WEBPACK_IMPORTED_MODULE_5__["TruthComponent"] },
];
var SideBarModule = /** @class */ (function () {
    function SideBarModule() {
    }
    SideBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
            ],
            declarations: [
                _side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"]
            ]
        })
    ], SideBarModule);
    return SideBarModule;
}());



/***/ }),

/***/ "./src/app/truth/truth.component.html":
/*!********************************************!*\
  !*** ./src/app/truth/truth.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"ui-container\">\r\n  <div class = \"truth-options\" *ngIf = \"truthService.inputType$.getValue() !== null\">\r\n    <div class = \"truth-option-right\" (click) = \"selecionado( null )\">\r\n      Voltar\r\n    </div>\r\n  </div>\r\n  <div class = \"truth-container\">\r\n      <ng-template template-host></ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/truth/truth.component.scss":
/*!********************************************!*\
  !*** ./src/app/truth/truth.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-container {\n  float: left;\n  background: #1e1f27;\n  color: rgba(255, 255, 255, 0.8);\n  width: calc(100% - 200px);\n  height: calc(100% - 60px); }\n\n.truth-options {\n  float: left;\n  width: 100%;\n  height: 25px;\n  padding-top: 20px;\n  font-family: Verdana; }\n\n.truth-container {\n  float: left;\n  width: 100%;\n  height: calc( 100% - 100px); }\n\n.truth-option-right {\n  float: right;\n  width: 100px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 16px;\n  cursor: pointer; }\n\n.truth-option-right:hover {\n  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8); }\n\n.truth-info {\n  float: left;\n  width: 100%;\n  height: 24px;\n  font-size: 12px;\n  color: rgba(245, 182, 10, 0.8); }\n\n.truth-body {\n  float: left;\n  display: flex;\n  width: calc(100% - 50px);\n  min-height: 200px;\n  height: calc( 100%);\n  max-height: calc( 100%);\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8); }\n\n.truth-table-header {\n  float: left;\n  width: auto;\n  height: 60px; }\n\n.truth-input {\n  float: left;\n  background: none;\n  border: none;\n  box-shadow: none;\n  width: 50px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  outline: none;\n  text-align: center; }\n\n.truth-final-method-name {\n  color: rgba(38, 212, 255, 0.932); }\n\n.truth-final-result-text {\n  color: rgba(11, 206, 53, 0.932); }\n"

/***/ }),

/***/ "./src/app/truth/truth.component.ts":
/*!******************************************!*\
  !*** ./src/app/truth/truth.component.ts ***!
  \******************************************/
/*! exports provided: TruthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthComponent", function() { return TruthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_template_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/template.directive */ "./src/app/shared/template.directive.ts");
/* harmony import */ var _truth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truth.service */ "./src/app/truth/truth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _truth_expression_truth_expression_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truth.expression/truth.expression.component */ "./src/app/truth/truth.expression/truth.expression.component.ts");
/* harmony import */ var _truth_table_truth_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truth.table/truth.table.component */ "./src/app/truth/truth.table/truth.table.component.ts");
/* harmony import */ var _truth_home_truth_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truth.home/truth.home.component */ "./src/app/truth/truth.home/truth.home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TruthComponent = /** @class */ (function () {
    function TruthComponent(componentFactoryResolver, truthService, router, activatedRoute) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.truthService = truthService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subscription = new Array();
        this.fragments = { "table": _truth_table_truth_table_component__WEBPACK_IMPORTED_MODULE_5__["TruthTableComponent"], "expression": _truth_expression_truth_expression_component__WEBPACK_IMPORTED_MODULE_4__["TruthExpressionComponent"] };
    }
    TruthComponent.prototype.ngOnInit = function () {
        this.selecionado(null);
        this.inicializaFragmentos();
    };
    TruthComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscription; _i < _a.length; _i++) {
            var subscribe = _a[_i];
            subscribe.unsubscribe();
        }
    };
    TruthComponent.prototype.inicializaFragmentos = function () {
        var _this = this;
        this.subscription.push(this.truthService.inputType$.subscribe(function (inputType) {
            var fragment = (inputType) ? inputType : "";
            _this.router.navigate([], { fragment: inputType });
        }));
        this.subscription.push(this.activatedRoute.fragment.subscribe(function (fragment) {
            var component = _this.fragments[fragment];
            if (!component) {
                component = _truth_home_truth_home_component__WEBPACK_IMPORTED_MODULE_6__["TruthHomeComponent"];
            }
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(component);
            var viewContainerRef = _this.templateRef.viewContainerRef;
            viewContainerRef.clear();
            var componentRef = viewContainerRef.createComponent(componentFactory);
        }));
    };
    TruthComponent.prototype.selecionado = function (inputType) {
        this.truthService.inputType$.next(inputType);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_template_directive__WEBPACK_IMPORTED_MODULE_1__["TemplateDirective"]),
        __metadata("design:type", _shared_template_directive__WEBPACK_IMPORTED_MODULE_1__["TemplateDirective"])
    ], TruthComponent.prototype, "templateRef", void 0);
    TruthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truth',
            template: __webpack_require__(/*! ./truth.component.html */ "./src/app/truth/truth.component.html"),
            styles: [__webpack_require__(/*! ./truth.component.scss */ "./src/app/truth/truth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _truth_service__WEBPACK_IMPORTED_MODULE_2__["TruthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TruthComponent);
    return TruthComponent;
}());



/***/ }),

/***/ "./src/app/truth/truth.expression/truth.expression.component.html":
/*!************************************************************************!*\
  !*** ./src/app/truth/truth.expression/truth.expression.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"truth-info\">\n    The truth table of the truth in this module will only work if the expression is in <b>MINTERM!</b>\n  </div>\n  <div class = \"truth-body\">\n    {{ inputType }}\n  </div>\n  <div class = \"truth-error\">\n</div>"

/***/ }),

/***/ "./src/app/truth/truth.expression/truth.expression.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/truth/truth.expression/truth.expression.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-container {\n  float: left;\n  background: #1e1f27;\n  color: rgba(255, 255, 255, 0.8);\n  width: calc(100% - 200px);\n  height: calc(100% - 60px); }\n\n.truth-options {\n  float: left;\n  width: 100%;\n  height: 25px;\n  padding-top: 20px;\n  font-family: Verdana; }\n\n.truth-container {\n  float: left;\n  width: 100%;\n  height: calc( 100% - 100px); }\n\n.truth-option-right {\n  float: right;\n  width: 100px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 16px;\n  cursor: pointer; }\n\n.truth-option-right:hover {\n  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8); }\n\n.truth-info {\n  float: left;\n  width: 100%;\n  height: 24px;\n  font-size: 12px;\n  color: rgba(245, 182, 10, 0.8); }\n\n.truth-body {\n  float: left;\n  display: flex;\n  width: calc(100% - 50px);\n  min-height: 200px;\n  height: calc( 100%);\n  max-height: calc( 100%);\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8); }\n\n.truth-table-header {\n  float: left;\n  width: auto;\n  height: 60px; }\n\n.truth-input {\n  float: left;\n  background: none;\n  border: none;\n  box-shadow: none;\n  width: 50px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  outline: none;\n  text-align: center; }\n\n.truth-final-method-name {\n  color: rgba(38, 212, 255, 0.932); }\n\n.truth-final-result-text {\n  color: rgba(11, 206, 53, 0.932); }\n"

/***/ }),

/***/ "./src/app/truth/truth.expression/truth.expression.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/truth/truth.expression/truth.expression.component.ts ***!
  \**********************************************************************/
/*! exports provided: TruthExpressionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthExpressionComponent", function() { return TruthExpressionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TruthExpressionComponent = /** @class */ (function () {
    function TruthExpressionComponent() {
    }
    TruthExpressionComponent.prototype.ngOnInit = function () {
    };
    TruthExpressionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truth.expression',
            template: __webpack_require__(/*! ./truth.expression.component.html */ "./src/app/truth/truth.expression/truth.expression.component.html"),
            styles: [__webpack_require__(/*! ./truth.expression.component.scss */ "./src/app/truth/truth.expression/truth.expression.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TruthExpressionComponent);
    return TruthExpressionComponent;
}());



/***/ }),

/***/ "./src/app/truth/truth.home/truth.home.component.html":
/*!************************************************************!*\
  !*** ./src/app/truth/truth.home/truth.home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"truth-options\">\n  <div class = \"card\" (click) = \"selecionado( 'table' )\" style = \"border-right:1px solid rgba(255, 255, 255, 0.8);\">  \n    <div class = \"card-header\">\n      <span class = \"fa fa-tasks\"></span>\n    </div>\n    <div class = \"card-info\">\n      From truth table\n    </div>\n  </div>\n  <div class = \"card\" (click) = \"selecionado( 'expression' )\">\n    <div class = \"card-header\">\n      <span class = \"fa fa-code\"></span>\n    </div>\n    <div class = \"card-info\">\n      From minterms expression\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/truth/truth.home/truth.home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/truth/truth.home/truth.home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-container {\n  float: left;\n  background: #1e1f27;\n  color: rgba(255, 255, 255, 0.8);\n  width: calc(100% - 200px);\n  height: calc(100% - 60px); }\n\n.truth-options {\n  float: left;\n  width: 100%;\n  height: 25px;\n  padding-top: 20px;\n  font-family: Verdana; }\n\n.truth-container {\n  float: left;\n  width: 100%;\n  height: calc( 100% - 100px); }\n\n.truth-option-right {\n  float: right;\n  width: 100px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 16px;\n  cursor: pointer; }\n\n.truth-option-right:hover {\n  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8); }\n\n.truth-info {\n  float: left;\n  width: 100%;\n  height: 24px;\n  font-size: 12px;\n  color: rgba(245, 182, 10, 0.8); }\n\n.truth-body {\n  float: left;\n  display: flex;\n  width: calc(100% - 50px);\n  min-height: 200px;\n  height: calc( 100%);\n  max-height: calc( 100%);\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8); }\n\n.truth-table-header {\n  float: left;\n  width: auto;\n  height: 60px; }\n\n.truth-input {\n  float: left;\n  background: none;\n  border: none;\n  box-shadow: none;\n  width: 50px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  outline: none;\n  text-align: center; }\n\n.truth-final-method-name {\n  color: rgba(38, 212, 255, 0.932); }\n\n.truth-final-result-text {\n  color: rgba(11, 206, 53, 0.932); }\n\n.truth-options {\n  float: left;\n  margin-left: calc(50% - 400px);\n  margin-top: calc(50% - 650px);\n  width: 500px;\n  height: 300px; }\n\n.card {\n  float: left;\n  width: 200px;\n  height: 200px;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  cursor: pointer; }\n\n.card:hover {\n  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8); }\n\n.card-header {\n  float: left;\n  text-align: center;\n  width: 100%;\n  height: 150px;\n  font-size: 80px;\n  line-height: 150px; }\n\n.card-info {\n  float: left;\n  text-align: center;\n  width: 100%;\n  height: 20px;\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/truth/truth.home/truth.home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/truth/truth.home/truth.home.component.ts ***!
  \**********************************************************/
/*! exports provided: TruthHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthHomeComponent", function() { return TruthHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _truth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../truth.service */ "./src/app/truth/truth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TruthHomeComponent = /** @class */ (function () {
    function TruthHomeComponent(truthService) {
        this.truthService = truthService;
    }
    TruthHomeComponent.prototype.ngOnInit = function () {
    };
    TruthHomeComponent.prototype.selecionado = function (inputType) {
        this.truthService.inputType$.next(inputType);
    };
    TruthHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truth.home',
            template: __webpack_require__(/*! ./truth.home.component.html */ "./src/app/truth/truth.home/truth.home.component.html"),
            styles: [__webpack_require__(/*! ./truth.home.component.scss */ "./src/app/truth/truth.home/truth.home.component.scss")]
        }),
        __metadata("design:paramtypes", [_truth_service__WEBPACK_IMPORTED_MODULE_1__["TruthService"]])
    ], TruthHomeComponent);
    return TruthHomeComponent;
}());



/***/ }),

/***/ "./src/app/truth/truth.module.ts":
/*!***************************************!*\
  !*** ./src/app/truth/truth.module.ts ***!
  \***************************************/
/*! exports provided: TruthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthModule", function() { return TruthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _truth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truth.component */ "./src/app/truth/truth.component.ts");
/* harmony import */ var _truth_table_truth_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./truth.table/truth.table.component */ "./src/app/truth/truth.table/truth.table.component.ts");
/* harmony import */ var _truth_home_truth_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truth.home/truth.home.component */ "./src/app/truth/truth.home/truth.home.component.ts");
/* harmony import */ var _truth_expression_truth_expression_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truth.expression/truth.expression.component */ "./src/app/truth/truth.expression/truth.expression.component.ts");
/* harmony import */ var _truth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truth.service */ "./src/app/truth/truth.service.ts");
/* harmony import */ var _shared_template_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/template.directive */ "./src/app/shared/template.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TruthModule = /** @class */ (function () {
    function TruthModule() {
    }
    TruthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_truth_component__WEBPACK_IMPORTED_MODULE_2__["TruthComponent"], _truth_table_truth_table_component__WEBPACK_IMPORTED_MODULE_3__["TruthTableComponent"], _truth_home_truth_home_component__WEBPACK_IMPORTED_MODULE_4__["TruthHomeComponent"], _truth_expression_truth_expression_component__WEBPACK_IMPORTED_MODULE_5__["TruthExpressionComponent"], _shared_template_directive__WEBPACK_IMPORTED_MODULE_7__["TemplateDirective"]],
            entryComponents: [_truth_table_truth_table_component__WEBPACK_IMPORTED_MODULE_3__["TruthTableComponent"], _truth_home_truth_home_component__WEBPACK_IMPORTED_MODULE_4__["TruthHomeComponent"], _truth_expression_truth_expression_component__WEBPACK_IMPORTED_MODULE_5__["TruthExpressionComponent"]],
            exports: [_truth_component__WEBPACK_IMPORTED_MODULE_2__["TruthComponent"]],
            providers: [_truth_service__WEBPACK_IMPORTED_MODULE_6__["TruthService"]]
        })
    ], TruthModule);
    return TruthModule;
}());



/***/ }),

/***/ "./src/app/truth/truth.service.ts":
/*!****************************************!*\
  !*** ./src/app/truth/truth.service.ts ***!
  \****************************************/
/*! exports provided: TruthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthService", function() { return TruthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TruthService = /** @class */ (function () {
    function TruthService() {
        this.inputType$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    TruthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TruthService);
    return TruthService;
}());



/***/ }),

/***/ "./src/app/truth/truth.table/truth.table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/truth/truth.table/truth.table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"truth-body\">\r\n  <div class = \"truth-table\">\r\n    <div class = \"truth-table-header\">\r\n      <div class = \"truth-table-header-variable-name\" *ngFor = \"let variable of variables; let i = index\">\r\n        <input #in class = \"truth-input truth-input-active\" type = \"text\" [value] = \"variable.name\" [readonly] = \"!editing\" (click) = \"canEdit()\" (focusout) = \"editEnd($event, i)\">\r\n        <span *ngIf = \"variables.length > 1\" class = \"tooltip fa fa-trash truth-remove\" (click) = \"removeVariable(i)\">\r\n          <span class = \"tooltiptext truth-tooltip\" style = \"margin-top: -10px\"> remove </span>\r\n        </span>\r\n      </div>\r\n      <div class = \"truth-table-header-variable-name\">\r\n        {{ result.name }}\r\n      </div>\r\n      <div class = \"truth-option\">\r\n        <div class = \"truth-add-input\" *ngIf = \"newVariable\">\r\n          <input #in class = \"truth-input\" type = \"text\" placeholder = \"new var\" (focusout)=\"haveNewVariable(in.value.trim())\" (keyup.enter)=\"haveNewVariable(in.value.trim())\" autofocus> \r\n        </div>\r\n        <div class = \"tooltip truth-add-button\">\r\n          <div *ngIf = \"!newVariable\" (click) = \"addVariable()\">\r\n            <span class = \"fa fa-plus\"></span>\r\n            <span class = \"tooltiptext truth-tooltip\"> add variable </span>\r\n          </div>\r\n          <div *ngIf = \"newVariable\" (click) = \"newVariable = false\">\r\n            <span class = \"fa fa-close\"></span>\r\n            <span class = \"tooltiptext truth-tooltip\"> cancel </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class = \"truth-table-body\">\r\n      <div class = \"truth-table-values\" *ngFor = \"let variable of variables; let i = index\">\r\n        <div class = \"truth-table-value\" *ngFor = \"let line of variable.lines\">\r\n          <div class = \"truth-table-value-line\">\r\n            {{ line }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class = \"truth-table-values\" style = \"width: 200px;\">\r\n        <div class = \"truth-table-value\" style = \"width: 200px;\" *ngFor = \"let line of result.lines | async;\">\r\n          <div class = \"truth-table-value-line\">\r\n            <input class = \"truth-input truth-input-header\" type = \"text\"  [value] = \"line.number\" (keyup.enter)=\"resultEdit($event, line)\" (focusout) = \"resultEdit($event, line)\">\r\n          </div>\r\n          <div class = \"truth-table-value-line-expression\" *ngIf = \"line.expression != ''\">\r\n            <span class = \"fa fa-chevron-right\" style = \"font-size: 12px;\"></span>  {{ line.expression }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class= \"truth-expression\" *ngIf = \"expression$.getValue()\">\r\n    <div class = \"truth-expression-section\">\r\n      <div class = \"truth-expression-label\">\r\n        <label> The truth table expression</label>\r\n      </div>\r\n      <div class = \"truth-expression-value\">\r\n        {{ expression$.getValue() }}\r\n      </div>\r\n    </div>\r\n    <div class = \"truth-expression-section\" *ngIf = \"evaluating\">\r\n      <div class = \"truth-expression-label\">\r\n        <label> The Mc Cluskey simplification expression</label>\r\n      </div>\r\n      <div class = \"truth-expression-value\" *ngFor = \"let resolved of mcCluskeyResolved?.solution\">\r\n        <div class = \"truth-expression-mc-cluskey-level\">\r\n          Level - {{ resolved.level }}\r\n        </div>\r\n        <div class = \"truth-expression-mc-cluskey-fragment\" *ngFor = \"let fragment of resolved.fragments\">\r\n          <div class = \"truth-expression-mc-cluskey-fragment-name\">\r\n            {{ fragment.name }}\r\n          </div>\r\n          <div class = \"truth-expression-mc-cluskey-fragment-variable\">\r\n            {{ fragmentVariables( fragment ) }}\r\n          </div>\r\n          <div class = \"truth-expression-mc-cluskey-fragment-value\">\r\n            {{ fragment.valuesAsString }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class = \"truth-compiler\" style = \"padding-bottom: 2px; margin-top: 5px;\">\r\n        {{ status }}\r\n      </div>\r\n    </div>\r\n    <div class = \"truth-expression-section\" style = \"margin-top:10px;\">\r\n      <button (click) = \"executeMcCluskey()\">Evaluate</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class = \"truth-final-result\" *ngIf = \"mcCluskeyResolved\">\r\n  <span class = \"truth-final-method-name\">MC-CLUSKEY </span><span class = \"truth-final-result-text\">RESULT </span><span class = \"fa fa-chevron-right truth-final-result-text\" style = \"font-size: 12px;\"></span> {{ mcCluskeyResolved.simplified }}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/truth/truth.table/truth.table.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/truth/truth.table/truth.table.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-container {\n  float: left;\n  background: #1e1f27;\n  color: rgba(255, 255, 255, 0.8);\n  width: calc(100% - 200px);\n  height: calc(100% - 60px); }\n\n.truth-options {\n  float: left;\n  width: 100%;\n  height: 25px;\n  padding-top: 20px;\n  font-family: Verdana; }\n\n.truth-container {\n  float: left;\n  width: 100%;\n  height: calc( 100% - 100px); }\n\n.truth-option-right {\n  float: right;\n  width: 100px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 16px;\n  cursor: pointer; }\n\n.truth-option-right:hover {\n  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8); }\n\n.truth-info {\n  float: left;\n  width: 100%;\n  height: 24px;\n  font-size: 12px;\n  color: rgba(245, 182, 10, 0.8); }\n\n.truth-body {\n  float: left;\n  display: flex;\n  width: calc(100% - 50px);\n  min-height: 200px;\n  height: calc( 100%);\n  max-height: calc( 100%);\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8); }\n\n.truth-table-header {\n  float: left;\n  width: auto;\n  height: 60px; }\n\n.truth-input {\n  float: left;\n  background: none;\n  border: none;\n  box-shadow: none;\n  width: 50px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  outline: none;\n  text-align: center; }\n\n.truth-final-method-name {\n  color: rgba(38, 212, 255, 0.932); }\n\n.truth-final-result-text {\n  color: rgba(11, 206, 53, 0.932); }\n\n.truth-table {\n  float: left;\n  width: auto;\n  height: calc(100% - 20px);\n  max-height: calc(100% - 20px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-right: 10px; }\n\n.truth-table-header {\n  position: fixed;\n  width: auto;\n  height: 53px; }\n\n.truth-table-body {\n  width: auto;\n  height: auto;\n  padding-top: 50px; }\n\n.truth-table-values {\n  float: left;\n  width: 51px;\n  height: auto; }\n\n.truth-table-value {\n  float: left;\n  width: 50px;\n  height: 50px; }\n\n.truth-table-value-line {\n  float: left;\n  width: 50px;\n  height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  border-right: 1px solid rgba(255, 255, 255, 0.8);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.8);\n  text-align: center;\n  line-height: 50px; }\n\n.truth-table-value-line-expression {\n  float: left;\n  text-align: left;\n  font-size: 11px;\n  width: auto;\n  min-height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  padding-left: 5px;\n  line-height: 50px; }\n\n.truth-table-value-line-expression > span {\n  color: rgba(11, 206, 53, 0.932); }\n\n.truth-table-header-variable-name {\n  float: left;\n  background: #1574c2;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n  border-right: 1px solid rgba(255, 255, 255, 0.8);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.8);\n  text-align: center; }\n\n.truth-option {\n  float: left;\n  width: auto;\n  height: 50px;\n  padding-left: 10px; }\n\n.truth-add-input {\n  float: left;\n  width: 50px;\n  height: 50px;\n  border: 1px dashed rgba(255, 255, 255, 0.8);\n  background: #1e1f27; }\n\n.truth-add-button {\n  float: left;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 16px;\n  border: 1px dashed rgba(255, 255, 255, 0.8);\n  text-align: center;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  background: #1e1f27; }\n\n.truth-add-button:hover {\n  color: rgba(255, 255, 255, 0.8); }\n\n.truth-input-active {\n  width: 50px; }\n\n.tooltip {\n  position: relative;\n  display: inline-block; }\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #555;\n  color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  border-radius: 2px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s; }\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.8) transparent transparent transparent; }\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1; }\n\n.truth-tooltip {\n  font-size: 14px;\n  line-height: 20px; }\n\n.truth-remove {\n  float: left;\n  font-size: 12px;\n  margin-top: -20px;\n  margin-left: -45px;\n  cursor: pointer; }\n\n.truth-remove:hover {\n  color: rgba(206, 11, 11, 0.932) !important; }\n\n.truth-expression {\n  float: left;\n  width: auto;\n  height: auto;\n  max-height: calc(100% - 20px);\n  overflow-y: auto;\n  padding-left: 20px;\n  padding-right: 10px; }\n\n.truth-expression-section {\n  height: auto; }\n\n.truth-expression-label {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: bold; }\n\n.truth-expression-value {\n  width: 100%;\n  max-width: 800px;\n  height: auto;\n  line-height: 30px;\n  font-size: 12px;\n  word-wrap: break-word; }\n\n.truth-expression-mc-cluskey-level {\n  float: left;\n  border: 1px solid rgba(17, 128, 192, 0.932);\n  text-align: center;\n  width: 100%;\n  max-height: 15px;\n  line-height: 15px;\n  font-weight: bold; }\n\n.truth-expression-mc-cluskey-fragment {\n  float: left;\n  width: 100%;\n  min-height: 25px;\n  height: auto;\n  text-align: center;\n  border: 1px solid rgba(17, 128, 192, 0.932);\n  border-top: none;\n  word-wrap: break-word; }\n\n.truth-expression-mc-cluskey-fragment-name {\n  float: left;\n  width: calc(30% - 2px);\n  height: 100%;\n  line-height: 20px;\n  border-right: 1px solid rgba(17, 128, 192, 0.932);\n  word-wrap: break-word; }\n\n.truth-expression-mc-cluskey-fragment-value {\n  float: left;\n  width: calc(40% - 2px);\n  height: 100%;\n  line-height: 20px;\n  word-wrap: break-word; }\n\n.truth-expression-mc-cluskey-fragment-variable {\n  float: left;\n  width: calc(30% - 2px);\n  height: 100%;\n  line-height: 20px;\n  border-right: 1px solid rgba(17, 128, 192, 0.932);\n  word-wrap: break-word; }\n\n.truth-final-result {\n  float: left;\n  width: 100%; }\n\n.truth-compiler {\n  margin-top: 5px; }\n"

/***/ }),

/***/ "./src/app/truth/truth.table/truth.table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/truth/truth.table/truth.table.component.ts ***!
  \************************************************************/
/*! exports provided: TruthTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthTableComponent", function() { return TruthTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _compiler_compiler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../compiler/compiler.service */ "./src/app/compiler/compiler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TruthTableComponent = /** @class */ (function () {
    function TruthTableComponent(compilerService) {
        this.compilerService = compilerService;
        this.editing = false;
        this.evaluating = false;
        this.status = '';
        this.expression$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.lines$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.mcCluskeyResolved = null;
        this.newVariable = false;
        this.result = { name: 'result', lines: this.lines$ };
        this.resultWasEdited = false;
        this.variables = [];
    }
    TruthTableComponent.prototype.ngOnInit = function () {
        this.variables.push({ name: 'A' });
        this.generateBinaries();
    };
    TruthTableComponent.prototype.addVariable = function () {
        this.newVariable = true;
    };
    TruthTableComponent.prototype.canEdit = function () {
        this.editing = true;
    };
    TruthTableComponent.prototype.editEnd = function (evento, i) {
        var value = evento.target.value;
        if (value && value !== '') {
            var variable = this.variables[i];
            variable.name = value;
        }
        else if (this.variables.length > 1) {
            this.removeVariable(i);
        }
        else {
            evento.target.value = this.variables[i].name;
        }
    };
    TruthTableComponent.prototype.executeMcCluskey = function () {
        var _this = this;
        this.evaluating = true;
        this.status = 'Executing McCluskey...';
        this.mcCluskeyResolved = null;
        this.compilerService.mcCluskey(this.expression$.getValue()).subscribe(function (resolved) {
            _this.status = 'Done.';
            _this.mcCluskeyResolved = resolved;
        });
    };
    TruthTableComponent.prototype.generateBinaries = function () {
        var size = this.variables.length;
        var lines = Math.pow(2, size);
        for (var i = 0; i < size; i++) {
            var variable = this.variables[i];
            variable.lines = [];
            var inversor = lines / (Math.pow(2, (i + 1)));
            for (var j = 0; j < lines; j++) {
                var rest = parseInt(((j / inversor) + ''), 10);
                variable.lines.push((rest % 2 === 0) ? 0 : 1);
            }
        }
        var newValues = [];
        var oldValues = this.result.lines.getValue();
        for (var i = 0; i < lines; i++) {
            var oldValue = oldValues[i];
            if (oldValue && oldValue.number == '1') {
                newValues.push(oldValue);
                this.minExpressionForLine(oldValue);
            }
            else {
                newValues.push({ indice: i, number: 0, expression: '' });
            }
        }
        this.result.lines.next(newValues);
        this.minExpression();
    };
    TruthTableComponent.prototype.fragmentVariables = function (fragment) {
        return (fragment.variablesAsString != '') ? fragment.variablesAsString : 'Simplified';
    };
    TruthTableComponent.prototype.haveNewVariable = function (value) {
        var _this = this;
        setTimeout(function () {
            if (_this.newVariable && value && value !== '') {
                _this.variables.push({ name: value });
                _this.generateBinaries();
            }
            _this.newVariable = false;
        }, 100);
    };
    TruthTableComponent.prototype.minExpression = function () {
        var expression = '';
        for (var _i = 0, _a = this.lines$.getValue(); _i < _a.length; _i++) {
            var line = _a[_i];
            if (line.expression) {
                expression += '(' + line.expression + ') + ';
            }
        }
        this.expression$.next(expression.replace(/ \+ $/g, ''));
        this.evaluating = false;
        this.mcCluskeyResolved = null;
    };
    TruthTableComponent.prototype.minExpressionForLine = function (line) {
        var expression = '';
        for (var _i = 0, _a = this.variables; _i < _a.length; _i++) {
            var variable = _a[_i];
            var argument = (variable.lines[line.indice] == '1') ? variable.name : ('!' + variable.name);
            expression += (expression != '') ? ('.' + argument) : argument;
        }
        line.expression = expression;
    };
    TruthTableComponent.prototype.resultEdit = function (event, line) {
        var value = (event.target.value).toLowerCase();
        if (value == '' || (value != '0' && value != '1' && value != 'x')) {
            event.target.value = line.number;
        }
        else {
            line.number = value;
            if (value == 1) {
                this.minExpressionForLine(line);
            }
            else {
                line.expression = '';
            }
            this.minExpression();
        }
    };
    TruthTableComponent.prototype.removeVariable = function (i) {
        if (this.variables.length > 1) {
            var removed = this.variables.splice(i, 1);
            this.generateBinaries();
            return removed;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('result'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TruthTableComponent.prototype, "divAddVariable", void 0);
    TruthTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truth.table',
            template: __webpack_require__(/*! ./truth.table.component.html */ "./src/app/truth/truth.table/truth.table.component.html"),
            styles: [__webpack_require__(/*! ./truth.table.component.scss */ "./src/app/truth/truth.table/truth.table.component.scss")]
        }),
        __metadata("design:paramtypes", [_compiler_compiler_service__WEBPACK_IMPORTED_MODULE_2__["CompilerService"]])
    ], TruthTableComponent);
    return TruthTableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projetos\Mine\TruthTableOfTruth\interface\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map