import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { io } from "socket.io-client"

import { Login, Token } from './login/login';
import { Register } from './register/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public chat$: BehaviorSubject<string> = new BehaviorSubject("")
  constructor(private http: HttpClient) { }

  //? LOGIN BUSINESS
  public registerUser(register: Register): Observable<any> {
    return this.http.post("http://localhost:3000/api/auth/register", register)
  }

  public getUser(): Observable<any> {
    return this.http.get("http://localhost:3000/api/auth/login")
  }

  public loginUser(login: Login): Observable<any> {
    return this.http.post("http://localhost:3000/api/auth/login", login)
  }

  public verifyToken(token: Token): Observable<any> {
    return this.http.post("http://localhost:3000/api/auth/verify", token)
  }

  //?WEBSOCKET BUSINESS
  socket = io("http://localhost:3000")

  public sendChat(chat: any) {
    this.socket.emit("chat", chat)
  }

  public getNewChat = () => {
    this.socket.on("chat", (chat) => {
      this.chat$.next(chat)
    })

    return this.chat$.asObservable()
  }

}
