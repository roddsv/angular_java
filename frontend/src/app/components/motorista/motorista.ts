import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RideService } from '../../services/ride';
import { Ride } from '../../models/ride';
@Component({
  selector: 'app-motorista',
  imports: [CommonModule, FormsModule],
  templateUrl: './motorista.html',
  styleUrl: './motorista.css',
})
export class DriverComponent {
  private rideService = inject(RideService);

  motoristaId = 3;

  availableRides: Ride[] = [];
  activeRide: Ride | null = null;

  getAvailableRides(): void {
    this.availableRides = [
      {id: 10, userId: 3, passageiroId: 1, origem: 'Rua A', destino: 'Rua B', status: 'SOLICITADO'}
    ];
  }

  ngOnInit(): void {
    this.getAvailableRides();
  }

  acceptRide(rideId: number): void {
    console.log(`Motorista ${this.motoristaId} aceitou a corrida ${rideId}`);
  }
}
