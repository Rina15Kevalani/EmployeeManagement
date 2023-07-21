import { Component } from '@angular/core';
import {FormGroup, FormBuilder, AbstractControl, FormControl, Validators, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

 public signupForm !:FormGroup ;
  submitted = false
  constructor(private serv1:MyserviceService,private formBuilder: FormBuilder, private router : Router, private http:HttpClient){}
      //Hook  function
  ngOnInit():void{
        //object
      this.signupForm = this.formBuilder.group({
          fullname: ['',[Validators.required,Validators.minLength(6),this.Username()]],
          email:['',[Validators.required,Validators.email]],
          pwd:['',[Validators.required,Validators.minLength(8) ]],
          cfrmpwd:['',[Validators.required,Validators.minLength(8)]],
          mobile: ['', [ Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          isActive: this.formBuilder.control(false)
      },{
        validators: this.passwordMatchValidator
      });

  }

  //validations
  get func():{[m:string]:AbstractControl}
  {
      return this.signupForm.controls;
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const pwd = formGroup.controls['pwd'].value;
    const cfrmpwd = formGroup.controls['cfrmpwd'].value;

    return pwd === cfrmpwd ? null : { mismatch: true };
  }

  Username(){
    return (ctrl:AbstractControl) : ValidationErrors | null =>
    {
      var regexpression = /^[a-zA-Z]+$/
      if( ! regexpression.test(ctrl.value))
              {
                return {namenotmatch:true}
              }

      return null
    };
  }
  //mobile validation
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  //jsp server used navigate another page
  signUp(){
    this.submitted=true;
      if(this.signupForm.invalid){
        return
      }
      this.http.post<any>("http://localhost:3000/signupUser",this.signupForm.value).subscribe(res=>{
        alert("Regitration Successful !");
        console.log(this.signupForm.value);
        this.router.navigate(['/Login']);
        this.signupForm.reset();
      },err=>{
        alert("Something went wrong");
      });
  }







}
