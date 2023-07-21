import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    AddEmployeeComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
   RouterModule.forRoot([
    {path:'Login',component:LoginComponent},
    {path:'SignUp', component:RegistrationComponent},
    {path:'Home',component:AddEmployeeComponent},
    {path:'about',component:AboutComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'',redirectTo:'/Login',pathMatch:'full'}

   ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
