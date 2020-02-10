import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AboutEffects } from './about/store/about.effects';
import { SpeakerEffects } from './speakers/store/speaker.effects';
import { EventEffects } from './events/store/event.effects';
import * as fromRoot from './store/app.store';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }),
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([
      AboutEffects,
      SpeakerEffects,
      EventEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
