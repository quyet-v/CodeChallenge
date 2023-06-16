import { Component, type ElementRef, ViewChild } from "@angular/core";
import { type AuthService } from "../../services/auth.service";
import { type LoginAttempt } from "src/app/models/LoginAttempt";
import { type Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    @ViewChild("usernameInput") usernameInput: ElementRef | undefined;
    @ViewChild("passwordInput") passwordInput: ElementRef | undefined;

    constructor (private readonly authService: AuthService, private readonly router: Router) { }

    /**
     * handleLogin method
     * uses credntials entered by user and
     * tries to login
     *
     * @param e event
     */
    handleLogin (e: Event) {
        e.preventDefault();

        const loginAttempt: LoginAttempt = {
            username: this.usernameInput?.nativeElement.value,
            password: this.passwordInput?.nativeElement.value
        };

        const isAuthenticated = this.authService.login(loginAttempt);

        // IF user enters correct username and password
        if (isAuthenticated) {
            this.router.navigate(["/"]);
        } else {
            alert("Incorrect login, please try again!");
        }
    }
}
