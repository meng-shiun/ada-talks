import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SpeakerActions from './speaker.actions';
import { SpeakerService } from '../speaker.service';
import { ISpeaker } from 'src/app/shared/interfaces/speaker';


@Injectable()
export class SpeakerEffects {
  loadAllAbout$ = createEffect(
    () => this.actions$.pipe(
      ofType(SpeakerActions.loadSpeakers),
      switchMap(action => this.speakerService.getSpeakers()
        .pipe(
          tap(data => console.log('[Load Speaker List]', data)),
          map((speakers: ISpeaker[]) => SpeakerActions.loadSpeakersSuccess({ payload: speakers })),
          catchError(err => of(SpeakerActions.loadSpeakersFail({ error: err })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private speakerService: SpeakerService
  ) {}
}
