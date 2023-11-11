import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApiUrl = 'http://localhost:8080/api/auth'; // Update with your API URL

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/signin`, {
      username,
      password
    }, { withCredentials: true }); // withCredentials if your backend uses cookies
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.authApiUrl}/signup`, user);
  }

  logout(): void {
    // Depending on how your logout is implemented, you might need to make an API call
    localStorage.removeItem('authToken'); // Assuming JWT is stored in localStorage
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    // Add logic to check if token is valid or expired
    return !!token;
  }

  getCurrentUser(): User {
    // Logic to retrieve and return the current user's details
    // This could involve decoding the JWT token stored in localStorage
    // Or making an API call to a user info endpoint if required
  }
}
