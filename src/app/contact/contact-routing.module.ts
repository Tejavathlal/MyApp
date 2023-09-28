import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactHrComponent } from './contact-hr/contact-hr.component';
import { ContactsupportComponent } from './contactsupport/contactsupport.component';

const routes: Routes = [
  {path: 'contractHr', component: ContactHrComponent},
  {path: 'contactsupport', component: ContactsupportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
