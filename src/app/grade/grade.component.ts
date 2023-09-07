import { Component } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {

 public mark:number = 0;

 public result: number = 0;

 grade(){
  this.result = this.mark;

 }
}
