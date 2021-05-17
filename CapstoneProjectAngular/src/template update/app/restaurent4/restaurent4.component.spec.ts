import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurent4Component } from './restaurent4.component';

describe('Restaurent4Component', () => {
  let component: Restaurent4Component;
  let fixture: ComponentFixture<Restaurent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Restaurent4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
