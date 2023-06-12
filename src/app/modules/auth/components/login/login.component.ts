import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginAttempt } from 'src/app/models/LoginAttempt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild("usernameInput") usernameInput: ElementRef | undefined;
  @ViewChild("passwordInput") passwordInput: ElementRef | undefined;


  constructor(private authService: AuthService) {

  }

  handleLogin(e: Event) {
    e.preventDefault();

    const loginAttempt: LoginAttempt =  {
      username: this.usernameInput?.nativeElement.value,
      password: this.passwordInput?.nativeElement.value,
    }

    console.log(loginAttempt);

    console.log(this.authService.login(loginAttempt));
  }

}
