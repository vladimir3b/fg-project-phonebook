import { Component, OnInit } from '@angular/core';
import { IMenuItemModel } from 'src/app/models/menu-item.model';

@Component({
  selector: 'fg-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  // PROPERTIES
  private _menuItems: Array<IMenuItemModel>;
  public get menuItems(): Array<IMenuItemModel> {
    return this._menuItems.filter((item: IMenuItemModel) => item.show);
  }


  // CONSTRUCTOR
  constructor() {
    this._menuItems = [
      {
        caption: 'Login',
        link: '#',
        show: true,
        icon: 'input'
      },
      {
        caption: 'Create account',
        link: '#',
        show: true,
        icon: 'person_add'
      },
      {
        caption: 'View Contacts',
        link: '#',
        show: true,
        icon: 'people'
      },
      {
        caption: 'Edit Contacts',
        link: '#',
        show: true,
        icon: 'edit'
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
  public ngOnInit(): void { }


}
