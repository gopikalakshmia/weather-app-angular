import { Component, inject } from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms';
import { ApiserviceService } from '../../../services/apiservice.service';
import { error } from 'console';
import { SearchDropdownComponent } from "../search-dropdown/search-dropdown.component";

@Component({
  selector: 'app-search',
  imports: [FormsModule, SearchDropdownComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
city:string='';
private cityApi=inject(ApiserviceService);
// searchCity(event:Event):void {
// const city=(event.target as HTMLInputElement).value;
// console.log(city);
// this.cityApi.getCityDataFromApi(city).subscribe(
//   (data)=>{console.log(data)},
//   (error)=>{console.error("Error fetching data from API")}
// )
// }
}
