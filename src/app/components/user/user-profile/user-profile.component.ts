import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  getUser(userId: number) {
    this.userService.getUser(userId)
      .subscribe(user => {
        this.user = user
      })
  }

  saveChanges(updatedUser: User) {
    this.userService.updateUser(updatedUser)
      .subscribe(result => {
        console.log(result)
      })
  }
}