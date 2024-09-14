import { Component, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user-response';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-comp-objeto',
  templateUrl: './comp-objeto.component.html',
  styleUrl: './comp-objeto.component.scss',
})
export class CompObjetoComponent implements OnDestroy {
  user: IUser = {} as IUser;
  userSubs: Subscription | undefined;

  // Propriedade de observable
  user$!: Observable<IUser>;

  constructor(private readonly _usersService: UsersService) {}

  changeUser(userElement: Event) {
    const userObj = userElement.target as HTMLInputElement;
    this.getUserById(Number(userObj.value));
  }

  getUserById(userId: number) {
    // Get com subscribe manual
    this.userSubs = this._usersService.getUserById(userId).subscribe({
      next: (resp) => {
        this.user = resp;
      },
      error: (err) => {
        alert('Usuário não encontrado, tente novamente!');
        this.user = {} as IUser;
      },
    });
    // Async Pipe
    this.user$ = this._usersService.getUserById(userId);
  }

  // Saindo do subscribe ao destruir o componente
  ngOnDestroy() {
    this.userSubs && this.userSubs.unsubscribe();
  }
}
