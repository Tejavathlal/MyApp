import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  public id:number = 0;

  public bankForm: FormGroup = new FormGroup({

    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    bank: new FormGroup({
     state: new FormControl(),
     country: new FormControl(),
     mandal: new FormControl()
    }),
    banks : new FormArray([]),

    atm: new FormControl(),
    balance: new FormControl(),
    number: new FormControl()
  });

  get banksArrayFrom(){
   return this.bankForm.get('banks') as FormArray;
  }
  addBanks(){
    this.banksArrayFrom.push(
      new FormGroup({
        account:new FormControl(),
        details: new FormControl(),
        sortCode: new FormControl()
      })

    )
  }

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        accountService.getAccountDet(this.id).subscribe(
          (data:any)=>{
            this.bankForm.patchValue(data);
          }
        )
      }
    )
   }
  submit() {
    if(this.id){
      this.accountService.updateAccount(this.id,this.bankForm.value).subscribe(
        (data:any)=>{
          alert("Updated SuccessFully");
        },
        (err:any)=>{
          alert("Internal Service Error");
        }
      )
    }
    else{
    console.log(this.bankForm.value);

    this.accountService.createAccount(this.bankForm.value).subscribe(

      (data: any) => {
        alert("Account Created Successfully");
      },
      (err: any) => {
        alert("Internal Service Error");
      }
    )
    }
}
  bankDel(i:number){
    this.banksArrayFrom.removeAt(i);
  }
}
