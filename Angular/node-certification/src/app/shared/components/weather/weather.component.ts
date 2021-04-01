import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IWeather } from '../../interfaces/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: []
})
export class WeatherComponent implements OnInit {
  
  weatherReport : IWeather = 
  {
    weather: 'City Name',
    icon: '?',
    temperature: 0
  }
  //bad_city = 0

  weatherIconBase: string = 'http://openweathermap.org/img/wn/'

  weatherForm: any

  constructor(private fb: FormBuilder, private weatherService : WeatherService) { 
    this.weatherForm = this.fb.group({
      cityName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getLocation()
  }

  toFahrenheit(kelvin : number): number {

    return (( ((kelvin-273.15) * 9 )/5 ) + 32)
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = (position.coords.longitude);
          const latitude = (position.coords.latitude);
          this.weatherService.getWeatherCoords(latitude, longitude).subscribe((res:any) => {
            this.weatherForm.setValue({cityName: res.name})
            this.weatherReport = {
              weather: res.weather[0].description,
              icon: this.weatherIconBase + res.weather[0].icon + '.png',
              temperature: this.toFahrenheit(res.main.temp)
            }

          });
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  handleFormSubmit(){
    console.log('Submitted')
    this.weatherService.getWeather(this.weatherForm.value.cityName).subscribe((res:any) => {
      this.weatherReport = {
        weather: res.weather[0].description,
        icon: this.weatherIconBase + res.weather[0].icon + '.png',
        temperature: this.toFahrenheit(res.main.temp)
      }
    });
  }

}
