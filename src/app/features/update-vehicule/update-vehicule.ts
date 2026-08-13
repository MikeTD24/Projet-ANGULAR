import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../core/services/car-service/car-service';

@Component({
  selector: 'app-update-vehicule',
  imports: [ReactiveFormsModule],
  templateUrl: './update-vehicule.html',
  styleUrl: './update-vehicule.css',
})
export class UpdateVehicule implements OnInit {
  private readonly carService = inject(CarService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  private carId = 0;

  readonly carForm = this.fb.nonNullable.group({
    brand: '',
    color: '',
    puissance: 0,
    imageUrl: '',
  });

  ngOnInit(): void {
    this.carId = Number(this.route.snapshot.paramMap.get('id'));
    const car = this.carService.getCarById(this.carId);

    if (!car) {
      this.router.navigateByUrl('/voitures');
      return;
    }

    this.carForm.setValue({
      brand: car.brand,
      color: car.color,
      puissance: car.puissance,
      imageUrl: car.imageUrl,
    });
  }

  updateCar(): void {
    this.carService.updateCar(this.carId, this.carForm.getRawValue());
    this.router.navigateByUrl('/voitures');
  }
}
