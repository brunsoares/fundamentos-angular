import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemHeaderComponent } from './card-item-header.component';

describe('CardItemHeaderComponent', () => {
  let component: CardItemHeaderComponent;
  let fixture: ComponentFixture<CardItemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
