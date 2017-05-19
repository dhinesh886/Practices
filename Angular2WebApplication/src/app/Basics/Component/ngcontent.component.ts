import { Component } from '@angular/core';

@Component({
    selector: 'panel',
    template: `
<div style='border:1px solid red' >
<h3><ng-content select='.heading'></ng-content></h3>
<div><ng-content select='.body'></ng-content></div>
<div>
`
})

export class PanelComponent {

}