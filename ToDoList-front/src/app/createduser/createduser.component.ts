import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createduser',
  templateUrl: './createduser.component.html',
  styleUrls: ['./createduser.component.scss', '../Styles/buttons.scss'],
})
export class CreateduserComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
