import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type:string = "text";
  @Input() id:string = ""
  @Input() name:string = ""
  @Input() validationResult:boolean = true;
  @Input() disabled:boolean = false;
  @Input() inputValue:string = "";
  @Input() labelDisabled:boolean = false;

  @Output() inputValueChange = new EventEmitter<string>();

  error:string = this.validationResult?"":"error";

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any) {
    this.inputValue = event.target.value;
    this.inputValueChange.emit(this.inputValue);
  }
}
