import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast-card',
  imports: [CommonModule,],
  templateUrl: './forecast-card.component.html',
  styleUrl: './forecast-card.component.css'
})
export class ForecastCardComponent implements OnInit {

  // @Input() dateforecast: any;
  @Input() dateforecast: any;
  @Input() forecastDay: any;

day:any;



ngOnInit(): void {
  this.day=new Date(this.dateforecast).toLocaleDateString("en-US",{weekday:"long"});
}

}
