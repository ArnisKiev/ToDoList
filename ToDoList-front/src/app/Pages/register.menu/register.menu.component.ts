import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Connection/auth.service';
import { User } from '../../Models/user.model';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-register-menu',
  templateUrl: './register.menu.component.html',
  styleUrls: ['./register.menu.component.scss', '../../Styles/buttons.scss'],
})
export class RegisterMenuComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private userStore: UserStoreService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onRegisterClick() {
    console.log(this.form.valid);

    if (
      this.form.valid &&
      this.form.value.password == this.form.value.confirmPassword
    ) {
      this.authService
        .registerUser(this.form.value.email, this.form.value.password)
        .subscribe(
          (resp) => {
            this.form.reset;
            this.userStore.authUser = resp;
            this.router.navigate(['/my-tasks']);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
