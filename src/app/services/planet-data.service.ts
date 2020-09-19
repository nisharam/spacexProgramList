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
}
