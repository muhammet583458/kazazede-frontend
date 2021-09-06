import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sufferer } from '../models/sufferer';
import { SuffererResponseModel } from '../models/suffererResponseModel';
import { SufferersResponseModel } from '../models/sufferersResponseModel';

@Injectable({
  providedIn: 'root',
})
export class SuffererService {
  apiUrl = 'http://localhost:8080/api/sufferers/';
  constructor(private httpClient: HttpClient) {}
  getSufferers(): Observable<SufferersResponseModel> {
    return this.httpClient.get<SufferersResponseModel>(this.apiUrl+"getall");
  }
  getSufferersByCity(id:number):Observable<SufferersResponseModel>{
    return this.httpClient.get<SufferersResponseModel>(this.apiUrl+"getbycity?cityId="+id);
  }
  getSufferersByDistrict(id:number):Observable<SufferersResponseModel>{
    return this.httpClient.get<SufferersResponseModel>(this.apiUrl+"getbydistrict?districtId="+id);
  }
  getSufferersById(id:number):Observable<SufferersResponseModel>{
    return this.httpClient.get<SufferersResponseModel>(this.apiUrl+"getbyid?id="+id);
  }
  add(sufferer:Sufferer){
    return this.httpClient.post(this.apiUrl+"add",sufferer);
  }
}
