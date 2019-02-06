import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss']
})
export class SidebarNavigationComponent implements OnInit {

  // PROPERTIES
    public userName: string;

  // CONSTRUCTOR
  constructor() {
    this.userName = 'David Bowie';
  }

  // LIFE CYCLE HOOKS
  ngOnInit() {
  }

}
