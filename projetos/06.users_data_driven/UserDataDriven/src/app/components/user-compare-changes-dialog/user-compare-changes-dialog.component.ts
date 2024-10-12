import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-compare-changes-dialog',
  templateUrl: './user-compare-changes-dialog.component.html',
  styleUrl: './user-compare-changes-dialog.component.scss',
})
export class UserCompareChangesDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { originalUser: IUser; updatedUser: IUser }
  ) {}
}
