import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Token } from '../login/login';
import { Chats } from './chatroom';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  newChat!: string;
  chatList: string[] = []

  constructor(public userService: UserService) { }

  token: Token = {
    token: localStorage.getItem("token")
  }


  chats: Chats[] = [
    {
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },
    {
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },{
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },{
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },{
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },{
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },{
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },{
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },{
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },{
      name: "Krisna Satriadi",
      text: "Hello"
    },
    {
      name: "Andrika Rissita",
      text: "Hello there"
    },
    {
      name: "Krisna Satriadi",
      text: "Hows your day"
    },
    {
      name: "Andrika Rissita",
      text: "Quite good actually"
    },
  ]

  ngOnInit(): void {
    this.userService.verifyToken(this.token).subscribe((Response: any) => {
      console.log(Response)
      if ( Response.success == false) {
        window.location.href = "/"
      }
    })

    this.userService.getNewChat().subscribe((chat: string) => {
      this.chatList.push(chat)
    })
  }
  
  
  sendChat() {
    this.userService.sendChat(this.newChat)
    this.newChat = ""
  }
}
