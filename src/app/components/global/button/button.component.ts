import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() textContent:string = "botão"
  @Input() functionOrRoute: Function | string = "";
  @Input() disabled:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
