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
import { provideNativeDateAdapter } from '@angular/material/core';
import { convertPtBrDateToDateObj } from '../../utils/convert-ptbr-date-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPtBrDate } from '../../utils/convert-date-obj-to-ptbr-date';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input({ alias: 'genres', required: true }) genres: GenresList = [];
  @Input({ alias: 'states', required: true }) states: StatesList = [];
  @Input({ alias: 'userSelected', required: true }) user: IUser = {} as IUser;

  passwordStrengthValue: number = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['user'];
    if (USER_CHANGED) {
      this.onPasswordChange(this.user.password);
      this.setBirthDateToDatepicker(this.user.birthDate);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) return;

    this.user.birthDate = convertDateObjToPtBrDate(event.value);
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }
}
