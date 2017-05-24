"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CoursesService = (function () {
    function CoursesService() {
        this.Courses = [
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
            }
        ];
    }
    CoursesService.prototype.GetAllCourses = function () {
        return this.Courses;
    };
    CoursesService.prototype.GetCourseById = function (id) {
        return this.Courses.find(function (item) { return item.Id == id; });
    };
    return CoursesService;
}());
CoursesService = __decorate([
    core_1.Injectable()
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map