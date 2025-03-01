import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search-dropdown',
  imports: [NgFor],
  templateUrl: './search-dropdown.component.html',
  styleUrl: './search-dropdown.component.css'
})
export class SearchDropdownComponent implements OnChanges {
@Input() city:string="";
private cityApi=inject(ApiserviceService);
 cityValue:any=[];

ngOnChanges(changes: SimpleChanges): void {
    console.log(this.city);
    if(this.city){
       this.cityApi.getCityDataFromApi(this.city).subscribe(
      (data)=>{this.cityValue=data},
      (error)=>{console.error("Error fetching data from API")}
    )
    }
}

}
