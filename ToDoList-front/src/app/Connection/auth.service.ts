import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { User } from '../Models/user.model';

interface loginResponse {
  access_token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}

  logIn(email: string, password: string) {
    let url = this.url + '/logIn';
    return this.http.post<loginResponse>(url, {
      email,
      password,
    });
  }

  registerUser(email: string, password: string): Observable<any> {
    return this.http.post(this.url, {
      email,
      password,
    });
  }
}
