import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) 
  { 
  }

  authenticate(username: string, password: string) {
    console.log(username)
   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   return this.httpClient.get('http://localhost:8080/api/suppliers/all',{headers}).pipe((
      userData => {
       sessionStorage.setItem('username',username);
       sessionStorage.setItem('password',password)
       console.log(userData)
       return userData;
      }
    )

   );
 }


isUserLoggedIn() {
 let user = sessionStorage.getItem('username')
 console.log(user)
  if(user == null)
  {
    return false
  }else
  {
     return true
  }
}

logOut() {
 sessionStorage.removeItem('username')
 sessionStorage.removeItem('password')
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
