import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './appheader.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AppHeaderComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
