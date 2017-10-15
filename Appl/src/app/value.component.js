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
var usertemplate_service_1 = require("./usertemplate.service");
var router_1 = require("@angular/router");
var ValueComponent = (function () {
    function ValueComponent(userTemplateService, router) {
        this.userTemplateService = userTemplateService;
        this.router = router;
        this.title = 'Available Templates';
    }
    ValueComponent.prototype.getUserTemplates = function () {
        var _this = this;
        this.userTemplateService.getUserTemplates().then(function (valueTemplates) { return _this.valueTemplates = valueTemplates; });
    };
    ValueComponent.prototype.onSelect = function (valueTemplate) {
        this.selectedTemplate = valueTemplate;
    };
    ValueComponent.prototype.ngOnInit = function () {
        this.getUserTemplates();
    };
    ValueComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedTemplate.id]);
    };
    return ValueComponent;
}());
ValueComponent = __decorate([
    core_1.Component({
        selector: 'my-values',
        templateUrl: './html/value.component.html',
        styleUrls: ['./css/value.component.css'],
        providers: [usertemplate_service_1.UserTemplateService]
    }),
    __metadata("design:paramtypes", [usertemplate_service_1.UserTemplateService, router_1.Router])
], ValueComponent);
exports.ValueComponent = ValueComponent;
//# sourceMappingURL=value.component.js.map