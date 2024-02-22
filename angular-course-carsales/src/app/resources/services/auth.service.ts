import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse: ResponseLogin = new ResponseLogin;
  constructor() { }

  public clear(): void {
    this.loginResponse.jwt = '';
  }

  public isAuthenticated(): boolean {
    return this.loginResponse.jwt != '';
  }
}
