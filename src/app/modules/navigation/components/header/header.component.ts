import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy
} from '@angular/core';
// My imports
import { DeviceService } from './../../../root/services/device.service';
import { devicesType } from 'src/app/modules/root/models/types';

@Component({
  selector: 'fg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // PROPERTIES
  private _watchers: Array<Subscription>;
  public deviceType: devicesType;
  @Input() public userName: string;
  @Output() public toggleSideBar: EventEmitter<void>;


  // CONSTRUCTOR
  constructor(private _device: DeviceService) {
    this._watchers = [];
    this.toggleSideBar = new EventEmitter();
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
    this._watchers.push(this._device.type
        .subscribe((deviceType: devicesType) => this.deviceType = deviceType));
  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => watcher.unsubscribe());
  }
  // METHODS
  public openSidebar(): void {
    this.toggleSideBar.emit();
  }


}
