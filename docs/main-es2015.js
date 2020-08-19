(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/announcement/announcement.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/announcement/announcement.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"teams[0].sugar <= 7 || teams[1].sugar <= 7; else nicetry\">\n  <div class='announcement normal'>\n    Good Job!\n  </div>\n</div>\n<ng-template #nicetry>\n  <div class='announcement high'>\n    Nice Try!\n  </div>\n</ng-template>\n<div class='announcement' *ngIf=\"winningTeam\">\n  <div style='font-size: 5vh'>\n    {{winningTeam.name}} wins!\n  </div>\n  <div>\n    Score {{winningTeam.score}} points and blood sugar {{winningTeam.sugar |  number :'1.1-1'}} mmol/L\n  </div>\n</div>\n<div class='announcement' *ngIf=\"winningTeam == null\">\n  <div style='font-size: 5vh'>\n    Both teams win!\n  </div>\n  <div>\n    Score {{teams[0].score}} points and blood sugar {{teams[0].sugar |  number :'1.1-1'}} mmol/L\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style='min-width: 800px;'>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <div style=' padding: 15px; color: blue; font-weight: 900; font-size: 5vh; text-align: center;'>Jeopardy\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/question-grid/question-grid.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/question-grid/question-grid.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"container-fluid\" style='width: 100%;'>\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n        <div class='team' [ngClass]=\"teams[0].congrats ? 'shake' : ''\">\n          {{teams[0].name}}: <span [ngClass]=\"teams[0].sugar > 7 ? 'high' : 'normal'\">\n            {{teams[0].sugar |  number :'1.1-1'}} mmol/L\n          </span>\n        </div>\n        <div style='width: 35vw; text-align: center;'>\n          <button type=\"button\" class=\"btn btn-danger\" (click)='resetGame()'>Reset</button>\n          <button type=\"button\" class=\"btn btn-warning\" (click)='completeGame()'>Complete</button>\n        </div>\n        <div class='team' [ngClass]=\"teams[1].congrats ? 'shake' : ''\">\n          {{teams[1].name}}: <span [ngClass]=\"teams[1].sugar > 7 ? 'high' : 'normal'\">\n            {{teams[1].sugar | number :'1.1-1'  }} mmol/L\n          </span>\n        </div>\n      </div>\n      <div class=\"container-fluid\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col monitoring\">\n            Monitoring\n          </div>\n          <div class=\"col targets\">\n            Targets\n          </div>\n          <div class=\"col nutrition\">\n            Nutrition\n          </div>\n          <div class=\"col exercise\">\n            Exercise\n          </div>\n          <div class=\"col complications\">\n            Complications\n          </div>\n          <div class=\"col bonus\">\n            Bonus\n          </div>\n        </div>\n        <div class=\"row justify-content-md-center\" *ngFor=\"let qs of questions\">\n          <div (click)='onSelect(q)' class=\"col\" [ngClass]='q.activated ? q.color : \"disabled\"' *ngFor=\"let q of qs\">\n            <div [ngClass]='q === questionSelected ? \"selected\" : \"\"'>\n              {{q.points}}\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <app-question-viewer [question]='questionSelected' [event]='event' [team]='currentTeam()' style='width: 100%;'>\n      </app-question-viewer>\n\n      <div *ngIf=\"noOfQestions === 0\" style='padding-top: 15vh;'>\n        <app-announcement [teams]='teams'></app-announcement>\n      </div>\n    </div>\n\n  </div>\n  <div class='footer'>Copyright &copy; 2019 Alexander Kunin. All Rights Reserved.</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/question-viewer/question-viewer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/question-viewer/question-viewer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!!question\" class='question-viewer'>\r\n  <div style='height: 2vh;'></div>\r\n  <div [ngClass]=\"question.color\" fxLayout='column' fxLayoutAlign=\"space-between center\"\r\n    style='height: 30vh; padding: 10px; text-align: center; border-radius: 3vh;'>\r\n    <div>{{team.name}}</div>\r\n    <div>{{question.body}}</div>\r\n    <div></div>\r\n  </div>\r\n  <div fxLayout='row' fxLayoutAlign=\"center end\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)='onNo()'>No</button>\r\n    <button type=\"button\" class=\"btn btn-success\" (click)='onYes()'>Yes</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/announcement/announcement.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/announcement/announcement.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".announcement {\n  font-size: 3vh;\n  font-weight: 600;\n  min-width: 700px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5ub3VuY2VtZW50L2s6XFxnaXRcXGRlLWdhbWVcXERFLUdBTUUvc3JjXFxhcHBcXGFubm91bmNlbWVudFxcYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYW5ub3VuY2VtZW50L2Fubm91bmNlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbm5vdW5jZW1lbnQge1xyXG4gIGZvbnQtc2l6ZTogM3ZoO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWluLXdpZHRoOiA3MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmFubm91bmNlbWVudCB7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4td2lkdGg6IDcwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/announcement/announcement.component.ts":
/*!********************************************************!*\
  !*** ./src/app/announcement/announcement.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AnnouncementComponent = class AnnouncementComponent {
    constructor() { }
    ngOnInit() {
        if (this.teams[0].score > this.teams[1].score) {
            this.winningTeam = this.teams[0];
        }
        else if (this.teams[0].score < this.teams[1].score) {
            this.winningTeam = this.teams[1];
        }
        else {
            this.winningTeam = null;
        }
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Array)
], AnnouncementComponent.prototype, "teams", void 0);
AnnouncementComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-announcement',
        template: __webpack_require__(/*! raw-loader!./announcement.component.html */ "./node_modules/raw-loader/index.js!./src/app/announcement/announcement.component.html"),
        styles: [__webpack_require__(/*! ./announcement.component.scss */ "./src/app/announcement/announcement.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AnnouncementComponent);
exports.AnnouncementComponent = AnnouncementComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const app_routes_1 = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const routes = app_routes_1.ROUTES;
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const team_service_1 = __webpack_require__(/*! ./services/team.service */ "./src/app/services/team.service.ts");
let AppComponent = class AppComponent {
    constructor(teamServiceService) {
        this.teamServiceService = teamServiceService;
        this.title = 'Jeopardy';
    }
};
AppComponent.ctorParameters = () => [
    { type: team_service_1.TeamService }
];
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [team_service_1.TeamService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const team_service_1 = __webpack_require__(/*! ./services/team.service */ "./src/app/services/team.service.ts");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const question_grid_component_1 = __webpack_require__(/*! ./question-grid/question-grid.component */ "./src/app/question-grid/question-grid.component.ts");
const question_viewer_component_1 = __webpack_require__(/*! ./question-viewer/question-viewer.component */ "./src/app/question-viewer/question-viewer.component.ts");
const announcement_component_1 = __webpack_require__(/*! ./announcement/announcement.component */ "./src/app/announcement/announcement.component.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            question_grid_component_1.QuestionGridComponent,
            question_viewer_component_1.QuestionViewerComponent,
            announcement_component_1.AnnouncementComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            flex_layout_1.FlexLayoutModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule
        ],
        providers: [
            team_service_1.TeamService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const question_grid_component_1 = __webpack_require__(/*! ./question-grid/question-grid.component */ "./src/app/question-grid/question-grid.component.ts");
exports.ROUTES = [
    { path: '**', component: question_grid_component_1.QuestionGridComponent },
];


/***/ }),

/***/ "./src/app/model/Question.ts":
/*!***********************************!*\
  !*** ./src/app/model/Question.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    constructor(body, answer, points, color, activated) {
        this.body = body;
        this.answer = answer;
        this.points = points;
        this.color = color;
        this.activated = activated;
    }
}
Question.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Number },
    { type: String },
    { type: Boolean }
];
exports.Question = Question;


/***/ }),

/***/ "./src/app/model/Team.ts":
/*!*******************************!*\
  !*** ./src/app/model/Team.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Team {
    constructor(name) {
        this.score = 0;
        this.sugar = 10.0;
        this.congrats = false;
        this.name = name;
    }
}
Team.ctorParameters = () => [
    { type: String }
];
exports.Team = Team;


/***/ }),

