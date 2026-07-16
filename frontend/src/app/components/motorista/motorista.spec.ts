import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motorista } from './motorista';

describe('Motorista', () => {
  let component: Motorista;
  let fixture: ComponentFixture<Motorista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motorista],
    }).compileComponents();

    fixture = TestBed.createComponent(Motorista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
