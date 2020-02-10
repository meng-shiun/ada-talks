import { createAction, props } from '@ngrx/store';

import { IAbout } from 'src/app/shared/interfaces/about';

/* ============= Load About List ============= */
export const loadAllAbout = createAction('[About Page] Load All About');

export const loadAllAboutSuccess = createAction(
  '[About Page] Load All About Success',
  props<{ payload: IAbout[] }>()
);

export const loadAllAboutFail = createAction(
  '[About Page] Load All About Fail',
  props<{ error: string }>()
);
