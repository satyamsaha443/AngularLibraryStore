<form (ngSubmit)="onRegister()">
  <input type="email" [(ngModel)]="user.email" name="email" placeholder="Email" required>
  <input type="text" [(ngModel)]="user.username" name="username" placeholder="Username" required>
  <input type="password" [(ngModel)]="user.password" name="password" placeholder="Password" required>
  <select [(ngModel)]="user.role" name="role">
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
  <button type="submit">Register</button>
</form>


export class RegisterComponent {
  user = { email: '', username: '', password: '', role: 'user' };

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('User registered', response);
      },
      error => {
        console.error('Error registering', error);
      }
    );
  }
}


<form (ngSubmit)="onLogin()">
  <input type="text" [(ngModel)]="user.username" name="username" placeholder="Username" required>
  <input type="password" [(ngModel)]="user.password" name="password" placeholder="Password" required>
  <button type="submit">Login</button>
</form>


export class LoginComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.user).subscribe(
      response => {
        console.log('User logged in', response);
        // Handle login based on response, such as redirecting to different pages based on roles
      },
      error => {
        console.error('Error logging in', error);
      }
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post('/api/register', user);
  }

  login(user: any): Observable<any> {
    return this.http.post('/api/login', user);
  }

  // Other auth related methods
}

