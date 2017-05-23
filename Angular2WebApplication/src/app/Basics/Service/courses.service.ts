import { Injectable } from '@angular/core';

import { Course } from '../Models/Course.model';
@Injectable()
export class CoursesService {
    private Courses: Course[] = [
        {
            Id: "1",
            Description: "In the last article,We understood how to highlight selected row in Angular 2.",
            Name: "Angular1.x"
        },
        {
            Id: "2",
            Description: "Let's use Angular CLI to setup our application.",
            Name: "Angualr2.x"
        },
        {
            Id: "3",
            Description: "Here, we will pass data from one component to another component and vice versa.",
            Name: "Ionic"
        }];

    GetAllCourses() {
        return this.Courses;
    }

    GetCourseById(id: string) {
        return this.Courses.find(item => item.Id == id);
    }
}