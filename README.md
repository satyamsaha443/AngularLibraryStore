onSubmit() {
  console.log("Credentials:", this.credentials);
  
  // Check if credentials are not empty
  if (!this.credentials.email || !this.credentials.password) {
    console.error("Credentials are empty");
    // Display an error message to the user
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

      this.loginService.loginUser(response.token);
      localStorage.setItem('currentUser', JSON.stringify({
        token: response.token,
        role: this.credentials.role  // Set the role based on credentials
      }));
      this.redirectBasedOnRole(this.credentials.role);
    },
    error => {
      console.error("Login Error:", error);
      // Display a user-facing error message
      alert("Login failed: " + error.message);
    }
  );
}