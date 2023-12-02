onSubmit() {
  if (this.credentials.password && this.credentials.email) {
    this.loginService.generateToken(this.credentials).subscribe(
      (response: any) => {
        console.log(response.token);
        this.loginService.loginUser(response.token);

        // Store the role in local storage
        localStorage.setItem('role', this.credentials.role);

        // Redirect user based on the role
        this.redirectBasedOnRole(this.credentials.role);
      },
      error => {
        console.log(error);
      }
    );
  } else {
    console.log("Credentials empty");
  }
}


<select class="form-control" name="role" [(ngModel)]="credentials.role">
  <option value="admin">Admin</option>
  <option value="manager">Manager</option>
  <option value="staff">Staff</option>
</select>