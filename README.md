import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/security/authentication.service';

@Component({
  // ...existing component metadata...
})
export class LoginComponent implements OnInit {
  // ...existing properties...

  constructor(private router: Router, private loginservice: AuthenticationService) {
    // ...existing constructor code...
  }

  ngOnInit() {
    // ...existing init code...
  }

  doLogin(loginForm: NgForm) {
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    const role = loginForm.value.role;

    this.loginservice.authenticate(username, password).subscribe(
      data => {
        // ...existing success handling...
        
        // Role-based redirection
        this.redirectUser(role);
      },
      error => {
        // ...existing error handling...
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