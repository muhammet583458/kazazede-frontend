import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import {HttpClient} from '@angular/common/http'
import { CityResponseModel } from 'src/app/models/cityResponseModel';
import { CityService } from 'src/app/services/city.service';
import { District } from 'src/app/models/district';
import { DistrictService } from 'src/app/services/district.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cities: City[] = [];
  dataLoaded=false;
  districts: District[] = [];
  @Input()
  cityId!: number;
  allCity:City={id:0,cityName:"Hepsi"};
  allDistrict:District={cityId:this.allCity,id:0,districtName:"Hepsi"};
  constructor(private cityService:CityService,
    private districtService: DistrictService) {}

  ngOnInit(): void {
    console.log(this.cityId);
    this.getDistricts(this.cityId);}
  getCities(){
    this.cityService.getCities().subscribe((response)=>{
      this.cities=response.data;
      this.dataLoaded=true;
    })
  }
  getDistricts(citYId:number) {
    this.districtService.getByCityId(citYId).subscribe((response)=>{
      this.districts=response.data;
      this.districts.unshift(this.allDistrict);
    })
  }
  
}
