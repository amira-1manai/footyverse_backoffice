import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from 'src/models/Training';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  
  private baseUrl = 'https://footyverse-backend.onrender.com/training';

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.baseUrl);
  }

  getTraining(id: string): Observable<Training> {
    return this.http.get<Training>(`${this.baseUrl}/${id}`);
  }

  addTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(`${this.baseUrl}/createTraining`, training);
  }

  updateTraining(training: Training): Observable<Training> {
    return this.http.patch<Training>(`${this.baseUrl}/${training._id}`, training);
  }

  deleteTraining(id: string): Observable<Training> {
    return this.http.delete<Training>(`${this.baseUrl}/${id}`);
  }
}
