import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
            <courses></courses>
            <p myhighlight highlightColor="yellow"> Highlighter Directive1</p>
            <p myhighlight [highlightColor]="'yellow'"> Highlighter Directive</p>
            <p myhighlight [highlightColor]="color">Highlighted with parent component's color</p>
            <bindings></bindings>
            <inputoutput [IsSelected]="isselected" [IsSelected1]="isselected" [Is-Selected2]="isselected" [Is-Selected3]="isselected"
            (change) = "OnSelectionChanged($event)"></inputoutput>
<div> Output : {{output.paramValue}}</div>
<span> {{name | zigzag}}</span>
<panel>
<div class='heading'> This is Heading </div>
<div class='body'> This is the  body </div>
</panel>
`
})
export class AppComponent {
    name = 'Dhinesh';
    color = 'yellow';
    @ViewChild('p') htmlpara: HTMLParagraphElement;
    isselected = false;
    output: any = {
        paramValue: ''
    };
    OnSelectionChanged($event:any) {
        this.output = $event
    }
}
