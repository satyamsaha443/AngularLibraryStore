onSubmit() {
  console.log("Credentials:", this.credentials);
  
  if (!this.credentials.email || !this.credentials.password) {
    console.error("Credentials are empty");
    alert("Please enter both email and password.");
    return;
  }

  this.loginService.generateToken(this.credentials).subscribe(
    (response: any) => {
      console.log("Login Response:", response);

      if (!response || !response.token) {
        console.error("No token received in response", response);
        alert("Login failed: No token received.");
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify({
        token: response.token,
        role: this.credentials.role
      }));
      this.redirectBasedOnRole(this.credentials.role);
    },
    error => {
      console.error("Login Error:", error);
      alert("Login failed: " + error.message);
    }
  );
}