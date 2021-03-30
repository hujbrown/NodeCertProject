import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  closeResult = '';

  private SOCKET_ENDPOINT = 'localhost:3000';
  
  private socket: any;
  name: string = '';
  message: string = '';
  messageList: Array<string> = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.setupSocketConnection();

  }


  setupSocketConnection() {
    this.socket = io(this.SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (msg: string) => {
    if (msg) {
     this.messageList.push(msg);
     }
   });
 }

  SendMessage() {
    this.socket.emit('message', `${this.name}: ${this.message}`);
    this.messageList.push(`${this.name}: ${this.message}`);
 }

  
  openLg(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
