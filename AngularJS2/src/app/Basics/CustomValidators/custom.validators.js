"use strict";
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
            //console.log(control);
            var newPassword = control.parent.controls['newPassword'].value;
            var confirmPassword = control.value;
            //console.log(newPassword);
            //console.log(confirmPassword);
            if (confirmPassword != newPassword) {
                return { passwordMismatch: true };
            }
            return null;
        }
        return null;
    };
    CustomValidators.validatePassword = function (control) {
        return new Promise(function (resolve) {
            if (control.parent) {
                console.log(control);
                var newPassword = control.parent.controls['newPassword'].value;
                var currentPassword = control.value;
                setTimeout(function () { resolve({ IsValidPassword: false }); }, 10000);
            }
            else {
                resolve(null);
            }
        });
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom.validators.js.map