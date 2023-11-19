doLogin(form: NgForm) {
  if (!form.valid) {
    this.invalidLogin = true;
    this.errorMessage = "Form is not valid";
    return;
  }

  const { username, password, role } = form.value;

  // Type assertion for 'role'
  if (typeof role === 'string' && this.credentials[role] &&
      this.credentials[role].username === username &&
      this.credentials[role].password === password) {
    this.redirectUserBasedOnRole(role);
    this.invalidLogin = false;
  } else {
    this.invalidLogin = true;
    this.errorMessage = "Invalid credentials";
  }
}