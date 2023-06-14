import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciclo2Component } from './ciclo2.component';

describe('Ciclo2Component', () => {
  let component: Ciclo2Component;
  let fixture: ComponentFixture<Ciclo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ciclo2Component]
    });
    fixture = TestBed.createComponent(Ciclo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
