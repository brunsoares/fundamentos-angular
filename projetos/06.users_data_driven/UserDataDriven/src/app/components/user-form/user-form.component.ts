import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { GenresList } from '../../types/genres-list-response';
import { StatesList } from '../../types/states-list-response';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnChanges {
  @Input({ alias: 'genres', required: true }) genres: GenresList = [];
  @Input({ alias: 'states', required: true }) states: StatesList = [];
  @Input({ alias: 'userSelected', required: true }) user: IUser = {} as IUser;

  passwordStrengthValue: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['user'];
    if (USER_CHANGED) {
      this.onPasswordChange(this.user.password);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }
}
