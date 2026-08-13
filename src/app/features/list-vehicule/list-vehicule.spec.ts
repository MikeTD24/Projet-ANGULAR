import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehicule } from './list-vehicule';

describe('ListVehicule', () => {
  let component: ListVehicule;
  let fixture: ComponentFixture<ListVehicule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVehicule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListVehicule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});