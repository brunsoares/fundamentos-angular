import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { PhoneListComponent } from './contact-information/phone-list/phone-list.component';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddressListComponent } from './contact-information/address-list/address-list.component';
import { DependentListComponent } from './dependent-list/dependent-list.component';

@NgModule({
  declarations: [
    UsersListComponent,
    InfoGeneralComponent,
    UserInfoItemComponent,
    ContactInformationComponent,
    PhoneListComponent,
    AddressListComponent,
    DependentListComponent,
  ],
  imports: [AngularMaterialModule, PipesModule, CommonModule],
  exports: [
    UsersListComponent,
    InfoGeneralComponent,
    ContactInformationComponent,
    DependentListComponent,
  ],
})
export class ComponentsModule {}
