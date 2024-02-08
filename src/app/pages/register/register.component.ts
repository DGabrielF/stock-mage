import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showPassword:boolean = false;
  showPasswordIcon:string = "eye-closed"; //verificar o nome em src/assets/images/icons
  passwordType:string = "password";

  constructor() { }

  ngOnInit(): void {
  }

  handleShowPassword() {
    this.showPassword = !this.showPassword;
    this.passwordType = this.showPassword?"text":"password";
    this.showPasswordIcon = this.showPassword?"eye-opened":"eye-closed"
  }
}
