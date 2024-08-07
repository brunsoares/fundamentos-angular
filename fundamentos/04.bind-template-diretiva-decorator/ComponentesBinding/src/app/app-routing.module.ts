import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanCardsComponent } from './plan-cards/plan-cards.component';
import { BindComponent } from './bind/bind.component';

const routes: Routes = [
  {
    path: 'components',
    component: PlanCardsComponent,
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
