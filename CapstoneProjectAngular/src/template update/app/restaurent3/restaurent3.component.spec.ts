import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurent3Component } from './restaurent3.component';

describe('Restaurent3Component', () => {
  let component: Restaurent3Component;
  let fixture: ComponentFixture<Restaurent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Restaurent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
