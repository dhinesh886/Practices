import { Component } from '@angular/core';

@Component({
    selector: 'bindings',
    template: `
<h1> One Way Bindings </h1> 
<h3> PropertyBinding </h3> 
<img src = {{imageUrl}} />
<img [src] = "imageUrl" />
<img bind-src = "imageUrl" /> 
<div class="class1" [class.class2] ="enableClass2">Class Binding</div>
<div [style.backgroundColor]="(enableDanger? 'red' : 'gray')">Style Binding</div>

<h1> Two way binidng </h1> 
<input type="text" [(ngModel)] = "inputText" />
Preview : {{ inputText }}
`
})

export class BindingComponent {

    imageUrl = "https://angular.io/resources/images/logos/standard/logo-nav.png"; // Property binding
    //<img src = { { imageUrl } } /> // using Interpolation
    //<img [src] = "imageUrl" /> // using square brackets
    //<img bind-src = "imageUrl" />  // using bing prefix

    enableClass2 = true; // Class binding (alternatively we can use ngClass)
    enableDanger = true; // Style Binding (alternatively we can use ngStyle)

    inputText = "Intial Text"; // Two way binding - Needs FormsModule to be imported in Module
}