import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { DistrictComponent } from './components/district/district.component';
import { SuffererComponent } from './components/sufferer/sufferer.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DistrictComponent,
    SuffererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
