import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicModule } from './Basics/basic.module'; 

@NgModule({
    imports: [BrowserModule, BasicModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
