import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recovery } from 'src/models/Recovery';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecoveryService {
  private baseUrl = 'https://footyverse-backend.onrender.com/recovery';

  constructor(private http: HttpClient) { }

  /*
  router.post('/add', addRecovery);
router.put('/update/:id', updateRecovery);
router.delete('/delete/:id', deleteRecovery);
router.get('/', getRecoveryList);
router.get('/:id', getRecoveryById);
router.get('/player/:player', getRecoveryListByPlayer);
*/


addRecovery(recovery: Recovery): Observable<Recovery> {
  return this.http.post<Recovery>(`${this.baseUrl}/add`, recovery);
}

updateRecovery(id: string): Observable<Recovery> {
  return this.http.patch<Recovery>(`${this.baseUrl}/update/${id}`, id);
}

deleteRecovery(id: string): Observable<Recovery> {
  return this.http.delete<Recovery>(`${this.baseUrl}/delete/${id}`);
}

getRecoveryList(): Observable<Recovery[]> { 
  return this.http.get<Recovery[]>(`${this.baseUrl}`);
}

getRecoveryById(id: string): Observable<Recovery> {
  return this.http.get<Recovery>(`${this.baseUrl}/${id}`);
}

getRecoveryListByPlayer(playerId: string): Observable<Recovery[]> {
  return this.http.get<Recovery[]>(`${this.baseUrl}/player/${playerId}`);
}

}
