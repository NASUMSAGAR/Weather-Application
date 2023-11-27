import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: any;
  
  constructor(private weatherService: WeatherService){

  }
  cityName: string = 'Wellington';
weatherData?: WeatherData;


  ngOnInit(): void {
    this.getweatherData(this.cityName);
    this.cityName = '';

    
  }
  onSubmit(){
this.getweatherData(this.cityName);
this.cityName = '';
  }
 
  private getweatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;

        console.log('WeatherData:', response)
      }
    })
  }
}
