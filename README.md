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