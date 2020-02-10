import { InMemoryDbService } from 'angular-in-memory-web-api';

import { aboutData } from './data/about';
import { speakerData } from './data/speakers';
import { eventData } from './data/events';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const about = aboutData;
    const speakers = speakerData;
    const events = eventData;

    return {
      about,
      speakers,
      events
    };
  }
}
