import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCompareChangesDialogComponent } from './components/user-compare-changes-dialog/user-compare-changes-dialog.component';
import { IUser } from './interfaces/user/user.interface';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { GenresServices } from './services/genres.service';
import { UsersServices } from './services/users.service';
import { GenresList } from './types/genres-list-response';
import { StatesList } from './types/states-list-response';
import { UsersList } from './types/users-list-response';

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
    private readonly _brazilianStatesServices: BrazilianStatesService,
    private readonly _matDialog: MatDialog,
    private readonly _matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(index: number) {
    const userExist = this.usersList[index];

    if (userExist) {
      this.userSelectedIndex = index;
      this.userSelected = structuredClone(userExist);
    }
  }

  onFormSubmit() {
    if (!this.userSelectedIndex) return;
    const originalUser = this.usersList[this.userSelectedIndex];
    this.openBeforeAndAfterChangesDialog(
      originalUser,
      this.userSelected,
      this.userSelectedIndex
    );
  }

  openBeforeAndAfterChangesDialog(
    originalUser: IUser,
    updatedUser: IUser,
    userSelectedIndex: number
  ) {
    const dialogRef = this._matDialog.open(UserCompareChangesDialogComponent, {
      minWidth: '70%',
      data: {
        originalUser: originalUser,
        updatedUser: updatedUser,
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.confirmUserUpdate(updatedUser, userSelectedIndex);
        }
      },
    });
  }

  confirmUserUpdate(updatedUser: IUser, userSelectedIndex: number) {
    this.usersList[userSelectedIndex] = structuredClone(updatedUser);
    this._matSnackBar.open('Alteração efetuada com sucesso!', 'OK', {
      duration: 5000,
    });
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
}
