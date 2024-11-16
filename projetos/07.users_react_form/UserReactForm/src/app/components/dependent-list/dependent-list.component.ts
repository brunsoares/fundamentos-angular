import { Component, Input } from '@angular/core';
import { DependentUserList } from '../../types/dependent-user-list';

@Component({
  selector: 'app-dependent-list',
  templateUrl: './dependent-list.component.html',
  styleUrl: './dependent-list.component.scss',
})
export class DependentListComponent {
  @Input({ required: true }) dependents: DependentUserList | undefined = [];
}
