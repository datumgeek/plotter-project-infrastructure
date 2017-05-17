webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuppliersGridComponent = (function () {
    function SuppliersGridComponent() {
    }
    SuppliersGridComponent.prototype.ngOnInit = function () {
    };
    return SuppliersGridComponent;
}());
SuppliersGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ppi-suppliers-grid',
        template: __webpack_require__(240),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], SuppliersGridComponent);

//# sourceMappingURL=suppliers-grid.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_client__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuppliersListComponent = (function () {
    function SuppliersListComponent(suppliersClient) {
        this.suppliersClient = suppliersClient;
        this.suppliers = [];
    }
    SuppliersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.suppliersClient.getAll()
            .subscribe(function (suppliers) { _this.suppliers = suppliers; });
    };
    return SuppliersListComponent;
}());
SuppliersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ppi-suppliers-list',
        template: __webpack_require__(241),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_client__["b" /* SuppliersClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_client__["b" /* SuppliersClient */]) === "function" && _a || Object])
], SuppliersListComponent);

var _a;
//# sourceMappingURL=suppliers-list.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 157;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(174);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suppliers_list_suppliers_list_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suppliers_grid_suppliers_grid_component__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', children: [] },
    { path: 'suppliers-list', component: __WEBPACK_IMPORTED_MODULE_2__suppliers_list_suppliers_list_component__["a" /* SuppliersListComponent */] },
    { path: 'suppliers-grid', component: __WEBPACK_IMPORTED_MODULE_3__suppliers_grid_suppliers_grid_component__["a" /* SuppliersGridComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ppi works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ppi-root',
        template: __webpack_require__(238),
        styles: [__webpack_require__(230)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_client__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__suppliers_list_suppliers_list_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__suppliers_grid_suppliers_grid_component__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_9__suppliers_list_suppliers_list_component__["a" /* SuppliersListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__suppliers_grid_suppliers_grid_component__["a" /* SuppliersGridComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__api_client__["a" /* ValuesClient */], __WEBPACK_IMPORTED_MODULE_7__api_client__["b" /* SuppliersClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_client__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(valuesClient) {
        this.valuesClient = valuesClient;
        this.jobs = [];
    }
    MenuComponent.prototype.runTest = function () {
        var _this = this;
        this.valuesClient.runExample(5)
            .subscribe(function (job) {
            _this.jobs.push(job);
        });
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ppi-menu',
        template: __webpack_require__(239),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_client__["a" /* ValuesClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_client__["a" /* ValuesClient */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<ppi-menu></ppi-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" \r\n          type=\"button\" \r\n          (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\r\n          aria-controls=\"exCollapsingNavbar2\" \r\n          aria-expanded=\"false\" \r\n          aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" \r\n     routerLink=\"/\" \r\n     routerLinkActive=\"active\">Plotter App</a>\r\n  <div [ngbCollapse]=\"isNavbarCollapsed\" \r\n       class=\"collapse navbar-collapse\" \r\n       id=\"exCollapsingNavbar2\">\r\n    <div class=\"navbar-nav mr-auto\">\r\n      <a class=\"nav-item nav-link\" \r\n         href=\"/swagger\" \r\n         target=\"_blank\">Web API</a>\r\n      <a class=\"nav-item nav-link\"\r\n         href=\"/hangfire/jobs/enqueued\"\r\n         target=\"_blank\">Jobs</a>\r\n      <a class=\"nav-item nav-link\" \r\n         routerLink=\"/suppliers-list\" \r\n         routerLinkActive=\"active\"\r\n         href=\"/suppliers-list\">\r\n        Suppliers List</a>\r\n      <a class=\"nav-item nav-link\"\r\n         routerLink=\"/suppliers-grid\"\r\n         routerLinkActive=\"active\"\r\n         href=\"/suppliers-grid\">\r\n        Suppliers Grid\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<h2>Web API Test</h2>\r\n<button (click)=\"runTest()\">Run Test</button>\r\n<h3>Job Results</h3>\r\n<p *ngFor=\"let job of jobs\">\r\n  <a \r\n     [href]=\"'/hangfire/jobs/details/' + job\" \r\n     target=\"_blank\">\r\n  Hangfire Job #{{ job }}</a>\r\n</p>\r\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<p>\n  suppliers-grid works!\n</p>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<p>\n  suppliers-list works!\n</p>\n<div *ngFor=\"let supplier of suppliers\">\n  {{ supplier.companyName }}\n</div>\n"

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(158);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(87);
/* unused harmony export API_BASE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SuppliersClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesClient; });
/* unused harmony export Suppliers */
/* unused harmony export Products */
/* unused harmony export SwaggerException */
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v10.6.6324.28497 (NJsonSchema v8.33.6323.36213) (http://NSwag.org)
// </auto-generated>
//----------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var API_BASE_URL = new __WEBPACK_IMPORTED_MODULE_8__angular_core__["c" /* OpaqueToken */]('API_BASE_URL');
var SuppliersClient = (function () {
    function SuppliersClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    SuppliersClient.prototype.getAll = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Suppliers";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = "";
        var options_ = {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    SuppliersClient.prototype.processGetAll = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                    var item = resultData200_1[_i];
                    result200.push(Suppliers.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    SuppliersClient.prototype.post = function (supplier) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Suppliers";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(supplier ? supplier.toJSON() : null);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processPost(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processPost(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    SuppliersClient.prototype.processPost = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    SuppliersClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Suppliers/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = "";
        var options_ = {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    SuppliersClient.prototype.processGet = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? Suppliers.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    SuppliersClient.prototype.put = function (id, supplier) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Suppliers/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(supplier ? supplier.toJSON() : null);
        var options_ = {
            body: content_,
            method: "put",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processPut(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processPut(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    SuppliersClient.prototype.processPut = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    SuppliersClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Suppliers/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = "";
        var options_ = {
            body: content_,
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    SuppliersClient.prototype.processDelete = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    return SuppliersClient;
}());
SuppliersClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["d" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["f" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["e" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */]) === "function" && _a || Object, String])
], SuppliersClient);

var ValuesClient = (function () {
    function ValuesClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    ValuesClient.prototype.getAll = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = "";
        var options_ = {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    ValuesClient.prototype.processGetAll = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                    var item = resultData200_2[_i];
                    result200.push(item);
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    ValuesClient.prototype.post = function (value) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(value);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processPost(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processPost(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    ValuesClient.prototype.processPost = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    ValuesClient.prototype.runExample = function (messageCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Values/run-example/{messageCount}";
        if (messageCount === undefined || messageCount === null)
            throw new Error("The parameter 'messageCount' must be defined.");
        url_ = url_.replace("{messageCount}", encodeURIComponent("" + messageCount));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = "";
        var options_ = {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processRunExample(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processRunExample(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    ValuesClient.prototype.processRunExample = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    ValuesClient.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = "";
        var options_ = {
            body: content_,
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    ValuesClient.prototype.processGet = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    ValuesClient.prototype.put = function (id, value) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(value);
        var options_ = {
            body: content_,
            method: "put",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processPut(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processPut(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    ValuesClient.prototype.processPut = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    ValuesClient.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Values/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = "";
        var options_ = {
            body: content_,
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    ValuesClient.prototype.processDelete = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
        }
        else if (status !== 200 && status !== 204) {
            var responseText = response.text();
            return throwException("An unexpected server error occurred.", status, responseText);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    return ValuesClient;
}());
ValuesClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["d" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["f" /* Optional */])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["e" /* Inject */])(API_BASE_URL)),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */]) === "function" && _b || Object, String])
], ValuesClient);

var Suppliers = (function () {
    function Suppliers(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Suppliers.prototype.init = function (data) {
        if (data) {
            this.supplierId = data["supplierId"];
            this.companyName = data["companyName"];
            this.contactName = data["contactName"];
            this.contactTitle = data["contactTitle"];
            this.address = data["address"];
            this.city = data["city"];
            this.region = data["region"];
            this.postalCode = data["postalCode"];
            this.country = data["country"];
            this.phone = data["phone"];
            this.fax = data["fax"];
            this.homePage = data["homePage"];
            if (data["products"] && data["products"].constructor === Array) {
                this.products = [];
                for (var _i = 0, _a = data["products"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.products.push(Products.fromJS(item));
                }
            }
        }
    };
    Suppliers.fromJS = function (data) {
        var result = new Suppliers();
        result.init(data);
        return result;
    };
    Suppliers.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["supplierId"] = this.supplierId;
        data["companyName"] = this.companyName;
        data["contactName"] = this.contactName;
        data["contactTitle"] = this.contactTitle;
        data["address"] = this.address;
        data["city"] = this.city;
        data["region"] = this.region;
        data["postalCode"] = this.postalCode;
        data["country"] = this.country;
        data["phone"] = this.phone;
        data["fax"] = this.fax;
        data["homePage"] = this.homePage;
        if (this.products && this.products.constructor === Array) {
            data["products"] = [];
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var item = _a[_i];
                data["products"].push(item.toJSON());
            }
        }
        return data;
    };
    return Suppliers;
}());

var Products = (function () {
    function Products(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Products.prototype.init = function (data) {
        if (data) {
            this.productId = data["productId"];
            this.productName = data["productName"];
            this.supplierId = data["supplierId"];
            this.categoryId = data["categoryId"];
            this.quantityPerUnit = data["quantityPerUnit"];
            this.unitPrice = data["unitPrice"];
            this.unitsInStock = data["unitsInStock"];
            this.unitsOnOrder = data["unitsOnOrder"];
            this.reorderLevel = data["reorderLevel"];
            this.discontinued = data["discontinued"];
            this.supplier = data["supplier"] ? Suppliers.fromJS(data["supplier"]) : undefined;
        }
    };
    Products.fromJS = function (data) {
        var result = new Products();
        result.init(data);
        return result;
    };
    Products.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["productId"] = this.productId;
        data["productName"] = this.productName;
        data["supplierId"] = this.supplierId;
        data["categoryId"] = this.categoryId;
        data["quantityPerUnit"] = this.quantityPerUnit;
        data["unitPrice"] = this.unitPrice;
        data["unitsInStock"] = this.unitsInStock;
        data["unitsOnOrder"] = this.unitsOnOrder;
        data["reorderLevel"] = this.reorderLevel;
        data["discontinued"] = this.discontinued;
        data["supplier"] = this.supplier ? this.supplier.toJSON() : undefined;
        return data;
    };
    return Products;
}());

var SwaggerException = (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, result) {
        var _this = _super.call(this) || this;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.result = result;
        return _this;
    }
    return SwaggerException;
}(Error));

function throwException(message, status, response, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(new SwaggerException(message, status, response, null));
}
function blobToText(blob) {
    return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
        var reader = new FileReader();
        reader.onload = function () {
            observer.next(this.result);
            observer.complete();
        };
        reader.readAsText(blob);
    });
}
var _a, _b;
//# sourceMappingURL=api-client.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.bundle.js.map