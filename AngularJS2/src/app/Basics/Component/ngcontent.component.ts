import { Component, Input } from '@angular/core';

//@Component({
//    selector: 'panel',
//    template: `
//<div class='panel panel-default' >
//<div class='panel-heading'><ng-content select='.heading'></ng-content></div>
//<div class='panel-body'><ng-content select='.body'></ng-content></div>
//<div>
//`
//})

@Component({
    selector: 'panel',
    template: `
<div class='panel panel-default' >
<div class='panel-heading'>{{HeaderText}}</div>
<div class='panel-body'><ng-content></ng-content></div>
<div>
`
})

export class PanelComponent {

    @Input() HeaderText: string;
}