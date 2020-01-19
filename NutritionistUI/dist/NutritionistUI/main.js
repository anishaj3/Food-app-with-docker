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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>{{ title }}</span>\n  <button class = 'search-button' mat-button [routerLink]=\"['/food/search']\">Search</button>\n  <button mat-button [routerLink]=\"['/food/favourite']\">Favourite</button>\n  <button mat-button (click)=\"logout()\">Logout</button>\n</mat-toolbar>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'NutritionistUI';
    }
    AppComponent.prototype.logout = function () {
        this.authService.deleteToken();
        this.router.navigate(['user/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_nutrition_nutrition_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/nutrition/nutrition.module */ "./src/app/modules/nutrition/nutrition.module.ts");
/* harmony import */ var _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard.service */ "./src/app/auth.guard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_nutrition_nutrition_module__WEBPACK_IMPORTED_MODULE_4__["NutritionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]
            ],
            providers: [
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth.guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authenticationService.isTokenExpired()) {
            return true;
        }
        this.router.navigate(['user/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/authentication/register/register.component.ts");
/* harmony import */ var _authentication_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.router.module */ "./src/app/modules/authentication/authentication.router.module.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _authentication_router_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRouterModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
            ],
            exports: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.router.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.router.module.ts ***!
  \************************************************************************/
/*! exports provided: AuthenticationRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRouterModule", function() { return AuthenticationRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/authentication/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var userRoutes = [
    {
        path: 'user',
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            }
        ]
    }
];
var AuthenticationRouterModule = /** @class */ (function () {
    function AuthenticationRouterModule() {
    }
    AuthenticationRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(userRoutes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AuthenticationRouterModule);
    return AuthenticationRouterModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.userEndpoint = 'http://localhost:8089/api/v1/user';
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var registerUrl = this.userEndpoint + "/register";
        return this.http.post(registerUrl, user, { responseType: 'text' });
    };
    AuthenticationService.prototype.loginUser = function (user) {
        var loginUrl = this.userEndpoint + "/login";
        return this.http.post(loginUrl, user);
    };
    AuthenticationService.prototype.setToken = function (token) {
        return localStorage.setItem("jwt_token", token);
    };
    AuthenticationService.prototype.getToken = function () {
        console.log('Fetching token');
        return localStorage.getItem("jwt_token");
    };
    AuthenticationService.prototype.deleteToken = function () {
        return localStorage.removeItem("jwt_token");
    };
    AuthenticationService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined || date === null)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthenticationService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container {\n    width: 400px;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.register-header {\n    font-size: 20px;\n}"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"register-container\">\n    <form class=\"register-form\" #registerForm=\"ngForm\" (ngSubmit)=\"loginUser()\">\n<mat-card class=\"register-card\">\n  <mat-card-header >       \n      <mat-card-title class=\"register-header\">Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"register-overview\">     \n      <mat-form-field>\n          <input matInput placeholder=\"User Id\" [(ngModel)]=\"newUser.userId\" name=\"userId\" class=\"userId\">      \n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type=\"password\" placeholder=\"password\" [(ngModel)]=\"newUser.password\" name=\"password\" class=\"password\">      \n        </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions class=\"food-actions\">\n      <button  mat-button color=\"primary\" type=\"submit\" class=\"loginButton\">Login</button>\n      <button  mat-button color=\"primary\" [routerLink]=\"['/user/register']\" class=\"registerButton\"> Register</button>\n  </mat-card-actions>\n</mat-card>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user */ "./src/app/modules/authentication/user.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticatinService, router) {
        this.authenticatinService = authenticatinService;
        this.router = router;
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_1__["user"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        console.log("New User: " + JSON.stringify(this.newUser));
        this.authenticatinService.loginUser(this.newUser)
            .subscribe(function (data) {
            console.log(data);
            _this.authenticatinService.setToken(data['token']);
            _this.router.navigate(['/food/search']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container {\n    width: 400px;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.register-header {\n    font-size: 20px;\n}"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"register-container\">\n    <form class=\"register-form\" #registerForm=\"ngForm\" (ngSubmit)=\"registerUser()\">\n<mat-card class=\"register-card\">\n  <mat-card-header >       \n      <mat-card-title class=\"register-header\">Register user</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"register-overview\">\n      <mat-form-field>\n          <input matInput placeholder=\"Firstname\" [(ngModel)]=\"newUser.firstname\" name=\"firstname\" class=\"firstname\">      \n        </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Lastname\" [(ngModel)]=\"newUser.lastname\" name=\"lastname\" class=\"lastname\">      \n      </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"User Id\" [(ngModel)]=\"newUser.userId\" name=\"user_id\" class=\"user_id\">      \n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"password\" placeholder=\"password\" [(ngModel)]=\"newUser.password\" name=\"password\" class=\"password\">      \n    </mat-form-field>\n    \n  </mat-card-content>\n  <mat-card-actions class=\"food-actions\">\n      <button class=\"registerButton\" mat-button color=\"primary\" type=\"submit\" >Register</button>\n  </mat-card-actions>\n</mat-card>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user */ "./src/app/modules/authentication/user.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authenticatinService, router) {
        this.authenticatinService = authenticatinService;
        this.router = router;
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_1__["user"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        console.log("New User: " + JSON.stringify(this.newUser));
        this.authenticatinService.registerUser(this.newUser)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['user/login']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/modules/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/user.ts":
/*!************************************************!*\
  !*** ./src/app/modules/authentication/user.ts ***!
  \************************************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/components/container/container.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/container/container.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".food-container {\n    margin:auto 0px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: wrap;\n}"

/***/ }),

/***/ "./src/app/modules/nutrition/components/container/container.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/container/container.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{header}}</h4>\n<div class=\"food-container\">\n    <food-thumbnail *ngFor=\"let item of items\" [item]=\"item\" [watchlist]=\"watchlist\"\n    (addFood)=\"addToFavourites($event)\"\n    (deleteFood)=\"deleteFromFavourites($event)\"\n    (showDetails)=\"itemButtonClicked($event)\"></food-thumbnail>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/nutrition/components/container/container.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/container/container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _nutrition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../nutrition.service */ "./src/app/modules/nutrition/nutrition.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(nutritionService, snackBar, route) {
        this.nutritionService = nutritionService;
        this.snackBar = snackBar;
        this.route = route;
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent.prototype.addToFavourites = function (items) {
        var _this = this;
        this.nutritionService.addFoodToFavourites(items)
            .subscribe(function (data) {
            _this.snackBar.open("Food Added to favourites", "", {
                duration: 2000
            });
        });
    };
    ContainerComponent.prototype.itemButtonClicked = function (items) {
        var _this = this;
        this.nutritionService.getFoodDetails(items).subscribe(function (foodReports) {
            _this.foodReport = foodReports[0];
        });
    };
    ContainerComponent.prototype.deleteFromFavourites = function (item) {
        var _this = this;
        var foodIndex = this.items.findIndex(function (mv) {
            return mv.ndbno === item.ndbno;
        });
        this.items.splice(foodIndex, 1);
        this.nutritionService.deleteFoodFromFavourites(item)
            .subscribe(function (data) {
            _this.snackBar.open("Food deleted from favourites", "", {
                duration: 2000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContainerComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContainerComponent.prototype, "food", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContainerComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ContainerComponent.prototype, "watchlist", void 0);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'food-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/modules/nutrition/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/modules/nutrition/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [_nutrition_service__WEBPACK_IMPORTED_MODULE_2__["NutritionService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/components/details-page/details-page.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/details-page/details-page.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".food-thumbnail {\n    width: 200px;\n    margin: 10px;\n    padding-top:15px;\n    height: 200px;\n}\n\n.food-overview {\n    width: 100%;\n    height: 50px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: 200px;\n}\n\n.food-overview::-webkit-scrollbar {\n    width: 3px;\n    background: #D3d3d3;\n}\n\n.food-actions {\n    text-align: right;\n}\n\n.food-image {\n    height: 300px;\n}\n\n.food-header {\n    padding: 0px;\n    margin-left: -10px;\n    margin-right: -10px;\n    margin-bottom: -5px;\n}\n\n.food-container {\n    margin:auto 0px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: wrap;\n}"

/***/ }),

/***/ "./src/app/modules/nutrition/components/details-page/details-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/details-page/details-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     <nutrient-thumbnail [foodNutrients]=\"foodNutrients\"></nutrient-thumbnail>\n"

/***/ }),

/***/ "./src/app/modules/nutrition/components/details-page/details-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/details-page/details-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nutrition.service */ "./src/app/modules/nutrition/nutrition.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(nutritionService, route) {
        this.nutritionService = nutritionService;
        this.route = route;
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.nutritionService.getFoodDetails(params[_this.nutritionService.paramNDBNO]).subscribe(function (foodReports) {
                _this.foodNutrients = foodReports[0].foodNutrients; // only one on details page
            });
        });
    };
    DetailsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'food-search',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/modules/nutrition/components/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.css */ "./src/app/modules/nutrition/components/details-page/details-page.component.css")]
        }),
        __metadata("design:paramtypes", [_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/components/favourites/favourites.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/favourites/favourites.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/nutrition/components/favourites/favourites.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/favourites/favourites.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<food-container [items]=\"items\" [header]=\"header\" [watchlist]=\"watchlist\"></food-container>\n"

/***/ }),

/***/ "./src/app/modules/nutrition/components/favourites/favourites.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/favourites/favourites.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../nutrition.service */ "./src/app/modules/nutrition/nutrition.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouritesComponent = /** @class */ (function () {
    function FavouritesComponent(nutritionService, route) {
        var _this = this;
        this.nutritionService = nutritionService;
        this.route = route;
        this.watchlist = true;
        this.items = [];
        this.route.data.subscribe(function (data) {
            _this.header = data.header;
        });
    }
    FavouritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nutritionService.getFoodFromFavourites()
            .subscribe(function (items) {
            var _a;
            (_a = _this.items).push.apply(_a, items);
        });
    };
    FavouritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'food-favourite',
            template: __webpack_require__(/*! ./favourites.component.html */ "./src/app/modules/nutrition/components/favourites/favourites.component.html"),
            styles: [__webpack_require__(/*! ./favourites.component.css */ "./src/app/modules/nutrition/components/favourites/favourites.component.css")]
        }),
        __metadata("design:paramtypes", [_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FavouritesComponent);
    return FavouritesComponent;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.food-thumbnail {\n    width: 200px;\n    margin: 10px;\n    padding-top: 15px;\n    height: 150px;\n}"

/***/ }),

