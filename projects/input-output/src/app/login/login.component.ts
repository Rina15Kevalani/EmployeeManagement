import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted = false;
   loginForm !:FormGroup ;
  usrData: any;

  constructor(private route:Router, private http:HttpClient, private serv1:MyserviceService,private formbuilder:FormBuilder){}

  ngOnInit():void{
      this.loginForm = this.formbuilder.group({

        'email':['',[Validators.required,Validators.email]],
        'pwd':['',[Validators.required,Validators.minLength(8)]]
      });

  }

  get func():{[m:string]:AbstractControl}
  {
      return this.loginForm.controls;
  }


  login():void{
    this.submitted = true
    if(this.loginForm.invalid){
      return
    }
    this.http.get<any>("http://localhost:3000/signupUser").subscribe(
      res => {
       const user = res.find((a:any) => {
        return  a.email ===  this.loginForm.value.email   &&  a.pwd === this.loginForm.value.pwd ;
       })
       if(user){
        alert("login succesful !");
        console.log(this.loginForm.value);
        this.loginForm.reset();
        this.route.navigate(['/Home']);
       }else{
        alert("user not found");
        this.route.navigate(['/Login']);
       }
      },error => {
        alert("Something went wrong");
      }

    );
  }
}

