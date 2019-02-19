/***
 *    ███████╗██████╗ ██╗████████╗    ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
 *    ██╔════╝██╔══██╗██║╚══██╔══╝   ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
 *    █████╗  ██║  ██║██║   ██║█████╗██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║
 *    ██╔══╝  ██║  ██║██║   ██║╚════╝██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║
 *    ███████╗██████╔╝██║   ██║      ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║
 *    ╚══════╝╚═════╝ ╚═╝   ╚═╝       ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝
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
  Input,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';
// MY IMPORTS
import { devicesType } from '../../../root/models/types';
import { IContactModel } from '../../../../data/models/contact.model';
import { DeviceService } from './../../../root/services/device.service';
import { genderType, groupType } from '../../../../data/models/types';
import { GROUPS } from '../../../../data/fake-data/contacts.fake-data';



@Component({
  selector: 'fg-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit, OnDestroy, AfterViewInit {

/***
 *    ┌─┐┬─┐┌─┐┌─┐┌─┐┬─┐┌┬┐┬┌─┐┌─┐
 *    ├─┘├┬┘│ │├─┘├┤ ├┬┘ │ │├┤ └─┐
 *    ┴  ┴└─└─┘┴  └─┘┴└─ ┴ ┴└─┘└─┘
 */
  private _watchers: Array<Subscription>;
  @Input() public contact: IContactModel | null;
  public deviceType: devicesType;
  public gender: genderType;
  public groups: Array<groupType> = GROUPS;
  public contactForm: FormGroup;


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
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.required
      ]),
      alias: new FormControl(null, [
        Validators.required
      ])
    });
    console.log(this.contactForm);

  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => watcher.unsubscribe());
  }

  public ngAfterViewInit() {
    (<any>this.contactForm.controls['firstName']).updateValue('mama are mere');
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
