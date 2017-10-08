import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ValueDetailComponent } from './value-detail.component';
import { UserTemplateService } from './user-template.service';
import { ValueComponent } from './value.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  imports: [ BrowserModule, 
    FormsModule,
    AppRoutingModule
   ],
  declarations: [ AppComponent, 
    ValueDetailComponent, 
    ValueComponent, 
    DashboardComponent
   ],
  providers: [ UserTemplateService ],
  bootstrap: [ AppComponent ] 
}) 
export class AppModule { }
