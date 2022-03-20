import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) { }
  register: Register = {
    username: "",
    email: "",
    name: "",
    password: "",
    confirm_password: ""
  }

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.min(8)]),
    email: new FormControl('', [Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
  })


  ngOnInit(): void {
  }

  userRegister() {
    this.register = this.registerForm.value
    this.userService.registerUser(this.register).subscribe((res: any) => {
      window.location.href = "/"
    }, (err: any) => {
      alert(err.error.message)
    })      
  }

}
