import { Component } from '@angular/core';
import { RoaldService } from '../roald.service';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-roald',
  templateUrl: './roald.component.html',
  styleUrls: ['./roald.component.css']
})
export class RoaldComponent {

  public book:any = [];
  public istrue:boolean= false;

  constructor(private roaldService:RoaldService) {

    roaldService.getRoald().subscribe(
      (data:any)=>{
        this.book = data.data;
      },
      (err:any)=>{
        alert("Internal Service Error")
      }
    )
  }

  getSortedBookbyTitle(){
    this.book.books.sort((a:any, b:any)=>{
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    });
  }
  getSortBookbyDate(){
    this.book.books.sort((a:any, b:any)=>{
      if(a.PublishDate < b.PublishDate) return -1;
      if(a. PublishDate > b.PublishDate) return 1;
      return 0;
    })
  }
  deleteBook(index:number){
    if(index >= 0 && index < this.book.books.length){
      this.book.books.splice(index,1);
    }
  }
  add(){
    this.istrue=true;
  }
}
