import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurent2Component } from './restaurent2.component';

describe('Restaurent2Component', () => {
  let component: Restaurent2Component;
  let fixture: ComponentFixture<Restaurent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Restaurent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
