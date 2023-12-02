// authguard.service.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const requiredRole = route.data['role'];

    if (user && user.role) {
      if (requiredRole && user.role !== requiredRole) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}


// app-routing.module.ts

const routes: Routes = [
  // ... other routes ...
  { path: 'supplier', component: SupplierComponent, pathMatch: 'full', canActivate: [AuthguardService], data: { role: 'manager' } },
  // ... other routes ...
];