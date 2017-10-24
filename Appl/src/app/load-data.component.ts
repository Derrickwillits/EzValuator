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

    ngOnInit(): void {
      this.loadAutoFlag = false;
      this.loadManualFlag = false;
      this.dataSource = new UserDataService();
    };
}
