import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface CONFIG {
  title?:string,
  buttonClass?:string,
  showLoader?:boolean,
}

@Component({
  selector: 'lib-button-libb',
  templateUrl: './button-libb.component.html',
})
export class ButtonLibbComponent {
  @Input() config?:CONFIG = {};
  @Input() spinLoader:boolean=false;
  @Input() buttonValid:boolean = true;
  @Output() buttonClicked= new EventEmitter();
  
  onClick(){
    this.buttonClicked.emit(true);
  }
    
}
