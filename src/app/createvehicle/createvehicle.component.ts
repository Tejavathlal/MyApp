import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { VehiclesService } from '../vehicles.service';


@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  

  public vehicleForm: FormGroup = new FormGroup({
       Vehicle: new FormControl(),
       manufacturer: new FormControl(),
       model: new FormControl(),
       type: new FormControl(),
       fuel: new FormControl(),
       color: new FormControl(),
  });

 constructor(private vehicleService:VehiclesService){}
  submit(){
    console.log(this.vehicleForm);
   this.vehicleService.createVehicle(this.vehicleForm.value).subscribe(

    (data:any)=>{
      alert("Vehicles Created Successfully");
    },
    (err:any)=>{
      alert("Vehicle Creation Failed");
    }
   )
  }
} 
