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
      this.router.navigate(['/default-route']); // Redirect to a default route
      return false;
    }

    return true;
  }
}