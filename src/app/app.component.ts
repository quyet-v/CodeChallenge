import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from './services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-challenge';

  displayHeader = false;

  constructor(private routerService: RouteService) { }

  ngOnInit() {
    this.routerService.Router.events.subscribe(() => {
      //checks to see if navigation is completed and is on login page
      
      if(this.routerService.Router.url == "/login") {
        this.displayHeader = false;
      }else {
        this.displayHeader = true;
      }
    })
  }
  
}
