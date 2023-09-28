import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent {
  
  public id:number=0;
  public account:any=[];

  constructor(private activatedRoute: ActivatedRoute, accountdetailsService:AccountService){

    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        accountdetailsService.getAccountDet(this.id).subscribe(
            (data:any)=>{
              this.account = data;
            }
        )
      }
    
    )
  }
}
