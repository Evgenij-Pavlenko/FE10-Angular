import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CityModel} from '../model/CityModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities(): Observable<CityModel>{

  }
}
