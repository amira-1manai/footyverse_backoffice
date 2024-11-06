import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'src/models/calendarevent';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl = 'https://footyverse-backend.onrender.com';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(`${this.baseUrl}/calendar`);
  }

  getEventById(id: number): Observable<CalendarEvent> {
    return this.http.get<CalendarEvent>(`${this.baseUrl}/calendar/${id}`);
  }

  addEvent(event: CalendarEvent): Observable<CalendarEvent> {
    return this.http.post<CalendarEvent>(`${this.baseUrl}/calendar/add`, event);
  }

  updateEvent(event: CalendarEvent): Observable<CalendarEvent> {
    return this.http.patch<CalendarEvent>(`${this.baseUrl}/calendar/${event._id}`, event);
  }

  deleteEvent(id: number): Observable<CalendarEvent> {
    return this.http.delete<CalendarEvent>(`${this.baseUrl}/calendar/${id}`);
  }
}
