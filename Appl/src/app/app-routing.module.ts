import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent }   from './home.component';
import { ProjectsComponent }   from './projects.component';
import { LoadDataComponent }   from './load-data.component';
import { AdjustFinancialsComponent }   from './adjust-financials.component';
import { ReportsComponent }   from './reports.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'my-projects',  component: ProjectsComponent },    
    { path: 'load-data',  component: LoadDataComponent },    
    { path: 'adjust-financials',  component: AdjustFinancialsComponent },    
    { path: 'reports',  component: ReportsComponent },    
  ];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}