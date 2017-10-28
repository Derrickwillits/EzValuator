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

    loadManualFlag: boolean;
    loadAutoFlag: boolean;
    incomeStatementFlag: boolean;
    balanceSheetFlag: boolean;
    removeYearFlag: boolean;
    addYearFlag: boolean;
    dataSource: UserDataService | null;
    displayedColumns = ['categoryID', 'categoryName'];

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
      //TODO add column from excel-grid component
    };

    removeYearToggle(): void {
      this.removeYearFlag = !this.removeYearFlag;
      this.addYearFlag = false;
    };

    removeYearCommit(): void {
      //TODO remove column from excel-grid component
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
    };
}
