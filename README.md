private credentials = {
  admin: { email: 'admin@example.com', password: 'adminpass' },
  manager: { email: 'manager@example.com', password: 'managerpass' },
  staff: { email: 'staff@example.com', password: 'staffpass' }
};


doLogin(loginform: NgForm) {
  const role = loginform.value.role;
  const user = this.credentials[role];

  if (user && user.email === loginform.value.username && user.password === loginform.value.password) {
    // Proceed with the login process
  } else {
    // Handle invalid login
  }
}