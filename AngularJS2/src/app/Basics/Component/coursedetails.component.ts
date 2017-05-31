import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CoursesService } from '../Service/courses.service';
import { Course } from '../Models/Course.model';

@Component({ 
    selector: 'coursedetails',
    template: `
<h5><b><u>{{title}}</u> </b></h5>
<div *ngIf="course">
<b> {{ course.Name }} </b>
<p> {{ course.Description }} </p>
</div>
`
})

export class CourseDetailsComponent implements OnChanges {
    @Input() title: string;
    @Input() courseId: string;
    @Input() course: Course;

    constructor(private _service: CoursesService)
    {

    }
    ngOnChanges(changedValues : SimpleChanges)
    {
        if (changedValues["courseId"])
        {
            this.course = this._service.GetCourseById(this.courseId);
        }
    }
}
