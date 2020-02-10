import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as EventActions from './event.actions';
import { EventService } from '../event.service';
import { IEvent } from 'src/app/shared/interfaces/event';


@Injectable()
export class EventEffects {
  loadAllEvents$ = createEffect(
    () => this.actions$.pipe(
      ofType(EventActions.loadEvents),
      switchMap(action => this.eventService.getEvents()
        .pipe(
          tap(data => console.log('[Load Event List]', data)),
          map((events: IEvent[]) => EventActions.loadEventsSuccess({ payload: events })),
          catchError(err => of(EventActions.loadEventsFail({ error: err })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private eventService: EventService  ) {}
}
