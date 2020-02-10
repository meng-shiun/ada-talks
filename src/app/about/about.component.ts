import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAbout } from '../shared/interfaces/about';

import * as fromRoot from '../store/app.store';
import * as fromAbout from './store';
import * as aboutActions from './store/about.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  allAbout$: Observable<IAbout[]>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.store.dispatch(aboutActions.loadAllAbout());
  }

  ngOnInit() {
    this.allAbout$ = this.store.pipe(select(fromAbout.selectAllAbout));
  }

}
