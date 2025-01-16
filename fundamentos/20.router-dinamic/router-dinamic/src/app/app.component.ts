import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly _router = inject(Router);

  redirectTo(route: string): void {
    switch (route) {
      case 'initial':
        this._router.navigate([route], {
          queryParams: { isActive: true, isAdmin: false },
        });
        break;
      case 'information':
        this._router.navigate([route], {
          queryParams: { name: 'Bruno', age: 21 },
        });
        break;
      default:
        this._router.navigate([route]);
        break;
    }
  }
}
