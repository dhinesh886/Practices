import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink, RouterOutlet  } from '@angular/router';

import { ComponentsComponent } from './Basics/Component/components.component';
import { BindingsComponent } from './Basics/Component/bindings.component';
import { IOEventsComponent } from './Basics/Component/ioevents.component';
import { DirectivesComponent } from './Basics/Component/directives.component';
import { PipesComponent } from './Basics/Component/pipes.component';
import { SimpleFormComponent } from './Basics/Component/simpleform.components';
import { ModelDrivenFormComponent } from './Basics/Component/modeldrivenform.component';
import { HomeComponent } from './Basics/Component/home.component'

const routes: Routes = [
    { path: "*other", redirectTo: "" },
    { path: "templatedrivenforms", component: SimpleFormComponent },
    { path: "modeldrivenforms", component: ModelDrivenFormComponent }, 
    { path: "components", component: ComponentsComponent },
    { path: "directives", component: DirectivesComponent },
    { path: "bindings", component: BindingsComponent },
    { path: "ioevents", component: IOEventsComponent },
    { path: "pipes", component: PipesComponent },
    { path: "", component: HomeComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}