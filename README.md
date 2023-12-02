onSubmit() {
  if (this.credentials.password && this.credentials.email) {
    // Simulate role assignment based on email
    let role = 'staff'; // Default role
    if (this.credentials.email === 'manager@example.com') {
      role = 'manager';
    } else if (this.credentials.email === 'admin@example.com') {
      role = 'admin';
    }

    this.loginService.generateToken(this.credentials).subscribe(
      (response: any) => {
        if (response.token) {
          // Set token and simulated role in the local storage
          localStorage.setItem('currentUser', JSON.stringify({ 
            token: response.token,
            role: role // Use the simulated role
          }));
          // Redirect to the appropriate page based on the simulated role
          this.redirectBasedOnRole(role);
        }
      },
      error => {
        console.log(error);
      }
    );
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
