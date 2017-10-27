import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

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
      'Races cool restaurant'
    ]

    ngOnInit(){
      this.newProjectFlag = false;
    }

}
