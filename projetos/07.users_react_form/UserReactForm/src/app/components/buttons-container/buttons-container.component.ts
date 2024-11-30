import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.scss',
})
export class ButtonsContainerComponent {
  @Input({ required: true }) isEditMode: boolean = false;
  @Input({ required: true }) isFormValid: boolean = false;
  @Output('onEditBtn') onEditBtnEmitter = new EventEmitter<void>();
  @Output('onCancelBtn') onCancelBtnEmitter = new EventEmitter<void>();
  @Output('onSaveBtn') onSaveBtnEmitter = new EventEmitter<void>();

  onEdit() {
    this.onEditBtnEmitter.emit();
  }

  onCancel() {
    this.onCancelBtnEmitter.emit();
  }

  onSave() {
    this.onSaveBtnEmitter.emit();
  }
}
