import { Component, OnInit } from '@angular/core';
import { PlanetDataService} from './services/planet-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private planetService: PlanetDataService) { }
title: 'spacexProgram';
planetData: any;
years = [];
apiValues = [ true, false];
launchFilterSelected: boolean;
yearFilterSelected: number;
landFilterSelected: number;

ngOnInit(): void{
    this.planetService.getAllPlanetData().subscribe(data => {
      this.planetData = data;
      this.years = [...new Set(this.planetData.map(year => year.launch_year))];

    });

  }

  getplanetData(year: any): void{
    this.planetService.getYearWiseData(year).subscribe(data => {
      this.yearFilterSelected = year;
      this.planetData = data;
   });
  }
  getLaunchedPlanetData(launchVal): void{
    this.launchFilterSelected = launchVal;
    this.planetService.getLaunchSuccessWiseData(launchVal).subscribe(data => {
      this.planetData = data;
    });
  }
  getLandPlanetData(landVal): void {
    this.landFilterSelected = landVal;
    this.planetService.getLaunchAndLandWiseData(landVal, this.launchFilterSelected).subscribe(data => {
      this.planetData = data;
    });
  }
  getAllFilteredData(): void {
    this.planetService.getAllFilteredData(this.launchFilterSelected, this.landFilterSelected, this.yearFilterSelected).subscribe(data => {
      this.planetData = data;
    });
  }
}
