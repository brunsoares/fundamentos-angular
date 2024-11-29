import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user.interface';
import { UsersService } from './services/users.services';
import { UserListResponse } from './types/user-list-response';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: UserListResponse = [];
  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;
  isEditMode: boolean = false;
  isFormValid: boolean = false;
  userFormUpdated: boolean = false;

  constructor(
    private readonly _usersService: UsersService,
    private readonly _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._usersService
      .getUsers()
      .pipe(take(1))
      .subscribe((users) => (this.usersList = users));
  }

  onUserSelected(userSelectedIndex: number) {
    const userFound = this.usersList[userSelectedIndex];
    if (userFound) {
      this.userSelectedIndex = userSelectedIndex;
      this.userSelected = structuredClone(userFound);
    }
  }

  onFormStatusChanges(status: boolean) {
    setTimeout(() => (this.isFormValid = status), 0);
  }

  onFormFirstChanges() {
    this.userFormUpdated = true;
  }

  onEditBtn() {
    this.isEditMode = true;
  }

  onCancelBtn() {
    if (this.userFormUpdated) {
      const dialogRef = this._matDialog.open(ConfirmationDialogComponent, {
        data: {
          title: 'O Formulário foi alterado',
          message:
            'Deseja realmente cancelar as alterações feitas no formulário?',
        },
      });

      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (!result) return;

        this.isEditMode = false;
        this.userFormUpdated = false;
      });
    } else {
      this.isEditMode = false;
    }
  }
}
