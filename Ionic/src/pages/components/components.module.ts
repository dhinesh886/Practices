import {NgModule} from '@angular/core';
import { MyActionsheet } from './action-sheets/action-sheet';
import { IonicModule } from 'ionic-angular';
import { AlertComponent } from './alerts/alerts'
@NgModule({
    declarations : [MyActionsheet,AlertComponent],
    imports : [IonicModule],
    entryComponents : [MyActionsheet,AlertComponent]
})

export class ComponentsModule{}