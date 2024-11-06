import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/models/Player';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = 'https://footyverse-backend.onrender.com/player';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.baseUrl}/get-players`);
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.baseUrl}/get-player/${id}`);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/add`, player);
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.patch<Player>(`${this.baseUrl}/update/${player._id}`, player);
  }

  deletePlayer(id: string): Observable<Player> {
    return this.http.delete<Player>(`${this.baseUrl}/delete/${id}`);
  }

  uploadAvatar(avatar: File): Observable<{ path: string }> {
    const formData = new FormData();
    formData.append('file', avatar);
    return this.http.post<{ path: string }>("https://footyverse-backend.onrender.com/upload", formData);
  }
}
