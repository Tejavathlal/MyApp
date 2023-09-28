import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  public id:number=0;
  public user:any=[];
  constructor(private activatedRoute: ActivatedRoute, private userdetailsService: UsersService){

    activatedRoute.params.subscribe(
      (data:any)=>{
       this.id = data.id;

       userdetailsService.getUserDe(this.id).subscribe(
        (data:any)=>{
          this.user= data;
        }
       )
      }
    )
  }
}
