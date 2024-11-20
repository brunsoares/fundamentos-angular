import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';

@Component({
  selector: 'app-user-info-container',
  templateUrl: './user-info-container.component.html',
  styleUrl: './user-info-container.component.scss',
})
export class UserInfoContainerComponent
  extends UserFormController
  implements OnChanges
{
  @Input({ required: true, alias: 'user' }) userSelected: IUser = {} as IUser;
  @Input({ required: true }) isEditMode: boolean = false;

  currentTabIndex: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0;
    const USER_CHANGED =
      changes['userSelected'] &&
      Object.keys(changes['userSelected'].currentValue).length > 0;
    if (USER_CHANGED) {
      this.fulfillForm(this.userSelected);
    }
  }
}
