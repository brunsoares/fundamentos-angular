import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependent-list-edit',
  templateUrl: './dependent-list-edit.component.html',
  styleUrl: './dependent-list-edit.component.scss',
})
export class DependentListEditComponent {
  @Input({ required: true }) userForm!: FormGroup;
  @Output('onRemoveDependent') removeDependentEmitter: EventEmitter<number> =
    new EventEmitter();
  @Output('onAddDependent') addDependentEmitter: EventEmitter<void> =
    new EventEmitter();

  get dependentsList(): FormArray {
    return this.userForm.get('dependentsList') as FormArray;
  }

  removeDependent(index: number) {
    this.removeDependentEmitter.emit(index);
  }

  addDependent() {
    this.addDependentEmitter.emit();
  }
}
