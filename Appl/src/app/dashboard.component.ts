import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { UserTemplate } from './usertemplate';
import { UserTemplateService } from './user-template.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    userTemplates: UserTemplate[] = [];

    constructor(private userTemplateService: UserTemplateService) {}

    ngOnInit(): void {
        this.userTemplateService.getUserTemplates()
        .then(userTemplates => this.userTemplates = userTemplates.slice(1,5));
    }

    
 }