import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let mockUserService

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ UserLoginComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    // fixture = TestBed.createComponent(UserLoginComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();

    mockUserService = jasmine.createSpyObj(['login', 'logout', 'newUser'])
    component = new UserLoginComponent(mockUserService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
