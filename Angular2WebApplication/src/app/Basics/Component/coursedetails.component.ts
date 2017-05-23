import { Component, Input } from '@angular/core';

import { CoursesService } from '../Service/courses.service';
import { Course } from '../Models/Course.model';

@Component({ 
    selector: 'coursedetails',
    template: `
<h4>{{title}} </h4>
<div *ngIf="course">
<h5><b> {{ course.Name }} </b></h5>
<p> {{ course.Description }} </p>
</div>
`
})

export class CourseDetailsComponent {
    @Input() title: string;
    @Input() courseId: string;
    @Input() course: Course;

    constructor(private _service: CoursesService)
    {

    }

}
