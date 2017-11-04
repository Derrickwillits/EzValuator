import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CategoryRow } from './objects/category-row';
import { CategoryDataService } from './services/category-data.service';

@Component({
  selector: 'tree-grid',
  templateUrl: './html/tree-grid.component.html',
  styleUrls: ['./css/tree-grid.component.css']
  //providers: [CategoryDataService]
})
export class TreeGridComponent implements OnChanges {

    constructor(private categoryDataService: CategoryDataService) {};

    @Input() inputColumns: number[];
    @Input() categories: CategoryRow[];

    private headers: number[];
    private categoryRows: CategoryRow[];

    columnIndices: number[];
    newDetailIndices: number[];

    ngOnChanges(): void {
      var newHeaders = new Array<number>();
      var newMap = new Map<number, number>();
      var remove9999 = new Array<number>();
      var remove9999Counter: number = 0;
      this.inputColumns.forEach(() => newHeaders.push(9999));
      for(var i = 0; i < this.inputColumns.length; i++){
        for(var i1=0; i1 < newHeaders.length; i1++){
          if(this.inputColumns[i] < newHeaders[i1]){
            newHeaders.splice(i1, 0, this.inputColumns[i]);
            if(newHeaders[i1+1] === 9999){
              newHeaders.splice(i1+1, 1);
            };
            break;
          };
        };
      };
      for(var i = 0; i < newHeaders.length; i++){
        if(newHeaders[i] === 9999) { remove9999.push(i) };
      };
      for(var i = 0; i < remove9999.length; i++){
        newHeaders.splice(remove9999[i-remove9999Counter], 1);
        remove9999Counter++;
      };
      for(var i = 0; i < newHeaders.length; i++){
        var newPosition = i;
        var oldPosition = this.inputColumns.indexOf(newHeaders[i]);
        newMap.set(oldPosition, newPosition);
      };
      for(var i = 0; i < this.categories.length; i++){
        var tempArray = new Array<number>();
        for(var i1 = 0; i1 < this.categories[i].details.length; i1++){
          tempArray.splice(newMap.get(i1), 0, this.categories[i].details[i1]);
        };
        this.categories[i].details = tempArray;
      };
      this.headers = newHeaders;
      this.categoryRows = this.categories;
    };
    
}
