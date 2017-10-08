"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_user_templates_1 = require("./mock-user-templates");
var UserTemplateService = (function () {
    function UserTemplateService() {
    }
    UserTemplateService.prototype.getUserTemplates = function () {
        return Promise.resolve(mock_user_templates_1.USERTEMPLATES);
    };
    UserTemplateService.prototype.getUserTemplatesSlowly = function () {
        var _this = this;
        //return Promise.resolve(USERTEMPLATES);
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getUserTemplates()); }, 2000);
        });
    };
    UserTemplateService.prototype.getUserTemplate = function (id) {
        return this.getUserTemplates()
            .then(function (valueTemplates) { return valueTemplates.find(function (valueTemplate) { return valueTemplate.id === id; }); });
    };
    return UserTemplateService;
}());
UserTemplateService = __decorate([
    core_1.Injectable()
], UserTemplateService);
exports.UserTemplateService = UserTemplateService;
//# sourceMappingURL=user-template.service.js.map