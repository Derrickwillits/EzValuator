import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { UserTemplate } from './usertemplate';
import { UserTemplateService } from './usertemplate.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './html/dashboard.component.html',
  styleUrls: ['./css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    userTemplates: UserTemplate[] = [];

    constructor(private userTemplateService: UserTemplateService) {}

    ngOnInit(): void {
        this.userTemplateService.getUserTemplates()
        .then(userTemplates => this.userTemplates = userTemplates.slice(1,5));
    }

    
 }