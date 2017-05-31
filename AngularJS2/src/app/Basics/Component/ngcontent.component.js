"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//@Component({
//    selector: 'panel',
//    template: `
//<div class='panel panel-default' >
//<div class='panel-heading'><ng-content select='.heading'></ng-content></div>
//<div class='panel-body'><ng-content select='.body'></ng-content></div>
//<div>
//`
//})
var PanelComponent = (function () {
    function PanelComponent() {
    }
    return PanelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PanelComponent.prototype, "HeaderText", void 0);
PanelComponent = __decorate([
    core_1.Component({
        selector: 'panel',
        template: "\n<div class='panel panel-default' >\n<div class='panel-heading'>{{HeaderText}}</div>\n<div class='panel-body'><ng-content></ng-content></div>\n<div>\n"
    })
], PanelComponent);
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=ngcontent.component.js.map