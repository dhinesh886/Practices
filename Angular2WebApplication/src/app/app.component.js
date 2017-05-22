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
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Dhinesh';
        this.color = 'yellow';
        this.isselected = false;
        this.output = {
            paramValue: ''
        };
    }
    AppComponent.prototype.OnSelectionChanged = function ($event) {
        this.output = $event;
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('p'),
    __metadata("design:type", HTMLParagraphElement)
], AppComponent.prototype, "htmlpara", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<modeldrivenform></modeldrivenform>\n<h1>Hello {{name}}</h1>\n            <courses></courses>\n            <p myhighlight highlightColor=\"yellow\"> Highlighter Directive1</p>\n            <p myhighlight [highlightColor]=\"'yellow'\"> Highlighter Directive</p>\n            <p myhighlight [highlightColor]=\"color\">Highlighted with parent component's color</p>\n            <bindings></bindings>\n            <inputoutput [IsSelected]=\"isselected\" [IsSelected1]=\"isselected\" [Is-Selected2]=\"isselected\" [Is-Selected3]=\"isselected\"\n            (change) = \"OnSelectionChanged($event)\"></inputoutput>\n<div> Output : {{output.paramValue}}</div>\n<span> {{name | zigzag}}</span>\n<panel>\n<div class='heading'> This is Heading </div>\n<div class='body'> This is the  body </div>\n</panel>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map