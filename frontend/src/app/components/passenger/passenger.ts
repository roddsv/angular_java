import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RideService } from '../../services/ride';
import { Ride } from '../../models/ride';

@Component({
  selector: 'app-passenger',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './passenger.html',
  styleUrl: './passenger.css',
})
export class PassengerComponent {

  private rideService = inject(RideService);

  origem: string = '';
  destino: string = '';

  rideStatus: string = 'NENHUMA';
  lastOrigem: string = '';
  lastDestino: string = '';
  currentRideId?: number;


  requestRide(): void {
    if(!this.origem || !this.destino) {
      alert('Favor inserir origem e destino');
      return;
    }

    const newRide: Ride = {
      userId: 2,
      origem: this.origem,
      destino: this.destino
    }

    this.rideService.createRide(newRide).subscribe({
      next: (savedRide) => {
        this.rideStatus = savedRide.status || 'SOLICITADO';
        this.lastOrigem = savedRide.origem;
        this.lastDestino = savedRide.destino;
        this.currentRideId = savedRide.id;

        this.origem = '';
        this.destino = '';

        console.log("Corrida criada com sucesso:", savedRide);
      },
      error: (err) => {
        console.error("Erro ao conectar com o gateway: ", err);
      }
    })


  }
}
