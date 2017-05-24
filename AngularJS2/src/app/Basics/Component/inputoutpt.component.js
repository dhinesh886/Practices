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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InputOutputComponent = (function () {
    function InputOutputComponent() {
        this.IsSelected = true;
        this.IsSelected1 = true;
        this.IsSelected2 = true;
        this.IsSelected3 = true;
        this.change = new core_1.EventEmitter();
    }
    InputOutputComponent.prototype.OnClick = function () {
        this.IsSelected = !this.IsSelected;
        this.IsSelected1 = !this.IsSelected1;
        this.IsSelected2 = !this.IsSelected2;
        this.IsSelected3 = !this.IsSelected3;
        this.change.emit({ paramValue: this.IsSelected });
    };
    return InputOutputComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputOutputComponent.prototype, "IsSelected", void 0);
__decorate([
    core_1.Input('Is-Selected3'),
    __metadata("design:type", Object)
], InputOutputComponent.prototype, "IsSelected3", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InputOutputComponent.prototype, "change", void 0);
InputOutputComponent = __decorate([
    core_1.Component({
        selector: 'inputoutput',
        template: "\n<div (click)=\"OnClick()\">{{ IsSelected }}</div>\n<div>{{ IsSelected1 }}</div>\n<div>{{ IsSelected2 }}</div>\n<div>{{ IsSelected3 }}</div>\n",
        inputs: ['IsSelected1', 'IsSelected2:Is-Selected2']
    })
], InputOutputComponent);
exports.InputOutputComponent = InputOutputComponent;
//# sourceMappingURL=inputoutpt.component.js.map