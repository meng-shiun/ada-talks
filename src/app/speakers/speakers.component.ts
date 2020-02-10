import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpeaker } from '../shared/interfaces/speaker';
import { SpeakerService } from './speaker.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers$: Observable<ISpeaker[]>;

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    this.speakers$ = this.speakerService.getSpeakers();
  }

}
