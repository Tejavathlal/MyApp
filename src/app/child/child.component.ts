import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {


@Input() public ac:number=0;

 public bc: number = 0;

 @Input() public cstar: number=0

 @Input() public c1: number=0;
 @Input() public c2: number=0;

   public table: number=0;

 @Output() public bEvent: EventEmitter<any> = new EventEmitter();

 send(){
  this.bEvent.emit(this.bc);
 }

 add(){
  this.table = this.c1+this.c2;
  this.bEvent.emit(this.table);
 }

 sub(){
  this.table = this.c1-this.c2;
  this.bEvent.emit(this.table);
 }
 mul(){
  this.table= this.c1*this.c2;
  this.bEvent.emit(this.table);
 }
}
