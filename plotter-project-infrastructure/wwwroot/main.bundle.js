webpackJsonp([1,4],{

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsChildGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsChildGridComponent = (function () {
    function ProductsChildGridComponent() {
        this.gridOptions = {};
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    ProductsChildGridComponent.prototype.agInit = function (params) {
        this.parentRecord = params.node.parent.data;
    };
    ProductsChildGridComponent.prototype.ngAfterViewInit = function () {
        this.gridOptions.api.setRowData(this.parentRecord.products);
        this.gridOptions.api.sizeColumnsToFit();
    };
    ProductsChildGridComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: 'ProductId', field: 'productId' },
            { headerName: 'Name', field: 'productName' },
            { headerName: 'Q per U', field: 'quantityPerUnit' }
        ];
    };
    return ProductsChildGridComponent;
}());
ProductsChildGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ppi-products-child-grid',
        template: __webpack_require__(377),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [])
], ProductsChildGridComponent);

//# sourceMappingURL=products-child-grid.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_client__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_child_grid_products_child_grid_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suppliers_processor_suppliers_processor_component__ = __webpack_require__(426);
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
    function SuppliersGridComponent(suppliersClient) {
        this.suppliersClient = suppliersClient;
        this.suppliers = [];
        this.gridOptions = { context: this };
    }
    SuppliersGridComponent.prototype.showSpinAlert = function () {
        alert('spin alert !! :)');
    };
    SuppliersGridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.suppliersClient.getAll()
            .subscribe(function (suppliers) {
            _this.suppliers = suppliers;
            _this.gridOptions.api.setColumnDefs(_this.getColumns(suppliers));
            _this.gridOptions.api.setRowData(suppliers);
        });
    };
    SuppliersGridComponent.prototype.isFullWidthCell = function (rowNode) {
        return rowNode.level === 1;
    };
    SuppliersGridComponent.prototype.getNodeChildDetails = function (record) {
        if (record && record.products && record.products.length > 0) {
            return {
                group: true,
                // the key is used by the default group cellRenderer
                key: record.companyName,
                // provide ag-Grid with the children of this group
                children: [record.products],
                // for demo, expand rows beginning with 'e'
                expanded: record.companyName.toLowerCase().startsWith('e')
            };
        }
        else {
            return null;
        }
    };
    SuppliersGridComponent.prototype.getFullWidthCellRenderer = function () {
        return __WEBPACK_IMPORTED_MODULE_2__products_child_grid_products_child_grid_component__["a" /* ProductsChildGridComponent */];
    };
    SuppliersGridComponent.prototype.getRowHeight = function (params) {
        var rowIsDetailRow = params.node.level === 1;
        // return 100 when detail row, otherwise return 25
        return rowIsDetailRow ? 200 : 25;
    };
    SuppliersGridComponent.prototype.getColumns = function (list) {
        var columnDefs = [];
        if (list.length > 0)
            columnDefs.push({
                headerName: '#',
                width: 30,
                checkboxSelection: function (params) {
                    return params.data.companyName.toLowerCase().startsWith('e');
                },
                suppressSorting: true,
                suppressMenu: true,
                pinned: true,
                field: "isChecked"
            });
        columnDefs.push({
            headerName: 'Supplier Processor',
            cellRendererFramework: __WEBPACK_IMPORTED_MODULE_3__suppliers_processor_suppliers_processor_component__["a" /* SuppliersProcessorComponent */],
            width: 200,
            pinned: true
        });
        for (var prop in list[0]) {
            switch (typeof list[0][prop]) {
                case 'function':
                    break;
                default:
                    if (prop === 'companyName') {
                        columnDefs.push({
                            headerName: prop,
                            field: prop,
                            pinned: true,
                            cellRenderer: 'group',
                            cellRendererParams: { suppressCount: true },
                            cellStyle: function (params) {
                                return params.data.companyName.toLowerCase().startsWith('e') ?
                                    {
                                        backgroundColor: 'green',
                                        color: 'white'
                                    }
                                    : {};
                            }
                        });
                    }
                    else {
                        columnDefs.push({
                            headerName: prop,
                            field: prop
                        });
                    }
                    break;
            }
        }
        return columnDefs;
    };
    return SuppliersGridComponent;
}());
SuppliersGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ppi-suppliers-grid',
        template: __webpack_require__(378),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_client__["b" /* SuppliersClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_client__["b" /* SuppliersClient */]) === "function" && _a || Object])
], SuppliersGridComponent);

