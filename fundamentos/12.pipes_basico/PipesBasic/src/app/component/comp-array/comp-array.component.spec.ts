import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompArrayComponent } from './comp-array.component';

describe('CompArrayComponent', () => {
  let component: CompArrayComponent;
  let fixture: ComponentFixture<CompArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
