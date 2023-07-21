import { Component } from '@angular/core';
import { Employee } from '../../Employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  title = 'input-output';

  educationOptions = [
    '1oth pass',
    'Diploma',
    'Graduate',
    'Post Graduate',
    'PHD',
  ];
  Empdata?:Employee[]=[];
  rec?:Employee|any;

    emp_id?:number;
    emp_nm?:string;
    educat?:string;
    gender?:string;
    com_nm?:string;
    expr?:number;
    salr?:number;

  addEmployee(){
      this.Empdata?.push({
        empid:this.emp_id,
        empnm:this.emp_nm,
        gen:this.gender,
        edu:this.educat,
        compnm:this.com_nm,
        exp:this.expr,
        sal:this.salr
      })
  }

  delempdt(e:any)
  {
    this.Empdata?.splice(this.Empdata?.indexOf(e),1)
  }
}
