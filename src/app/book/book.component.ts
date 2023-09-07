import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
 
  public book:any=[];
  public  column: string = "";
  public istrue:boolean = false;
  constructor(private bookService:BookService){

    bookService.getBook().subscribe(

      (data:any)=>{
        this.book= data.data;
      },
      (err:any)=>{
        alert("Internal Service Reeor")
      }
    )
  }

  getSortedBooksbyTitle() {
    this.book.books.sort((a: any, b: any) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  }

  getSortedBooksbyDate() {
    this.book.books.sort((a: any, b: any) => {
      if (a.PublishDate < b.PublishDate) return -1;
      if (a.PublishDate > b.PublishDate) return 1;
      return 0;
    });
  }

  deleteBook(index: number) {
    if (index >= 0 && index < this.book.books.length) {
      this.book.books.splice(index, 1);
    }
  }
 add(){
  this.istrue=true;
 }
}
