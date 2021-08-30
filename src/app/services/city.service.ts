import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityResponseModel } from '../models/cityResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {
apiUrl="http://localhost:8080/api/cities/getall"
  constructor(private httpClient:HttpClient) { }
  getCities():Observable<CityResponseModel>{
    return this.httpClient.get<CityResponseModel>(this.apiUrl);
  }
}
