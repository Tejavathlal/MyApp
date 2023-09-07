import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  
  public mails:any = [];
  constructor(private _mailService:MailService){

    _mailService.getMail().subscribe(

      (data:any)=>{
       return this.mails = data;
      },
      (err:any)=>{
       alert("Internal Service Error");
      }
    )
  }

}
