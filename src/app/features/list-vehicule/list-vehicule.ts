import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../core/services/car-service/car-service';

@Component({
  selector: 'app-list-vehicule',
  imports: [],
  templateUrl: './list-vehicule.html',
  styleUrl: './list-vehicule.css',
})
export class ListVehicule {
  private readonly carService = inject(CarService);
  private readonly router = inject(Router);

  // Signal en lecture seule provenant du service.
  readonly listCars = this.carService.getCars();

  deleteCar(id: number): void {
    this.carService.deleteCar(id);
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/details-car', id]);
  }

  navigateToUpdate(id: number): void {
    this.router.navigate(['/modifier-voiture', id]);
  }
}
