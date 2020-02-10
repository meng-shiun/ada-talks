import { ActionReducerMap } from '@ngrx/store';

import * as fromAbout from '../about/store/about.reducer';

export interface AppState {
  about: fromAbout.AboutState;
}

export const reducers: ActionReducerMap<AppState> = {
  about: fromAbout.reducer
};
