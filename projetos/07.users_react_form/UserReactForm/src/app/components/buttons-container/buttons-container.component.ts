import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.scss',
})
export class ButtonsContainerComponent {
  @Input({ required: true }) isEditMode: boolean = false;
  @Output('onEditBtn') onEditBtnEmitter = new EventEmitter<void>();
  @Output('onCancelBtn') onCancelBtnEmitter = new EventEmitter<void>();

  onEdit() {
    this.onEditBtnEmitter.emit();
  }

  onCancel() {
    this.onCancelBtnEmitter.emit();
  }
}
