import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// My imports
import { devicesType } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  // PROPERTIES
  public type: Observable<devicesType>;

  // CONSTRUCTOR
  constructor(_mediaObserver: MediaObserver) {
    this.type = _mediaObserver.media$.pipe(map((change: MediaChange): devicesType => {
      switch (change.mqAlias) {
        case 'xs': return 'mobile';
        case 'sm': return 'tablet';
        default: return 'desktop';
      }
    }));
  }
}
