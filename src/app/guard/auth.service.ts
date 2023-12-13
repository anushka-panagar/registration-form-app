import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // boolean to check if user is authenticated
  public isAuthenticated: boolean = false;

  constructor() {
    this.isAuthenticated = !!this.getToken();
  }

  // set token function
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // get token function
  getToken() {
    return localStorage.getItem('token');
  }

  // function to call when user is registered
  // usually validity comes from backend server through message or token
  // Here I have used JWT token, for authorized user
  // return true or false if user is authenticated or not
  async registerUser(success: boolean): Promise<boolean> {
    if (success) {
      // Generated or receive the token from your server - I generated this from JWT.io for {sucess: true} payload
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWNjZXNzIjoidHJ1ZSJ9.IceshCuL2AoALLdqNTU4GzL90_x1zvbOSpykk7xysD4';
      this.setToken(token);
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
}
