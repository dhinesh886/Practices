import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicModule } from './Basics/basic.module';
import { AppHeaderComponent } from './appheader.component';
import { AppNavigationComponent } from './appnav.component';
import { AppRoutingModule } from './approuting.module';

@NgModule({
    imports: [BrowserModule, BasicModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, AppHeaderComponent, AppNavigationComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
