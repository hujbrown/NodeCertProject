import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from './components/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
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


//     user?:String;
//     room?:String;
//     messageText?:String;
//     messageArray:Array<{user:String,message:String}> = [];

//   constructor(private _chatService:ChatService){
//     this._chatService.newUserJoined()
//     .subscribe(data=> this.messageArray.push(data));


//     this._chatService.userLeftRoom()
//     .subscribe(data=>this.messageArray.push(data));

//     this._chatService.newMessageReceived()
//     .subscribe(data=>this.messageArray.push(data));
// }

// join(){
//     this._chatService.joinRoom({user:this.user, room:this.room});
// }

// leave(){
//     this._chatService.leaveRoom({user:this.user, room:this.room});
// }

// sendMessage()
// {
//     this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
// }

  // openForm() {
  //   document.getElementById("myForm").style.display = "block";
  // }

  // closeForm() {
  //   document.getElementById("myForm").style.display = "none";
  // }
}
