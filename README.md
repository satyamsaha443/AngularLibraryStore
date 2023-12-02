<div class="container text-center mt">
                        <button type="submit" mat-raised-button color="primary">Register</button>
                        <button style="margin-left: 10px;" type="reset" mat-raised-button color="accent">Reset</button>
                    </div


                      import { Component } from '@angular/core';
import { User } from 'src/app/main/models/User';
import { LoginService } from 'src/app/main/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  saveUser(){
    this.loginService.createUser(this.user).subscribe(
      data=>{

      console.log(data);
      window.location.href="/dashboard"
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
  user:User=new User();
  constructor(private loginService:LoginService){}


}
