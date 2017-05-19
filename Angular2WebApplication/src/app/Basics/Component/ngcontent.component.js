"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PanelComponent = (function () {
    function PanelComponent() {
    }
    return PanelComponent;
}());
PanelComponent = __decorate([
    core_1.Component({
        selector: 'panel',
        template: "\n<div style='border:1px solid red' >\n<h3><ng-content select='.heading'></ng-content></h3>\n<div><ng-content select='.body'></ng-content></div>\n<div>\n"
    })
], PanelComponent);
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=ngcontent.component.js.map