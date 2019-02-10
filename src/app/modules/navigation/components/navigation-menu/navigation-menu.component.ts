import { DeviceTypeService } from './../../../root/services/device-type.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItemModel } from '../../models/menu-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fg-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit, OnDestroy {

  // PROPERTIES
  private _watchers: Array<Subscription>;
  private _menuItems: Array<IMenuItemModel>;
  public get menuItems(): Array<IMenuItemModel> {
    return this._menuItems.filter((item: IMenuItemModel) => item.show);
  }
  public isMobile: boolean;

  // CONSTRUCTOR
  constructor(
      private _router: Router,
      private _deviceType: DeviceTypeService
  ) {
    this._watchers = [];
    this.isMobile = false;
    this._menuItems = [
      {
        caption: 'Login',
        link: '/login',
        show: true,
        icon: 'input'
      },
      {
        caption: 'Sign Up',
        link: '/sign-up',
        show: true,
        icon: 'person_add'
      },
      {
        caption: 'View Contacts',
        link: '/view-contacts',
        show: true,
        icon: 'people'
      },
      {
        caption: 'Edit Contacts',
        link: 'edit-contacts',
        show: true,
        icon: 'edit'
      },
      {
        caption: 'User Settings',
        link: '/edit-user',
        show: true,
        icon: 'settings'
      },
      {
        caption: 'Sign Out',
        link: '#',
        show: true,
        icon: 'power_settings_new'
      }
    ];
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
    this._watchers.push(this._deviceType.mobile.subscribe((mobileDevice: boolean) => {
      this.isMobile = mobileDevice;
    }));
  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => watcher.unsubscribe());
  }

  // Methods
  public onLogout(): void {
    this._router.navigate(['']);
  }
}
