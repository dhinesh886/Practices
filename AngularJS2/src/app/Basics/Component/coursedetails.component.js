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
var CourseDetailsComponent = (function () {
    function CourseDetailsComponent(_service) {
        this._service = _service;
    }
    CourseDetailsComponent.prototype.ngOnChanges = function (changedValues) {
        if (changedValues["courseId"]) {
            this.course = this._service.GetCourseById(this.courseId);
        }
    };
    return CourseDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CourseDetailsComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CourseDetailsComponent.prototype, "courseId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CourseDetailsComponent.prototype, "course", void 0);
CourseDetailsComponent = __decorate([
    core_1.Component({
        selector: 'coursedetails',
        template: "\n<h5><b><u>{{title}}</u> </b></h5>\n<div *ngIf=\"course\">\n<b> {{ course.Name }} </b>\n<p> {{ course.Description }} </p>\n</div>\n"
    }),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CourseDetailsComponent);
exports.CourseDetailsComponent = CourseDetailsComponent;
//# sourceMappingURL=coursedetails.component.js.map