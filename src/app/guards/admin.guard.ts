import { inject } from "@angular/core";
import { type CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../modules/auth/services/auth.service";

export const adminGuard: CanActivateFn = (route, state) => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    const role = authService.getRole();

    if (role == "admin") {
        return true;
    }

    router.navigate(["products"]);
    return false;
};
