import { Component, Input } from '@angular/core';
import { UserListResponse } from '../../types/user-list-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input({ alias: 'users', required: true }) usersList: UserListResponse = [];
}
