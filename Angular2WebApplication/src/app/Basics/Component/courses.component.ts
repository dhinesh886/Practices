import { Component } from "@angular/core";
import { CoursesService } from "../Service/courses.service";
import { Course } from '../Models/Course.model';
import { CourseDetailsComponent } from '../Component/coursedetails.component';

@Component({
    selector: "courses",
    template: `<h5><b>{{ title }}</b></h5>
               <ul><li *ngFor = "let course of courses" (click)='OnClick(course)' >{{ course.Name }}</li></ul>
                <coursedetails title='Parent Child Communication' [course]="selectedCourse" ></coursedetails>
`,

})

export class CoursesComponent {
    courses: Course[];
    title = "Courses List";
    selectedCourseId: string
    selectedCourse: Course;
    constructor(coursesService: CoursesService) {
        this.courses = coursesService.GetAllCourses();
    }
    OnClick(course: Course) {
        this.selectedCourseId = course.Id;
        this.selectedCourse = course;
        console.log(course);
    }
}