import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/users/user.interface';
import { UsersList } from '../data/users-list';
import { IFilterOptions } from '../interfaces/filter/filter-options.interface';
import { filterUsersList } from '../utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 3000);
  }

  /**
   * Ação ao selecionar um usuário
   * @param user - Usuário selecionado
   */
  onUserSelected(user: IUser) {
    this.showUserDetails = true;
    this.userSelected = user;
  }

  /**
   * Ação ao filtrar os registros
   * @param filter - Filtros selecionados
   */
  onFilterEmitt(filter: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filter, this.usersList);
  }
}
