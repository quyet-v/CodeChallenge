import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  //IF user is already logged in and vists login route
  if(state.url == "/login" && localStorage.getItem("token") != null) {
    router.navigate([""]);
    return false;
  //IF user is not logged in and is on login route
  }else if(state.url == "/login" && localStorage.getItem("token") == null) {
    return true;
  //IF user is logged in and on any other routes
  }else if(state.url != "/login" && localStorage.getItem("token") != null) {
    return true;
  }else {
    router.navigate(["login"]);
    return false;
  }
};
