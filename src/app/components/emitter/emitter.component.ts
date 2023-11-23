import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.scss'
})
export class EmitterComponent {

  myNumber : number = 0

  onChangeNumber(){

    // this.myNumber = this.myNumber + 1
    this.myNumber = Math.floor(Math.random() * 10000)
  }
}
