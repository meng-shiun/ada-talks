import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../shared/interfaces/event';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$: Observable<IEvent[]>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events$ = this.eventService.getEvents();
  }

}
