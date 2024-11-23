import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CountryList } from '../../types/country-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { StateList } from '../../types/state-list';
import { MaritalStatusArray } from '../../utils/marital-status-description';

@Component({
  selector: 'app-general-info-edit',
  templateUrl: './general-info-edit.component.html',
  styleUrl: './general-info-edit.component.scss',
})
export class GeneralInfoEditComponent implements OnInit, OnChanges {
  countriesListFiltered: CountryList = [];
  statesListFiltered: StateList = [];

  @Input({ required: true }) userForm: FormGroup = {} as FormGroup;
  @Input({ required: true, alias: 'countries' }) countriesList: CountryList =
    [];
  @Input({ required: true, alias: 'states' }) stateList: StateList = [];
  @Output('onCountrySelected') onCountrySelectedEmitter =
    new EventEmitter<string>();

  ngOnInit() {
    this.watchCountryChanges();
    this.watchStateChanges();
  }

  ngOnChanges() {
    this.countriesListFiltered = this.countriesList;
    this.statesListFiltered = this.stateList;
  }

  get emailControl(): FormGroup {
    return this.userForm.get('generalInformation.email') as FormGroup;
  }

  get countryControl(): FormGroup {
    return this.userForm.get('generalInformation.country') as FormGroup;
  }

  get stateControl(): FormGroup {
    return this.userForm.get('generalInformation.state') as FormGroup;
  }

  get maritalStatusArray() {
    return MaritalStatusArray;
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
    this.userForm.patchValue({
      generalInformation: {
        state: '',
      },
    });
    this.onCountrySelectedEmitter.emit(event.option.value);
  }

  private watchCountryChanges() {
    this.countryControl.valueChanges.subscribe(
      this.filterCountryList.bind(this)
    );
  }

  private watchStateChanges() {
    this.stateControl.valueChanges.subscribe(this.filterStateList.bind(this));
  }

  private filterCountryList(countryName: string) {
    this.countriesListFiltered = this.countriesList.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase().trim())
    );
  }

  private filterStateList(stateName: string) {
    this.statesListFiltered = this.stateList.filter((state) =>
      state.name.toLowerCase().includes(stateName.toLowerCase().trim())
    );
  }
}
