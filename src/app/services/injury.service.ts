import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Injury } from 'src/models/Injury';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InjuryService {
    private baseUrl = 'https://footyverse-backend.onrender.com';

    constructor(private http: HttpClient) { }

    getInjuries(): Observable<Injury[]> {
        return this.http.get<Injury[]>(`${this.baseUrl}/injury`);
    }

    getInjury(id: string): Observable<Injury> {
        return this.http.get<Injury>(`${this.baseUrl}/injury/${id}`);
    }

    addInjury(injury: Injury): Observable<Injury> {
        return this.http.post<Injury>(`${this.baseUrl}/injury/addInjury`, injury);
    }

    updateInjury(injury: Injury): Observable<Injury> {
        return this.http.patch<Injury>(`${this.baseUrl}/injury/${injury._id}`, injury);
    }

    deleteInjury(id: string): Observable<Injury> {
        return this.http.delete<Injury>(`${this.baseUrl}/injury/${id}`);
    }

    getInjuriesByPlayer(playerId: string): Observable<Injury[]> {
        return this.http.get<Injury[]>(`${this.baseUrl}/injury/injuries/${playerId}`);
    }

    setInjuryAsArchived(injury: Injury): Observable<Injury> {
        return this.http.patch<Injury>(`${this.baseUrl}/injury/setArchieved/:id/${injury._id}`, injury);
    }

    getInjuriesStatusActive(): Observable<Injury[]> {
        return this.http.get<Injury[]>(`${this.baseUrl}/injury/active`);

    }

    getInjuriesStatusArchived(): Observable<Injury[]> {
        return this.http.get<Injury[]>(`${this.baseUrl}/injury/archived`);
    }
}
