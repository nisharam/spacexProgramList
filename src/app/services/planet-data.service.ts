import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { planetProfile} from '../model/PlanetProfile';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {

  constructor(private httpClient: HttpClient) { }

  getAllPlanetData(){
    return this.httpClient.get('https://api.spaceXdata.com/v3/launches?limit=100')
  }
  getYearWiseData(year) {
    return this.httpClient.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`)
  
  }
  getLaunchSuccessWiseData(val) {
    return this.httpClient.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${val}`)
  }
  getLaunchAndLandWiseData(launchVal, landVal){
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchVal}&land_success=${landVal}`)
  }
  getAllFilteredData(launchVal, landVal,yearVal) {
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchVal}&land_success=${landVal}&launch_year=${yearVal}`)
  }

}
