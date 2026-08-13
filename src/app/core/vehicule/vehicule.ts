import { Injectable, signal } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class Vehicule {
  private readonly voitures = signal<Car[]>([
    {
      id: 1,
      brand: 'Peugeot',
      color: 'Bleu',
      puissance: 130,
      imageUrl: 'https://placehold.co/300x180?text=Peugeot',
    },
    {
      id: 2,
      brand: 'Renault',
      color: 'Rouge',
      puissance: 110,
      imageUrl: 'https://placehold.co/300x180?text=Renault',
    },
  ]);

  private lastId = 3;

  getAll() {
    return this.voitures.asReadonly();
  }

  add(newCar: Omit<Car, 'id'>): void {
    const car: Car = {
      ...newCar,
      id: this.lastId++,
    };

    this.voitures.update((cars) => [...cars, car]);
  }

  delete(id: number): void {
    this.voitures.update((cars) => cars.filter((car) => car.id !== id));
  }
}
