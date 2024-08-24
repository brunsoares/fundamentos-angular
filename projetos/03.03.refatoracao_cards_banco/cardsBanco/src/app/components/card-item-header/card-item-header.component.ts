import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-header',
  templateUrl: './card-item-header.component.html',
  styleUrl: './card-item-header.component.scss',
})
export class CardItemHeaderComponent {
  @Input({ alias: 'pathIcon', required: true }) pathIcon: string = '';
  @Input({ alias: 'title', required: true }) title: string = '';
}
