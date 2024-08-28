import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjecaoComponent } from './card-projecao.component';

describe('CardProjecaoComponent', () => {
  let component: CardProjecaoComponent;
  let fixture: ComponentFixture<CardProjecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProjecaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProjecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
