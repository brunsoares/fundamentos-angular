import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemLineComponent } from './card-item-line.component';

describe('CardItemLineComponent', () => {
  let component: CardItemLineComponent;
  let fixture: ComponentFixture<CardItemLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardItemLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
