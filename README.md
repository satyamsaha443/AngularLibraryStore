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