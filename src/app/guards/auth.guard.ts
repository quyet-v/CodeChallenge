import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RouteService } from '../services/route.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const routeService = inject(RouteService);

  if(routeService.currentRoute == "login") {
    console.log("login");
  }

  if(localStorage.getItem("token") != null) {
    return true;
  }
  router.navigate(["login"]);
  return false;
};
