import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [

  {path: 'weather_test', component:WeatherComponent},
  {path: 'news_test', component:NewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
