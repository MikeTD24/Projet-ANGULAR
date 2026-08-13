import { Injectable, signal } from '@angular/core';
import { Car } from '../../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  private readonly listCar = signal<Car[]>([
    {
      id: 1,
      brand: 'BMW M3 Competition',
      puissance: 510,
      color: 'Noir saphir',
      imageUrl: 'https://placehold.co/600x360/1f2937/ffffff?text=BMW+M3',
    },
    {
      id: 2,
      brand: 'Audi RS 3 Sportback',
      puissance: 400,
      color: 'Gris Nardo',
      imageUrl: 'https://placehold.co/600x360/64748b/ffffff?text=Audi+RS+3',
    },
    {
      id: 3,
      brand: 'Tesla Model 3',
      puissance: 498,
      color: 'Rouge multicouche',
      imageUrl: 'https://placehold.co/600x360/dc2626/ffffff?text=Tesla+Model+3',
    },
  ]);

  private lastId = this.listCar()[this.listCar().length - 1].id + 1;

  getCars(){
    return this.listCar.asReadonly();
  }

  addCar(newCar: Omit<Car, 'id'>): void {
    const car: Car = {
      ...newCar,
      id: this.lastId++,
    };

    this.listCar.update((list) => [...list, car]);
  }

  deleteCar(id: number): void {
    this.listCar.update((list) => list.filter((c) => c.id !== id));
  }

  updateCar(id: number, updatedCar: Omit<Car, 'id'>): void {
    this.listCar.update((list) =>
      list.map((car) => (car.id === id ? { ...updatedCar, id } : car)),
    );
  }

  getCarById(id : number){
    const index = this.listCar().findIndex((c) => c.id === id)

    if(index === -1){
      return
    }

    return this.listCar()[index]
  }

}
