import * as _ from 'lodash';
import { Injectable } from '@angular/core';
// My imports
import { CONTACTS } from './contacts.fake-data';
import { IContactModel } from './../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingDataService {

  // PROPERTIES
  private _contactsData: Array<IContactModel>;
  public get contactsData(): Array<IContactModel> {
    return _.cloneDeep(this._contactsData);
  }

  // CONSTRUCTOR
  constructor() {
    this._contactsData = CONTACTS;
  }

}