var _a;
//# sourceMappingURL=suppliers-grid.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_client__ = __webpack_require__(73);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ppi-suppliers-list',
        template: __webpack_require__(379),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_client__["b" /* SuppliersClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_client__["b" /* SuppliersClient */]) === "function" && _a || Object])
], SuppliersListComponent);

var _a;
//# sourceMappingURL=suppliers-list.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 272;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(291);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suppliers_list_suppliers_list_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suppliers_grid_suppliers_grid_component__ = __webpack_require__(210);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ppi-root',
        template: __webpack_require__(375),
        styles: [__webpack_require__(366)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_client__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ag_grid_angular_main__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ag_grid_angular_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ag_grid_angular_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__suppliers_list_suppliers_list_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__suppliers_grid_suppliers_grid_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__suppliers_grid_products_child_grid_products_child_grid_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__suppliers_grid_suppliers_processor_suppliers_processor_component__ = __webpack_require__(426);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__suppliers_list_suppliers_list_component__["a" /* SuppliersListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__suppliers_grid_suppliers_grid_component__["a" /* SuppliersGridComponent */],
            __WEBPACK_IMPORTED_MODULE_12__suppliers_grid_products_child_grid_products_child_grid_component__["a" /* ProductsChildGridComponent */],
            __WEBPACK_IMPORTED_MODULE_13__suppliers_grid_suppliers_processor_suppliers_processor_component__["a" /* SuppliersProcessorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_ag_grid_angular_main__["AgGridModule"].withComponents([
                __WEBPACK_IMPORTED_MODULE_12__suppliers_grid_products_child_grid_products_child_grid_component__["a" /* ProductsChildGridComponent */],
                __WEBPACK_IMPORTED_MODULE_13__suppliers_grid_suppliers_processor_suppliers_processor_component__["a" /* SuppliersProcessorComponent */]
            ]),
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__api_client__["a" /* ValuesClient */], __WEBPACK_IMPORTED_MODULE_7__api_client__["b" /* SuppliersClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_client__ = __webpack_require__(73);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ppi-menu',
        template: __webpack_require__(376),
        styles: [__webpack_require__(367)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_client__["a" /* ValuesClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_client__["a" /* ValuesClient */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 291:
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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<ppi-menu></ppi-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" \r\n          type=\"button\" \r\n          (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\r\n          aria-controls=\"exCollapsingNavbar2\" \r\n          aria-expanded=\"false\" \r\n          aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" \r\n     routerLink=\"/\" \r\n     routerLinkActive=\"active\">Plotter App</a>\r\n  <div [ngbCollapse]=\"isNavbarCollapsed\" \r\n       class=\"collapse navbar-collapse\" \r\n       id=\"exCollapsingNavbar2\">\r\n    <div class=\"navbar-nav mr-auto\">\r\n      <a class=\"nav-item nav-link\" \r\n         href=\"/swagger\" \r\n         target=\"_blank\">Web API</a>\r\n      <a class=\"nav-item nav-link\"\r\n         href=\"/hangfire/jobs/enqueued\"\r\n         target=\"_blank\">Jobs</a>\r\n      <a class=\"nav-item nav-link\" \r\n         routerLink=\"/suppliers-list\" \r\n         routerLinkActive=\"active\"\r\n         href=\"/suppliers-list\">\r\n        Suppliers List</a>\r\n      <a class=\"nav-item nav-link\"\r\n         routerLink=\"/suppliers-grid\"\r\n         routerLinkActive=\"active\"\r\n         href=\"/suppliers-grid\">\r\n        Suppliers Grid\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<h2>Web API Test</h2>\r\n<button (click)=\"runTest()\">Run Test</button>\r\n<h3>Job Results</h3>\r\n<p *ngFor=\"let job of jobs\">\r\n  <a \r\n     [href]=\"'/hangfire/jobs/details/' + job\" \r\n     target=\"_blank\">\r\n  Hangfire Job #{{ job }}</a>\r\n</p>\r\n"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; height: 100%; position: relative; margin: 25px; padding-left: 25px\">\r\n  <p>\r\n    products!\r\n  </p>\r\n  <ag-grid-angular style=\"width: 550px; height: 120px\" [gridOptions]=\"gridOptions\"\r\n                   enableSorting\r\n                   enableFilter\r\n                   enableColResize>\r\n  </ag-grid-angular>\r\n</div>\r\n"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  suppliers-grid works!\r\n</p>\r\n<ag-grid-angular #agGrid\r\n                 class=\"ag-fresh\"\r\n                 style=\"width: 800px; height: 350px;\"\r\n                 enableColResize\r\n                 enableSorting\r\n                 enableFilter\r\n                 [gridOptions]=\"gridOptions\"\r\n                 [getRowHeight]=\"getRowHeight\"\r\n                 [getNodeChildDetails]=\"getNodeChildDetails\"\r\n                 [fullWidthCellRendererFramework]=\"getFullWidthCellRenderer()\"\r\n                 [isFullWidthCell]=\"isFullWidthCell\">\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<p>\n  suppliers-list works!\n</p>\n<div *ngFor=\"let supplier of suppliers\">\n  {{ supplier.companyName }}\n</div>\n"

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(273);


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersProcessorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuppliersProcessorComponent = (function () {
    function SuppliersProcessorComponent() {
        this.isProcessing = false;
        this.message = "";
        this.processCount = 0;
    }
    SuppliersProcessorComponent.prototype.runProcess = function () {
        this.isProcessing = true;
        this.processCount = 0;
        this.message = 'queuing process...';
        this.loop();
    };
    SuppliersProcessorComponent.prototype.loop = function () {
        var _this = this;
        this.processCount++;
        if (this.processCount > 5) {
            this.isProcessing = false;
            return;
        }
        this.message = "running step " + this.processCount;
        setTimeout(function () { _this.loop(); }, 1000);
    };
    SuppliersProcessorComponent.prototype.agInit = function (params) {
        if (params && params.node) {
            this.supplier = params.node.data;
            this.suppliersGrid = params.context;
        }
    };
    return SuppliersProcessorComponent;
}());
SuppliersProcessorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ppi-suppliers-processor',
        template: __webpack_require__(428),
        styles: [__webpack_require__(427)]
    }),
    __metadata("design:paramtypes", [])
], SuppliersProcessorComponent);

