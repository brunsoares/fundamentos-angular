import { Component, OnInit } from '@angular/core';
import { UsersServices } from './services/users.service';
import { GenresServices } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { UsersList } from './types/users-list-response';
import { GenresList } from './types/genres-list-response';
import { StatesList } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: UsersList = [];
  genresList: GenresList = [];
  statesList: StatesList = [];

  userSelected: IUser = {} as IUser;
  userSelectedIndex: number | undefined;

  constructor(
    private readonly _usersServices: UsersServices,
    private readonly _genresServices: GenresServices,
    private readonly _brazilianStatesServices: BrazilianStatesService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  private getUsers() {
    this._usersServices.getUsers().subscribe({
      next: (users) => {
        this.usersList = users;
      },
    });
  }

  private getGenres() {
    this._genresServices.getGenres().subscribe({
      next: (genres) => {
        this.genresList = genres;
      },
    });
  }

  private getStates() {
    this._brazilianStatesServices.getStates().subscribe({
      next: (states) => {
        this.statesList = states;
      },
    });
  }

  onUserSelected(index: number) {
    const userExist = this.usersList[index];

    if (userExist) {
      this.userSelectedIndex = index;
      this.userSelected = structuredClone(userExist);
    }
  }
}
