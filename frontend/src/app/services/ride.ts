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
}