//# sourceMappingURL=suppliers-processor.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "<!-- run button -->\r\n<i *ngIf=\"!isProcessing\" class=\"fa fa-play-circle\" (click)=\"runProcess()\"></i>\r\n<!-- spinner -->\r\n<i *ngIf=\"isProcessing\" class=\"fa fa-spinner fa-spin\" (click)=\"suppliersGrid.showSpinAlert()\"></i>\r\n<!-- message -->\r\n<span *ngIf=\"isProcessing\">{{ message }}</span>"

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(163);
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










var API_BASE_URL = new __WEBPACK_IMPORTED_MODULE_8__angular_core__["OpaqueToken"]('API_BASE_URL');
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
    SuppliersClient.prototype.getAgGridPage = function (sort, filter, take, skip) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Suppliers/ag-grid-page?";
        if (sort === undefined)
            throw new Error("The parameter 'sort' must be defined.");
        else
            url_ += "sort=" + encodeURIComponent("" + sort) + "&";
        if (filter === undefined)
            throw new Error("The parameter 'filter' must be defined.");
        else
            url_ += "filter=" + encodeURIComponent("" + filter) + "&";
        if (take === undefined || take === null)
            throw new Error("The parameter 'take' must be defined and cannot be null.");
        else
            url_ += "take=" + encodeURIComponent("" + take) + "&";
        if (skip === undefined || skip === null)
            throw new Error("The parameter 'skip' must be defined and cannot be null.");
        else
            url_ += "skip=" + encodeURIComponent("" + skip) + "&";
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
            return _this.processGetAgGridPage(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Response */]) {
                try {
                    return _this.processGetAgGridPage(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    SuppliersClient.prototype.processGetAgGridPage = function (response) {
        var status = response.status;
        if (status === 200) {
            var responseText = response.text();
            var result200 = null;
            var resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                    var item = resultData200_2[_i];
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
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
                for (var _i = 0, resultData200_3 = resultData200; _i < resultData200_3.length; _i++) {
                    var item = resultData200_3[_i];
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
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

},[423]);
//# sourceMappingURL=main.bundle.js.map