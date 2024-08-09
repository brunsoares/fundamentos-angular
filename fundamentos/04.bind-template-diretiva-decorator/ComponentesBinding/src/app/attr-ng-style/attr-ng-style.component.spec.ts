import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrNgStyleComponent } from './attr-ng-style.component';

describe('AttrNgStyleComponent', () => {
  let component: AttrNgStyleComponent;
  let fixture: ComponentFixture<AttrNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttrNgStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttrNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
