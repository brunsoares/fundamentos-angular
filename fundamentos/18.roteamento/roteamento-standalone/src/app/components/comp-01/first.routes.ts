import { Routes } from '@angular/router';
import { ChildAComponent } from '../child-a/child-a.component';
import { ChildBComponent } from '../child-b/child-b.component';
import { Comp01Component } from './comp-01.component';

export const FirstRoutes: Routes = [
  {
    path: '',
    component: Comp01Component,
    children: [
      {
        path: 'childA',
        title: 'First - Filho A',
        component: ChildAComponent,
      },
      {
        path: 'childB',
        title: 'First - Filho B',
        component: ChildBComponent,
      },
    ],
  },
];
