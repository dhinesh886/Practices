"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BindingComponent = (function () {
    function BindingComponent() {
        this.imageUrl = "https://angular.io/resources/images/logos/standard/logo-nav.png"; // Property binding
        //<img src = { { imageUrl } } /> // using Interpolation
        //<img [src] = "imageUrl" /> // using square brackets
        //<img bind-src = "imageUrl" />  // using bing prefix
        this.enableClass2 = true; // Class binding (alternatively we can use ngClass)
        this.enableDanger = true; // Style Binding (alternatively we can use ngStyle)
        this.inputText = "Intial Text"; // Two way binding - Needs FormsModule to be imported in Module
    }
    return BindingComponent;
}());
BindingComponent = __decorate([
    core_1.Component({
        selector: 'bindings',
        template: "\n<h1> One Way Bindings </h1> \n<h3> PropertyBinding </h3> \n<img src = {{imageUrl}} />\n<img [src] = \"imageUrl\" />\n<img bind-src = \"imageUrl\" /> \n<div class=\"class1\" [class.class2] =\"enableClass2\">Class Binding</div>\n<div [style.backgroundColor]=\"(enableDanger? 'red' : 'gray')\">Style Binding</div>\n\n<h1> Two way binidng </h1> \n<input type=\"text\" [(ngModel)] = \"inputText\" />\nPreview : {{ inputText }}\n"
    })
], BindingComponent);
exports.BindingComponent = BindingComponent;
//# sourceMappingURL=binding.component.js.map