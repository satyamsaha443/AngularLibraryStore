
  credentials={
    email:'',
    password:'',
    role:''
  }

  constructor(private loginService:LoginService, private router: Router){
    super();
  }

  onSubmit() {
    if (this.credentials.password && this.credentials.email) {
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          console.log("Login Response:", response);
          this.loginService.loginUser(response.token);
          localStorage.setItem('currentUser', JSON.stringify({
            token: response.token,
            role: this.credentials.role  // Set the role based on credentials
          }));
          this.redirectBasedOnRole(this.credentials.role);
        },
        error => {
          console.log("Login Error:", error);
        }
      );
    } else {
      console.log("Credentials empty");
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
      this.router.navigate(['/stock']);
      break;
    default:
      this.router.navigate(['/default-route']);
      break;
  }
}
navigateToRegister() {
  this.router.navigate(['/register']); // Adjust the path as per your routing configuration
}

  
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class  LoginService {

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
