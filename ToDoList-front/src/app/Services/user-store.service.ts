import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  authUser: User | null = null;
  constructor() {}

  saveJwtToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  signOut() {
    localStorage.removeItem('jwt');
    this.authUser = null;
  }
}
