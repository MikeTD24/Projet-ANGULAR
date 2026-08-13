import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCar } from './details-car';

describe('DetailsCar', () => {
  let component: DetailsCar;
  let fixture: ComponentFixture<DetailsCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCar],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsCar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
