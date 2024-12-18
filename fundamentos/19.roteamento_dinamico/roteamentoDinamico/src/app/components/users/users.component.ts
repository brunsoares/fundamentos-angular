import { Component, inject, OnInit } from '@angular/core';
import { IUser, UsersService } from '../../services/users.services';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private readonly _usersService = inject(UsersService);
  usersList$: Observable<IUser[]> = of([]);

  ngOnInit(): void {
    this.usersList$ = this._usersService.getUsers();
  }
}
