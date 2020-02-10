import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSpeaker from './speaker.reducer';

/* Create Feature Selector */
const selectSpeakerFeature = createFeatureSelector<fromSpeaker.SpeakerState>('speakers');

/* Create Selectors */
export const selectSpeakers = createSelector(
  selectSpeakerFeature,
  (state: fromSpeaker.SpeakerState) => state.speakers
);
