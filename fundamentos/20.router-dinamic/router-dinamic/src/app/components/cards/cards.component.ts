import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  private readonly _router = inject(Router);
  private readonly _activeRoute = inject(ActivatedRoute);

  redirectTo(route: string): void {
    this._router.navigate([route], { relativeTo: this._activeRoute });
  }
}
