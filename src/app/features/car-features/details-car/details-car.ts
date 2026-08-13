import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../core/services/car-service/car-service';
import { Car } from '../../../core/models/car.model';

@Component({
  selector: 'app-details-car',
  imports: [],
  templateUrl: './details-car.html',
  styleUrl: './details-car.css',
})
export class DetailsCar implements OnInit {
  
  // permet de récupérer une informations au travers de la route
  activatedRoute = inject(ActivatedRoute)
  
  // permet de faire appel au methode de CarService
  carService = inject(CarService)

// l'objet à afficher , qui est vide tant que l'on à pas récupérer les informations du service
  car : Car | null = {
    id : 0,
    brand : '',
    puissance : 0,
    color : '',
    imageUrl : ''
  }
  
  // permet d'exécuter un ensemble d'actions lors de la création du composant
  ngOnInit(): void {
    // on récupère l'information de la route
    const id = +this.activatedRoute.snapshot.params['id']
    
    this.car = this.carService.getCarById(id) ?? null
  }

}