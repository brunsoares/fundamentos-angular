import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanCardsComponent } from './plan-cards/plan-cards.component';
import { BindComponent } from './bind/bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { EstruturaNgIfComponent } from './estrutura-ng-if/estrutura-ng-if.component';
import { EstruturaNgForComponent } from './estrutura-ng-for/estrutura-ng-for.component';
import { AttrNgStyleComponent } from './attr-ng-style/attr-ng-style.component';
import { AttrNgClassComponent } from './attr-ng-class/attr-ng-class.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: 'components',
    component: PlanCardsComponent,
  },
  {
    path: 'two-way-bind',
    component: TwoWayBindComponent,
  },
  {
    path: 'ng-if',
    component: EstruturaNgIfComponent,
  },
  {
    path: 'ng-for',
    component: EstruturaNgForComponent,
  },
  {
    path: 'ng-style',
    component: AttrNgStyleComponent,
  },
  {
    path: 'ng-class',
    component: AttrNgClassComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: '',
    component: BindComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
