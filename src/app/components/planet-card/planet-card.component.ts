import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit{

  constructor() { }
  @Input() planetCardData;

  ngOnInit(): void {
  }
  // ngOnChanges(data){
  //   }

}
