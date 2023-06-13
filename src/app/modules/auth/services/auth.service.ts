import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { User } from 'src/app/models/User';
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  secret: string =  "secret";
  users: User[] = [];
  subscription: Subscription;
  
  constructor(private http: HttpClient) {
    this.subscription = this.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  /**
   * 
   * getUsers method
   * will make a GET request to mock API 
   * to http://localhost:3000/users 
   * 
   * @returns an Observable<User[]>
   * 
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  /**
   * 
   * login method
   * uses checkCredentials method to see if credentials are correct
   * generates token if login succeeded.
   * 
   * @param attempt - login attempt from user represented as LoginAttempt object
   * @returns true if login succeeded, false if not
   */
  login(attempt: LoginAttempt): boolean {
    const loginAttemptStatus = this.checkCredentials(attempt,this.users);

    if(loginAttemptStatus.username != "") {
      localStorage.setItem("token",this.generateToken(loginAttemptStatus));
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
   * @param attempt - LoginAttempt object containing username and password
   * @param users - array of valid User objects to compare login attempt to 
   * @returns the valid user if success and empty User object if inocrrect
   */
  checkCredentials(attempt: LoginAttempt, users: User[]): User {
    const userExists = users.findIndex(user => user.username == attempt.username && user.password == attempt.password);
    if(userExists > -1) {
      return users[userExists];
    }

    return {username: "",password: "", role:""};
  }

  /**
   * generateToken method
   * will encrypto a passed in User object
   * 
   * @param user - User object containg username,password, and role
   * @returns token
   */
  generateToken(user: User): string {
    return CryptoJS.AES.encrypt(JSON.stringify(user),this.secret).toString();
  }

  /**
   * decodeToken method
   * will decode a token
   * 
   * @param token - token to decode 
   * @returns JSON string representing the User object
   */
  decodeToken(token: string): User {
    const jsonString = CryptoJS.AES.decrypt(token,this.secret).toString(CryptoJS.enc.Utf8)
    const user: User = JSON.parse(jsonString);
    return user;
  }
}
