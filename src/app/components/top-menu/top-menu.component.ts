import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  @Input() isLogedIn:boolean = false;

  hideListMenu:boolean = false;
  loggedInlistMenuItems:{id:string, text:string}[] = [
    {id:"news", text:"Novidades"},
    {id:"lists", text:"Listas"},
    {id:"stats", text:"Estatísticas"},
    {id:"manual", text:"Manual"}
  ]
  notloggedInlistMenuItems:{id:string, text:string}[] = [
    {id:"news", text:"Novidades"},
    {id:"stats", text:"Estatísticas"},
    {id:"manual", text:"Manual"}
  ]

  hideProfileMenu:boolean = true;
  loggedInProfileMenuItems:{id:string, text:string}[] = [
    {id:"profile", text:"Perfil"},
    {id:"security", text:"Segurança"},
    {id:"friends", text:"Amigos"},
    {id:"logout", text:"Sair"}
  ]
  notLoggedInProfileMenuItems:{id:string, text:string}[] = [
    {id:"login", text:"Entrar"},
    {id:"register", text:"Registrar"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleListMenu() {
    this.hideListMenu = !this.hideListMenu;
    if (!this.hideProfileMenu) {
      this.hideProfileMenu = !this.hideProfileMenu;
    }
  }
  toggleProfileMenu() {
    this.hideProfileMenu = !this.hideProfileMenu;
    if (!this.hideListMenu) {
      this.hideListMenu = !this.hideListMenu;
    }
  }
  closeMenus() {
    this.hideListMenu = true;
    this.hideProfileMenu = true;
  }
}
