onSubmit() {
  if (this.credentials.password && this.credentials.email) {
    this.loginService.generateToken(this.credentials).subscribe(
      (response: any) => {
        console.log("Login Response:", response);
        this.loginService.loginUser(response.token);
        localStorage.setItem('currentUser', JSON.stringify({
          token: response.token,
          role: this.credentials.role  // Ensure this is being set correctly
        }));
        this.redirectBasedOnRole(this.credentials.role);
      },
      error => {
        console.log("Login Error:", error);
      }
    );
  } else {
    console.log("Credentials empty");
  }
}

private redirectBasedOnRole(role: string) {
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


localStorage.setItem('currentUser', JSON.stringify({
  token: response.token,
  role: this.credentials.role
}));
