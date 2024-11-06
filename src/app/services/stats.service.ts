import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GkStats } from 'src/models/GkStats';
import { Stats } from 'src/models/Stats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private baseUrl = 'https://footyverse-backend.onrender.com/stats';

  constructor(private http: HttpClient) { }

  addStat(stat: any) {
    return this.http.post(`${this.baseUrl}/add`, stat);
  }

  getStats() {
    return this.http.get(`${this.baseUrl}`);
  }

  updateStat( stat: Stats ) {
    return this.http.patch(`${this.baseUrl}/${stat._id}`, stat);
  }

  deleteStat(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getStatById(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  add1ToAPlayerStatField(id: string, field: string) {
    return this.http.patch(`${this.baseUrl}/add1/${id}/${field}`, {});
  }

  minece1ToAPlayerStatField(id: string, field: string) {
    return this.http.patch(`${this.baseUrl}/minece1/${id}/${field}`, {});
  }

  addGkStat(stat: any) {  
    return this.http.post(`${this.baseUrl}/addGkStat`, stat);
  }

  updateGkStat(stat: GkStats) {
    return this.http.patch(`${this.baseUrl}/updateGkStat/${stat._id}`, stat);
  }

  addPlayerStats(stat: any) {
    return this.http.post(`${this.baseUrl}/addPlayerStats`, stat);
  }

  updatePlayerStats(stat: any) {
    return this.http.patch(`${this.baseUrl}/updatePlayerStats/${stat._id}`, stat);
  }

  getgkStatsByPlayerId(player: string) {
    return this.http.get(`${this.baseUrl}/getgkStatsByPlayerId/${player}`);
  }

  getPlayersStatsByPlayerId(player: string) {
    return this.http.get(`${this.baseUrl}/getPlayersStatsByPlayerId/${player}`);
  }

  getStatByPlayerId(player: string) {
    return this.http.get(`${this.baseUrl}/getStatByPlayerId/${player}`);
  }
}
