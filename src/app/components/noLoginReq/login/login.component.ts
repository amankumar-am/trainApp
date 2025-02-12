import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(event: Event) {
    event.preventDefault();
    const isLoggedIn = this.authService.login(this.loginObj.username, this.loginObj.password);
    if (!isLoggedIn) {
      alert('Invalid credentials, login failed');
    } else {
      alert('Login successful');
    }
  }

}
