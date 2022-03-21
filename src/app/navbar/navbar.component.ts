import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  buttonLogout: string = "Logout"

  constructor( private userService: UserService) { }

  isLogin: boolean = false

  token = localStorage.getItem("token")

  ngOnInit(): void {
    if(this.token == null) {
      this.isLogin = false
    } else {
      this.isLogin = true
    }
  }

  logoutUser() {
    localStorage.removeItem("token")
    window.location.href = "/login"
    alert("Logout success")
  }
}
