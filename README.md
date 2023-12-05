onSubmit() {
  console.log("Credentials:", this.credentials);
  
  // Check if credentials are not empty
  if (!this.credentials.email || !this.credentials.password) {
    console.error("Credentials are empty");
    alert("Please enter both email and password.");
    return;
  }

  // Attempt to login
  this.loginService.generateToken(this.credentials).subscribe(
    (response: any) => {
      console.log("Login Response:", response);

      // Check if the response token is not null
      if (!response.token) {
        console.error("No token received in response");
        alert("Login failed: No token received.");
        return;
      }

      // Storing token and role in local storage
      localStorage.setItem('currentUser', JSON.stringify({
        token: response.token,
        role: this.credentials.role
      }));

      // Logging for debugging: Check what's stored in localStorage
      console.log("Stored in localStorage:", localStorage.getItem('currentUser'));

      // Redirecting based on role
      this.redirectBasedOnRole(this.credentials.role);
    },
    error => {
      console.error("Login Error:", error);
      alert("Login failed: " + error.message);
    }
  );
}