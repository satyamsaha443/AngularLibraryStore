import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { AuthenticationService } from 'src/app/main/security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [],
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends URLLoader implements OnInit {

  private credentials = {
    admin: { email: 'admin@example.com', password: 'adminpass' },
    manager: { email: 'manager@example.com', password: 'managerpass' },
    staff: { email: 'staff@example.com', password: 'staffpass' }
  };

  role = '';
  invalidLogin = false;
  errorMessage = '';

  constructor(private router: Router, private loginservice: AuthenticationService) {
    super()
  }

  ngOnInit() {}

  doLogin(loginform: NgForm) {
    const user = this.credentials[loginform.value.role];
    
    if (user && user.email === loginform.value.username && user.password === loginform.value.password) {
      // Authentication success
      super.show('Inventory', 'Welcome !', 'success');
      super.loadScripts();
      this.routeBasedOnRole(loginform.value.role);
      this.invalidLogin = false;
    } else {
      // Authentication failed
      this.invalidLogin = true;
      this.errorMessage = 'Invalid Credentials';
      super.show('Inventory', this.errorMessage, 'error');
    }
  }

  private routeBasedOnRole(role: string) {
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
        this.router.navigate(['/default-route']);
        break;
    }
  }
}