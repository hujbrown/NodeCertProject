import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // tegoli1992@asfalio.com
  apiKey: string = '&appid=' + '94e22b0467342f2bcc8ee1a8b2633699'
  // Fill in city
  baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather'
  // Weather Icon url
  // http://openweathermap.org/img/wn/10d@2x.png
  weatherIconBase: string = 'http://openweathermap.org/img/wn/'

  constructor(private http: HttpClient) { }




  toFahrenheit(kelvin : number): number {

    return (( ((kelvin-273.15) * 9 )/5 ) + 32)
  }

  getWeather(city_name : string): Observable<any> {
    return this.http.get(this.baseUrl + '?q=' + city_name + this.apiKey)
    .pipe( map( (res:any ) => {
      return res;
    }));
  }

  getWeatherCoords(lat : number, lon : number): Observable<any> {
    return this.http.get(this.baseUrl + '?lat=' + lat + '&lon=' + lon + this.apiKey)
    .pipe( map( (res:any ) => {
      return res;
    }));
  }

}
