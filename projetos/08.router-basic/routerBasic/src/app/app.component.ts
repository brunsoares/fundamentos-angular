import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  disabledRoutes: boolean = false;

  constructor(private readonly router: Router) {}

  onEnableDisabledRoutes(status: boolean) {
    this.disabledRoutes = status;
  }

  onShowText() {
    return this.router.url === '/' && !this.disabledRoutes;
  }
}
