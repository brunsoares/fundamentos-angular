import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserService } from '../../services/update-user.service';
import { IUser } from '../../interface/user.interface';

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

  updateUserInfos() {
    const body: IUser = {
      name: this.userInfosForm.get('name')!.value!,
      email: this.userInfosForm.get('email')!.value!,
      username: this.userInfosForm.get('username')!.value!,
      password: this.userInfosForm.get('password')!.value!,
    };
    this._updateUserService.updateUser(body).subscribe({
      next: (res) => {
        this.userInfosForm.setErrors({ 'update-success': true });
      },
      error: (err) => {
        this.userInfosForm.setErrors({ 'update-error': true });
      },
    });
  }
}
