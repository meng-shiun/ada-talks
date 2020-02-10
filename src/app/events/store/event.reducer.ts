import { createReducer, on, Action } from '@ngrx/store';

import * as EventActions from './event.actions';
import { IEvent } from 'src/app/shared/interfaces/event';

/* Defining the state shape */
export interface EventState {
  events: IEvent[];
  error: string;
  loaded: boolean;
}

/* Setting the initial state */
export const initialState: EventState = {
  events: null,
  error: '',
  loaded: false
};

/* Creating the reducer function */
const eventReducer = createReducer(
  initialState,
  on(EventActions.loadEventsSuccess, (state, { payload }) => ({
    ...state,
    events: payload,
    error: '',
    loaded: true
  })),
  on(EventActions.loadEventsFail, (state, { error }) => ({
    ...state,
    events: [],
    error,
    loaded: false
  }))
);

export function reducer(state: EventState | undefined, action: Action) {
  return eventReducer(state, action);
}
