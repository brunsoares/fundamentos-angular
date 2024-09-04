import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ alias: 'headerTemp', required: true }) headerTemp!: TemplateRef<any>;
  @Input({ alias: 'contentTemp', required: true })
  contentTemp!: TemplateRef<any>;
  @Input({ alias: 'footerTemp', required: true }) footerTemp!: TemplateRef<any>;
}
