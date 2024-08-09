import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaNgForComponent } from './estrutura-ng-for.component';

describe('EstruturaNgForComponent', () => {
  let component: EstruturaNgForComponent;
  let fixture: ComponentFixture<EstruturaNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstruturaNgForComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstruturaNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
