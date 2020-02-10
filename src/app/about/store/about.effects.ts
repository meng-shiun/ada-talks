import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AboutActions from './about.actions';
import { AboutService } from '../about.service';
import { IAbout } from '../../shared/interfaces/about';

@Injectable()
export class AboutEffects {
  loadAllAbout$ = createEffect(
    () => this.actions$.pipe(
      ofType(AboutActions.loadAllAbout),
      switchMap(action => this.aboutService.getAllAbout()
        .pipe(
          tap(data => console.log('[Load About List]', data)),
          map((allAbout: IAbout[]) => AboutActions.loadAllAboutSuccess({ payload: allAbout })),
          catchError(err => of(AboutActions.loadAllAboutFail({ error: err })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private aboutService: AboutService
  ) {}
}
