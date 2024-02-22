import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from '../../../../models/interfaces/weatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html'

})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$:Subject<void> = new Subject();
  InitialCityName = "Ilhéus";
  weatherDatas !: WeatherDatas;

  constructor(private weatherService: WeatherService){}
  ngOnInit(): void {
    this.getWeatherDatas(this.InitialCityName);
  }

  getWeatherDatas(cityNome: string): void{
    this.weatherService
    .getWeatherDatas(cityNome)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next:(response)=>{
        console.log(response);
        response && (this.weatherDatas = response)
        console.log(this.weatherDatas.main.temp_max);


      },
      error:(error)=>console.log(error)
    })
  }

  //evita vazamento de memoria
  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }
}
