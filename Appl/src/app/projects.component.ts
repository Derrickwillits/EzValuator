import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { InternalLink } from './internal-link';

@Component({
  selector: 'user-projects',
  templateUrl: './html/projects.component.html',
  styleUrls: ['./css/projects.component.css']
})
export class ProjectsComponent implements OnInit {

    newProjectFlag: boolean;
    projects = [
      'ABC Painter',
      'Best Restaurant',
      '1234 BrewHouse',
    ]

    ngOnInit(){
      this.newProjectFlag = false;
    }

}
