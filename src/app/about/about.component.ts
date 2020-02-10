import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAbout } from '../shared/interfaces/about';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  allAbout$: Observable<IAbout[]>;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.allAbout$ = this.aboutService.getAllAbout();
  }

}
