import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviorment';
import { EventEmitter } from '@angular/core';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
private apiKey=environment.apiKey;
coordinates:object={};


  getCityDataFromApi(city:string){
    const api= `http://api.openweathermap.org/geo/1.0/direct?q=${city}&&exclude={minutely,hourly}&limit=5&appid=${this.apiKey}`;
    return this.http.get(api);
  }

  onCitySelectedEvent:EventEmitter<any>=new EventEmitter();
  getWeatherData(coordinates:{lat:0,lon:0}){
    const api=`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${this.apiKey}`;
    const data=this.http.get(api).subscribe(
      (weather)=>{this.onCitySelectedEvent.emit(weather)},
      (error)=>{console.log("Error fetching data")}
    )
  }
}
