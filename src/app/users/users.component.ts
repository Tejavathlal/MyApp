 import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users: any = [];
  public term: string = "";

  public column:string = "";
  public order: string = "";

  public limit:string = "";
  public page : string = "";



  constructor(private _usersService:UsersService, private router:Router){


    _usersService.getUsers().subscribe(

      (data:any)=>{
        this.users = data;
      },

     (err:any) =>{
      alert("Internal service Error");
     }
    )
  }
  getFilterUsers(){
    this._usersService.getFilterUsers(this.term).subscribe(

      (data:any)=>{
        this.users = data;
      },

     (err:any) =>{
      alert("Internal service Error");
     }
    )
  }
  getSortedUsers(){
    this._usersService.getSortedUsers(this.column,this.order).subscribe(

      (data:any)=>{
        this.users = data;
      },

     (err:any) =>{
      alert("Internal service Error");
     }
    )
  }
  deleteUsers(id:any){
    this._usersService.deleteUsers(id).subscribe(

      (data:any)=>{
    
        alert("Delete Successfully");
        location.reload();
      },

     (err:any) =>{
      alert("Internal service Error");
     }
    )
  }
  getPageUsers(){
    this._usersService.getPageUsers(this.limit,this.page).subscribe(

      (data:any)=>{
        this.users = data;
      },

     (err:any) =>{
      alert("Internal service Error");
     }
    )
  }
  view(id:number){
     this.router.navigateByUrl("/dashboard/userdetails/" +id);
  }
  edit(id:number){
    this.router.navigateByUrl("/dashboard/edituser/" +id)
  }
}
