"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ZigZagPipe = (function () {
    function ZigZagPipe() {
    }
    ZigZagPipe.prototype.transform = function (value, args) {
        var output = value;
        if (value) {
            output = '';
            for (var i = 0; i <= value.length; i++) {
                var temp = value.charAt(i);
                if (i % 2 == 0)
                    temp = temp.toUpperCase();
                output += temp;
            }
        }
        return output;
    };
    return ZigZagPipe;
}());
ZigZagPipe = __decorate([
    core_1.Pipe({
        name: "zigzag"
    })
], ZigZagPipe);
exports.ZigZagPipe = ZigZagPipe;
//# sourceMappingURL=zigzag.pipe.js.map