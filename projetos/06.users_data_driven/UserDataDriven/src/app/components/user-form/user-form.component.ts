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

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input({ alias: 'genres', required: true }) genres: GenresList = [];
  @Input({ alias: 'states', required: true }) states: StatesList = [];
  @Input({ alias: 'userSelected', required: true }) user: IUser = {} as IUser;

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {}
}
