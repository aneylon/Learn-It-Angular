import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserLogin } from 'src/app/models/userLogin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public logInUser: boolean = true
  public userLogin: UserLogin
  public newUser: User

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public toggleLoginRegister() {
    this.logInUser = !this.logInUser
  }

  public login(userLogin: UserLogin) {
    this.userService.login(userLogin)
      .subscribe( response => {
        //
      })
  }

  public register(newUser: User) {
    this.userService.newUser(newUser)
      .subscribe(response => {

      })
  }
}
