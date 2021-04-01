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
  
  weather_report : IWeather = 
  {
    weather: 'City Name',
    icon: '?',
    temperature: 0
  }
  bad_city = 0

  weather_icon_base: string = 'http://openweathermap.org/img/wn/'

  weatherForm: any

  constructor(private fb: FormBuilder, private weather_service : WeatherService) { 
    this.weatherForm = this.fb.group({
      cityName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getLocation()
  }

  to_fahrenheit(kelvin : number): number {

    return (( ((kelvin-273.15) * 9 )/5 ) + 32)
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = (position.coords.longitude);
          const latitude = (position.coords.latitude);
          this.weather_service.get_weather_coords(latitude, longitude).subscribe((res:any) => {
            this.weatherForm.setValue({cityName: res.name})
            this.weather_report = {
              weather: res.weather[0].description,
              icon: this.weather_icon_base + res.weather[0].icon + '.png',
              temperature: this.to_fahrenheit(res.main.temp)
            }

          });
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  handleFormSubmit(){
    console.log('Submitted')
    this.weather_service.get_weather(this.weatherForm.value.cityName).subscribe((res:any) => {
      this.weather_report = {
        weather: res.weather[0].description,
        icon: this.weather_icon_base + res.weather[0].icon + '.png',
        temperature: this.to_fahrenheit(res.main.temp)
      }
    });
  }

}
