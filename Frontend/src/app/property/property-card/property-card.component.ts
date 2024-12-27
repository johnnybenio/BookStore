import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  Property: any = {
    "Id": 1,
    "Name": "Fade",
    "Type": "Hiar Cut",
    "Price": 20
  }
}
