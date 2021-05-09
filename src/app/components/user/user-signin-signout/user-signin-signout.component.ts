import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-signin-signout',
  templateUrl: './user-signin-signout.component.html',
  styleUrls: ['./user-signin-signout.component.css']
})
export class UserSigninSignoutComponent implements OnInit {
  userSignedIn: boolean = false
  user: User

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public logoutUser(user: User) {
    this.userService.logout(user)
      .subscribe( result => {

      })
  }
}
