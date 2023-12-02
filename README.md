import { Component } from '@angular/core';
import { User } from 'src/app/main/models/User';
import { LoginService } from 'src/app/main/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {}

  saveUser() {
    this.loginService.createUser(this.user).subscribe(
      data => {
        console.log(data);
        this.snackBar.open('User registered', 'Close', { duration: 3000 }); // Show snackbar
      },
      error => {
        console.log(error);
        this.snackBar.open('Registration failed', 'Close', { duration: 3000 }); // Show error snackbar
      }
    );
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}