import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ISpeaker } from '../shared/interfaces/speaker';

import * as fromRoot from '../store/app.store';
import * as fromSpeaker from './store';
import * as speakerActions from './store/speaker.actions';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers$: Observable<ISpeaker[]>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.store.dispatch(speakerActions.loadSpeakers());
  }

  ngOnInit() {
    this.speakers$ = this.store.pipe(select(fromSpeaker.selectSpeakers));
  }

}
