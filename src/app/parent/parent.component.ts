import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
public ap:number=0;

public bp:number=0;

public pstar:number = 0;

public number1: number=0;
public number2: number=0;
public num: number=0;

// catch(value:any){
// this.bp = value;
// }

catch(value:any){
 this.num = value;
}
}
