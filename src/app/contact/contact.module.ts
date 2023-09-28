import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactHrComponent } from './contact-hr/contact-hr.component';
import { ContactsupportComponent } from './contactsupport/contactsupport.component';


@NgModule({
  declarations: [
    ContactHrComponent,
    ContactsupportComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
