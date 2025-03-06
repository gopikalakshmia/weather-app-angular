import { Component, inject, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';

@Component({
  selector: 'app-forecast-weather',
  imports: [ForecastCardComponent,CommonModule,NgIf,NgFor],
  templateUrl: './forecast-weather.component.html',
  styleUrl: './forecast-weather.component.css',
})
export class ForecastWeatherComponent implements OnInit {
  private apiService = inject(ApiserviceService);
  forecastWeather: any;
  ngOnInit(): void {
    this.apiService.forecastData$.subscribe(
      (data) => {
        this.forecastWeather = this.filterForecastdata(data);
      },
      (error) => console.log('Not able to fetch Forecast weather')
    );
  }
//Extraction of forecast weather for 4 days
  filterForecastdata(forecastDays: any) {
    const dailyData: any = [];
    forecastDays &&
      forecastDays.list &&
      forecastDays.list.forEach((item: any) => {
        const date = item.dt_txt.split(' ')[0]; // Extract date
        const tempMax = item.main.temp_max; // temp_max from API
        const tempMin = item.main.temp_min; // temp_min from API
        if (!dailyData[date]) {
          dailyData[date] = {
            temp_max: tempMax,
            temp_min: tempMin,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          };
        } else {
          dailyData[date].temp_max = Math.max(
            dailyData[date].temp_max,
            tempMax
          );
          dailyData[date].temp_min = Math.min(
            dailyData[date].temp_min,
            tempMin
          );
        }
      });

    console.log(Object.entries(dailyData).slice(0, 5));
    return Object.entries(dailyData).slice(1, 5);
  }
}
