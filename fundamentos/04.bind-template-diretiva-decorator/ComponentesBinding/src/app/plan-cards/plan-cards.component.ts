import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plan-cards',
  templateUrl: './plan-cards.component.html',
  styleUrl: './plan-cards.component.css',
})
export class PlanCardsComponent {
  cardPlanType: string = 'Simples';
  cardPlanPrice: number = 100;

  // Recebendo output do componente filho
  adquiredPlan(ValueEmitted: string) {
    alert(ValueEmitted);
  }

  changePlan(plan: string) {
    this.cardPlanType = plan;
  }
}
