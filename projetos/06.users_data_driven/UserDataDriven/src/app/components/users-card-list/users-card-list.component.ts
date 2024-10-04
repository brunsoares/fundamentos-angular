import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersList } from '../../types/users-list-response';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss',
})
export class UsersCardListComponent {
  @Input({ alias: 'users', required: true }) usersList: UsersList = [];

  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>();

  onUserSelected(index: number) {
    this.onUserSelectedEmitt.emit(index);
  }
}
