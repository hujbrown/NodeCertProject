import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'contactus', component:ContactUsComponent},
  {path: 'aboutus', component:AboutUsComponent},
  {path: 'weather_test', component:WeatherComponent},
  {path: 'sports', component:NewsComponent},
  {path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
