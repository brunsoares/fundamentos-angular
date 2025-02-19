import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserService } from '../../services/update-user.service';
import { IUser } from '../../interface/user.interface';
import { CreateUserService } from '../../services/create-user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-infos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-infos.component.html',
  styleUrl: './user-infos.component.scss',
})
export class UserInfosComponent {
  userInfosForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  private readonly _updateUserService = inject(UpdateUserService);
  private readonly _createUserService = inject(CreateUserService);

  updateUserInfos() {
    this._updateUserService
      .updateUser(this.userInfosForm.value as IUser)
      .subscribe({
        next: (res) => {
          this.userInfosForm.setErrors({ 'update-success': true });
        },
        error: (err) => {
          this.userInfosForm.setErrors({ 'update-error': true });
        },
      });
  }

  createUserInfos() {
    this._createUserService
      .createUser(this.userInfosForm.value as IUser)
      .subscribe({
        next: (res) => {
          this.userInfosForm.setErrors({ 'create-success': true });
        },
        error: (err: HttpErrorResponse) => {
          if (err.status === 409) {
            return this.userInfosForm.setErrors({
              'exists-error': true,
            });
          }
          return this.userInfosForm.setErrors({ 'create-error': true });
        },
      });
  }
}
