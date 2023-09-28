import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms'
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  
  public id:number = 0;

  public vehicleForm: FormGroup = new FormGroup({
       Vehicle: new FormControl(),
       manufacturer: new FormControl(),
       model: new FormControl(),
       type: new FormControl(),
       fuel: new FormControl(),
       color: new FormControl(),
       address: new FormGroup({
        online:new FormControl(),
        select: new FormControl(),
        transaction: new FormControl()
       }),
       payment: new FormControl(),
       tax: new FormControl(),
       fitnes: new FormControl(),

       cards: new FormArray([])
  });
     

  get cardsFormArray(){
    return this.vehicleForm.get('cards') as FormArray;
  }
  addVehicle(){
    this.cardsFormArray.push(
    new FormGroup({
      booking: new FormControl(),
      license: new FormControl(),
      driving: new FormControl(),
    })
    )
  }
  
  
 constructor(private vehicleService:VehiclesService, private activatedRoute: ActivatedRoute){

  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;

    this.vehicleService.getvehicle(this.id).subscribe(
        (data:any)=>{
          this.vehicleForm.patchValue(data);
        }

      )
    }
  )
 }
  submit(){
    if(this.id){
      this.vehicleService.updatevehicle(this.id, this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Updated SuccessFully");
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
    else{
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
  deleteVehicle(i:number){
    this.cardsFormArray.removeAt(i);
  }
} 
