import { Component } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent {

  public productname: any = [
    {name:'pen',price:10,rating:3,freedelivery:true},
    {name:'phone',price:1300,rating:2,freedelivery:false},
    {name:'Shirt',price:400,rating:4,freedelivery:true},
    {name:'cap',price:200,rating:5,freedelivery:false},
    {name:'mobilecase',price:300,rating:2,freedelivery:true},
    {name:'remote',price:400,rating:2.5,freedelivery:false},
  ]

  public term:string = "";

  

  filter(){
    this.productname = this.productname.filter((value:any)=>value.name.includes(this.term))
  }

  pricelowtohigh(){
    this.productname = this.productname.sort((a:any,b:any)=>a.price-b.price);
  }
pricehightolow(){
  this.productname = this.productname.sort((a:any,b:any)=>b.price-a.price);
}
ratinglowtohigh(){
  this.productname = this.productname.sort((a:any,b:any)=>a.rating-b.rating);
}
ratinghightolow(){
  this.productname = this.productname.sort((a:any,b:any)=>b.rating-a.rating);
}

total(){
  let total = this.productname.reduce((sum:any,a:any)=>sum+a.price,0);
  alert(total);
}
 onlyfree(){
  this.productname = this.productname.filter((value:any)=>value.freedelivery==true);
 }
 totalcart(){
  let total =this.productname.length;
   alert(total);
 }
 pricecharges(){
  this.productname = this.productname.map((value:any)=>{
   value.price = value.price+30;
   return value;
  });
 }
 applydiscount(){
  this.productname = this.productname.map((value:any)=>{
    value.price = value.price/2+50;
    return value;
  });
 }
}
