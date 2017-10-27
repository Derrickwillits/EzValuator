import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'excel-grid',
  templateUrl: './html/grid.component.html',
  styleUrls: ['./css/grid.component.css']
})
export class GridComponent {

    //hot table items below
    private exampleCategories: string[] = ['Revenue', 'COGS', 'Profit', 'Taxes', 'Net Income']
    private colHeaders: string[] = ['Category', '2016', '2015', '2014',
    'Favorite food', 'Price', 'Is active'];
    private colWidths: number[] = [null, null, null, null, null, null, 30];
    private columns: any[] = [
        {
            data: this.exampleCategories
        },
        {
        },
        {
        },
        {
        }
      ];
    private options: any = {
      stretchH: 'all',
      columnSorting: true,
      contextMenu: [
        'row_above', 'row_below', 'remove_row'
      ]
    };

    private afterChange(e: any) {
        console.log(e);
    };
    
    private afterOnCellMouseDown(e: any) {
    console.log(e);
    };
}
