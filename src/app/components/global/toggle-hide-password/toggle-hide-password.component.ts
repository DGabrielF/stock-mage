import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-hide-password',
  templateUrl: './toggle-hide-password.component.html',
  styleUrls: ['./toggle-hide-password.component.css']
})
export class ToggleHidePasswordComponent implements OnInit {
  @Input() showPassword:boolean = false;

  @Output() showPasswordChange = new EventEmitter<boolean>();

  showPasswordIcon:string = "eye-closed"; //verificar o nome em src/assets/images/icons
  passwordType:string = "password";

  constructor() { }

  ngOnInit(): void {
  }

  handleShowPassword() {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon = this.showPassword?"eye-opened":"eye-closed"
    this.showPasswordChange.emit(this.showPassword)
  }
}
