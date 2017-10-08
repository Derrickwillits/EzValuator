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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var user_template_service_1 = require("./user-template.service");
var ValueDetailComponent = (function () {
    function ValueDetailComponent(userTemplateService, route, location) {
        this.userTemplateService = userTemplateService;
        this.route = route;
        this.location = location;
    }
    ValueDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.userTemplateService.getUserTemplate(+params.get('id')); })
            .subscribe(function (valueTemplate) { return _this.valueTemplate = valueTemplate; });
    };
    ValueDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ValueDetailComponent;
}());
ValueDetailComponent = __decorate([
    core_1.Component({
        selector: 'value-detail',
        templateUrl: './value-detail.component.html',
        styleUrls: ['./value-detail.component.css']
    }),
    __metadata("design:paramtypes", [user_template_service_1.UserTemplateService,
        router_1.ActivatedRoute,
        common_1.Location])
], ValueDetailComponent);
exports.ValueDetailComponent = ValueDetailComponent;
//# sourceMappingURL=value-detail.component.js.map