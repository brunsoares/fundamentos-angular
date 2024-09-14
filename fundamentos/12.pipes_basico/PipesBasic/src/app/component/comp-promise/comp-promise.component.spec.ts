import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPromiseComponent } from './comp-promise.component';

describe('CompPromiseComponent', () => {
  let component: CompPromiseComponent;
  let fixture: ComponentFixture<CompPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompPromiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
