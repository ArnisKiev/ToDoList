import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../../Connection/auth.service';
import { UserStoreService } from '../../Services/user-store.service';
import { SignInMenuComponent } from '../sign.in.menu/sign.in.menu.component';
import { RegisterMenuComponent } from './register.menu.component';

describe('SignInMenuComponent', () => {
  let component: RegisterMenuComponent;
  let userStore: UserStoreService;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    userStore = new UserStoreService();
    router = jasmine.createSpyObj<Router>({
      navigate: new Promise(() => true),
    });
    const http = jasmine.createSpyObj<HttpClient>({ post: of() });
    authService = new AuthService(http);
    component = new RegisterMenuComponent(authService, userStore, router);
  });

  it('should redirect after register user', () => {
    let password = 'test-password';
    component.form.value.email = 'test-email@gmail.com';
    component.form.value.password = password;
    component.form.value.confirmPassword = password;
    spyOn(authService, 'registerUser').and.callFake(() => {
      router.navigate([]);
      return of();
    });

    component.onRegisterClick();
    expect(router.navigate).toHaveBeenCalled();
  });
});
