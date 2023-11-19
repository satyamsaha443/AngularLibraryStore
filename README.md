import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  errorMessage = '';

  // Hardcoded credentials for each role
  private readonly credentials = {
    admin: { username: 'adminUser', password: 'adminPass' },
    manager: { username: 'managerUser', password: 'managerPass' },
    staff: { username: 'staffUser', password: 'staffPass' }
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(form: NgForm) {
    if (!form.valid) {
      this.invalidLogin = true;
      this.errorMessage = "Form is not valid";
      return;
    }

    const { username, password, role } = form.value;

    // Credential verification
    if (this.credentials[role] &&
        this.credentials[role].username === username &&
        this.credentials[role].password === password) {
      this.redirectUserBasedOnRole(role);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      this.errorMessage = "Invalid credentials";
    }
  }

  private redirectUserBasedOnRole(role: string) {
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