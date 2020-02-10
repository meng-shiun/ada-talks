import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAbout } from '../shared/interfaces/about';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private aboutUrl = 'api/about';

  constructor(private http: HttpClient) { }

  getAllAbout(): Observable<IAbout[]> {
    return this.http.get<IAbout[]>(this.aboutUrl);
  }
}
