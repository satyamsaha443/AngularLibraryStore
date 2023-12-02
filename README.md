
  <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
      <div class="loginbackground box-background--white padding-top--64">
        <div class="loginbackground-gridContainer">
          <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
            <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
            </div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
            <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
            <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
            <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
            <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
            <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
            <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
            <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
          </div>
        </div>
      </div>
      <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="http://blog.stackfindover.com/" rel="dofollow">InvEntorYYY</a></h1>
        </div>
        <div class="formbg-outer">
          <div class="form-container"> <!-- New container for centering -->
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
            <select class="form-control" name="role" [(ngModel)]="credentials.role">
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
  </div>


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { AuthenticationService } from 'src/app/main/security/authentication.service';
import { LoginService } from 'src/app/main/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations:[],
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends URLLoader  implements OnInit {

  // username = 'admin'
  // password = 'admin'
  // invalidLogin = false
  // errorMessage=''

  // constructor(private router: Router,
  //   private loginservice: AuthenticationService) {
  //     super()
  //    }
  
  // ngOnInit() {
    
  // }

  // doLogin(form: NgForm) {
  //   if (!form.valid) {
  //     this.invalidLogin = true;
  //     this.errorMessage = "Form is not valid";
  //     return;
  //   }

  //   const { username, password, role } = form.value;

  //   this.loginservice.authenticate(username, password).subscribe(
  //     data => {
  //       this.redirectBasedOnRole(role);
  //       this.invalidLogin = false;
  //     },
  //     error => {
  //       this.invalidLogin = true
  //       this.errorMessage=error.message
  //       super.show('Inventoryy', this.errorMessage, 'error')
  //     }
  //   )
    

  // }




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


  
}




<div class="bootstrap-wrapper">
    <div class="container mt">
        <div class="row" >
            <div class="col-md-6 offset-md-3">
                <div class="contaier text-center">
                    <img class="img-fluid" style="width: 100px;" src="/assets/profile.png">
                </div>
                <h1 class="text-center">Register here</h1>

                

                

                <form (ngSubmit)="onSubmit()">
                    <mat-form-field class="full-width mt">
                        <mat-label>Username</mat-label>
                        <input [(ngModel)]="user.userName"
                        name="username" required type="text" matInput>
                    </mat-form-field>
                    
                    <mat-form-field class="full-width mt">
                        <mat-label>Email</mat-label>
                        <input [(ngModel)]="user.email"
                        name="username" required type="text" matInput>
                    </mat-form-field>
                    <mat-form-field class="full-width mt">
                        <mat-label>Password</mat-label>
                        <input [(ngModel)]="user.password"
                        name="password" required type="password" matInput>
                    </mat-form-field> 

                    

                    <div class="container text-center mt">
                        <button type="submit" mat-raised-button color="primary">Submit</button>

                        <button style="margin-left: 10px;" type="reset" mat-raised-button color="accent">Reset</button>
                    </div>    
                </form>
            </div>
        </div>
    </div>
</div>
