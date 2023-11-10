import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { validPattern } from 'src/app/helpers/patter-match.validator';
import { Status } from 'src/app/models/status';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private signupService:SignupService,private fb:FormBuilder) { }
  
  frm!:FormGroup;
  status!:Status;

  get f(){
    return this.frm.controls;
  }

  onPost(){
     this.status = {statusCode:0,message:"wait.."};
     this.signupService.signup(this.frm.value).subscribe({
      next: (res)=>{
        console.log(res);
        this.status=res;
        this.frm.reset();
      },
      error: (err)=>{
       this.status.statusCode=0;
       this.status.message= "some error on server side";
      console.log(err);
      },
      complete:()=>{
       
      }
     })
  }

  ngOnInit(): void {
    const patternRegex= new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$');
    // must be atleast 6 character long,must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character
    this.frm= this.fb.group({
      //  'name':['',Validators.required],
       'email':['',Validators.required],
       'username':['',Validators.required],
       'password':['',[Validators.required,validPattern(patternRegex)]]
      //  'confirmPassword':['',Validators.required]
    },{
      validator:MustMatch('password','confirmPassword')
    })
  }
}


<div class="form-container">
    <div class="form signup">
        <form [formGroup]="frm" (ngSubmit)="onPost()">
        <div class="title">
           Signup
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
           <input formControlName="email" type="email" name="email" class="input" placeholder="Email">
       </div>
    
       <div class="msg error" *ngIf="f['email'].invalid && (f['email'].dirty || f['email'].touched)">
        <span *ngIf="f['email'].errors?.['required']">
            Email is required  
      </span>
    </div>
    
    
    
       <div class="input-container"> 
           <input type="password" formControlName="password"  name="password" class="input" placeholder="Password (Format: Abc@1r)">
       </div>
    
       <div class="msg error" *ngIf="f['password'].invalid && (f['password'].dirty || f['password'].touched)">
        <span *ngIf="f['password'].errors?.['required']">
            Password is required  
      </span>
      <span *ngIf="f['password'].errors?.['invalidPattern']">
        Atleast 6 character long,must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character
    </span>
    </div>
    

    
       <button type="submit" id="btnSubmit" [disabled]="frm.invalid">Signup</button>
       
       <div class="msg light" *ngIf="status">
          {{status.message}}
       </div>
    
         <a routerLink="/login" class="link">Already a member? Login here</a>
        </form>

    </div>

    
export interface LoginForm {
    username: string;
    password: string;
  }
  
  export interface SignupForm {
    username: string;
    email: string;
    password: string;
    roles?: string[];
  }

  export interface UserInfo {
    id: number;
    username: string;
    email: string;
    roles: string[];
    accessToken: string;
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
