import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuffererResponseModel } from '../models/suffererResponseModel';

@Injectable({
  providedIn: 'root',
})
export class SuffererService {
  apiUrl = 'http://localhost:8080/api/sufferers/';
  constructor(private httpClient: HttpClient) {}
  getSufferers(): Observable<SuffererResponseModel> {
    return this.httpClient.get<SuffererResponseModel>(this.apiUrl+"getall");
  }
  getSufferersByCity(id:number):Observable<SuffererResponseModel>{
    return this.httpClient.get<SuffererResponseModel>(this.apiUrl+"getbycity?cityId="+id);
  }
  getSufferersByDistrict(id:number):Observable<SuffererResponseModel>{
    return this.httpClient.get<SuffererResponseModel>(this.apiUrl+"getbydistrict?districtId="+id);
  }
  getSufferersById(id:number):Observable<SuffererResponseModel>{
    return this.httpClient.get<SuffererResponseModel>(this.apiUrl+"getbyid?id="+id);
  }
}
