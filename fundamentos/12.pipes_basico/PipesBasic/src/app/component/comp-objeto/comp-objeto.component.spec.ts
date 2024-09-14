import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompObjetoComponent } from './comp-objeto.component';

describe('CompObjetoComponent', () => {
  let component: CompObjetoComponent;
  let fixture: ComponentFixture<CompObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompObjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
