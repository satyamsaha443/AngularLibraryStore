import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/security/authentication.service';

@Component({
  // ... existing component metadata ...
})
export class LoginComponent implements OnInit {
  // ... existing properties ...

  constructor(private router: Router, private loginservice: AuthenticationService) {
    // ... existing constructor code ...
  }

  ngOnInit(): void {
    // ... existing init code ...
  }

  doLogin(form: NgForm) {
    if (!form.valid) {
      this.invalidLogin = true;
      this.errorMessage = "Form is not valid";
      return;
    }

    const { username, password, role } = form.value;

    this.loginservice.authenticate(username, password).subscribe(
      data => {
        this.redirectBasedOnRole(role);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
        this.errorMessage = error.message;
        // ... existing error handling ...
      }
    );
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