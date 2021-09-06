import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Founder } from '../models/founder';
import { FounderResponseModel } from '../models/founderResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FounderService {
  apiUrl = 'http://localhost:8080/api/founders/';

  constructor(private httpClient:HttpClient) { }

  add(founder:Founder){
    return this.httpClient.post(this.apiUrl+"add",founder);
  }
  getByPhone(phone:string):Observable<FounderResponseModel>{
    return this.httpClient.get<FounderResponseModel>(this.apiUrl+"getbyfounderphone?founderPhone="+phone);
  }
}
