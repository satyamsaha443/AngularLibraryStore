export class LoginComponent extends URLLoader implements OnInit {

  // Define role-based credentials (For testing only, not for production)
  private credentials = {
    admin: { username: 'admin', password: 'adminpass' },
    manager: { username: 'manager', password: 'managerpass' },
    staff: { username: 'staff', password: 'staffpass' }
  };

  role = '';
  invalidLogin = false;
  errorMessage = '';

  // ... rest of your component code

  doLogin(loginform: NgForm) {
    const roleCredentials = this.credentials[loginform.value.role];
    if (loginform.value.username === roleCredentials.username && loginform.value.password === roleCredentials.password) {
      // Proceed with role-based redirection
      switch (loginform.value.role) {
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
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      this.errorMessage = 'Invalid credentials';
      // Display error message
    }
  }

  // ... rest of your component code
}


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
