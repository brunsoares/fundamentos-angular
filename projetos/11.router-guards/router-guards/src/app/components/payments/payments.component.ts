import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss',
})
export class PaymentsComponent {
  isWalletBlock: boolean = false;

  private readonly _router = inject(Router);
  private readonly _activateRoute = inject(ActivatedRoute);

  navigateTo(route: string) {
    this._router
      .navigate([route], { relativeTo: this._activateRoute })
      .then((success) => {
        if (success === null) return;
        if (success) {
          this.isWalletBlock = false;
        } else {
          this._router.navigate(['/dashboard/payment']);
          this.isWalletBlock = true;
        }
      });
  }
}
