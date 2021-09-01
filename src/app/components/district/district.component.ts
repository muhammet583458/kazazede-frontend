import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { District } from 'src/app/models/district';
import { CityService } from 'src/app/services/city.service';
import { DistrictService } from 'src/app/services/district.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css'],
})
export class DistrictComponent implements OnInit {
  cities: City[] = [];
  districts: District[] = [];
  currentCity: City = { id: 0, cityName: '' };
  currentDistrict:District={id:0,cityId:this.currentCity,districtName:''}
  dataSelected=false;
  constructor(
    private cityService: CityService,
    private districtService: DistrictService
  ) {}

  ngOnInit(): void {
    this.getCities();
  }
  getCities() {
    
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
    });
  }
  getDistricts(citYId:number) {
    this.districtService.getByCityId(citYId).subscribe((response)=>{
      this.districts=response.data;
    })
  }
  setCurrentCity(city: City) {
   
   this.currentCity=city;
   this.getDistricts(city.id);
  this.dataSelected=true;
   
  }
  setCurrentDistrict(district:District){
    this.currentDistrict=district;
  }
  getCurrentCityClass(city:City){
    if(city==this.currentCity){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getCurrentDistrictClass(district:District){
    if(district==this.currentDistrict){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getCurrentCity(){
    return this.currentCity.id;
  }
  
}
