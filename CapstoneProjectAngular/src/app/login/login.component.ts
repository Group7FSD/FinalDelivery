import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

import {NgForm} from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg='';
  message:string="welcome"+this.user.first_name;
  constructor(private _service : RegistrationService, private _route:Router,private cartService:CartService) { }

  ngOnInit(): void {
    
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => 
      {
        this.cartService.onLoginSuccess(data.first_name+" "+data.last_name)
        this._route.navigate([''])
      },
      error =>{
         console.log("exceptions occured");
        this. msg="bad credentials";
      }
    )
   
  }
  
}
