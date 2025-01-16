import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  ICard,
  UserCardsListService,
} from '../../../../services/user-cards-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.scss',
})
export class DebitComponent implements OnInit {
  userCardList$: Observable<ICard[]> = of([]);

  private readonly _router = inject(Router);
  private readonly _activatedRouter = inject(ActivatedRoute);
  private readonly _userCardsListService = inject(UserCardsListService);

  ngOnInit(): void {
    this.userCardList$ =
      this._userCardsListService.getUserCardsByType('debito');
  }

  redirectTo(id: number): void {
    this._router.navigate(['../' + id], {
      relativeTo: this._activatedRouter,
    });
  }
}
