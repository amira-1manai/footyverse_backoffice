import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { scouting } from 'src/models/scouting';

@Injectable({
    providedIn: 'root'
})
export class ScoutingService {
    private baseUrl = 'https://footyverse-backend.onrender.com';

    constructor(private http: HttpClient) { }

    getscoutings(): Observable<scouting[]> {
        return this.http.get<scouting[]>(`${this.baseUrl}/scouting`);
    }

    getscouting(id: number): Observable<scouting> {
        return this.http.get<scouting>(`${this.baseUrl}/scouting/${id}`);
    }

    addscouting(scouting: scouting): Observable<scouting> {
        return this.http.post<scouting>(`${this.baseUrl}/scouting/add`, scouting);
    }

    updatescouting(scouting: scouting): Observable<scouting> {
        return this.http.patch<scouting>(`${this.baseUrl}/scouting/${scouting._id}`, scouting);
    }

    deletescouting(id: number): Observable<scouting> {
        return this.http.delete<scouting>(`${this.baseUrl}/scouting/${id}`);
    }

    getscoutingsByType(type: string): Observable<scouting[]> {
        return this.http.get<scouting[]>(`${this.baseUrl}/scouting/type/${type}`);
    }
}