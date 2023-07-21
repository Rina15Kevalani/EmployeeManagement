import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{


 // isMenuRequire = false;
  title = 'input-output';
/*
  constructor(private router:Router){}
  ngDoCheck(): void {
      let currentUrl = this.router.url;
      if(currentUrl == '/Login' || currentUrl == 'SignUp'){
        this.isMenuRequire=false;
      }else{
        this.isMenuRequire=true;
      }
  }*/
}
