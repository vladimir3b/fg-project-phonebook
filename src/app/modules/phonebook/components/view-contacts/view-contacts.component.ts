import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContactModel } from 'src/app/data/models/contact.model';
// My imports
import { CONTACTS } from './../../../../data/fake-data/contacts.fake-data';
import { DeviceTypeService } from '../../../root/services/device-type.service';
import { FakeLoadingDataService } from './../../../../data/fake-data/fake-loading-data.service';


@Component({
  selector: 'fg-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit, OnDestroy {

  // PROPERTIES
  private _watchers: Array<Subscription>;
  public mobileDevice: boolean;
  public contacts: Array<IContactModel>;
  public displayedColumns: Array<string> = [ 'firstName', 'lastName' ];

  // CONSTRUCTOR
  constructor(
      private _deviceTypeService: DeviceTypeService,
      private _fakeLoadingData: FakeLoadingDataService
  ) {
    this._watchers = [];
    this.contacts = this._fakeLoadingData.contactsData;
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
    this._watchers.push(this._deviceTypeService.mobile.subscribe(((mobileDevice: boolean) => {
      this.mobileDevice = mobileDevice;
    })));
  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => {
      watcher.unsubscribe();
    });
  }

}
