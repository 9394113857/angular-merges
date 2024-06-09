import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  ValidateUser(username: string, password: string) {
    // Makes an httpclient: returns userinfo or token
    return true;
  }

}
