import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-info-card',
  templateUrl: './app-info-card.component.html',
  styleUrls: ['./app-info-card.component.css']
})
export class AppInfoCardComponent implements OnInit {
  @Input() title:string = "Versão";
  @Input() status:string = "old";
  @Input() hotspot:string = "Novidade implementada";
  @Input() slug:string = "/login";

  constructor() { }

  ngOnInit(): void {
  }

}
