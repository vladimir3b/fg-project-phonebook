import { ITabItemModel } from './../models/tab-item.model';
/***
 *    ███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ███████╗
 *    ████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██╔════╝
 *    ██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗█████╗
 *    ██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██╔══╝
 *    ██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗
 *    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
 *
 *    ████████╗ █████╗ ██████╗ ███████╗
 *    ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝
 *       ██║   ███████║██████╔╝███████╗
 *       ██║   ██╔══██║██╔══██╗╚════██║
 *       ██║   ██║  ██║██████╔╝███████║
 *       ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚══════╝
 *
 *    ███████╗███████╗██████╗ ██╗   ██╗██╗ ██████╗███████╗
 *    ██╔════╝██╔════╝██╔══██╗██║   ██║██║██╔════╝██╔════╝
 *    ███████╗█████╗  ██████╔╝██║   ██║██║██║     █████╗
 *    ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║██║     ██╔══╝
 *    ███████║███████╗██║  ██║ ╚████╔╝ ██║╚██████╗███████╗
 *    ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝ ╚═════╝╚══════╝
 *
 */
import { Injectable } from '@angular/core';
// MY IMPORTS
import { IContactModel } from 'src/app/data/models/contact.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageTabsService {

/***
 *    ┌─┐┬─┐┌─┐┌─┐┌─┐┬─┐┌┬┐┬┌─┐┌─┐
 *    ├─┘├┬┘│ │├─┘├┤ ├┬┘ │ │├┤ └─┐
 *    ┴  ┴└─└─┘┴  └─┘┴└─ ┴ ┴└─┘└─┘
 */
  private _contactTabs: Array<ITabItemModel>;
  public contactTabsEvents: Subject<Array<ITabItemModel>>;


/***
 *    ┌─┐┌─┐┌┐┌┌─┐┌┬┐┬─┐┬ ┬┌─┐┌┬┐┌─┐┬─┐
 *    │  │ ││││└─┐ │ ├┬┘│ ││   │ │ │├┬┘
 *    └─┘└─┘┘└┘└─┘ ┴ ┴└─└─┘└─┘ ┴ └─┘┴└─
 */
  constructor() {
    this.contactTabsEvents = new Subject();
    this.resetTabs();
  }

/***
 *    ┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
 *    │││├┤  │ ├─┤│ │ ││└─┐
 *    ┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
 */
  private _newTabEvent(): void {
    this.contactTabsEvents.next(this._contactTabs);
  }

  private _createTab(contact: IContactModel): ITabItemModel {
    return {
      caption: `${contact.firstName} ${contact.lastName}`,
      data: contact
    };
  }

  public resetTabs(): void {
    this._contactTabs = [];
    this._newTabEvent();
  }

  public addTab(contact: IContactModel): void {
    this._contactTabs.push(this._createTab(contact));
    this._newTabEvent();
  }

  public deleteTab(contact: IContactModel): void {
    this._contactTabs.splice(this._contactTabs.indexOf(this._createTab(contact)), 1 );
    this._newTabEvent();
  }

}
