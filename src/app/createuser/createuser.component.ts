import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  public id:number = 0;

  public userForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    phone : new FormControl("",[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    city: new FormControl("",[Validators.required,]),
    fee : new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl("",[Validators.required]),
      pin: new FormControl("",[Validators.required, Validators.min(100000), Validators.max(999999)]),
    }),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    
    cards: new FormArray([])
  });

  get cardsFormArray(){
     return this.userForm.get('cards') as FormArray;
  }
  addCards(){
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        exp: new FormControl(),
        cvv: new FormControl("",[Validators.required, Validators.min(100), Validators.max(99)])
      })
    )
  }

  constructor(private usersService:UsersService,private activatedRoute:ActivatedRoute){

activatedRoute.params.subscribe(
  (data:any)=>{
    this.id = data.id;
    usersService.getUserDe(this.id).subscribe(
      (data:any)=>{
        this.userForm.patchValue( data );
      }
    )
  }
)
  }
  submit(){
    if(this.id){
      this.usersService.updateduser(this.id,this.userForm.value).subscribe(
        (data:any)=>{
          alert("Updated SuccessFully");
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
    else{
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
  deleteCards(i:number){
  this.cardsFormArray.removeAt(i);
  }

}
