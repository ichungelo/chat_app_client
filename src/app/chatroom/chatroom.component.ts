import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Token } from '../login/login';
import { Chats, Payload } from './chatroom';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  constructor(public userService: UserService) { }
  payload: Payload = {
    name: "",
    username: ""
  }

  newChat: Chats = {
    name: "",
    text: ""
  }
  
  chatList: Chats[] = []

  token: Token = {
    token: localStorage.getItem("token")
  }

  ngOnInit(): void {
    this.userService.verifyToken(this.token).subscribe((Response: any) => {
      if (Response.success == false) {
        window.location.href = "/"
      } else {
        console.log(Response)
        this.payload = {
          name: Response.payload.name,
          username: Response.payload.username
        }
      }
    })

    console.log(`${this.payload.name}`)
    this.userService.getNewChat().subscribe((chat: any) => {
      this.chatList.push(chat)
    })
  }

  sendChat() {
    this.newChat = {
      name: this.payload.name,
      text: this.newChat.text
    }
    this.userService.sendChat(this.newChat)
    window.scrollTo(0, document.body.scrollHeight)
  }
}
