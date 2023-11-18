doLogin(loginform: NgForm) {
  this.loginservice.authenticate(loginform.value.username, loginform.value.password).subscribe(
    data => {
      super.show('Inventory', 'Welcome !', 'success');
      super.loadScripts();
      // Based on the role, navigate to the appropriate route
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
          // Handle unknown roles or redirect to a default route
          this.router.navigate(['/default-route']);
          break;
      }
      this.invalidLogin = false;
    },
    error => {
      this.invalidLogin = true;
      this.errorMessage = error.message;
      super.show('Inventory', this.errorMessage, 'error');
    }
  );
}