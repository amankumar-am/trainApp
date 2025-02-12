import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userObj = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  onRegister(event: Event) {
    event.preventDefault();
    const isLoggedIn = this.authService.register(this.userObj.username, this.userObj.password);
    if (!isLoggedIn) {
      alert('Invalid credentials, login failed');
    } else {
      alert('User Registered Successfully. and logged in');
    }
  }

}
