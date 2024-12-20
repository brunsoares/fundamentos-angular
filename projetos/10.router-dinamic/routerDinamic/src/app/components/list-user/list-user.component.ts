import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/users.interface';
import { Observable, of } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss',
})
export class ListUserComponent implements OnInit {
  private readonly _usersService = inject(UsersService);
  usersList$: Observable<IUser[]> = of([]);

  ngOnInit(): void {
    this.usersList$ = this._usersService.getUsers();
  }
}
