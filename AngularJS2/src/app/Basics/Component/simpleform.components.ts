import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'simpleform',
    templateUrl: '../../Templates/simpleForm.html'
})

export class SimpleFormComponent
{
    _form: any;
    OnSubmit(form:any)
    {
        this._form = form;
        console.log(form);
    }

}
