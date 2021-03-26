import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IWeather } from '../shared/interfaces/weather';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
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

  searchForm: any

  constructor(private fb: FormBuilder, private weather_service : WeatherService) { 
    this.searchForm = this.fb.group({
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
          console.log('Long: ', longitude, '\nLat: ', latitude)
          this.weather_service.get_weather_coords(latitude, longitude).subscribe((res:any) => {
            this.searchForm.setValue({cityName: res.name})
            console.log(res.name)
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
    this.weather_service.get_weather(this.searchForm.value.cityName).subscribe((res:any) => {
      console.log(res)
      this.weather_report = {
        weather: res.weather[0].description,
        icon: this.weather_icon_base + res.weather[0].icon + '.png',
        temperature: this.to_fahrenheit(res.main.temp)
      }
    });
  }

}
