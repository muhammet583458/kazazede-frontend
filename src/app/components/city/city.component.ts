import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import {HttpClient} from '@angular/common/http'
import { CityResponseModel } from 'src/app/models/cityResponseModel';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cities: City[] = [];
  dataLoaded=false;
  
  constructor(private cityService:CityService) {}

  ngOnInit(): void {this.getCities();}
  getCities(){
    this.cityService.getCities().subscribe((response)=>{
      this.cities=response.data;
      this.dataLoaded=true;
    })
  }
  
}
