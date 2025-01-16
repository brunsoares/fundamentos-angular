import { Component, inject, Input } from '@angular/core';
import {
  ICard,
  UserCardsListService,
} from '../../../../services/user-cards-list.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  userCard$: Observable<ICard | undefined> = of({} as ICard);

  @Input() set id(value: string) {
    this.userCard$ = this._userCardsListService.getUserCardById(
      parseInt(value)
    );
  }

  private readonly _userCardsListService = inject(UserCardsListService);
}
