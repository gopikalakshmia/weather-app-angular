import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faWind,faDroplet,faWater,faCloud, faTemperatureLow, faTemperatureArrowDown, faTemperatureArrowUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-display',
  imports: [FontAwesomeModule,NgIf],
  templateUrl: './icon-display.component.html',
  styleUrl: './icon-display.component.css'
})
export class IconDisplayComponent {
@Input() icon:IconDefinition | undefined;
@Input() identifier:string="";
@Input() value="";

}
