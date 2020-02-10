import { createReducer, on, Action } from '@ngrx/store';

import * as SpeakerActions from './speaker.actions';
import { ISpeaker } from 'src/app/shared/interfaces/speaker';

/* Defining the state shape */
export interface SpeakerState {
  speakers: ISpeaker[];
  error: string;
  loaded: boolean;
}

/* Setting the initial state */
export const initialState: SpeakerState = {
  speakers: null,
  error: '',
  loaded: false
};

/* Creating the reducer function */
const speakerReducer = createReducer(
  initialState,
  on(SpeakerActions.loadSpeakersSuccess, (state, { payload }) => ({
    ...state,
    speakers: payload,
    error: '',
    loaded: true
  })),
  on(SpeakerActions.loadSpeakersFail, (state, { error }) => ({
    ...state,
    speakers: [],
    error,
    loaded: false
  }))
);

export function reducer(state: SpeakerState | undefined, action: Action) {
  return speakerReducer(state, action);
}
