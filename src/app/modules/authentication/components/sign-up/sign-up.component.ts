/***
 *    ███████╗██╗ ██████╗ ███╗   ██╗      ██╗   ██╗██████╗
 *    ██╔════╝██║██╔════╝ ████╗  ██║      ██║   ██║██╔══██╗
 *    ███████╗██║██║  ███╗██╔██╗ ██║█████╗██║   ██║██████╔╝
 *    ╚════██║██║██║   ██║██║╚██╗██║╚════╝██║   ██║██╔═══╝
 *    ███████║██║╚██████╔╝██║ ╚████║      ╚██████╔╝██║
 *    ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝       ╚═════╝ ╚═╝
 *
 *     ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
 *    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
 *    ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║
 *    ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║
 *    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║
 *     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝
 *
 *    ████████╗███████╗
 *    ╚══██╔══╝██╔════╝
 *       ██║   ███████╗
 *       ██║   ╚════██║
 *       ██║   ███████║
 *       ╚═╝   ╚══════╝
 *
 */
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
// MY IMPORTS
import { genderType } from '../../../../data/models/types';
import { devicesType } from '../../../root/models/types';
import { DeviceService } from '../../../root/services/device.service';

@Component({
  selector: 'fg-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

 /***
 *    ┌─┐┬─┐┌─┐┌─┐┌─┐┬─┐┌┬┐┬┌─┐┌─┐
 *    ├─┘├┬┘│ │├─┘├┤ ├┬┘ │ │├┤ └─┐
 *    ┴  ┴└─└─┘┴  └─┘┴└─ ┴ ┴└─┘└─┘
 */
  private _watchers: Array<Subscription>;
  public gender: genderType;
  public deviceType: devicesType;


/***
 *    ┌─┐┌─┐┌┐┌┌─┐┌┬┐┬─┐┬ ┬┌─┐┌┬┐┌─┐┬─┐
 *    │  │ ││││└─┐ │ ├┬┘│ ││   │ │ │├┬┘
 *    └─┘└─┘┘└┘└─┘ ┴ ┴└─└─┘└─┘ ┴ └─┘┴└─
 */
  constructor(private _device: DeviceService) {
    this._watchers = [];
    this.gender = 'male';
  }


/***
 *    ┬  ┬┌─┐┌─┐
 *    │  │├┤ ├┤
 *    ┴─┘┴└  └─┘
 *    ┌─┐┬ ┬┌─┐┬  ┌─┐
 *    │  └┬┘│  │  ├┤
 *    └─┘ ┴ └─┘┴─┘└─┘
 *    ┬ ┬┌─┐┌─┐┬┌─┌─┐
 *    ├─┤│ ││ │├┴┐└─┐
 *    ┴ ┴└─┘└─┘┴ ┴└─┘
 */
  public ngOnInit(): void {
    this._watchers.push(this._device.type
      .subscribe((deviceType: devicesType) => this.deviceType = deviceType));
  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => watcher.unsubscribe());
  }


/***
 *    ┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
 *    │││├┤  │ ├─┤│ │ ││└─┐
 *    ┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
 */
  public changeGender(event: boolean):void {
    this.gender = (event) ? 'male' : 'female';
  }

}
