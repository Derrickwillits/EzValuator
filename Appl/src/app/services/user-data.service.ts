import { Injectable, OnInit } from '@angular/core';
import { CategoryRow } from '../objects/category-row';
import { CATEGORYDATA } from '../mock-data/mock-category-data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserDataService implements OnInit {

    project: string;

    constructor() {};

    //Retrieves the current user project set during project navigation.
    public getCurrentProject(): Promise<string>{
        return Promise.resolve(this.project);
    }

    //Sets current project, this should make a call to server to record this.
    public setCurrentProject(project: string): void {
        this.project = project;
    }

    //Retrieves mock user data,  can be switched out for back end calls to get user data.
    public getCategories(project: string): Promise<CategoryRow[]> {
        if(project = 'project1') {return Promise.resolve(CATEGORYDATA)} else { return null } ;
    }

    public connect(): Observable<CategoryRow[]> {
        var rows;
        this.getCategories(this.project).then(returnedRows => rows = returnedRows);
        return rows;
    }

    public disconnect(): void {};

    ngOnInit() {
        this.project = 'project1';
    }
}