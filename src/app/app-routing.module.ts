import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { IBMComponent } from './ibm/ibm.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { DiceComponent } from './dice/dice.component';
import { BankComponent } from './bank/bank.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { PhotoComponent } from './photo/photo.component';
import { ActivityComponent } from './activity/activity.component';
import { RoaldComponent } from './roald/roald.component';
import { BookComponent } from './book/book.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { authenticationGuard } from './authentication.guard';
import { notifyGuard } from './notify.guard';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';

const routes: Routes = [
 
  {path:'login', component:LoginComponent},
  {path:'roald',component:RoaldComponent},
  {path:'book',component:BookComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[authenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path: 'rectangle',component:RectangleComponent},
    {path:'bmi', component:IBMComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'marksheet', component:MarksheetComponent},
    {path: 'pipes' , component:PipesComponent},
    {path: 'grade', component:GradeComponent},
    {path: 'dice', component:DiceComponent},
    {path: 'bank', component:BankComponent},
    {path: 'users', component:UsersComponent},
    {path: 'vehicles',component:VehiclesComponent},
    {path: 'account', component:AccountComponent},
    {path: 'filpkart',component:FlipkartComponent},
    {path: 'mail', component:MailComponent},
    {path: 'photo', component:PhotoComponent},
    {path: 'activity', component:ActivityComponent},
    {path: 'createvehicle', component:CreatevehicleComponent},
    {path: 'createuser', component:CreateuserComponent, canDeactivate: [notifyGuard]},
    {path: 'createaccount', component:CreateaccountComponent},
    {path: 'contactdetails', component:ContactdetailsComponent},
    {path: 'vehicledetails/:id', component:VehicledetailsComponent}
    
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
