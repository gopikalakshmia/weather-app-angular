import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviorment';
import { EventEmitter } from '@angular/core';
import { error } from 'console';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}
  private apiKey = environment.apiKey;
  private geminiApiKey = environment.geminiApiKey;
   geminiURL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

  coordinates: object = {};
  //behaviour subject to store and api data,will always emit the latest value
  private cityDataSubject = new BehaviorSubject<any>(null);
  data$: Observable<any> = this.cityDataSubject.asObservable();
  private forecastSubject = new BehaviorSubject<any>(null);
  forecastData$: Observable<any> = this.forecastSubject.asObservable();

  getCityDataFromApi(city: string): Observable<any> {
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&&exclude={minutely,hourly}&limit=5&appid=${this.apiKey}`;
    return this.http.get(api);
  }

  getWeatherData(coordinates: { lat: 0; lon: 0 }) {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${this.apiKey}`;
    const data = this.http.get(api).subscribe(
      (weather) => {
        this.cityDataSubject.next(weather);
      }, //emit the response to all subscribers
      (error) => {
        console.log('Error fetching data');
      }
    );
  }

  getForecastWeather(coordinates: { lat: 0; lon: 0 }) {
    const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${this.apiKey}`;
    const data = this.http.get(api).subscribe(
      (data) => {
        this.forecastSubject.next(data);
       // console.log(data);
      },
      (error) => {
        console.log('Error fetching forecast weather data');
      }
    );
  }
  getAiResponse(weather: any): Observable<any> {
    const api=`${this.geminiURL}?key=${this.geminiApiKey}`;
    const prompt = `Summarize the weather data:
  Temperature: ${weather.Temperature},
  Condition: ${weather.Condition},
  Humidity: ${weather.Humidity}%,
  Wind Speed: ${weather.WindSpeed} km/h.`;
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    });
    const body=JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    })
    return this.http.post(api,body,{headers})
  }
}
