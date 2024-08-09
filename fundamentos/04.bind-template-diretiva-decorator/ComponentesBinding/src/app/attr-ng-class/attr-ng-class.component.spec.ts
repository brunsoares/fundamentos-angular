import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrNgClassComponent } from './attr-ng-class.component';

describe('AttrNgClassComponent', () => {
  let component: AttrNgClassComponent;
  let fixture: ComponentFixture<AttrNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttrNgClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttrNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
