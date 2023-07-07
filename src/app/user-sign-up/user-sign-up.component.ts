import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private userService: UserService) {}

  registerUser() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.userService.register(user).subscribe(
      response => {
        // Handle successful registration
        console.log('User registered successfully:', response);
      },
      error => {
        // Handle registration error
        console.error('Error registering user:', error);
      }
    );
  }
}
