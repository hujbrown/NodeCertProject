import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/components/chat.service';
import { WebsocketService } from './chat/websocket.service';
//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';
//import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';

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
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //SocketIoModule.forRoot(config)
    ReactiveFormsModule
  ],
  providers: [
    //ChatService,
    //WebsocketService
    //ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
