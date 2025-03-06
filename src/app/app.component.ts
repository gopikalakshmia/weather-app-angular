import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../components/search/search/search.component';
import { DisplayweatherComponent } from "../components/weather/displayweather/displayweather.component";
import { ForecastWeatherComponent } from '../components/forecastWeather/forecast-weather/forecast-weather.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchComponent, DisplayweatherComponent,ForecastWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent {
  title = 'weather-app-angular';
  imagePath='Images/sky.jpg';
}

