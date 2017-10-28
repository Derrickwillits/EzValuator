import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'user-projects',
  templateUrl: './html/projects.component.html',
  styleUrls: ['./css/projects.component.css']
})
export class ProjectsComponent implements OnInit {
    //flags to show items
    newProjectFlag: boolean;
    editProjectFlag: boolean;
    deleteProjectFlag: boolean;
    reallyDeleteProjectFlag: boolean;

    //names of variables for updating values
    activeProject: string;
    newProjectName: string;
    editProjectName: string;

    //Messages from updates
    newProjectSuccessMessage: string;
    editProjectSuccessMessage: string;
    deleteProjectSuccessMessage: string;

    projects = [
      'ABC Painter',
      'Best Restaurant',
      '1234 BrewHouse',
      'Races cool restaurant'
    ];

    toggleProjectAdd(): void {
      this.newProjectFlag = !this.newProjectFlag;
      this.editProjectFlag = false;
      this.deleteProjectFlag = false;
      this.reallyDeleteProjectFlag = false;
      if(this.newProjectFlag) {
        this.newProjectSuccessMessage = '';
        this.newProjectName = '';
      };
    };

    addProject(): void {
      var index = this.projects.indexOf(this.newProjectName);
      if(this.newProjectName != '' && index === -1) {
        this.projects.push(this.newProjectName);
        this.newProjectSuccessMessage = "Successfully added your project!";
      } else {
        if(this.newProjectName = '') {
          this.newProjectSuccessMessage = "Please enter a valid project name!";
        } else {
          this.newProjectSuccessMessage = "That Project already exists!";
        }
      };
    };

    toggleProjectEdit(): void {
      this.editProjectFlag = !this.editProjectFlag;
      this.newProjectFlag = false;
      this.deleteProjectFlag = false;
      this.reallyDeleteProjectFlag = false;
      if(this.editProjectFlag) {
        this.editProjectSuccessMessage = '';
        this.editProjectName = '';
      };
    };

    editProject(): void {
      var activeIndex = this.projects.indexOf(this.activeProject);
      var editIndex = this.projects.indexOf(this.editProjectName);
      if(this.editProjectName != '' && activeIndex > -1 && editIndex === -1) {
        this.projects.splice(activeIndex, 1);
        this.projects.push(this.editProjectName);
        this.activeProject = this.editProjectName;
        this.editProjectSuccessMessage = "Successfully updated your project!";
      } else {
        if(this.editProjectName = '') {
          this.editProjectSuccessMessage = "Please enter a valid project name!";
        } else { 
          if(activeIndex === -1){
            this.editProjectSuccessMessage = "Please select a project!";
          } else {
            this.editProjectSuccessMessage = "That Project name already exists!";
          }
        }
      };
    };

    toggleProjectDelete(): void {
      this.deleteProjectFlag = !this.deleteProjectFlag;
      this.newProjectFlag = false;
      this.editProjectFlag = false;
      this.reallyDeleteProjectFlag = false;
      if(this.deleteProjectFlag) {
        this.deleteProjectSuccessMessage = '';
      };
    };

    toggleProjectReallyDelete(): void {
      this.reallyDeleteProjectFlag = !this.reallyDeleteProjectFlag;
      this.deleteProjectSuccessMessage = '';
    };

    deleteProject(): void {
      var index = this.projects.indexOf(this.activeProject);
      if(this.activeProject != '' && index > -1) {
           this.projects.splice(index, 1);
           this.deleteProjectSuccessMessage = 'Successfully deleted your project!';
      } else {
          this.deleteProjectSuccessMessage = "Please select a project!";
      };
    };

    ngOnInit(){
      this.newProjectFlag = false;
      this.editProjectFlag = false;
      this.deleteProjectFlag = false;
      this.reallyDeleteProjectFlag = false;
      this.activeProject = '';
      this.newProjectName = '';
      this.editProjectName = '';
      this.newProjectSuccessMessage = '';
      this.editProjectSuccessMessage = '';
      this.deleteProjectSuccessMessage = '';
    };
}
