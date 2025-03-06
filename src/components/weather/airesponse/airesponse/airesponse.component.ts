import { Component, inject, Input ,OnInit} from '@angular/core';
import { ApiserviceService } from '../../../../services/apiservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-airesponse',
  imports: [],
  templateUrl: './airesponse.component.html',
  styleUrl: './airesponse.component.css'
})
export class AiresponseComponent implements OnInit{
@Input() weather:any;
private apiService=inject(ApiserviceService);
  AIresponse:any;
  ngOnInit(): void {
    const weatherData = {
      Temperature:Math.round( this.weather.main.temp),
      Condition:this.weather.weather[0].description,
      Humidity:  Math.round( this.weather.main.humidity),
      WindSpeed:  Math.round( this.weather.wind.speed),
    };
this.apiService.getAiResponse(weatherData).subscribe(
  (data)=>{this.AIresponse=(data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available."),console.log(data)},
  (error)=>{console.log("error occured while getting AI response")}
)

  }

}
