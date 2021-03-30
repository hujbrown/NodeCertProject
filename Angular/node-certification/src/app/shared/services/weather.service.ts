import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // tegoli1992@asfalio.com
  api_key: string = '&appid=' + '94e22b0467342f2bcc8ee1a8b2633699'
  // Fill in city
  base_url: string = 'http://api.openweathermap.org/data/2.5/weather'
  // Weather Icon url
  // http://openweathermap.org/img/wn/10d@2x.png
  weather_icon_base: string = 'http://openweathermap.org/img/wn/'

  constructor(private http: HttpClient) { }




  to_fahrenheit(kelvin : number): number {

    return (( ((kelvin-273.15) * 9 )/5 ) + 32)
  }

  get_weather(city_name : string): Observable<any> {
    return this.http.get(this.base_url + '?q=' + city_name + this.api_key)
    .pipe( map( (res:any ) => {
      return res;
    }));
  }

  get_weather_coords(lat : number, lon : number): Observable<any> {
    return this.http.get(this.base_url + '?lat=' + lat + '&lon=' + lon + this.api_key)
    .pipe( map( (res:any ) => {
      return res;
    }));
  }

}
