import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IEvent } from '../shared/interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl = 'api/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.eventUrl);
  }
}
