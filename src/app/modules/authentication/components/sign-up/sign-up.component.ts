import { DeviceService } from '../../../root/services/device.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { genderType } from 'src/app/data/models/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  // PROPERTIES
  private _watchers: Array<Subscription>;
  public gender: genderType;
  public isMobile: boolean;

  // CONSTRUCTOR
  constructor(private _device: DeviceService) {
    this._watchers = [];
    this.isMobile = false;
    this.gender = 'male';
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
    // this._watchers.push(this._deviceType.mobile.subscribe((isMobile: boolean) => {
    //   this.isMobile = isMobile;
    // }));
  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => {
      watcher.unsubscribe();
    });
  }

  // METHODS
  public changeGender(event: boolean):void {
    this.gender = (event) ? 'male' : 'female';
  }
}
