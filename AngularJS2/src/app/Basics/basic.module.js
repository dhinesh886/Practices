"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var courses_component_1 = require("./Component/courses.component");
var binding_component_1 = require("./Component/binding.component");
var coursedetails_component_1 = require("./Component/coursedetails.component");
var inputoutpt_component_1 = require("./Component/inputoutpt.component");
var highlight_directive_1 = require("./Directive/highlight.directive");
var courses_service_1 = require("./Service/courses.service");
var zigzag_pipe_1 = require("./Pipes/zigzag.pipe");
var ngcontent_component_1 = require("./Component/ngcontent.component");
var simpleform_components_1 = require("./Component/simpleform.components");
var modeldrivenform_component_1 = require("./Component/modeldrivenform.component");
var BasicModule = (function () {
    function BasicModule() {
    }
    return BasicModule;
}());
BasicModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [courses_component_1.CoursesComponent, coursedetails_component_1.CourseDetailsComponent, highlight_directive_1.HighlightDirective, binding_component_1.BindingComponent, inputoutpt_component_1.InputOutputComponent, zigzag_pipe_1.ZigZagPipe, ngcontent_component_1.PanelComponent, simpleform_components_1.SimpleFormComponent, modeldrivenform_component_1.ModelDrivenFormComponent],
        exports: [courses_component_1.CoursesComponent, coursedetails_component_1.CourseDetailsComponent, highlight_directive_1.HighlightDirective, binding_component_1.BindingComponent, inputoutpt_component_1.InputOutputComponent, zigzag_pipe_1.ZigZagPipe, ngcontent_component_1.PanelComponent, simpleform_components_1.SimpleFormComponent, modeldrivenform_component_1.ModelDrivenFormComponent],
        providers: [courses_service_1.CoursesService] // services/providers which are part of this module
    })
], BasicModule);
exports.BasicModule = BasicModule;
//# sourceMappingURL=basic.module.js.map