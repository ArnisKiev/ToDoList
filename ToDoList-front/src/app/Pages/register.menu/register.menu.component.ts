import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/Validators/confirm.password.validator';
import { AuthService } from '../../Connection/auth.service';
import { User } from '../../Models/user.model';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-register-menu',
  templateUrl: './register.menu.component.html',
  styleUrls: [
    './register.menu.component.scss',
    '../../Styles/buttons.scss',
    '../../Styles/controls.scss',
  ],
})
export class RegisterMenuComponent implements OnInit {
  form: FormGroup;
  error: string = '';
  accountCreated: boolean = false;

  constructor(
    private authService: AuthService,
    private userStore: UserStoreService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: ConfirmPasswordValidator.mustMatch(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  ngOnInit(): void {}

  onRegisterClick() {
    if (this.form.valid) {
      this.authService
        .registerUser(this.form.value.email, this.form.value.password)
        .subscribe(
          () => {
            this.form.reset;
            this.accountCreated = true;
          },
          (err) => {
            this.error = err.error.message;
          }
        );
    }
  }
}
