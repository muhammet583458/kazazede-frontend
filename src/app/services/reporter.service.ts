import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporter } from '../models/reporter';
import {ReporterResponseModel} from '../models/reporterResponseModel';
import { ReportersResponseModel } from '../models/reportersResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ReporterService {
  apiUrl = 'http://localhost:8080/api/reporters/';
  constructor(private httpClient:HttpClient) { }
  add(reporter:Reporter){
    return this.httpClient.post(this.apiUrl+"add",reporter);
  }
  getByPhone(phone:string):Observable<ReporterResponseModel>{
    return this.httpClient.get<ReporterResponseModel>(this.apiUrl+"getbyreporterphone?reporterPhone="+phone);
  }
  getReporters():Observable<ReportersResponseModel>{
    return this.httpClient.get<ReportersResponseModel>(this.apiUrl+"getall");
  }
  
}