/***/ "./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card *ngFor=\"let nutrient of foodNutrients\" class=\"food-thumbnail\">\n    <mat-card-header class=\"food-header\">       \n        <mat-card-title >{{nutrient.name}}</mat-card-title>\n        <mat-card-title>{{nutrient.nutrientId}}</mat-card-title>\n        <mat-card-title>{{nutrient.group}}</mat-card-title>\n        <mat-card-title>{{nutrient.unit}}</mat-card-title>\n        <mat-card-title>{{nutrient.value}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-actions class=\"food-actions\">\n    </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NutritionInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionInfoComponent", function() { return NutritionInfoComponent; });
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

var NutritionInfoComponent = /** @class */ (function () {
    function NutritionInfoComponent() {
    }
    NutritionInfoComponent.prototype.ngOnInit = function () {
        console.log('test', this.foodNutrients);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NutritionInfoComponent.prototype, "foodNutrients", void 0);
    NutritionInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nutrient-thumbnail',
            template: __webpack_require__(/*! ./nutrition-info.component.html */ "./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.html"),
            styles: [__webpack_require__(/*! ./nutrition-info.component.css */ "./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NutritionInfoComponent);
    return NutritionInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/components/search/search.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/search/search.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar {\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/modules/nutrition/components/search/search.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/search/search.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchbar\">\n  <mat-form-field>\n    <input id =\"search-button-input\" matInput type=\"text\" name=\"search\" #box (keyup.enter)=\"onSearch(box.value)\">\n    <mat-placeholder>Search</mat-placeholder>\n  </mat-form-field>\n</div>\n  <food-container [items]=\"items\" [header]=\"header\"></food-container>\n  \n   "

/***/ }),

/***/ "./src/app/modules/nutrition/components/search/search.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/search/search.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nutrition.service */ "./src/app/modules/nutrition/nutrition.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(nutritionService, route) {
        var _this = this;
        this.nutritionService = nutritionService;
        this.route = route;
        this.searchText = '';
        // Subject to be passed to paginated list so the list knows when
        //  the total number of items has changed and what the new value is
        this.totalItems$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.pageSize = 15;
        this.route.data.subscribe(function (data) {
            _this.header = data.header;
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onSearch = function (searchText) {
        this.searchText = searchText;
        this.performFoodSearch();
    };
    SearchComponent.prototype.performFoodSearch = function () {
        var _this = this;
        this.nutritionService.getFoodList(this.searchText, 0, this.pageSize).subscribe(function (result) {
            _this.items = result.items;
            console.log(_this.items);
            _this.totalItems$.next(result.total);
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'food-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/modules/nutrition/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/modules/nutrition/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/components/thumbnail/thumbnail.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/thumbnail/thumbnail.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".food-thumbnail {\n    width: 200px;\n    margin: 10px;\n    padding-top:15px;\n    height: 200px;\n}\n\n.food-overview {\n    width: 100%;\n    height: 50px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: 200px;\n}\n\n.food-overview::-webkit-scrollbar {\n    width: 3px;\n    background: #D3d3d3;\n}\n\n.food-actions {\n    text-align: right;\n}\n\n.food-image {\n    height: 300px;\n}\n\n.food-header {\n    padding: 0px;\n    margin-left: -10px;\n    margin-right: -10px;\n    margin-bottom: -5px;\n}\n"

/***/ }),

/***/ "./src/app/modules/nutrition/components/thumbnail/thumbnail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/thumbnail/thumbnail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"food-thumbnail\">\n    <mat-card-header class=\"food-header\">\n        <mat-card-title class=\"food-title\">{{item?.foodGroup}}</mat-card-title>\n        <mat-card-title>{{item?.name}}</mat-card-title>\n        <mat-card-title>{{item?.ndbno}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-actions class=\"food-actions\">\n        <button *ngIf=\"!watchlist\" mat-button color=\"primary\" (click)=\"addToFavourites()\">Add to favourite</button>\n        <button *ngIf=\"!watchlist\"mat-button color=\"primary\"[routerLink]=\"['food-details',item.ndbno]\">Details</button>\n        <button *ngIf=\"watchlist\" mat-button color=\"primary\" (click)=\"deleteFromFavourites()\">Delete</button>\n    </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/nutrition/components/thumbnail/thumbnail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/nutrition/components/thumbnail/thumbnail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent(dialog) {
        this.dialog = dialog;
        this.addFood = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.deleteFood = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.showDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.showDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ThumbnailComponent.prototype.ngOnInit = function () { };
    ThumbnailComponent.prototype.addToFavourites = function () {
        console.log(this.item);
        this.addFood.emit(this.item);
    };
    ThumbnailComponent.prototype.deleteFromFavourites = function () {
        this.deleteFood.emit(this.item);
    };
    ThumbnailComponent.prototype.itemButtonClicked = function (item) {
        console.log(this.item.ndbno);
        this.showDetails.emit(this.item.ndbno);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "food", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ThumbnailComponent.prototype, "watchlist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "addFood", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "deleteFood", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "showDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ThumbnailComponent.prototype, "buttonLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "showDetails", void 0);
    ThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'food-thumbnail',
            template: __webpack_require__(/*! ./thumbnail.component.html */ "./src/app/modules/nutrition/components/thumbnail/thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./thumbnail.component.css */ "./src/app/modules/nutrition/components/thumbnail/thumbnail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/nutrition/interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        console.log('Intercepting');
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.authenticationService.getToken()
            }
        });
        console.log(request);
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/nutrition.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/nutrition/nutrition.module.ts ***!
  \*******************************************************/
/*! exports provided: NutritionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionModule", function() { return NutritionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/thumbnail/thumbnail.component */ "./src/app/modules/nutrition/components/thumbnail/thumbnail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nutrition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nutrition.service */ "./src/app/modules/nutrition/nutrition.service.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/modules/nutrition/components/container/container.component.ts");
/* harmony import */ var _nutrition_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nutrition.router.module */ "./src/app/modules/nutrition/nutrition.router.module.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/nutrition/components/search/search.component.ts");
/* harmony import */ var _interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptor.service */ "./src/app/modules/nutrition/interceptor.service.ts");
/* harmony import */ var _components_nutrition_info_nutrition_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/nutrition-info/nutrition-info.component */ "./src/app/modules/nutrition/components/nutrition-info/nutrition-info.component.ts");
/* harmony import */ var _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/details-page/details-page.component */ "./src/app/modules/nutrition/components/details-page/details-page.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/favourites/favourites.component */ "./src/app/modules/nutrition/components/favourites/favourites.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import { DetailsPageComponent} from './components/details-page/details-page.component';
var NutritionModule = /** @class */ (function () {
    function NutritionModule() {
    }
    NutritionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _nutrition_router_module__WEBPACK_IMPORTED_MODULE_6__["NutritionRouterModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailComponent"],
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_5__["ContainerComponent"],
                _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_18__["FavouritesComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _components_nutrition_info_nutrition_info_component__WEBPACK_IMPORTED_MODULE_15__["NutritionInfoComponent"],
                _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_16__["DetailsPageComponent"],
            ],
            exports: [
                _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ThumbnailComponent"],
                _nutrition_router_module__WEBPACK_IMPORTED_MODULE_6__["NutritionRouterModule"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_16__["DetailsPageComponent"],
                _components_nutrition_info_nutrition_info_component__WEBPACK_IMPORTED_MODULE_15__["NutritionInfoComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            ],
            providers: [
                _nutrition_service__WEBPACK_IMPORTED_MODULE_4__["NutritionService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
                    multi: true
                }
            ],
        })
    ], NutritionModule);
    return NutritionModule;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/nutrition.router.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/nutrition/nutrition.router.module.ts ***!
  \**************************************************************/
/*! exports provided: NutritionRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionRouterModule", function() { return NutritionRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/favourites/favourites.component */ "./src/app/modules/nutrition/components/favourites/favourites.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/nutrition/components/search/search.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.guard.service */ "./src/app/auth.guard.service.ts");
/* harmony import */ var _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details-page/details-page.component */ "./src/app/modules/nutrition/components/details-page/details-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { DetailsPageComponent } from './components/details-page/details-page.component';

var foodRoutes = [
    {
        path: 'food',
        children: [
            {
                path: 'favourite',
                component: _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_2__["FavouritesComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                data: {
                    foodType: 'watchlist',
                    header: 'Favourite'
                }
            },
            {
                path: 'search',
                component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                data: {
                    foodType: 'search',
                    header: 'Search Food'
                }
            },
            {
                path: 'search/food-details/:ndbno',
                component: _components_details_page_details_page_component__WEBPACK_IMPORTED_MODULE_5__["DetailsPageComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                data: {
                    foodType: 'search',
                    header: 'Search Food'
                }
            }
        ]
    }
];
var NutritionRouterModule = /** @class */ (function () {
    function NutritionRouterModule() {
    }
    NutritionRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(foodRoutes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], NutritionRouterModule);
    return NutritionRouterModule;
}());



/***/ }),

/***/ "./src/app/modules/nutrition/nutrition.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/nutrition/nutrition.service.ts ***!
  \********************************************************/
/*! exports provided: NutritionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionService", function() { return NutritionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClient } from '@angular/common/http';


var NutritionService = /** @class */ (function () {
    function NutritionService(http) {
        var _this = this;
        this.http = http;
        this.getFoodList = function (searchQuery, offset, max) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append(_this.paramApiKey, _this.apiKey);
            params = params.append(_this.paramFormat, _this.format);
            params = params.append(_this.paramQuery, searchQuery);
            params = params.append(_this.paramMax, max.toString());
            params = params.append(_this.paramOffset, offset.toString());
            return _this.http.get(_this.foodSearchUrl, {
                params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return {
                    start: res.list.start,
                    end: res.list.end,
                    total: res.list.total,
                    items: itemsMap(res.list.item)
                };
                function itemsMap(inItems) {
                    return inItems.map(function (inItem) {
                        return {
                            foodGroup: inItem.group,
                            name: inItem.name,
                            ndbno: inItem.ndbno
                        };
                    });
                }
            }));
        };
        this.getFoodDetails = function (ndbnoList) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append(_this.paramApiKey, _this.apiKey);
            params = params.append(_this.paramFormat, _this.format);
            params = params.append(_this.paramType, 'b');
            params = params.append(_this.paramNDBNO, ndbnoList);
            return _this.http.get(_this.foodReportUrl, {
                params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (inItem) {
                return inItem.foods.map(function (value) {
                    var foodReport = {
                        ndbno: value.food.desc.ndbno,
                        name: value.food.desc.name,
                        foodNutrients: null // added below
                    };
                    foodReport.foodNutrients = value.food.nutrients.map(function (nutrient) {
                        return {
                            nutrientId: nutrient.nutrient_id,
                            name: nutrient.name,
                            group: nutrient.group,
                            unit: nutrient.unit,
                            value: nutrient.value
                        };
                    });
                    return foodReport;
                });
            }));
        };
        this.page = '1';
        this.foodEndpoint = 'http://localhost:8082/api/v1/food';
        this.apiKey = '0eSJ5Bwjti3Ck1Yvj3Nk9xkwuQtuaaK7xcw9zYv1';
        this.format = 'json';
        this.foodSearchUrl = 'https://api.nal.usda.gov/ndb/search';
        this.foodReportUrl = 'https://api.nal.usda.gov/ndb/V2/reports';
        this.paramApiKey = 'api_key';
        this.paramFormat = 'format';
        this.paramQuery = 'q';
        this.paramMax = 'max';
        this.paramOffset = 'offset';
        this.paramNDBNO = 'ndbno';
        this.paramType = 'type';
    }
    NutritionService.prototype.addFoodToFavourites = function (item) {
        return this.http.post(this.foodEndpoint, item);
    };
    NutritionService.prototype.getFoodFromFavourites = function () {
        return this.http.get(this.foodEndpoint);
    };
    NutritionService.prototype.deleteFoodFromFavourites = function (item) {
        var deleteEndpoint = this.foodEndpoint + "/" + item.ndbno;
        console.log(item.ndbno);
        return this.http.delete(deleteEndpoint, { responseType: 'text' });
    };
    NutritionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NutritionService);
    return NutritionService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /Users/rabodevops-1/Documents/Final FSE/Anisha.J2-nutritionist-boilerplate/NutritionistUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map