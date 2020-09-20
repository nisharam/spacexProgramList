import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit, OnChanges{

  constructor() { }
  @Input() planetCardData;

  ngOnInit(): void {
    console.log('the data in planet cards is', this.planetCardData);
  }
  ngOnChanges(data){
    if(data.planetCardData.currentValue!=undefined){
      console.log('Yes, I am here');
    }

  }

}
