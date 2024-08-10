import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/users/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  @Input({ alias: 'user', required: true }) user: IUser = {} as IUser;
}