/***/ "./src/app/question-grid/question-grid.component.scss":
/*!************************************************************!*\
  !*** ./src/app/question-grid/question-grid.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  height: 5vh;\n}\n\n.col {\n  border: solid 1px #555050;\n  border-radius: 30px;\n  margin: 2px;\n  text-align: center;\n  font-size: 3vh;\n  font-weight: 400;\n  cursor: pointer;\n}\n\n.selected {\n  font-weight: 600;\n  font-size: 3vh;\n  color: #1eff00;\n  cursor: default;\n}\n\n.disabled {\n  color: #616060;\n  cursor: default;\n}\n\n.footer {\n  background-color: #e9e5e5;\n  position: fixed;\n  height: 30px;\n  text-align: center;\n  padding-top: 4px;\n  bottom: 0;\n  width: 100%;\n  font-family: \"Caveat\", cursive;\n}\n\n.shake {\n  background: linear-gradient(90deg, #00000000 30%, green 50%, #00000000 70%);\n  background-size: 400% 400%;\n  -webkit-animation: AnimationName 2s ease infinite;\n  animation: AnimationName 5s ease infinite;\n}\n\n@-webkit-keyframes AnimationName {\n  0% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n@keyframes AnimationName {\n  0% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tZ3JpZC9rOlxcZ2l0XFxkZS1nYW1lXFxERS1HQU1FL3NyY1xcYXBwXFxxdWVzdGlvbi1ncmlkXFxxdWVzdGlvbi1ncmlkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbi1ncmlkL3F1ZXN0aW9uLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDJFQUFBO0VBQ0EsMEJBQUE7RUFDQSxpREFBQTtFQUVBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDhCQUFBO0VDQ0Y7RURDQTtJQUNFLDBCQUFBO0VDQ0Y7QUFDRjs7QURTQTtFQUNFO0lBQ0UsOEJBQUE7RUNDRjtFRENBO0lBQ0UsMEJBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb24tZ3JpZC9xdWVzdGlvbi1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICM1NTUwNTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBtYXJnaW46IDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzdmg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDN2aDtcclxuICBjb2xvcjogIzFlZmYwMDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgY29sb3I6ICM2MTYwNjA7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllNWU1O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uc2hha2Uge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAwMDAwIDMwJSwgZ3JlZW4gNTAlLCAjMDAwMDAwMDAgNzAlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAycyBlYXNlIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDJzIGVhc2UgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDVzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xyXG4gIH1cclxufVxyXG4iLCIucm93IHtcbiAgaGVpZ2h0OiA1dmg7XG59XG5cbi5jb2wge1xuICBib3JkZXI6IHNvbGlkIDFweCAjNTU1MDUwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDN2aDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDN2aDtcbiAgY29sb3I6ICMxZWZmMDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmRpc2FibGVkIHtcbiAgY29sb3I6ICM2MTYwNjA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU1ZTU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiLCBjdXJzaXZlO1xufVxuXG4uc2hha2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDAwMDAwMCAzMCUsIGdyZWVuIDUwJSwgIzAwMDAwMDAwIDcwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAycyBlYXNlIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAycyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/question-grid/question-grid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-grid/question-grid.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const team_service_1 = __webpack_require__(/*! ../services/team.service */ "./src/app/services/team.service.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let QuestionGridComponent = class QuestionGridComponent {
    constructor(teamService) {
        this.teamService = teamService;
        this.questions = new Array();
        this.event = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.init();
        this.event.subscribe((question) => {
            if (typeof question === 'number') {
                if (question === 0) {
                    this.teamService.changeTurn();
                }
            }
            else {
                this.teamService.answer(question);
            }
            this.questionSelected = null;
            this.noOfQestions = this.teamService.getNumberOfQuestions();
        });
    }
    onSelect(question) {
        if (question.activated) {
            this.questionSelected = question;
        }
    }
    currentTeam() {
        return this.teamService.getCurrentTeam();
    }
    resetGame() {
        this.teamService.reset()
            .then(() => this.init());
        ;
    }
    init() {
        this.questionSelected = null;
        this.noOfQestions = this.teamService.getNumberOfQuestions();
        this.teams = this.teamService.getTeams();
        const categories = this.teamService.getCategories();
        for (let i = 0; i < categories.length; i++) {
            const cat = categories[i];
            for (let j = 0; j < cat.questions.length; j++) {
                if (!this.questions[j]) {
                    this.questions[j] = new Array();
                }
                const question = cat.questions[j];
                this.questions[j][i] = question;
            }
        }
    }
    completeGame() {
        this.questionSelected = null;
        this.noOfQestions = 0;
    }
};
QuestionGridComponent.ctorParameters = () => [
    { type: team_service_1.TeamService }
];
QuestionGridComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-question-grid',
        template: __webpack_require__(/*! raw-loader!./question-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/question-grid/question-grid.component.html"),
        styles: [__webpack_require__(/*! ./question-grid.component.scss */ "./src/app/question-grid/question-grid.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [team_service_1.TeamService])
], QuestionGridComponent);
exports.QuestionGridComponent = QuestionGridComponent;


