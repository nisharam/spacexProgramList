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
selectedButton;
selectedButton1;
selectedButton2;
ngOnInit(): void{
    this.planetService.getAllPlanetData().subscribe(data => {
      this.planetData = data;
      this.years = [...new Set(this.planetData.map(year => year.launch_year))];

    });

  }

  getplanetData(year: any): void{
    this.selectedButton = year;
    this.planetService.getYearWiseData(year).subscribe(data => {
      this.yearFilterSelected = year;
      this.planetData = data;
   });
  }
  getLaunchedPlanetData(launchVal): void{
    this.selectedButton1 = launchVal;
    this.launchFilterSelected = launchVal;
    this.planetService.getLaunchSuccessWiseData(launchVal).subscribe(data => {
      this.planetData = data;
    });
  }
  getLandPlanetData(landVal): void {
    this.selectedButton2 = landVal;
    this.landFilterSelected = landVal;
    this.planetService.getLaunchAndLandWiseData(landVal, this.launchFilterSelected).subscribe(data => {
      this.planetData = data;
    });
  }
  getAllFilteredData(year): void {
    this.planetService.getAllFilteredData(this.launchFilterSelected, this.landFilterSelected, year).subscribe(data => {
      this.planetData = data;
    });
  }
}
