import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private apiKey = '2ad90ed5fc16cde0674b8e2be9186c80';

  constructor(private Http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any> {
    return this.Http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
