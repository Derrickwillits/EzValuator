import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { InternalLink } from './objects/internal-link';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class AppComponent {
  myData: InternalLink[] = [
    {name: 'Home', link: 'home'},
    {name: 'My Projects', link: 'my-projects'},
    {name: 'Load Data', link: 'load-data'},
    {name: 'Adjust Financials', link: 'adjust-financials'},
    {name: 'Reports', link: 'reports'},
  ];

}


