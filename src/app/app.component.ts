import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../components/search/search/search.component';
import {FormsModule, NgModel} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app-angular';
  imagePath='Images/sky.jpg';
}

