import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ListVehicule } from './features/list-vehicule/list-vehicule';
import { AddVehicule } from './features/add-vehicule/add-vehicule';
import { DetailsCar } from './features/car-features/details-car/details-car';
import { UpdateVehicule } from './features/update-vehicule/update-vehicule';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'voitures',
    component: ListVehicule,
  },
  {
    path: 'ajouter-voiture',
    component: AddVehicule,
  },
  //ici on passe un id par la route
  {
    path: 'details-car/:id',
    component: DetailsCar,
  },
  {
    path: 'modifier-voiture/:id',
    component: UpdateVehicule,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
