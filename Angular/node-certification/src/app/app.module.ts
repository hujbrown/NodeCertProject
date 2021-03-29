import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/components/chat.service';
import { WebsocketService } from './chat/websocket.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


//const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LatestNewsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //SocketIoModule.forRoot(config)
  ],
  providers: [
    //ChatService,
    //WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
