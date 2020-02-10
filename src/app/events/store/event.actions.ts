import { createAction, props } from '@ngrx/store';

import { IEvent } from 'src/app/shared/interfaces/event';

/* ============= Load Event List ============= */
export const loadEvents = createAction('[Events Page] Load Events');

export const loadEventsSuccess = createAction(
  '[Events Page] Load Events Success',
  props<{ payload: IEvent[] }>()
);

export const loadEventsFail = createAction(
  '[Events Page] Load Events Fail',
  props<{ error: string }>()
);
