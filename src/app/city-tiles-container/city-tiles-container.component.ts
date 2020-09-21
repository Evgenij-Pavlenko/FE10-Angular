import { Component, OnInit } from '@angular/core';
import { CityModel } from '../model/CityModel';
import {CityService} from '../services/city.service';

@Component({
  selector: 'app-city-tiles-container',
  templateUrl: './city-tiles-container.component.html',
  styleUrls: ['./city-tiles-container.component.scss']
})
export class CityTilesContainerComponent implements OnInit {

  cities: CityModel[];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe(
      cities => this.cities = cities
    );
  }



}
