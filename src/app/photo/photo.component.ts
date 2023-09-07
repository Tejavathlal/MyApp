import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  public photos:any=[];

  constructor(private _photoService:PhotoService){

    _photoService.getPhoto().subscribe(

      (data:any)=>{
        this.photos = data.data.memes;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }

}
