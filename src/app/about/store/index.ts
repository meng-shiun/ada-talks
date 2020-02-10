import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAbout from './about.reducer';

/* Create Feature Selector */
const selectAboutFeature = createFeatureSelector<fromAbout.AboutState>('about');

/* Create Selectors */
export const selectAllAbout = createSelector(
  selectAboutFeature,
  (state: fromAbout.AboutState) => state.aboutList
);
