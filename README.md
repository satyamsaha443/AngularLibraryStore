<div class="col-md-12">
  <div class="card card-container">
    <img
      id="profile-img"
      src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      class="profile-img-card"
    />
    <form
      *ngIf="!isLoggedIn"
      name="form"
      (ngSubmit)="f.form.valid && onSubmit()"
      #f="ngForm"
      novalidate
    >
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          name="username"
          [(ngModel)]="form.username"
          required
          #username="ngModel"
          [ngClass]="{ 'is-invalid': f.submitted && username.errors }"
        />
        <div *ngIf="username.errors && f.submitted" class="invalid-feedback">
          Username is required!
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          [(ngModel)]="form.password"
          required
          minlength="6"
          #password="ngModel"
          [ngClass]="{ 'is-invalid': f.submitted && password.errors }"
        />
        <div *ngIf="password.errors && f.submitted" class="invalid-feedback">
          <div *ngIf="password.errors['required']">Password is required</div>
          <div *ngIf="password.errors['minlength']">
            Password must be at least 6 characters
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block">
          Login
        </button>
      </div>
      <div class="form-group">
        <div *ngIf="f.submitted && isLoginFailed" class="alert alert-danger" role="alert">
          Login failed: {{ errorMessage }}
        </div>
      </div>
    </form>

    <div class="alert alert-success" *ngIf="isLoggedIn">
      Logged in as {{ roles }}.
    </div>
  </div>
</div>





import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.router.navigate(['./dashboard']);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.router.navigate(['./dashboard']); // Navigate to dashboard after successful login
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}
