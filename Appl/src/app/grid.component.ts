import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, ViewChild, OnChanges  } from '@angular/core';
import { HotTable } from 'ng2-handsontable';

//declare var Handsontable: any;

@Component({
  selector: 'excel-grid',
  templateUrl: './html/grid.component.html',
  styleUrls: ['./css/grid.component.css']
})
export class GridComponent implements OnChanges, AfterViewInit {
    //initialize child component inside parent
    @ViewChild('hotTable')
    private excelTable: HotTable;

    //constructor(private handsonTable: Handsontable) {};

    //used to render parent properties from child properties
    //this is for setup only, angular cannot initialize them at parent initialization
    //use this to wait 1 tick and set a property
    ngAfterViewInit(): void {

    };

    //Passed in configurations
    @Input() passedColHeaders: string[];
    @Input() passedData: any[];
    @Input() passedNumberOfColumns: number;

    //Values to setup the table
    dynamicColumns: any[];

    //hot table items below
    private options: any = {
      height: 150,
      stretchH: 'all',
      columnSorting: true,
      manualColumnResize: true,
      observeChanges: true,
      contextMenu: [
        'row_above', 'row_below', 'remove_row'
      ]
    };

    //Interestingly enough, ngOnInit is never called
    //However ngOnChanges is called at render
    //So this function serves both to render and update.
    ngOnChanges(): void {
      this.initializeExcelTable();
      //this.handsonTable = this.excelTable.getHandsontableInstance();
      //this.handsonTable.render();
    };

    private initializeExcelTable(): void {
      this.dynamicColumns = new Array<Object>();
      this.excelTable.colHeaders = this.passedColHeaders;
      this.excelTable.data = this.passedData;
      for(var i = 0; i < this.passedNumberOfColumns; i++ ){
        var col: any = new Object;
        if(i==0){
          col.data = "name";
        };
        this.dynamicColumns.push(col);
      }
      this.excelTable.columns = this.dynamicColumns;
      this.excelTable.options = this.options;
    };

}
