import { createAction, props } from '@ngrx/store';

import { ISpeaker } from 'src/app/shared/interfaces/speaker';

/* ============= Load Speaker List ============= */
export const loadSpeakers = createAction('[Speakers Page] Load Speakers');

export const loadSpeakersSuccess = createAction(
  '[Speakers Page] Load Speakers Success',
  props<{ payload: ISpeaker[] }>()
);

export const loadSpeakersFail = createAction(
  '[Speakers Page] Load Speakers Fail',
  props<{ error: string }>()
);
