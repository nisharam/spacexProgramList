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
planetData:any;
years = [];
apiValues = [ true, false];
launchFilterSelected:boolean;
yearFilterSelected:number;
landFilterSelected:number;
clicked= false;

  ngOnInit(){
    this.planetService.getAllPlanetData().subscribe(data => {
      this.planetData = data;
      this.years = [...new Set(this.planetData.map(year => year.launch_year))]


    });

  }

  getplanetData(year:any){
    this.clicked = !this.clicked;
    this.planetService.getYearWiseData(year).subscribe(data => {
      this.yearFilterSelected = year;
      this.planetData = data;
      console.log('gettting the year wise data', data);
    })
  }
  getLaunchedPlanetData(launchVal){
    this.launchFilterSelected= launchVal;
    this.planetService.getLaunchSuccessWiseData(launchVal).subscribe(data => {
      this.planetData = data;
      console.log('getting the data launch wise', data);
    })
  }
  getLandPlanetData(landVal){
    this.landFilterSelected = landVal;
    this.planetService.getLaunchAndLandWiseData(landVal,this.launchFilterSelected).subscribe(data => {
      this.planetData = data;
      console.log('getting the data from launch and land filter', data);
    })
  }
  getAllFilteredData(){
    this.planetService.getAllFilteredData(this.launchFilterSelected,this.landFilterSelected, this.yearFilterSelected).subscribe(data => {
      this.planetData = data;
      console.log('getting the values after selected all the filteres', data);
    })
  }
}
