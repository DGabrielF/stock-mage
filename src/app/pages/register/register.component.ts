import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showPassword:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showPasswordChange(newStatus: boolean) {
    this.showPassword = newStatus;
  }
}
