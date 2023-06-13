import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  authService: AuthService;
  @Input() display: boolean = false;

  constructor(authService: AuthService) { 
    this.authService = authService;
  }



}
