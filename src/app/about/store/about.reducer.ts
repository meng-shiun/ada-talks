import { createReducer, on, Action } from '@ngrx/store';

import * as AboutActions from './about.actions';
import { IAbout } from 'src/app/shared/interfaces/about';

/* Defining the state shape */
export interface AboutState {
  aboutList: IAbout[];
  error: string;
  loaded: boolean;
}

/* Setting the initial state */
export const initialState: AboutState = {
  aboutList: null,
  error: '',
  loaded: false
};

/* Creating the reducer function */
const aboutReducer = createReducer(
  initialState,
  on(AboutActions.loadAllAboutSuccess, (state, { payload }) => ({
    ...state,
    aboutList: payload,
    error: '',
    loaded: true
  })),
  on(AboutActions.loadAllAboutFail, (state, { error }) => ({
    ...state,
    aboutList: null,
    error,
    loaded: false
  }))
);

export function reducer(state: AboutState | undefined, action: Action) {
  return aboutReducer(state, action);
}
