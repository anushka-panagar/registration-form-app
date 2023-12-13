import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated: boolean = false;
  constructor() {
    this.isAuthenticated = !!this.getToken();
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  async registerUser(success: boolean): Promise<boolean> {
    if (success) {
      // Generate or receive the token from your server - This the generated from JWT.io for {sucess: true} payload
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWNjZXNzIjoidHJ1ZSJ9.IceshCuL2AoALLdqNTU4GzL90_x1zvbOSpykk7xysD4';
      this.setToken(token);
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
}
