import { Component } from '@angular/core';

@Component({
    selector: 'bindings',
    template: `
<h5> One Way Bindings </h5> 
<div> PropertyBinding </div> 
<img src = {{imageUrl}} />
<img [src] = "imageUrl" />
<img bind-src = "imageUrl" /> 
<img bind-src = "'https://angular.io/resources/images/logos/standard/logo-nav.png'" /> 
<div class="class1" [class.class2] ="enableClass2">Class Binding</div>
<div [style.backgroundColor]="(enableDanger? 'red' : 'gray')">Style Binding</div>

<h5> Two way binidng </h5> 
<input type="text" [(ngModel)] = "inputText" />
Preview : {{ inputText }}
`
})

export class BindingComponent {

    imageUrl = "https://angular.io/resources/images/logos/standard/logo-nav.png"; // Property binding
    //<img src = { { imageUrl } } /> // using Interpolation
    //<img [src] = "imageUrl" /> // using square brackets
    //<img bind-src = "imageUrl" />  // using bing prefix
    //<img bind-src = "'url as text'" />  // using value as hard coded text, this is applicable only for angular properties

    enableClass2 = true; // Class binding (alternatively we can use ngClass)
    enableDanger = true; // Style Binding (alternatively we can use ngStyle)

    inputText = "Intial Text"; // Two way binding - Needs FormsModule to be imported in Module
}