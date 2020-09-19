import { Component, OnInit } from '@angular/core';
import { PlanetDataService} from './services/planet-data.service';
import { planetProfile} from './model/PlanetProfile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private planetService : PlanetDataService) { }
  title = 'spacexProgram';
  // public planetData:planetProfile[] = [];
planetData:any;
years = [];

  ngOnInit(){
    this.planetService.getAllPlanetData().subscribe(data => {
      this.planetData = data;
      this.planetData.map(planet => {
        console.log('planent data is', planet)
        this.years = [...new Set(this.planetData.map(year => year.launch_year))]
      })

    });

  }
}
