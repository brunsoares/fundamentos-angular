import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { AddressListEditComponent } from './contact-info-edit/address-list-edit/address-list-edit.component';
import { ContactInfoEditComponent } from './contact-info-edit/contact-info-edit.component';
import { PhoneListEditComponent } from './contact-info-edit/phone-list-edit/phone-list-edit.component';
import { AddressListComponent } from './contact-information/address-list/address-list.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { PhoneListComponent } from './contact-information/phone-list/phone-list.component';
import { DependentListEditComponent } from './dependent-list-edit/dependent-list-edit.component';
import { DependentListComponent } from './dependent-list/dependent-list.component';
import { GeneralInfoEditComponent } from './general-info-edit/general-info-edit.component';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { UserInfoContainerComponent } from './user-info-container/user-info-container.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    UsersListComponent,
    InfoGeneralComponent,
    UserInfoItemComponent,
    ContactInformationComponent,
    PhoneListComponent,
    AddressListComponent,
    DependentListComponent,
    ButtonsContainerComponent,
    UserInfoContainerComponent,
    GeneralInfoEditComponent,
    ContactInfoEditComponent,
    PhoneListEditComponent,
    AddressListEditComponent,
    DependentListEditComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    AngularMaterialModule,
    PipesModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  exports: [
    UsersListComponent,
    InfoGeneralComponent,
    ContactInformationComponent,
    DependentListComponent,
    ButtonsContainerComponent,
    UserInfoContainerComponent,
    ConfirmationDialogComponent,
  ],
  providers: [provideNgxMask()],
})
export class ComponentsModule {}
