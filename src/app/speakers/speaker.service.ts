import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ISpeaker } from '../shared/interfaces/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  private speakerUrl = 'api/speakers';

  constructor(private http: HttpClient) { }

  getSpeakers(): Observable<ISpeaker[]> {
    return this.http.get<ISpeaker[]>(this.speakerUrl);
  }
}
