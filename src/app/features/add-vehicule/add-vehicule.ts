import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../../core/services/car-service/car-service';

@Component({
  selector: 'app-add-vehicule',
  imports: [ReactiveFormsModule],
  templateUrl: './add-vehicule.html',
  styleUrl: './add-vehicule.css',
})
export class AddVehicule {
  private readonly carService = inject(CarService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  readonly carForm = this.fb.nonNullable.group({
    brand: '',
    color: '',
    puissance: 0,
    imageUrl: '',
  });

  addCar(): void {
    this.carService.addCar(this.carForm.getRawValue());
    this.router.navigateByUrl('/voitures');
  }
}
