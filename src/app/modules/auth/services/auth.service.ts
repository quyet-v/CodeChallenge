import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

    return loginAttemptStatus.username != "";

  }

  checkCredentials(attempt: LoginAttempt, users: User[]): User {
    const userExists = users.findIndex(user => user.username == attempt.username && user.password == attempt.password);
    if(userExists > -1) {
      return users[userExists];
    }

    return {username: "",password: "", role:""};
  }

}
