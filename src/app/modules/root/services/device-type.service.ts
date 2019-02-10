import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeService {

  // PROPERTIES
  public mobile: Observable<boolean>;
  public mediaQuery: Observable<string>;

  // CONSTRUCTOR
  constructor(_mediaObserver: MediaObserver) {
    this.mobile = _mediaObserver.media$.pipe(map((change: MediaChange) => ['sm', 'xs'].indexOf(change.mqAlias) >= 0));
    this.mediaQuery = _mediaObserver.media$.pipe(map((change: MediaChange) => change.mqAlias));
  }
}
