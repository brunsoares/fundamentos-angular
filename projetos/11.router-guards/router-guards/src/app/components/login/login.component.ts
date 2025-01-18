import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authForm: FormGroup = new FormGroup({});

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {
    this.authForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  validateLogin() {
    if (this.authForm.valid) {
      this._authService
        .login(this.authForm.value.username, this.authForm.value.password)
        .subscribe({
          next: (response) => {
            if (response.token) {
              this._router.navigate(['/dashboard']);
            }
          },
          error: (error) => {
            if (error.status === 401) {
              this.authForm.setErrors({ invalidCredentials: true });
            } else {
              this.authForm.setErrors({ unknownError: true });
            }
          },
        });
    }
  }
}
