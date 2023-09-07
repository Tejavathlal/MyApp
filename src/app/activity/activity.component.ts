import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  public activitys:any=[];

  constructor(private _activityService:ActivityService){

    _activityService.getActivity().subscribe(

      (data:any)=>{
       this.activitys= [data];
       
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  reload(){
    this._activityService.getActivity().subscribe(

      (data:any)=>{
       this.activitys= [data];
       
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }

}
