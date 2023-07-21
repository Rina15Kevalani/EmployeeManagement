import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'Home',component:AddEmployeeComponent},
  {path:'Login',component:LoginComponent},
  {path:'SignUp', component:RegistrationComponent},
  {path:'about', component:AboutComponent},
  {path:'contactus', component:ContactusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
