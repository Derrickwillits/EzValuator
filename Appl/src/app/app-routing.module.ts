import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent }   from './dashboard.component';
import { ValueComponent }      from './value.component';
import { ValueDetailComponent }  from './value-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: ValueDetailComponent },
    { path: 'values',     component: ValueComponent }
  ];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}