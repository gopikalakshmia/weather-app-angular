import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviorment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
private apiKey=environment.apiKey;

  getCityDataFromApi(city:string){
    const api= `http://api.openweathermap.org/geo/1.0/direct?q=${city}&&exclude={minutely,hourly}&limit=5&appid=${this.apiKey}`;
    return this.http.get(api);
  }
}
