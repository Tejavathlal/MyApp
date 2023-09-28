import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  public users: any = [];
  public search :any="";
  constructor(private messageService: MessageService) {

    messageService.getMessage().subscribe(
      (data: any) => {
        this.users = data;
      
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getfiltermessage(){
   this.users.results = this.users.results.filter((value:any)=>value.name.first.includes(this.search)|| value.name.last.includes(this.search)
   );
   
  }
}
