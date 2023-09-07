import { Component } from '@angular/core';

@Component({
  selector: 'app-ibm',
  templateUrl: './ibm.component.html',
  styleUrls: ['./ibm.component.css']
})
export class IBMComponent {

  public height:number = 0;
  public weight:number = 0;

  public result: number = 0;

  cal(){
    this.result = this.weight/((this.height/100)*(this.height/100));
  }


}
