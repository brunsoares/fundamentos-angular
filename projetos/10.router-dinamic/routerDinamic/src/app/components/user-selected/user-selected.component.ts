import { Component, inject, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/users.interface';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-selected',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-selected.component.html',
  styleUrl: './user-selected.component.scss',
})
export class UserSelectedComponent {
  private readonly _usersService = inject(UsersService);
  userSelected: IUser = {} as IUser;
  @Input() set id(value: number) {
    this._usersService.getUserById(value).subscribe((user) => {
      this.userSelected = user;
    });
  }
}
