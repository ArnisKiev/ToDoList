import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { AuthService } from '../../Connection/auth.service';
import { UserStoreService } from '../../Services/user-store.service';
import { SignInMenuComponent } from './sign.in.menu.component';

describe('', () => {
  let component: SignInMenuComponent;
  let authService: AuthService;
  let userStore: UserStoreService;
  let router: Router;

  beforeEach(() => {
    const http = jasmine.createSpyObj<HttpClient>({ post: of() });
    authService = new AuthService(http);
    router = jasmine.createSpyObj<Router>({
      navigate: new Promise(() => true),
    });
    userStore = new UserStoreService();
    component = new SignInMenuComponent(authService, userStore, router);
  });

  it('test login authorization', () => {
    let testUser = {
      id: 'test-id',
      email: 'test-email',
      password: 'test-password',
    };
    spyOn(authService, 'logIn').and.callFake(() => {
      return of(testUser);
    });
    component.logInClick();
    expect(userStore.authUser).toEqual(testUser);
  });

  //   it('should redirect after login authorization', () => {
  //     //spyOn(authService, 'logIn').and.callFake(() => of());

  //     spyOn(authService.logIn('', ''), 'subscribe').and.callFake(
  //       () =>
  //         new Subscription(() => {
  //           router.navigate(['']);
  //         })
  //     );
  //     component.logInClick();
  //     expect(router.navigate).toHaveBeenCalled();
  //   });
});
