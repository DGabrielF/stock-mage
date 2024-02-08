import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showPasswordChange(newStatus: boolean) {
    this.showPassword = newStatus;
  }
}
