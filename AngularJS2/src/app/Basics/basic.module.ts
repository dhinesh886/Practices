import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ComponentsComponent } from './Component/components.component';
import { BindingsComponent } from './Component/bindings.component';
import { IOEventsComponent } from './Component/ioevents.component';
import { DirectivesComponent } from './Component/directives.component';
import { PipesComponent } from './Component/pipes.component';

import { CoursesComponent } from './Component/courses.component';
import { BindingComponent } from './Component/binding.component';
import { CourseDetailsComponent } from './Component/coursedetails.component';

import { InputOutputComponent } from './Component/inputoutpt.component';
import { HighlightDirective } from './Directive/highlight.directive';
import { CoursesService } from "./Service/courses.service";
import { ZigZagPipe } from "./Pipes/zigzag.pipe";
import { PanelComponent } from './Component/ngcontent.component';
import { SimpleFormComponent } from './Component/simpleform.components';
import { ModelDrivenFormComponent } from './Component/modeldrivenform.component';
import { HomeComponent } from './Component/home.component';
import { HttpServiceComponent} from './Component/httpservice.component';

@NgModule({
    imports     : [BrowserModule, FormsModule, ReactiveFormsModule,HttpModule], // dependent modules
    declarations: [CoursesComponent, CourseDetailsComponent, HighlightDirective, BindingComponent,
                    InputOutputComponent, ZigZagPipe, PanelComponent, SimpleFormComponent, 
                    ModelDrivenFormComponent, ComponentsComponent, BindingsComponent, IOEventsComponent, 
                    DirectivesComponent, PipesComponent, HomeComponent,HttpServiceComponent], // Current module components and directives and pipes
    exports     : [SimpleFormComponent, ModelDrivenFormComponent, ComponentsComponent, BindingsComponent,
                    IOEventsComponent, DirectivesComponent, PipesComponent, HomeComponent,HttpServiceComponent],  // things to be visible in other modules(Since, we are using all these comps in main app comp, have exported everything)
    providers   : [CoursesService] // services/providers which are part of this module
})

export class BasicModule { }