/***/ }),

/***/ "./src/app/question-viewer/question-viewer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/question-viewer/question-viewer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-viewer {\n  height: 30vh;\n  font-size: 4.5vh;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tdmlld2VyL2s6XFxnaXRcXGRlLWdhbWVcXERFLUdBTUUvc3JjXFxhcHBcXHF1ZXN0aW9uLXZpZXdlclxccXVlc3Rpb24tdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbi12aWV3ZXIvcXVlc3Rpb24tdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb24tdmlld2VyL3F1ZXN0aW9uLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbi12aWV3ZXIge1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBmb250LXNpemU6IDQuNXZoO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIi5xdWVzdGlvbi12aWV3ZXIge1xuICBoZWlnaHQ6IDMwdmg7XG4gIGZvbnQtc2l6ZTogNC41dmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/question-viewer/question-viewer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/question-viewer/question-viewer.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const Question_1 = __webpack_require__(/*! ./../model/Question */ "./src/app/model/Question.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const Team_1 = __webpack_require__(/*! ../model/Team */ "./src/app/model/Team.ts");
let QuestionViewerComponent = class QuestionViewerComponent {
    constructor() { }
    ngOnInit() {
    }
    onYes() {
        this.question.activated = false;
        this.event.next(this.question);
        this.question = null;
    }
    onNo() {
        this.question.activated = false;
        this.event.next(0);
        this.question = null;
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Question_1.Question)
], QuestionViewerComponent.prototype, "question", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Team_1.Team)
], QuestionViewerComponent.prototype, "team", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", rxjs_1.Subject)
], QuestionViewerComponent.prototype, "event", void 0);
QuestionViewerComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-question-viewer',
        template: __webpack_require__(/*! raw-loader!./question-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/question-viewer/question-viewer.component.html"),
        styles: [__webpack_require__(/*! ./question-viewer.component.scss */ "./src/app/question-viewer/question-viewer.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], QuestionViewerComponent);
exports.QuestionViewerComponent = QuestionViewerComponent;


/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let QuestionsService = class QuestionsService {
    constructor(http) {
        this.http = http;
    }
    getQuestionsInCategories() {
        return this.http.get('./assets/data/questions.json');
    }
};
QuestionsService.ctorParameters = () => [
    { type: http_1.HttpClient }
];
QuestionsService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], QuestionsService);
exports.QuestionsService = QuestionsService;


