import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  public userForm: FormGroup = new FormGroup({
      
    name: new FormControl(),
    phone : new FormControl(),
    city: new FormControl(),
    fee : new FormControl(),


  });

  constructor(private usersService:UsersService){}
  submit(){
    console.log(this.userForm.value);

    this.usersService.createUser(this.userForm.value).subscribe(
       (data:any)=>{
        alert("User Created Successfully");
       },
       (err:any)=>{
       alert("Internal Service Error")
       }
    )

  }
}
