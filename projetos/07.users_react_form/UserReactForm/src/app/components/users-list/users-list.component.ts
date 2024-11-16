import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserListResponse } from '../../types/user-list-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input({ alias: 'users', required: true }) usersList: UserListResponse = [];
  @Output('onUserSelected') userSelectedEmitter = new EventEmitter<number>();

  userSelectedIndex: number | undefined;

  selectUser(userIndex: number) {
    this.userSelectedIndex = userIndex;
    this.userSelectedEmitter.emit(userIndex);
  }
}
