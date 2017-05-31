"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Inbuilt modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var approuting_module_1 = require("./approuting.module");
// Custom/user defined modules
var app_component_1 = require("./app.component");
var basic_module_1 = require("./Basics/basic.module");
var appheader_component_1 = require("./appheader.component");
var appnav_component_1 = require("./appnav.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, basic_module_1.BasicModule, forms_1.FormsModule, approuting_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, appheader_component_1.AppHeaderComponent, appnav_component_1.AppNavigationComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map