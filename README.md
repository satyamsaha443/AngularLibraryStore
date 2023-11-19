// LoginComponent

doLogin(loginform: NgForm) {
  const roleKey = loginform.value.role as keyof typeof this.credentials;
  const user = this.credentials[roleKey];

  if (user && user.email === loginform.value.username && user.password === loginform.value.password) {
    // Store user role on successful authentication
    localStorage.setItem('userRole', roleKey); // Using localStorage for simplicity

    // Rest of your login logic...
  } else {
    // Handle login failure
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data.expectedRoles as string[];
    const userRole = localStorage.getItem('userRole'); // Retrieve stored user role

    if (expectedRoles.includes(userRole)) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']); // Redirect to an unauthorized page
      return false;
    }
  }
}