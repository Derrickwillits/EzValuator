import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {UserTemplateService} from './user-template.service';
import {UserTemplate} from './usertemplate';

@Component({
  selector: 'value-detail',
  templateUrl: './value-detail.component.html',
  styleUrls: ['./value-detail.component.css']
})
export class ValueDetailComponent implements OnInit {
  valueTemplate: UserTemplate;
  
  constructor(
    private userTemplateService: UserTemplateService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userTemplateService.getUserTemplate(+params.get('id')))
      .subscribe(valueTemplate => this.valueTemplate = valueTemplate);
  }

  goBack(): void {
    this.location.back();
  }

}