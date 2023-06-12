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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  login(attempt: LoginAttempt): boolean {
    const loginAttemptStatus = this.checkCredentials(attempt,this.users);

    if(loginAttemptStatus.username != "") {
      localStorage.setItem("token",this.generateToken(loginAttemptStatus));
      return true;
    }

    this.subscription.unsubscribe();
    return false;

  }

  checkCredentials(attempt: LoginAttempt, users: User[]): User {
    const userExists = users.findIndex(user => user.username == attempt.username && user.password == attempt.password);
    if(userExists > -1) {
      return users[userExists];
    }

    return {username: "",password: "", role:""};
  }

  generateToken(user: User) {
    return CryptoJS.AES.encrypt(JSON.stringify(user),this.secret).toString();
  }

  decodeToken(token: string) {
    return CryptoJS.AES.decrypt(token,this.secret).toString(CryptoJS.enc.Utf8);
  }

}
