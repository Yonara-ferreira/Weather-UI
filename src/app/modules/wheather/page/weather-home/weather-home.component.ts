import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../service/weather-service.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {

  initialCityName = 'Fortaleza';


  constructor(private weatherService: WeatherServiceService) {}
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeaterDatas(cityName).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => console.log(error),
    });
  }
}
