import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  private readonly _router = inject(Router);
  private readonly _loginService = inject(LoginService);

  onLogin() {
    this._loginService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          this._router.navigate(['user-infos']);
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.loginForm.setErrors({ invalidCredentials: true });
          } else {
            this.loginForm.setErrors({ generalCredentialsError: true });
          }
        },
      });
  }
}
