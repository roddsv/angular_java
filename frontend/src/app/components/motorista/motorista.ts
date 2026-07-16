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
    this.rideService.getAvailableRides().subscribe({
      next: (rides) => {
        this.availableRides = rides;
        console.log('Corridas disponíveis carregadas:', rides);
      },
      error: (error) => {
        console.error('Erro ao buscar corridas disponíveis:', error);
      }
    });
  };

  ngOnInit(): void {
    this.getAvailableRides();
  }

  acceptRide(rideId: number): void {
    this.rideService.acceptRide(rideId, this.motoristaId).subscribe({
      next: (updatedRide) => {
        this.activeRide = updatedRide;
        this.availableRides = this.availableRides.filter(r => r.id !== rideId);
        console.log('Corrida aceita com sucesso:', updatedRide);
      },
      error: (err) => {
        console.error('Erro ao aceitar corrida:', err);
        alert('Não foi possível aceitar esta corrida no momento.');
      }
    });
  }
}
