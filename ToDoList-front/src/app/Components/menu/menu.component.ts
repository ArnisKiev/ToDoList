import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user.model';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(public userStore: UserStoreService) {}

  signOut() {
    this.userStore.authUser = null;
  }

  ngOnInit(): void {}
}
