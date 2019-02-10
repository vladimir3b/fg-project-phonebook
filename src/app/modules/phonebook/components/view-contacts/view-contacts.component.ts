import { DeviceTypeService } from '../../../root/services/device-type.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'fg-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit, OnDestroy {

  public mobileDevice: boolean;
  private _watcher: Subscription;

  constructor(private _deviceTypeService: DeviceTypeService) {
    this._watcher = _deviceTypeService.mobile.subscribe(((mobileDevice: boolean) => {
      this.mobileDevice = mobileDevice;
    }));
  }

  ngOnInit() { }

  ngOnDestroy() {
    this._watcher.unsubscribe();
  }

}
