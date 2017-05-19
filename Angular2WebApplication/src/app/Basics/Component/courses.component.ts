import { Component } from "@angular/core";
import { CoursesService } from "../Service/courses.service";

@Component({
    selector: "courses",
    template: `<h2>{{ title }}</h2>
               <ul><li *ngFor = "let course of courses" myhighlight >{{ course }}</li></ul>
`,
   
})

export class CoursesComponent
{
    courses: string[]; 
    title = "Courses List";
    constructor(coursesService: CoursesService)
    {
        this.courses = coursesService.Courses;
        
    }
}