import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInMenuComponent } from './sign-in-menu.component';

describe('SignInMenuComponent', () => {
  let component: SignInMenuComponent;
  let fixture: ComponentFixture<SignInMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
