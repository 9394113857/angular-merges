// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:5000';  // Flask API URL

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };
    return this.http.post(`${this.apiUrl}/login`, body, { headers });
  }

  register(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };
    return this.http.post(`${this.apiUrl}/register`, body, { headers });
  }

  logout(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return this.http.post(`${this.apiUrl}/logout`, {}, { headers });
  }

  setSession(authResult: any) {
    localStorage.setItem('access_token', authResult.access_token);
  }

  logoutUser() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
