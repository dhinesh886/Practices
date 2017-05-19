import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicModule } from './Basics/basic.module'; 

@NgModule({
    imports: [BrowserModule, BasicModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
