import { Injectable } from '@angular/core';
// import { io } from "socket.io-client";
// import * as io from "socket.io-client";
//import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }


  // sendMessage(msg: string) {
  //   this.socket.emit('message', msg);
  // }


  //   sendMessage(data: any)
  //   {
  //       this.socket.emit('message',data);
  //   }

  // getMessage() {
  //   return this.socket.fromEvent('message').pipe(map((data:any) => data.data));
  // }

  //   joinRoom(data :any)
  //   {
  //       this.socket.emit('join',data);
  //   }

  //   newUserJoined()
  //   {
  //       let observable = new Observable<{user:String, message:String}>(observer=>{
  //           this.socket.on('new user joined', (data :any)=>{
  //               observer.next(data);
  //           });
  //           return () => {this.socket.disconnect();}
  //       });

  //       return observable;
  //   }

  //   leaveRoom(data :any){
  //       this.socket.emit('leave',data);
  //   }

    // userLeftRoom(){
    //     let observable = new Observable<{user:String, message:String}>(observer=>{
    //         this.socket.on('left room', (data :any)=>{
    //             observer.next(data);
    //         });
    //         return () => {this.socket.disconnect();}
    //     });

    //     return observable;
    // }

    // sendMessage(data: any)
    // {
    //     this.socket.emit('message',data);
    // }

    // newMessageReceived(){
    //     let observable = new Observable<{user:String, message:String}>(observer=>{
    //         this.socket.on('new message', (data :any)=>{
    //             observer.next(data);
    //         });
    //         return () => {this.socket.disconnect();}
    //     });

    //     return observable;
    // }
}
