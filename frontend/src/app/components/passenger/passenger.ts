import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passenger',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './passenger.html',
  styleUrl: './passenger.css',
})
export class PassengerComponent {
  origem: string = '';
  destino: string = '';

  rideStatus: string = 'NENHUMA';
  lastOrigem: string = '';
  lastDestino: string = ';'

  requestRide(): void {
    if(!this.origem || !this.destino) {
      alert('Favor inserir origem e destino');
      return;
    }

    this.rideStatus = 'AGUARDANDO';
    this.lastOrigem = this.origem;
    this.lastDestino = this.destino;

    this.origem = '';
    this.destino = '';
  }
}
