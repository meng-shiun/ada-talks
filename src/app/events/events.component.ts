import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IEvent } from '../shared/interfaces/event';

import * as fromRoot from '../store/app.store';
import * as fromEvent from './store';
import * as eventActions from './store/event.actions';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$: Observable<IEvent[]>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.store.dispatch(eventActions.loadEvents());
  }

  ngOnInit() {
    this.events$ = this.store.pipe(select(fromEvent.selectEvents));
  }

}
