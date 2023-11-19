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