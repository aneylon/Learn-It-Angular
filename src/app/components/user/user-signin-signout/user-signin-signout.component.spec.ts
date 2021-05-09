import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSigninSignoutComponent } from './user-signin-signout.component';

describe('UserSigninSignoutComponent', () => {
  let component: UserSigninSignoutComponent;
  let fixture: ComponentFixture<UserSigninSignoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSigninSignoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSigninSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
