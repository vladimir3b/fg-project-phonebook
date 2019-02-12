import { Component, OnInit, Input } from '@angular/core';
// My imports
import { IContactModel } from './../../../../data/models/contact.model';

@Component({
  selector: 'fg-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  // PROPERTIES
  @Input() public contact: IContactModel;

  // CONSTRUCTOR
  constructor() { }

  // LIFE CYCLE HOOKS
  ngOnInit() {
  }

}
