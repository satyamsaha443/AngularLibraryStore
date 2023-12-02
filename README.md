
   
<div class="bootstrap-wrapper">
  <div class="container mt">
      <div class="row" >
          <div class="col-md-6 offset-md-3">
              <div class="contaier text-center">
                  <img class="img-fluid" style="width: 100px;" src="/assets/password.png">
              </div>
              <h1 class="text-center">Login here</h1>
              <form (ngSubmit)="onSubmit()">
                  <mat-form-field class="full-width mt">
                      <mat-label>Email</mat-label>
                      <input [(ngModel)]="credentials.email"
                      name="username" required type="text" matInput>
                  </mat-form-field>

                  <mat-form-field class="full-width mt">
                      <mat-label>Password</mat-label>
                      <input [(ngModel)]="credentials.password"
                      name="password" required type="password" matInput>
                  </mat-form-field>

                  <label for="role">Role</label>
                  <select class="form-control" name="role" ngModel>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="staff">Staff</option>
  
                  </select>

                  <div class="container text-center mt">
                      <button type="submit" mat-raised-button color="primary">Submit</button>

                      <button style="margin-left: 10px;" type="reset" mat-raised-button color="accent">Reset</button>
                  </div>    
              </form>
          </div>
      </div>
  </div>
</div>




  credentials={
    email:'',
    password:'',
    role:''
  }

  constructor(private loginService:LoginService, private router: Router){
    super();
  }

  onSubmit(){
    if((this.credentials.password!='' && this.credentials.email!='')&&(this.credentials.email!=null &&this.credentials.password!=null))
    {
      //token generation
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //if token is generated successfull
          console.log(response.token)
          this.loginService.loginUser(response.token)
          window.location.href="/dashboard"

        },
        error=>{
          //if error
          console.log(error)

        }
      )
    }
    else
    {
      console.log("Credentials empty")
    }
  }

  ngOnInit(): void {
    
  }
  private redirectBasedOnRole(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/dashboard']);
        break;
      case 'manager':
        this.router.navigate(['/supplier']);
        break;
      case 'staff':
        this.router.navigate(['/client']);
        break;
      default:
        // Optionally handle unknown roles
        this.router.navigate(['/default-route']);
        break;
    }
  }

  
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  constructor(private http:HttpClient) {}
    //calling the server to generate the token using a class from HttpClientModule
    generateToken(credentials:any){
      //generate token
      return this.http.post(`${this.url}/auth/login`,credentials);

    }

    createUser(user:User){
      return this.http.post(`${this.url}/auth/create-user`,user);

    }

    //for login user->send the token to local storage
    loginUser(token: string){
      localStorage.setItem("token",token);
      return true;
    }

    //function to check if a person is logged in
    isLoggedIn(){
      let token=localStorage.getItem("token");
      if(token==undefined || token==null|| token=='')
      {
        return false;
      }else
      {
        return true;
      }
    }

    logout(){
      localStorage.removeItem("token");
      return true;
    }

    //to get the token
    getToken(){
      return localStorage.getItem("token")
    }

    
}
