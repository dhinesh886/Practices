"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var courses_service_1 = require("../Service/courses.service");
var CoursesComponent = (function () {
    function CoursesComponent(coursesService) {
        this.title = "Courses List";
        this.courses = coursesService.GetAllCourses();
    }
    CoursesComponent.prototype.OnClick = function (course) {
        this.selectedCourseId = course.Id;
        this.selectedCourse = course;
        console.log(course);
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: "courses",
        template: "<h5><b>{{ title }}</b></h5>\n               <ul><li *ngFor = \"let course of courses\" (click)='OnClick(course)' >{{ course.Name }}</li></ul>\n                <h4>Component Communication</h4>\n                <coursedetails title='Parent Child Communication' [course]=\"selectedCourse\" ></coursedetails>\n                <coursedetails title='Change Detection' [courseId]=\"selectedCourseId\" ></coursedetails>\n",
    }),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map