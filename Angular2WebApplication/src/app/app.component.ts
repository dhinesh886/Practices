import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './AppComponentTemplate.html'
})
export class AppComponent {
    name = 'Angular 2';
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
