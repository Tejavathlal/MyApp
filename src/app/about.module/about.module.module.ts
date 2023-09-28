import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModuleComponent } from './about.module/about.module.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutceoComponent } from './aboutceo/aboutceo.component';



@NgModule({
  declarations: [
  
  
    AboutCompanyComponent,
          AboutceoComponent
  ],

  imports: [
    CommonModule
  ],
  exports:[
    AboutCompanyComponent,
    AboutceoComponent
  ]
})
export class AboutModuleModule { }
