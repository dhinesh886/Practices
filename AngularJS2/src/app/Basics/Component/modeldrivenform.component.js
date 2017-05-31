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
var forms_1 = require("@angular/forms");
var custom_validators_1 = require("../CustomValidators/custom.validators");
var ModelDrivenFormComponent = (function () {
    function ModelDrivenFormComponent(fb) {
        this.passwordForm = fb.group({
            currentPassword: ['', forms_1.Validators.required, forms_1.Validators.composeAsync([custom_validators_1.CustomValidators.validatePassword])],
            newPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, custom_validators_1.CustomValidators.passwordStrength])],
            confirmPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, custom_validators_1.CustomValidators.newPasswordMatch])]
        });
    }
    return ModelDrivenFormComponent;
}());
ModelDrivenFormComponent = __decorate([
    core_1.Component({
        selector: 'modeldrivenform',
        templateUrl: '../../Templates/modeldrivenform.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ModelDrivenFormComponent);
exports.ModelDrivenFormComponent = ModelDrivenFormComponent;
//# sourceMappingURL=modeldrivenform.component.js.map