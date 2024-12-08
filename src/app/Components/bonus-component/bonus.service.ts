import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonusService {
  private apiUrl = 'http://localhost:3000/employees'; // Base URL for API requests

  constructor(private http: HttpClient) {}

  // GET: Fetch all bonuses
  getBonuses(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // POST: Create a new bonus
  createBonus(bonus: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}`, bonus, { headers });
  }

  // PUT: Update an existing bonus
  updateBonus(id: number, bonus: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/${id}`, bonus, { headers });
  }

  // DELETE: Delete a bonus by ID
  deleteBonus(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
