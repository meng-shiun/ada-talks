import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromEvent from './event.reducer';

/* Create Feature Selector */
const selectEventFeature = createFeatureSelector<fromEvent.EventState>('events');

/* Create Selectors */
export const selectEvents = createSelector(
  selectEventFeature,
  (state: fromEvent.EventState) => state.events
);
