<div class="login-root">
  <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
    <!-- Background Styling -->
    <div class="loginbackground box-background--white padding-top--64">
      <!-- Background Grid Container -->
    </div>

    <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
      <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
        <h1><a href="http://blog.stackfindover.com/" rel="dofollow"><img width="70" height="70" src="assets/img/logo.png"></a></h1>
      </div>

      <div class="formbg-outer">
        <div class="form-container">
          <h2>Welcome to InvEntorYYY</h2>
          <p>Please enter your credentials to log in.</p>

          <form (ngSubmit)="onSubmit()">
            <!-- Email Field -->
            <mat-form-field class="full-width mt">
              <mat-label>Email</mat-label>
              <input [(ngModel)]="credentials.email" name="username" required type="text" matInput placeholder="Enter your email">
            </mat-form-field>

            <!-- Password Field -->
            <mat-form-field class="full-width mt">
              <mat-label>Password</mat-label>
              <input [(ngModel)]="credentials.password" name="password" required type="password" matInput placeholder="Enter your password">
            </mat-form-field>

            <!-- Role Selection -->
            <label for="role">Role</label>
            <select class="form-control" name="role" [(ngModel)]="credentials.role">
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="staff">Staff</option>
            </select>

            <!-- Form Buttons -->
            <div class="container text-center mt">
              <button type="submit" mat-raised-button color="primary">Submit</button>
              <button type="reset" mat-raised-button color="accent" style="margin-left: 10px;">Reset</button>
              <button mat-raised-button color="secondary" (click)="navigateToRegister()">Register</button>
            </div>

            <!-- Additional Links -->
            <div class="text-center mt">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>