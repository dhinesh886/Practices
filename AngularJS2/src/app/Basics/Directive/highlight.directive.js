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
var HighlightDirective = (function () {
    function HighlightDirective(_el, renderer) {
        this._el = _el;
        this.renderer = renderer;
        //this._el.nativeElement.style.backgroundColor = "red";
    }
    HighlightDirective.prototype.OnMouseEnter = function () {
        this._el.nativeElement.style.backgroundColor = (this.highlightColor != null ? this.highlightColor : "red");
    };
    HighlightDirective.prototype.OnMouseLeave = function () {
        this._el.nativeElement.style.backgroundColor = "";
    };
    return HighlightDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HighlightDirective.prototype, "highlightColor", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "OnMouseEnter", null);
HighlightDirective = __decorate([
    core_1.Directive({
        selector: "[myhighlight]",
        host: {
            '(mouseleave)': 'OnMouseLeave()' // 1st way to attach event
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map