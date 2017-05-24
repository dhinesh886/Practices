import { FormControl, FormGroup } from '@angular/forms'
export class CustomValidators {
    static passwordStrength(control: FormControl) {
        if (control.value == null || control.value == '') return null;

        if (control.value.length < 5) {
            return { passwordStrength: { minLength: 5 } };
        }
        return null;
    }

    static newPasswordMatch(control: FormControl) {
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
    }

    static validatePassword(control: FormControl) {
        return new Promise(resolve => {
            if (control.parent) {
                console.log(control);
                var newPassword = control.parent.controls['newPassword'].value;
                var currentPassword = control.value;
                setTimeout(function () { resolve({ IsValidPassword: false }); }, 10000);
            }
            else
            {
                resolve(null);
            }
        });
    }
}
