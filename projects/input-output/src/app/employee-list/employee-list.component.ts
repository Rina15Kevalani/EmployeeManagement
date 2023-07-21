import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() listprt:Employee |any
  @Output() item=new EventEmitter<Employee>()

  emp?:Employee
  srcdata:Employee[]=[]
  src?:string |any
  edu?:string |any

  searchitem(){
    this.srcdata=
      this.listprt.filter(
      (v:any)=>
      v.empnm.indexOf(this.src) !==-1
)
  }

  fetchitem(e:any)
  {
    this.item.emit(e);
  }

  func(e:any)
  {
    console.log(e);
  }
  getColor(empid:any){
    if(empid<=100)
      return "dark blue"

      else
      return "green"
  }
}

