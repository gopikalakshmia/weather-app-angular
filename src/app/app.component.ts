import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../components/search/search/search.component';
import { DisplayweatherComponent } from "../components/weather/displayweather/displayweather.component";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchComponent, DisplayweatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent {
  title = 'weather-app-angular';
  imagePath='Images/sky.jpg';
}

