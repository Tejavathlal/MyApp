 import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public ages:number[] = [10,20,30,40,50,60];

  public states:string[] = ['Telangana', 'Andhra Pradesh', 'Karnataka', 'TamilNadu'];

  public users: any =[
    {name:'teja',age:3, marks:90,phone:7893024985},
    {name:'kumar',age:13, marks:22,phone:7893024985},
    {name:'surya',age:18, marks:80,phone:7893024985},
    {name:'mahesh',age:29, marks:30,phone:7893024985},
  ]

  public term:string = "";

  public time:number = 0;

  filter(){
    this.users = this.users.filter((value:any)=>value.name.includes(this.term))
  }
  agehighTolow(){
    this.users = this.users.sort((a:any,b:any)=>b.age-a.age);
  }
  increaseByone(){
    this.users = this.users.map((value:any)=>{
      value.age = value.age+1;
      return value;
    });
  }
  total(){
    let total = this.users.reduce((sum:any,a:any)=>sum+a.age,1);
    alert(total);
  }
  delete(i:any){
    this.users.splice(i,1);
  }
}
