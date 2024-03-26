import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../service/weather-service.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {

  initialCityName = 'Fortaleza';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherServiceService) {}
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response: any) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);
      },
      error: (error: any) => console.log(error),
    });
  }
}
