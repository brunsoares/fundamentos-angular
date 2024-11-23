import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user.interface';
import { UsersService } from './services/users.services';
import { UserListResponse } from './types/user-list-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: UserListResponse = [];
  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;
  isEditMode: boolean = false;

  constructor(private readonly _usersService: UsersService) {}

  ngOnInit(): void {
    this._usersService
      .getUsers()
      .pipe(take(1))
      .subscribe((users) => (this.usersList = users));
  }

  onUserSelected(userSelectedIndex: number) {
    const userFound = this.usersList[userSelectedIndex];
    if (userFound) {
      this.userSelectedIndex = userSelectedIndex;
      this.userSelected = structuredClone(userFound);
    }
  }

  onEditBtn() {
    this.isEditMode = true;
  }

  onCancelBtn() {
    this.isEditMode = false;
  }
}
