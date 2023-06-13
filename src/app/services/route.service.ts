import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  currentRoute: string = "";
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  get Router(): Router {
    return this.router;
  }
}
