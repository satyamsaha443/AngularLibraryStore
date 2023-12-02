import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const requiredRole = route.data['requiredRole'];

    if (requiredRole && currentUser.role !== requiredRole) {
      // Redirect to a default page if the user doesn't have the required role
      this.router.navigate(['/default-route']);
      return false;
    }

    return true;
  }
}


// AppRoutingModule.ts

const routes: Routes = [
  // ... other routes ...
  { path: 'supplier', component: SupplierComponent, canActivate: [AuthguardService], data: { requiredRole: 'manager' } },
  // ... other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// Inside your login component

onSubmit() {
  // ... login logic ...
  // After successful login
  localStorage.setItem('currentUser', JSON.stringify({
    token: response.token,
    role: this.credentials.role  // Set the role based on credentials
  }));
  // ... redirect logic ...
}