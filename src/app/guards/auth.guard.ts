import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  if(state.url == "/login" && localStorage.getItem("token") != null) {
    router.navigate([""]);
    return false;
  }else if(state.url == "/login" && localStorage.getItem("token") == null) {
    return true;
  }else if(state.url != "/login" && localStorage.getItem("token") != null) {
    return true;
  }else {
    router.navigate(["login"]);
    return false;
  }
};
