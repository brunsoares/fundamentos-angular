import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user-response';

@Component({
  selector: 'app-comp-array',
  templateUrl: './comp-array.component.html',
  styleUrl: './comp-array.component.scss',
})
export class CompArrayComponent implements OnInit {
  users$!: Observable<IUser[]>;

  constructor(private readonly _userService: UsersService) {}

  ngOnInit() {
    this.users$ = this._userService.getUsers();
  }
}
