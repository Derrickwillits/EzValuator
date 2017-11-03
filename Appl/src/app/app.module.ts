import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { 
    MatButtonModule,
    MatCardModule,
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule } from '@angular/material';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { LoadDataComponent } from './load-data.component';
import { AdjustFinancialsComponent } from './adjust-financials.component';
import { ReportsComponent } from './reports.component';
import { GridComponent } from './grid.component';
import { TreeGridComponent } from './tree-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryDataService } from './services/category-data.service';

import { HotTableModule } from 'ng2-handsontable';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    LoadDataComponent,
    AdjustFinancialsComponent,
    ReportsComponent,
    GridComponent,
    TreeGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    AppRoutingModule,
    HotTableModule,
    HttpClientModule
  ],
  providers: [ CategoryDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
