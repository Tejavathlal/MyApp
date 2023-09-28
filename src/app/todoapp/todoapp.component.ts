import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {
 public terms:string[]=[];
 public val: string = "";


 add(){
  this.terms.push(this.val)
    console.log(this.terms);
    alert("You must write something!");
  }
  wrong(i:number){
    this.terms.splice(i);
  }
 }



