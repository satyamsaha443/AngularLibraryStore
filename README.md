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
    const roleKey = loginform.value.role as keyof typeof this.credentials;
    const user = this.credentials[roleKey];
  
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


  <div class="container mt--8 pb-5">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-7">
        <div class="card bg-secondary border-0 mb-0">
          <div class="card-header bg-transparent pb-5">
            <div class="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <br /><br />
            <div class="btn-wrapper text-center">
              <img
                src="assets/img/logo.png"
                style="max-height: 80px"
                class="navbar-brand-img"
                alt="..."
              />
            </div>
          </div>
          <div class="card-body px-lg-5 py-lg-5">
            <form #loginForm="ngForm" (ngSubmit)="doLogin(loginForm)">
              <!-- Removed the ngModel and value bindings for username and password -->
              <div class="form-group mb-3">
                <div class="input-group input-group-merge input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                  </div>
                  <input
                    name="username"
                    class="form-control"
                    placeholder="Email"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group input-group-merge input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                  </div>
                  <input
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    type="password"
                    required
                  />
                </div>
                <label for="role">Role</label>
                <select class="form-control" name="role" ngModel required>
                  <option value="" disabled selected>Select your role</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary my-4">Login</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
