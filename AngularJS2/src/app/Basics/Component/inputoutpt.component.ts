import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'inputoutput',
    template: `
<div (click)="OnClick()">{{ IsSelected }}</div>
<div>{{ IsSelected1 }}</div>
<div>{{ IsSelected2 }}</div>
<div>{{ IsSelected3 }}</div>
`,
    inputs : ['IsSelected1', 'IsSelected2:Is-Selected2']
})

export class InputOutputComponent {
    @Input() IsSelected = true;
    IsSelected1 = true;
    IsSelected2 = true;
    @Input('Is-Selected3') IsSelected3 = true;

    @Output() change = new EventEmitter();

    OnClick()
    {
        this.IsSelected = !this.IsSelected;
        this.IsSelected1 = !this.IsSelected1;
        this.IsSelected2 = !this.IsSelected2;
        this.IsSelected3 = !this.IsSelected3;
        this.change.emit({ paramValue: this.IsSelected });
    }
}