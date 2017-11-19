import { Component, OnInit } from '@angular/core';
import { CategoryRow } from './objects/category-row';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'load-data',
  templateUrl: './html/load-data.component.html',
  styleUrls: ['./css/load-data.component.css'],
  providers: [ UserDataService ]
})
export class LoadDataComponent implements OnInit {

    //Display properties
    loadManualFlag: boolean;
    loadAutoFlag: boolean;
    incomeStatementFlag: boolean;
    balanceSheetFlag: boolean;
    removeYearFlag: boolean;
    addYearFlag: boolean;
    dataSource: UserDataService | null;
    displayedColumns = ['categoryID', 'categoryName'];
    newYearName: number;
    removeYearName: number;
    headerYears = [2014,2015,2016];
    loadCategories: CategoryRow[];
    rowTotals: number[];

    // //Excel Grid Properties
    // columnHeaders = ['Categories', '2016', '2015', '2014'];
    // numberOfColumns = 4;
    // gridDataRevenue = [{name: 'Revenue'}, {name: 'MoreRevenue'}, {name: 'EvenMoreRevenue'}];
    // gridDataCogs = [{name: 'CoGS'}, {name: 'MoreCoGS'}, {name: 'EvenMoreCoGS'}];
    // gridDataExpenses = [{name: 'Expenses'}, {name: 'MoreExpenses'}, {name: 'EvenMoreExpenses'}];

    constructor(private userDataService: UserDataService) {};

    toggleManual(): void {
      this.loadManualFlag = !this.loadManualFlag;
      this.loadAutoFlag = false;
    };

    toggleAuto(): void {
      this.loadAutoFlag = !this.loadAutoFlag;
      this.loadManualFlag = false;
    };

    toggleIncomeStatement(): void {
      this.incomeStatementFlag = !this.incomeStatementFlag;
      this.balanceSheetFlag = false;
    };

    toggleBalanceSheet(): void {
      this.balanceSheetFlag = !this.balanceSheetFlag;
      this.incomeStatementFlag = false;
    };

    addYearToggle(): void {
      this.addYearFlag = !this.addYearFlag;
      this.removeYearFlag = false;
    };

    addYearCommit(): void {
      var newHeaders = new Array<number>();
      this.headerYears.forEach(x => newHeaders.push(x));
      newHeaders.push(+this.newYearName);
      this.headerYears = newHeaders;
      this.loadCategories.forEach(x => x.details.push(0));
      this.newYearName = null;
    };

    removeYearToggle(): void {
      this.removeYearFlag = !this.removeYearFlag;
      this.addYearFlag = false;
    };

    removeYearCommit(): void {
      var newHeaders = new Array<number>();
      this.headerYears.forEach(x => newHeaders.push(x));
      var index = newHeaders.indexOf(+this.removeYearName);
      newHeaders.splice(index, 1);
      this.headerYears = newHeaders;
      this.loadCategories.forEach(x => x.details.splice(index, 1));
      this.removeYearName = null;
    };

    recalculateExcelGrid(): void {
      //TODO add logic to reset calculated variables inside the sheet.
    }

    ngOnInit(): void {
      this.loadAutoFlag = false;
      this.loadManualFlag = false;
      this.incomeStatementFlag = false;
      this.balanceSheetFlag = false;
      this.removeYearFlag = false;
      this.addYearFlag = false;
      this.dataSource = new UserDataService();
      this.rowTotals = new Array<number>();

      this.loadCategories = new Array<CategoryRow>();
      var category1 = new CategoryRow();
      category1.id = 2;
      category1.name = "Revenue";
      category1.details = [5000, 2000, 3000];
      var category2 = new CategoryRow();
      category2.id = 3;
      category2.name = "More Revenue";
      category2.details = [4000, 5000, 10000];
      this.loadCategories.push(category1);
      this.loadCategories.push(category2);
    };
}
