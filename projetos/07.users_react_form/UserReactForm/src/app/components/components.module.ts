import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';

@NgModule({
  declarations: [UsersListComponent, InfoGeneralComponent, UserInfoItemComponent],
  imports: [AngularMaterialModule, PipesModule, CommonModule],
  exports: [UsersListComponent, InfoGeneralComponent],
})
export class ComponentsModule {}
