import { Component } from '@angular/core';
import {UserTemplate} from './usertemplate';
import {UserTemplateService} from './usertemplate.service'
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-values',
  templateUrl: './html/value.component.html',
  styleUrls: ['./css/value.component.css'],
  providers: [UserTemplateService]
})
export class ValueComponent implements OnInit { 
  title = 'Available Templates';
  valueTemplates: UserTemplate[];
  selectedTemplate: UserTemplate;

  constructor(private userTemplateService: UserTemplateService, private router: Router, ) {}

  getUserTemplates(): void {
    this.userTemplateService.getUserTemplates().then(valueTemplates => this.valueTemplates = valueTemplates);
  } 

  onSelect(valueTemplate: UserTemplate): void {
    this.selectedTemplate = valueTemplate
    }

  ngOnInit(): void {
    this.getUserTemplates();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTemplate.id]);
  }
}
