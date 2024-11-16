import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.services';
import { StatesService } from './services/states.services';
import { CitiesService } from './services/cities.services';
import { UsersService } from './services/users.services';
import { UserListResponse } from './types/user-list-response';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: UserListResponse = [];
  currentTabIndex: number = 0;
  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;

  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService
  ) {}

  ngOnInit(): void {
    this._countriesService.getCountries().subscribe((countries) => {
      console.log(countries);
    });

    this._statesService.getStates('Brazil').subscribe((states) => {
      console.log(states);
    });

    this._citiesService.getCities('Brazil', 'São Paulo').subscribe((cities) => {
      console.log(cities);
    });

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
      this.currentTabIndex = 0;
    }
  }
}
