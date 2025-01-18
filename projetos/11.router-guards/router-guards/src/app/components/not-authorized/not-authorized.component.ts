import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.scss',
})
export class NotAuthorizedComponent implements OnInit {
  typeMessageShow: string = '';

  private readonly _activateRouter = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activateRouter.data.subscribe((data) => {
      this.typeMessageShow = data['type'];
    });
  }
}
