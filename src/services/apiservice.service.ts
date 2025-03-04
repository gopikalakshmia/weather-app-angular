import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviorment';
import { EventEmitter } from '@angular/core';
import { error } from 'console';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
private apiKey=environment.apiKey;
coordinates:object={};
//behaviour subject to store and api data,will always emit the latest value
private cityDataSubject=new BehaviorSubject<any>(null);
data$:Observable<any>=this.cityDataSubject.asObservable();
private forecastSubject=new BehaviorSubject<any>(null);
forecastData$:Observable<any>=this.forecastSubject.asObservable();

  getCityDataFromApi(city:string):Observable<any>{
    const api= `http://api.openweathermap.org/geo/1.0/direct?q=${city}&&exclude={minutely,hourly}&limit=5&appid=${this.apiKey}`;
    return this.http.get(api);
  }


  getWeatherData(coordinates:{lat:0,lon:0}){
    const api=`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${this.apiKey}`;
    const data=this.http.get(api).subscribe(
      (weather)=>{this.cityDataSubject.next(weather)},//emit the response to all subscribers
      (error)=>{console.log("Error fetching data")}
    )
  }

  getForecastWeather(coordinates:{lat:0,lon:0}){
    const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${this.apiKey}`;
    const data=this.http.get(api).subscribe(
      (data)=>{this.forecastSubject.next(data)},
        (error)=>{console.log("Error fetching forecast weather data")}

    )
  }
}
