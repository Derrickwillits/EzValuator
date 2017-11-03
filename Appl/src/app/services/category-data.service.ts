import { Injectable, OnInit } from '@angular/core';
import { CategoryRow } from '../objects/category-row';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryDataService {

    constructor(private http: HttpClient) {};

    public getCategoryData(): Promise<CategoryRow[]>{
        // this.http.get("../mock-data/revenue-categories-data.json")
        // .map(res => deserialize<CategoryRow[]>(CategoryRow, res))
        // .subscribe(categories => this.categories = categories)
        return Promise.resolve(null);
    }
}