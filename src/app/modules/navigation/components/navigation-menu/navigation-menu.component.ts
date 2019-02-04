import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  // CONSTRUCTOR
  constructor() { }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
  }

  // METHODS
  public onLogout(): void {
    console.log('logged out');
  }
}
