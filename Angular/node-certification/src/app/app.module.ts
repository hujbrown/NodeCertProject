import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestNewsComponent } from './shared/components/latest-news/latest-news.component';
import { ChatComponent } from './shared/components/chat/chat.component';

import { WeatherComponent } from './shared/components/weather/weather.component';
import { NewsComponent } from './news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestNewsComponent,
    ChatComponent,
    WeatherComponent,
    NewsComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [

    //ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
