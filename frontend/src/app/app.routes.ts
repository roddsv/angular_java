import { Routes } from '@angular/router';
import { PassengerComponent } from './components/passenger/passenger';
import { DriverComponent } from './components/motorista/motorista';

export const routes: Routes = [
  { path: 'passenger', component: PassengerComponent},
  { path: 'motorista', component: DriverComponent },
  { path: '', redirectTo: '/passenger', pathMatch: 'full' }
];
