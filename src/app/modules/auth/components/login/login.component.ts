import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild("usernameInput") usernameInput: ElementRef | undefined;
  @ViewChild("passwordInput") passwordInput: ElementRef | undefined;


  constructor(private authService: AuthService, private router: Router) {

  }

  handleLogin(e: Event) {
    e.preventDefault();

    const loginAttempt: LoginAttempt =  {
      username: this.usernameInput?.nativeElement.value,
      password: this.passwordInput?.nativeElement.value,
    }

    const isAuthenticated = this.authService.login(loginAttempt);

    //IF user enters correct username and password
    if(isAuthenticated) {
      this.router.navigate(["/"]);
    }else {
      alert("Incorrect login, please try again!");
    }
  }

}
