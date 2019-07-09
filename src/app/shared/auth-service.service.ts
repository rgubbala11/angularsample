import { Injectable } from '@angular/core';
import { IUser } from './IUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private user: IUser;
  constructor() { }

  authenticate(userName: string, password: string): IUser {
    this.user = {
      UserName: userName,
      Email: 'rajeev@gmail.com'
    }
    return this.user;
  }

  isAuthenticated(){
    return this.user != null;
  }

  getUser(){
    return this.user;
  }
}
