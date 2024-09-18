import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePuroImpuroComponent } from './pipe-puro-impuro.component';

describe('PipePuroImpuroComponent', () => {
  let component: PipePuroImpuroComponent;
  let fixture: ComponentFixture<PipePuroImpuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipePuroImpuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipePuroImpuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
