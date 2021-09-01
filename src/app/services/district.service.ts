import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DistrictResponseModel } from '../models/districtResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  apiUrl="http://localhost:8080/api/districts/"
  constructor(private httpClient:HttpClient) { }
  getDistricts():Observable<DistrictResponseModel>{
    return this.httpClient.get<DistrictResponseModel>(this.apiUrl+"getall");
  }
  getByCityId(id:number){
    return this.httpClient.get<DistrictResponseModel>(this.apiUrl+"getbycity?cityId="+id);
  }
}
