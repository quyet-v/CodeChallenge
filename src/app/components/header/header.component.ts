import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  authService: AuthService;
  @Input() display: boolean = false;

  constructor(authService: AuthService, private router: Router) { 
    this.authService = authService;
  }

  /**
   * 
   * handleLogout method
   * removes token and redirects to login page
   * 
   */
  handleLogout() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }


}
