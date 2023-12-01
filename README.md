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
          <div class="login-container">
            <form #loginForm="ngForm" (ngSubmit)="doLogin(loginForm)">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" name="username" ngModel required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" ngModel required>
              </div>
              <div class="form-group">
                <label for="role">Role</label>
                <select class="form-control" id="role" name="role" ngModel required>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary my-4">Login</button>
              </div>
              <div *ngIf="invalidLogin" class="alert alert-danger">
                {{ errorMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