/***/ }),

/***/ "./src/app/services/team.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const Team_1 = __webpack_require__(/*! ../model/Team */ "./src/app/model/Team.ts");
const questions_service_1 = __webpack_require__(/*! ./questions.service */ "./src/app/services/questions.service.ts");
let TeamService = class TeamService {
    constructor(questionService) {
        this.questionService = questionService;
        this.numberOfQuestions = 0;
        this.init();
    }
    init() {
        if (!!localStorage.getItem('teams')) {
            this.categories = JSON.parse(localStorage.getItem('categories'));
            for (const cat of this.categories) {
                for (const q of cat.questions) {
                    this.numberOfQuestions += q.activated ? 1 : 0;
                }
            }
            this.teams = JSON.parse(localStorage.getItem('teams'));
            this.turn = +localStorage.getItem('turn');
        }
        else {
            this.reset();
        }
    }
    reset() {
        const p = new Promise((resolve, reject) => {
            this.teams = [new Team_1.Team('Team "Insulin"'), new Team_1.Team('Team "Glucose"')];
            this.turn = 0;
            this.questionService.getQuestionsInCategories().subscribe((cats) => {
                this.numberOfQuestions = 0;
                this.categories = cats;
                for (const cat of this.categories) {
                    for (const q of cat.questions) {
                        q.activated = true;
                        this.numberOfQuestions += 1;
                    }
                }
                localStorage.setItem('categories', JSON.stringify(this.categories));
                localStorage.setItem('teams', JSON.stringify(this.teams));
                localStorage.setItem('turn', this.turn.toString());
                resolve(true);
            }, error => reject());
        });
        return p;
    }
    saveState() {
        localStorage.setItem('categories', JSON.stringify(this.categories));
        localStorage.setItem('teams', JSON.stringify(this.teams));
        localStorage.setItem('turn', this.turn.toString());
    }
    answer(question) {
        const current = this.teams[this.turn];
        current.score += question.points;
        const sugar1 = current.sugar;
        if (current.sugar > 6) {
            current.sugar -= (question.points / 1000);
        }
        else {
            current.sugar -= (question.points / 1500);
        }
        const sugar2 = current.sugar;
        if (sugar1 > 7 && sugar2 <= 7) {
            current.congrats = true;
        }
        else {
            current.congrats = false;
        }
        if (this.turn === 0) {
            this.turn = 1;
        }
        else {
            this.turn = 0;
        }
        this.numberOfQuestions -= 1;
        this.saveState();
    }
    changeTurn() {
        if (this.turn === 0) {
            this.turn = 1;
        }
        else {
            this.turn = 0;
        }
        this.numberOfQuestions -= 1;
        this.saveState();
    }
    getCurrentTeam() {
        return this.teams[this.turn];
    }
    getCategories() {
        return this.categories;
    }
    getTeams() {
        return this.teams;
    }
    getNumberOfQuestions() {
        return this.numberOfQuestions;
    }
};
TeamService.ctorParameters = () => [
    { type: questions_service_1.QuestionsService }
];
TeamService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [questions_service_1.QuestionsService])
], TeamService);
exports.TeamService = TeamService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! k:\git\de-game\DE-GAME\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map