import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // PROPERTIES

  @Output() public toggleSideBar: EventEmitter<void>;


  // CONSTRUCTOR
  constructor() {
    this.toggleSideBar = new EventEmitter();
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void { }

  // METHODS
  public openSidebar(): void {
    this.toggleSideBar.emit();
  }

}
