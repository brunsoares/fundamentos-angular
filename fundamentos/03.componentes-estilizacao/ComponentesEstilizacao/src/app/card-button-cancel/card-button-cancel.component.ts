import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  // styleUrl: './card-button-cancel.component.css'
  styles: [
    `
      @import '../../styles.css';

      .card_cancel_button {
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: var(--main-bg-color-cancel);
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
      }
    `,
  ],
})
export class CardButtonCancelComponent {}
