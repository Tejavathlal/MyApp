import { Component, TemplateRef } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  public accounts: any = [];

  public term: any = [];
  public column: string = "";
  public order: string = "";

  public limit:string = "";
  public page:string = "";

  constructor(private _accountService: AccountService, private router:Router) {

    _accountService.getAccount().subscribe(

      (data: any) => {
        this.accounts = data;
      },

      (err: any) => {
        alert("Internal Service Error");
      }
    )
  }
  getFilterAccount() {
    this._accountService.getFilterAccount(this.term).subscribe(

      (data: any) => {
        this.accounts = data;
      },

      (err: any) => {
        alert("Internal Service Error");
      }
    )

  }
  getSortedAccount() {
    this._accountService.getSortedAccount(this.column, this.order).subscribe(

      (data: any) => {
        this.accounts = data;
      },

      (err: any) => {
        alert("Internal Service Error");
      }
    )
  }
  deleteAcount(id: any) {
    this._accountService.deleteAcount(id).subscribe(

      (data: any) => {
        alert("Delete Succesfully");
        location.reload();
      },

      (err: any) => {
        alert("Internal Service Error");
      }
    )
  }
  getPageAccount() {
    this._accountService.getPageAccount(this.limit,this.page).subscribe(

      (data: any) => {
        this.accounts = data;
      },

      (err: any) => {
        alert("Internal Service Error");
      }
    )
}
view(id:number){
 this.router.navigateByUrl("dashboard/accountdetails/" +id);
}

edit(id:number){
  this.router.navigateByUrl("/dashboard/editaccount/" +id);
}
}
