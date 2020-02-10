import { ActionReducerMap } from '@ngrx/store';

import * as fromAbout from '../about/store/about.reducer';
import * as fromSpeaker from '../speakers/store/speaker.reducer';
import * as fromEvent from '../events/store/event.reducer';

export interface AppState {
  about: fromAbout.AboutState;
  speakers: fromSpeaker.SpeakerState;
  events: fromEvent.EventState;
}

export const reducers: ActionReducerMap<AppState> = {
  about: fromAbout.reducer,
  speakers: fromSpeaker.reducer,
  events: fromEvent.reducer
};
