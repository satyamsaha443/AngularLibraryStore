<div class="form-container">
    <div class="form login">
        <form [formGroup]="frm" (ngSubmit)="onPost()">
        <div class="title">
           Login
        </div>
        <div class="input-container"> 
           <input type="text" formControlName="username" name="username" class="input" placeholder="Username">
       </div>
       <div class="msg error" *ngIf="f['username'].invalid && (f['username'].dirty || f['username'].touched)">
        <span *ngIf="f['username'].errors?.['required']">
            Username is required  
      </span>
     </div>
    
       <div class="input-container"> 
           <input type="password" formControlName="password" name="password" class="input" placeholder="Password">
       </div>
       <div class="msg error" *ngIf="f['password'].invalid && (f['password'].dirty || f['password'].touched)">
        <span *ngIf="f['password'].errors?.['required']">
            Password is required  
      </span>
      </div>
    
       
       <button type="submit" id="btnSubmit">Login</button>
       <div class="msg light" *ngIf="status">
           {{status.message}}
       </div>
         <a routerLink="/signup" class="link">Not a member? Signup here</a>
        </form>
    </div>
    </div>


    import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/models/status';
import { AuthService } from 'src/app/services/auth.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  frm!:FormGroup;
  status!:Status;
  
    get f(){
    return this.frm.controls;  // needed for validation in html file 
  }



  constructor(private signupService:SignupService, private fb:FormBuilder,
    private authService:AuthService, private router:Router
    ) { }

   onPost(){
    this.status = {statusCode:0,message:"wait...."};

    this.signupService.login(this.frm.value).subscribe({
      next: (res)=>{
        // save username, accesstoken and refresh token into localStorage
        this.authService.addAccessToken(res.token);
        this.authService.addRefreshToken(res.refreshToken);
        this.authService.addUsername(res.username);
        this.status.statusCode=res.statusCode;
        this.status.message=res.message;
        if(res.statusCode==1){
        this.router.navigate(['./dashboard']);
        }

      },
      error: (err)=>{
        console.log(err);
        this.status.statusCode=0;
        this.status.message="some error on server side";
      }
    })
     
 
  }

  ngOnInit(): void {
    this.frm= this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    })
    if(this.authService.isLoggedIn()){
      this.router.navigate(['./dashboard']);
    }
  }

}

export interface LoginForm {
    username: string;
    password: string;
  }


  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Status } from '../models/status';
import { LoginForm, LoginResponseModel, SignupForm } from '../models/login-response';
import { ChangePasswrd } from '../models/change-password';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = environment.baseUrl+'/auth';
  constructor(private http:HttpClient) { 

  }

  login(model:LoginForm){
  return this.http.post<LoginResponseModel>(this.baseUrl+'/signin',model);
  }

  signup(model:SignupForm){
     return this.http.post<Status>(this.baseUrl+'/signup',model);
  }

  chagePassword(model:ChangePasswrd){
    return this.http.post<Status>(this.baseUrl+'/chagepassword',model);
    }

}
