import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  constructor(private router: Router) { }
  userObj = { username: '', password: '' };

  login(username: string, password: string): boolean {
    // Retrieve user from localStorage every time login is attempted
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (
      (username === 'admin' && password === 'admin') ||
      (user && user.username === username && user.password === password)
    ) {
      this.isLoggedIn = true;
      this.router.navigate(['/homepage']);
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  register(username: string, password: string) {
    localStorage.setItem('user', JSON.stringify({ username, password }));
    this.isLoggedIn = true;
    this.router.navigate(['/homepage']);
    return true;
  }
}
