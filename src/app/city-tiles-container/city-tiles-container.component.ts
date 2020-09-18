import { Component, OnInit } from '@angular/core';
import { CityModel } from '../model/CityModel';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-city-tiles-container',
  templateUrl: './city-tiles-container.component.html',
  styleUrls: ['./city-tiles-container.component.scss']
})
export class CityTilesContainerComponent implements OnInit {

  cities: CityModel[];

  constructor(private httpService: HttpClientModule) {
    this.cities = httpService;
  }

  ngOnInit(): void {
  }



}
