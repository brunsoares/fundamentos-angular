import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  statusOptions = [
    {
      value: true,
      label: 'Ativo',
    },
    {
      value: false,
      label: 'Inativo',
    },
  ];

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  @Output('filterEmitt') filterEmitt = new EventEmitter<IFilterOptions>();

  onFilter() {
    this.filterEmitt.emit(this.filterOptions);
  }
}
