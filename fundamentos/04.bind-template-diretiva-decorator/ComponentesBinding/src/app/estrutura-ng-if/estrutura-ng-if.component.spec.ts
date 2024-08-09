import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaNgIfComponent } from './estrutura-ng-if.component';

describe('EstruturaNgIfComponent', () => {
  let component: EstruturaNgIfComponent;
  let fixture: ComponentFixture<EstruturaNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstruturaNgIfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstruturaNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
