import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Connection/auth.service';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-sign-in-menu',
  templateUrl: './sign.in.menu.component.html',
  styleUrls: [
    './sign.in.menu.component.scss',
    '../../Styles/buttons.scss',
    '../../Styles/controls.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SignInMenuComponent implements OnInit {
  form: FormGroup;
  error: string = '';

  constructor(
    private authService: AuthService,
    private userStore: UserStoreService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  logInClick() {
    this.authService
      .logIn(this.form.value.email, this.form.value.password)
      .subscribe(
        (res) => {
          console.log(res);
          this.userStore.authUser = res.user;
          this.userStore.saveJwtToken(res.access_token);

          this.router.navigate(['/my-tasks']);
        },
        (err) => {
          this.error = err.error.message;
        }
      );
  }
}
