/***
 *    ██╗   ██╗██╗███████╗██╗    ██╗       ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗███████╗
 *    ██║   ██║██║██╔════╝██║    ██║      ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝██╔════╝
 *    ██║   ██║██║█████╗  ██║ █╗ ██║█████╗██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   ███████╗
 *    ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════╝██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   ╚════██║
 *     ╚████╔╝ ██║███████╗╚███╔███╔╝      ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   ███████║
 *      ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝        ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚══════╝
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
  MatPaginator,
  MatTableDataSource,
  MatSort
} from '@angular/material';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
// MY IMPORTS
import { DeviceService } from '../../../root/services/device.service';
import { FakeLoadingDataService } from './../../../../data/fake-data/fake-loading-data.service';
import { IContactModel } from 'src/app/data/models/contact.model';
import { devicesType } from '../../../root/models/types';

@Component({
  selector: 'fg-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ViewContactsComponent implements OnInit, OnDestroy {

/***
 *    ┌─┐┬─┐┌─┐┌─┐┌─┐┬─┐┌┬┐┬┌─┐┌─┐
 *    ├─┘├┬┘│ │├─┘├┤ ├┬┘ │ │├┤ └─┐
 *    ┴  ┴└─└─┘┴  └─┘┴└─ ┴ ┴└─┘└─┘
 */
  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild(MatSort) private _sort: MatSort;
  private _watchers: Array<Subscription>;
  private _expandedContact: IContactModel | null;
  public _contactsOnTheCurrentPage: Array<IContactModel>;
  public selection: SelectionModel<IContactModel>;
  public deviceType: devicesType;
  public contacts: MatTableDataSource<IContactModel>;
  public displayedColumns: Array<string>;


/***
 *    ┌─┐┌─┐┌┐┌┌─┐┌┬┐┬─┐┬ ┬┌─┐┌┬┐┌─┐┬─┐
 *    │  │ ││││└─┐ │ ├┬┘│ ││   │ │ │├┬┘
 *    └─┘└─┘┘└┘└─┘ ┴ ┴└─└─┘└─┘ ┴ └─┘┴└─
 */
  constructor(
      private _device: DeviceService,
      private _fakeLoadingData: FakeLoadingDataService
  ) {
    this._expandedContact = null;
    this._watchers = [];
    this.selection = new SelectionModel(true, []);
    this.contacts = new MatTableDataSource(this._fakeLoadingData.contactsData);
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
    this._watchers.push(this._device.type.subscribe(((deviceType: devicesType) => {
      this.deviceType = deviceType;
      switch (this.deviceType) {
        case 'mobile':
          this.displayedColumns = [ 'select', 'firstName', 'lastName' ];
          break;
        case 'tablet':
          this.displayedColumns = [ 'select', 'index', 'firstName', 'lastName', 'mainPhone' ];
          break;
        default:
          this.displayedColumns = [ 'select', 'index', 'firstName', 'lastName', 'alias', 'group', 'mainPhone', 'mainEmail' ];
      }
    })));
    this._watchers.push(this.contacts.connect()
      .subscribe((persons: Array<IContactModel>) => this._contactsOnTheCurrentPage = persons));
    this.contacts.paginator = this._paginator;
    this.contacts.sort = this._sort;
  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => watcher.unsubscribe());
  }


/***
 *    ┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
 *    │││├┤  │ ├─┤│ │ ││└─┐
 *    ┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
 */
  public applyFilter(filterValue: string): void {
    this.contacts.filter = filterValue.trim().toLowerCase();
    if (this.contacts.paginator) {
      this.contacts.paginator.firstPage();
    }
  }

  public calculateIndex(localIndex: number): number {
    return this._paginator.pageSize * this._paginator.pageIndex + localIndex + 1;
  }

  public expandContact(contact: IContactModel): void {
    if (contact === this._expandedContact) {
      this._expandedContact = null;
    } else  {
      this._expandedContact = contact;
    }
  }

  public showExpanded(contact: IContactModel): 'expanded' | 'collapsed' {
    return this._expandedContact === contact ? 'expanded' : 'collapsed';
  }

  public contactExpanded(contact: IContactModel): boolean {
    return this._expandedContact === contact;
  }

  public isAllSelected(): boolean {
    return this.selection.selected.length === this._contactsOnTheCurrentPage.length;
  }

  public masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this._contactsOnTheCurrentPage.forEach(row => this.selection.select(row));
  }

  showNice(): Array<string> {
    return  this._contactsOnTheCurrentPage.map((person) => `${person.firstName} ${person.lastName}`);
  }

}


