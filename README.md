import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  doLogin(form: NgForm) {
    if (!form.valid) {
      this.invalidLogin = true;
      this.errorMessage = "Form is not valid";
      return;
    }

    const username = form.value.username;
    const password = form.value.password;
    const role = form.value.role;

    this.authService.authenticate(username, password).subscribe(
      data => {
        this.redirectUser(role);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
        this.errorMessage = "Login Failed: " + error.message;
      }
    );
  }

  private redirectUser(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/admin-dashboard']);
        break;
      case 'manager':
        this.router.navigate(['/manager-dashboard']);
        break;
      case 'staff':
        this.router.navigate(['/staff-dashboard']);
        break;
      default:
        this.router.navigate(['/default-route']);
        break;
    }
  }
}