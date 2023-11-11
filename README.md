<div class="form-container">
    <div class="form login">
        <form [formGroup]="frm" (ngSubmit)="ngOnInit()">
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



    <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form
        *ngIf="!isLoggedIn"
        name="form"
        (ngSubmit)="f.form.valid && onSubmit()"
        #f="ngForm"
        novalidate
      >
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            name="username"
            [(ngModel)]="form.username"
            required
            #username="ngModel"
            [ngClass]="{ 'is-invalid': f.submitted && username.errors }"
          />
          <div *ngIf="username.errors && f.submitted" class="invalid-feedback">
            Username is required!
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            [(ngModel)]="form.password"
            required
            minlength="6"
            #password="ngModel"
            [ngClass]="{ 'is-invalid': f.submitted && password.errors }"
          />
          <div *ngIf="password.errors && f.submitted" class="invalid-feedback">
            <div *ngIf="password.errors['required']">Password is required</div>
            <div *ngIf="password.errors['minlength']">
              Password must be at least 6 characters
            </div>
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">
            Login
          </button>
        </div>
        <div class="form-group">
          <div *ngIf="f.submitted && isLoginFailed" class="alert alert-danger" role="alert">
            Login failed: {{ errorMessage }}
          </div>
        </div>
      </form>
  
      <div class="alert alert-success" *ngIf="isLoggedIn">
        Logged in as {{ roles }}.
      </div>
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

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
    get f(){
    return this.frm.controls;  // needed for validation in html file 
  }



  constructor(private signupService:SignupService, private fb:FormBuilder,
    private authService:AuthService, private router:Router
    ) { }


// onPost() {
//   this.status = {statusCode: 0, message: "wait...."};
//   this.signupService.login(this.frm.value).subscribe({
//     next: (res) => {
//       localStorage.setItem('accessToken', res.accessToken);
//       // Handle other response data as needed
//       this.router.navigate(['./dashboard']);
//     },
//     error: (err) => {
//       console.log(err);
//       this.status.message = "some error on server side";
//     }
//   });
// }

onSubmit(): void {
  const { username, password } = this.frm;

  this.authService.login(username, password).subscribe({
    next: data => {
      this.storageService.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.reloadPage();
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
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




import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
