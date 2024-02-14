import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showPassword:boolean = false;
  hideChangePassword:boolean = true;
  hideDisableAccount:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHideChangePassword() {
    this.hideChangePassword = !this.hideChangePassword;
    if (!this.hideDisableAccount) {
      this.hideDisableAccount = true
    }
  }
  toggleHideDisableAccount() {
    this.hideDisableAccount = !this.hideDisableAccount;
    if (!this.hideChangePassword) {
      this.hideChangePassword = true
    }
  }
}
