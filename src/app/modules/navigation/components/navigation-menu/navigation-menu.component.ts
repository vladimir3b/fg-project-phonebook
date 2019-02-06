import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItemModel } from '../../models/menu-item.model';

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
  constructor(private _router: Router) {
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
  public ngOnInit(): void { }

  // Methods
  public onLogout(): void {
    this._router.navigate(['']);
  }
}
