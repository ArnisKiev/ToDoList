import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Connection/auth.service';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-sign-in-menu',
  templateUrl: './sign.in.menu.component.html',
  styleUrls: ['./sign.in.menu.component.scss', '../../Styles/buttons.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInMenuComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userStore: UserStoreService,
    private router: Router
  ) {}

  email: string = '';
  password: string = '';

  ngOnInit(): void {}

  logInClick() {
    this.authService.logIn(this.email, this.password).subscribe((res) => {
      this.userStore.authUser = res;
      this.router.navigate(['/my-tasks']);
    });
  }
}
