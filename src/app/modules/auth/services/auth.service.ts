import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, type Subscription } from "rxjs";
import { LoginAttempt } from "src/app/models/LoginAttempt";
import { User } from "src/app/models/User";
import * as CryptoJS from "crypto-js";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    secret = "secret";
    users: User[] = [];
    subscription: Subscription;

    constructor (private readonly http: HttpClient) {
        this.subscription = this.getUsers().subscribe(response => {
            this.users = response;
        });
    }

    /**
     * getUsers method
     * will make a GET request to mock API
     * to http://localhost:3000/users
     *
     * @returns an Observable<User[]>
     */
    getUsers (): Observable<User[]> {
        return this.http.get<User[]>("http://localhost:3000/users");
    }

    /**
     * login method
     * uses checkCredentials method to see if credentials are correct
     * generates token if login succeeded.
     *
     * @param attempt - login attempt from user represented as LoginAttempt object
     * @returns true if login succeeded, false if not
     */
    login (attempt: LoginAttempt): boolean {
        const user = this.checkCredentials(attempt, this.users);

        if (user != null) {
            localStorage.setItem("token", this.generateToken(user));
            return true;
        }

        this.subscription.unsubscribe();
        return false;
    }

    /**
     * checkCredentials method
     * will take a LoginAttempt object and check to see
     * if it is a user in the DB.
     *
     * Ideally this would be done on the backend.
     *
     * @param attempt - LoginAttempt object containing username and password
     * @param users - array of valid User objects to compare login attempt to
     * @returns the valid user if success and empty User object if inocrrect
     */
    checkCredentials (attempt: LoginAttempt, users: User[]): User | null {
        const index = users.findIndex(user => user.username == attempt.username && user.password == attempt.password);
        // IF user exists
        if (index > -1) {
            return users[index];
        }
        return null;
    }

    /**
     * generateToken method
     * will encrypto a passed in User object, used to imitate a JWT token
     *
     * This would also be ideally be done on the backend.
     *
     * @param user - User object containg username,password, and role
     * @returns token
     */
    generateToken (user: User): string {
        if (user == null) {
            return "";
        }
        return CryptoJS.AES.encrypt(JSON.stringify(user), this.secret).toString();
    }

    /**
     * decodeToken method
     * will decode a token
     *
     * @param token - token to decode
     * @returns JSON string representing the User object
     */
    decodeToken (token: string): User | null {
    // IF token exists
        if (token) {
            const jsonString = CryptoJS.AES.decrypt(token, this.secret).toString(CryptoJS.enc.Utf8);
            const user: User = JSON.parse(jsonString);
            return user;
        }
        return null;
    }

    /**
     * getRole method
     * decodes the token and gets the role
     *
     * @returns role if token is valid, otherwise null
     */
    getRole (): string | null {
        const token = localStorage.getItem("token");
        // IF token exists
        if (token) {
            const user: User | null = this.decodeToken(token);
            if (user != null) {
                return user.role;
            }
        }
        return null;
    }

    /**
     * isAdmin method
     * checks to see if user is an admin
     *
     * @returns true if user is admin, fale if not
     */
    isAdmin (): boolean {
        const token = localStorage.getItem("token");
        // IF token exists
        if (token) {
            return this.getRole() == "admin";
        }
        return false;
    }
}
