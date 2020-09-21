import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {

  constructor(private httpClient: HttpClient) { }

  getAllPlanetData(): Observable<any> {
    return this.httpClient.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }
  getYearWiseData(year): Observable<any> {
    return this.httpClient.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`);
  }
  getLaunchSuccessWiseData(val): Observable<any> {
    return this.httpClient.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${val}`);
  }
  getLaunchAndLandWiseData(launchVal, landVal): Observable<any>{
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchVal}&land_success=${landVal}`);
  }
  getAllFilteredData(launchVal, landVal, yearVal): Observable<any> {
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchVal}&land_success=${landVal}&launch_year=${yearVal}`);
  }

}
