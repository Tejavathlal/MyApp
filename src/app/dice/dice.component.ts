import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {

  public num1:number = 0;

  dice(){
    this.num1 = Math.floor(Math.random()*6) +1;
    return this.num1;
  }
}
