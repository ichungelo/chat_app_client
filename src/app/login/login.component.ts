import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public userService: UserService) { }
  
  login: Login = {
    username: "",
    password: ""
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }
  
  userLogin() {
    this.login = this.loginForm.value
    this.userService.loginUser(this.login).subscribe((Response: any) => {
      localStorage.setItem("token", Response.token)
      window.location.href = "/chat"
    })
  } 
}
