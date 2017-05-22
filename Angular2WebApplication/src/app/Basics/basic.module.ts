import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CoursesComponent } from './Component/courses.component';
import { BindingComponent } from './Component/binding.component';
import { InputOutputComponent } from './Component/inputoutpt.component';
import { HighlightDirective } from './Directive/highlight.directive'; 
import { CoursesService } from "./Service/courses.service";
import { ZigZagPipe } from "./Pipes/zigzag.pipe";
import { PanelComponent } from './Component/ngcontent.component';
import { SimpleFormComponent } from './Component/simpleform.components'
import { ModelDrivenFormComponent } from './Component/modeldrivenform.component'

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule], // dependent modules
    declarations: [CoursesComponent, HighlightDirective, BindingComponent, InputOutputComponent, ZigZagPipe, PanelComponent, SimpleFormComponent, ModelDrivenFormComponent], // Current module components and directives and pipes
    exports: [CoursesComponent, HighlightDirective, BindingComponent, InputOutputComponent, ZigZagPipe, PanelComponent, SimpleFormComponent, ModelDrivenFormComponent],  // things to be visible in other modules(Since, we are using all these comps in main app comp, have exported everything)
    providers: [CoursesService] // services/providers which are part of this module
})

export class BasicModule{}