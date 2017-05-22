import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from '../CustomValidators/custom.validators';


@Component({
    selector: 'modeldrivenform',
    templateUrl: '../../Templates/modeldrivenform.html'
})

export class ModelDrivenFormComponent {

    passwordForm: FormGroup;

    constructor(fb: FormBuilder)
    {
        this.passwordForm = fb.group(
            {
                currentPassword: ['', Validators.required],
                newPassword: ['', Validators.compose([Validators.required, CustomValidators.passwordStrength])],
                confirmPassword: ['', Validators.compose([Validators.required, CustomValidators.newPasswordMatch])]
            }
        )
    }
}