import { Routes } from '@angular/router';
import { PassengerComponent } from './components/passenger/passenger';

export const routes: Routes = [
  { path: 'passenger', component: PassengerComponent},
  { path: '', redirectTo: '/passenger', pathMatch: 'full' }
];
