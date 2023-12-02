@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const allowedRoles = route.data['allowedRoles'] as string[];

    if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
      // Redirect to a default page or handle access denial
      this.router.navigate(['/default-route']);  // Change to appropriate route
      return false;
    }

    return true;
  }
}



const routes: Routes = [
  // ... other routes ...
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'configuration', component: ConfigurationComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'editprofile', component: EditprofileComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'barcode', component: BarcodeScanComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'buy', component: BuyComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'category', component: CategoryComponent, canActivate: [AuthguardService], data: { requiredRole: 'staff' }},
  { path: 'client', component: ClientComponent, canActivate: [AuthguardService], data: { requiredRole: 'manager' }},
  { path: 'expense', component: ExpenseComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'revenue', component: RevenueComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'product', component: ProductComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'sale', component: SaleComponent, canActivate: [AuthguardService], data: { requiredRole: 'manager' }},
  { path: 'stock', component: StockComponent, canActivate: [AuthguardService], data: { requiredRole: 'admin' }},
  { path: 'supplier', component: SupplierComponent, canActivate: [AuthguardService], data: { requiredRole: 'manager' }},
  // ... other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Example
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService], data: { allowedRoles: ['admin', 'manager', 'staff'] }},
{ path: 'supplier', component: SupplierComponent, canActivate: [AuthguardService], data: { allowedRoles: ['manager'] }},


const routes: Routes = [
  // ... other routes ...
  { path: 'client', component: ClientComponent, canActivate: [AuthguardService], data: { allowedRoles: ['manager', 'staff'] }},
  // ... other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
