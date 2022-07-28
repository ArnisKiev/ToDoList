import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/user.model';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(public userStore: UserStoreService, private router: Router) {}

  signOut() {
    this.userStore.signOut();
    this.router.navigate(['signin']);
  }

  ngOnInit(): void {}
}
