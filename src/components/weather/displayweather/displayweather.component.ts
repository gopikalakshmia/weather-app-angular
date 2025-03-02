import { Component, inject, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-displayweather',
  imports: [NgIf],
  templateUrl: './displayweather.component.html',
  styleUrl: './displayweather.component.css'
})
export class DisplayweatherComponent implements OnInit {
private apiService=inject(ApiserviceService);
weather:any;
ngOnInit() {
this.apiService.onCitySelectedEvent.subscribe((data)=>{this.weather=data},(error)=>console.log(error))
}

}
