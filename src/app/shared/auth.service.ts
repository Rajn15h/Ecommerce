import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Here you would usually send a request to your backend
    // For demonstration, we'll use a dummy check
    if (username === 'user' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ username,password }));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
  
}
