import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {


  public vehicles: any = [];

  public term:string= "";

  public column:string ="";
  public order: string ="";
  public limit: string = "";
  public page: string = "";

  public data:string = "";
  constructor(private _vehiclesService: VehiclesService) {


    _vehiclesService.getVehicles().subscribe(

      (data: any) => {
        this.vehicles = data;
      },

      (err:any) => {
        alert("Internal Service Error")
      }
    )
  }
  

  getFilteredVehicles(){
   this._vehiclesService.getFilteredVehicles(this.term).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("Internal Service Error");
    }
   )
  }

  getSortedVehicles(){
    this._vehiclesService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }

    )
  }
  deleteVehicles(id:any){
    this._vehiclesService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("deleted Succesfully");
        location.reload();

      },
      (err:any)=>{
        alert("Internal Service Error");
      }

    )
  }

  getPageVehicles(){
    this._vehiclesService.getPageVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }

    )
  }

  

}
