import { ActionReducerMap } from '@ngrx/store';

import * as fromAbout from '../about/store/about.reducer';
import * as fromSpeaker from '../speakers/store/speaker.reducer';

export interface AppState {
  about: fromAbout.AboutState;
  speakers: fromSpeaker.SpeakerState;
}

export const reducers: ActionReducerMap<AppState> = {
  about: fromAbout.reducer,
  speakers: fromSpeaker.reducer
};
