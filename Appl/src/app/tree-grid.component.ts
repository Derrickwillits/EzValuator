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

    columnIndices: number[];
    newDetailIndices: number[];

    ngOnChanges(): void {
        
    };

}
