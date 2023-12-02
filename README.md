<!-- Existing login form code... -->
<div class="container text-center mt">
    <button type="submit" mat-raised-button color="primary">Submit</button>
    <button style="margin-left: 10px;" type="reset" mat-raised-button color="accent">Reset</button>
    <!-- Add this button for registration -->
    <button mat-raised-button color="secondary" (click)="navigateToRegister()">Register</button>
</div>


// Existing imports...
import { Router } from '@angular/router';

@Component({
  // ...
})
export class LoginComponent extends URLLoader implements OnInit {
  // Existing code...

  constructor(
    private loginService: LoginService, 
    private router: Router
  ) {
    super();
  }

  // Existing functions...

  navigateToRegister() {
    this.router.navigate(['/register']); // Adjust the path as per your routing configuration
  }
}