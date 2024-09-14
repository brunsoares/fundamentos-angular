import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user-response';

@Component({
  selector: 'app-comp-promise',
  templateUrl: './comp-promise.component.html',
  styleUrl: './comp-promise.component.scss',
})
export class CompPromiseComponent implements OnInit {
  userPromise!: Promise<IUser>;

  constructor(private readonly _userService: UsersService) {}

  ngOnInit() {
    this.userPromise = this._userService.getUserPromisse();
  }
}
