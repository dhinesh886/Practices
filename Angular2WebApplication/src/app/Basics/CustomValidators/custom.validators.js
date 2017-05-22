"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.passwordStrength = function (control) {
        if (control.value == null || control.value == '')
            return null;
        if (control.value.length < 5) {
            return { passwordStrength: { minLength: 5 } };
        }
        return null;
    };
    CustomValidators.newPasswordMatch = function (control) {
        if (control.parent) {
            console.log(control);
            var newPassword = control.parent.controls['newPassword'].value;
            var confirmPassword = control.value;
            console.log(newPassword);
            console.log(confirmPassword);
            if (confirmPassword != newPassword) {
                return { passwordMismatch: true };
            }
            return null;
        }
        return null;
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom.validators.js.map