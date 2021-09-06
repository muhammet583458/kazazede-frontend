import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { DistrictComponent } from './components/district/district.component';
import { SuffererComponent } from './components/sufferer/sufferer.component';
import { SuffererDetailComponent } from './components/sufferer-detail/sufferer-detail.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddFounderComponent } from './components/add-founder/add-founder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DistrictComponent,
    SuffererComponent,
    SuffererDetailComponent,
    AddFounderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
