import { Component } from '@angular/core';


@Component({
    selector: 'components',
    templateUrl: '../../Templates/ioevents.template.html'
})

export class IOEventsComponent {

    isselected = false;
    output: any = {
        paramValue: ''
    };
    OnSelectionChanged($event: any) {
        this.output = $event
    }
}