import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Ride } from '../models/ride';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RideService {
  private http = inject(HttpClient);
  private apiUrl = '/api/rides';

  createRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>(this.apiUrl, ride)
  }

  getAvailableRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.apiUrl + '/available');
  }

  acceptRide(rideId: number, motoristaId: number): Observable<Ride> {
    return this.http.put<Ride>(`${this.apiUrl}/${rideId}/accept?motoristaId=${motoristaId}`, null);
  }
}
