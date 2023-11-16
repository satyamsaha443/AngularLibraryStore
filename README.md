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


apiurl='http://localhost:3000/user';

RegisterUser(inputdata:any){
  return this.httpClient.post(this.apiurl,inputdata)
}
GetUserbyCode(id:any){
  return this.httpClient.get(this.apiurl+'/'+id);
}
Getall(){
  return this.httpClient.get(this.apiurl);
}
updateuser(id:any,inputdata:any){
  return this.httpClient.put(this.apiurl+'/'+id,inputdata);
}
getuserrole(){
  return this.httpClient.get('http://localhost:3000/role');
}
isloggedin(){
  return sessionStorage.getItem('username')!=null;
}
getrole(){
  return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
}
GetAllCustomer(){
  return this.httpClient.get('http://localhost:3000/customer');
}
Getaccessbyrole(role:any,menu:any){
  return this.httpClient.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
}
}
