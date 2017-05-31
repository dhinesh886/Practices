// Inbuilt modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './approuting.module';

// Custom/user defined modules
import { AppComponent } from './app.component';
import { BasicModule } from './Basics/basic.module';
import { AppHeaderComponent } from './appheader.component';
import { AppNavigationComponent } from './appnav.component';

@NgModule({
    imports     : [BrowserModule, BasicModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, AppHeaderComponent, AppNavigationComponent],
    bootstrap   : [AppComponent]
})

export class AppModule { }
