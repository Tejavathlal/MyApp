import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { IBMComponent } from './ibm/ibm.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { DiceComponent } from './dice/dice.component';
import { BankComponent } from './bank/bank.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { ImpDirective } from './imp.directive';

import {HttpClientModule} from '@angular/common/http';
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
import { CreatebookComponent } from './createbook/createbook.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { CreateroaldComponent } from './createroald/createroald.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MessageComponent } from './message/message.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { AboutModuleModule } from './about.module/about.module.module';
import { MessagePipe } from './message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    IBMComponent,
    DirectivesComponent,
    MarksheetComponent,
    PipesComponent,
    GradeComponent,
    DiceComponent,
    BankComponent,
    PricePipe,
    AgePipe,
    ImpDirective,
    UsersComponent,
    VehiclesComponent,
    AccountComponent,
    FlipkartComponent,
    MailComponent,
    PhotoComponent,
    ActivityComponent,
    RoaldComponent,
    BookComponent,
    CreatevehicleComponent,
    CreatebookComponent,
    CreateuserComponent,
    CreateaccountComponent,
    ContactdetailsComponent,
    CreateroaldComponent,
    VehicledetailsComponent,
    AccountdetailsComponent,
    UserdetailsComponent,
    TodoappComponent,
    ParentComponent,
    ChildComponent,
    MessageComponent,
    ItemComponent,
    NavComponent,
    CartComponent,
    MessagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
