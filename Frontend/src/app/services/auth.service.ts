import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:User){
  let UserArray = [];
  let retreivedUsers = localStorage.getItem('Users');
  if(retreivedUsers){
    UserArray = JSON.parse(retreivedUsers)
  }

  return UserArray.find((p: User) => p.userName === user.userName && p.password === user.password);
}


}
