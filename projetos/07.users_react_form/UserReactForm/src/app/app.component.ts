import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { IDialogConfirmationData } from './interfaces/dialog-confirmation-data';
import { IUser } from './interfaces/user/user.interface';
import { UpdatedUserService } from './services/updated-user.service';
import { UsersService } from './services/users.service';
import { UserListResponse } from './types/user-list-response';
import { UserFormValueService } from './services/user-form-value.service';
import { convertUserFormToUser } from './utils/convert-user-form-to-user';

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
    private readonly _matDialog: MatDialog,
    private readonly _updatedUserService: UpdatedUserService,
    private readonly _userFormValueService: UserFormValueService
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
    this.userSelected = structuredClone(this.userSelected);
  }

  onCancelBtn() {
    if (this.userFormUpdated) {
      const dataDialog: IDialogConfirmationData = {
        title: 'O Formulário foi alterado',
        message:
          'Deseja realmente cancelar as alterações feitas no formulário?',
      };
      this.openConfirmationDialog(dataDialog, (result: boolean) => {
        if (!result) return;

        this.isEditMode = false;
        this.userFormUpdated = false;
      });
    } else {
      this.isEditMode = false;
    }
  }

  onSaveBtn() {
    if (this.userFormUpdated) {
      const dataDialog: IDialogConfirmationData = {
        title: 'Confirmar alteração de dados',
        message: 'Deseja realmente salvar as alterações feitas no formulário?',
      };
      this.openConfirmationDialog(dataDialog, (result: boolean) => {
        if (!result) return;

        this.saveUserInfos();
        this.isEditMode = false;
        this.userFormUpdated = false;
      });
    } else {
      this.isEditMode = false;
    }
  }

  private openConfirmationDialog(
    data: IDialogConfirmationData,
    callback: (value: boolean) => void
  ) {
    const dialogRef = this._matDialog.open(ConfirmationDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(callback);
  }

  private saveUserInfos() {
    const newUser = convertUserFormToUser(
      this._userFormValueService.userFormValue
    );
    this._updatedUserService
      .updateUser(newUser)
      .subscribe((userResponse: IUser) => {
        if (this.userSelectedIndex === undefined) return;
        this.usersList[this.userSelectedIndex] = userResponse;
        this.userSelected = structuredClone(userResponse);
      });
  }
}
