import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.services';
import { take } from 'rxjs';
import { CountryList } from '../../types/country-list';
import { StatesService } from '../../services/states.services';
import { StateList } from '../../types/state-list';

@Component({
  selector: 'app-user-info-container',
  templateUrl: './user-info-container.component.html',
  styleUrl: './user-info-container.component.scss',
})
export class UserInfoContainerComponent
  extends UserFormController
  implements OnChanges, OnInit
{
  countryList: CountryList = [];
  stateList: StateList = [];
  private readonly _countryService = inject(CountriesService);
  private readonly _stateService = inject(StatesService);

  @Input({ required: true, alias: 'user' }) userSelected: IUser = {} as IUser;
  @Input({ required: true }) isEditMode: boolean = false;

  currentTabIndex: number = 0;

  ngOnInit() {
    this.getCountryList();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0;
    const USER_CHANGED =
      changes['userSelected'] &&
      Object.keys(changes['userSelected'].currentValue).length > 0;
    if (USER_CHANGED) {
      this.fulfillForm(this.userSelected);
      this.getStateList(this.userSelected.country);
    }
  }

  onCountrySelected(country: string) {
    this.getStateList(country);
  }

  private getCountryList() {
    this._countryService
      .getCountries()
      .pipe(take(1))
      .subscribe((countries) => {
        this.countryList = countries;
      });
  }

  private getStateList(country: string) {
    this._stateService
      .getStates(country)
      .pipe(take(1))
      .subscribe((states) => {
        this.stateList = states;
      });
  }
}
