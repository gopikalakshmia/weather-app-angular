import { Component, inject, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { faWind,faDroplet,faCloud, faTemperatureLow, faTemperatureArrowDown, faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IconDisplayComponent } from '../icon-display/icon-display.component';
import { AiresponseComponent } from '../airesponse/airesponse/airesponse.component';

@Component({
  selector: 'app-displayweather',
  imports: [NgIf,CommonModule,IconDisplayComponent,AiresponseComponent],
  templateUrl: './displayweather.component.html',
  styleUrl: './displayweather.component.css'
})
export class DisplayweatherComponent implements OnInit {
private apiService=inject(ApiserviceService);
weather:any;
 month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
dateToday=new Date().getDate()+" "+this.month[new Date().getMonth()]+" "+new Date().getFullYear();
faWaterIcon=faDroplet;
faTemperatureArrowUp=faTemperatureArrowUp;
faTemperatureArrowDown=faTemperatureArrowDown;
faWind=faWind;
faCloud=faCloud;

ngOnInit() {
this.apiService.data$.subscribe((data)=>{this.weather=data},(error)=>console.log(error))
}

}
