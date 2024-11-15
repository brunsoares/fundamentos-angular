import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrl: './info-general.component.scss',
})
export class InfoGeneralComponent {
  @Input({ required: true }) user: IUser | undefined = {} as IUser;
}
