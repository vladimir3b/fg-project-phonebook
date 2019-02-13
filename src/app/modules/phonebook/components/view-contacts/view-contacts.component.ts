import {
  MatPaginator,
  MatTableDataSource,
  MatSort
} from '@angular/material';
import { Subscription } from 'rxjs';
import { CdkTableModule } from '@angular/cdk/table';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
// My imports
import { CONTACTS } from './../../../../data/fake-data/contacts.fake-data';
import { DeviceService } from '../../../root/services/device.service';
import { FakeLoadingDataService } from './../../../../data/fake-data/fake-loading-data.service';
import { IContactModel } from 'src/app/data/models/contact.model';


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

  // PROPERTIES
  private _watchers: Array<Subscription>;
  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild(MatSort) _sort: MatSort;
  public contacts: MatTableDataSource<IContactModel>;
  public displayedColumns: Array<{label: string, caption:string}>;
  public expandedElement: IContactModel | null;

  // CONSTRUCTOR
  constructor(
      private _device: DeviceService,
      private _fakeLoadingData: FakeLoadingDataService
  ) {
    this.expandedElement = null;
    this._watchers = [];
    this.contacts = new MatTableDataSource(this._fakeLoadingData.contactsData);
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
    // this._watchers.push(this._deviceService.mobile.subscribe(((mobileDevice: boolean) => {
    //   if (mobileDevice) {
    //     this.displayedColumns = [
    //       {
    //         label: 'index',
    //         caption: 'Index',
    //       },
    //       {
    //         label: 'alias',
    //         caption: 'Alias'
    //       },
    //       {
    //         label: 'mainPhone',
    //         caption: 'Main Phone'
    //       }
    //     ]
    //   } else {
    //     this.displayedColumns = [
    //       {
    //         label: 'index',
    //         caption: 'Index'
    //       },
    //       {
    //         label: 'firstName',
    //         caption: 'First Name'
    //       },
    //       {
    //         label: 'lastName',
    //         caption: 'Last Name'
    //       },
    //       {
    //         label: 'alias',
    //         caption: 'Alias'
    //       },
    //       {
    //         label: 'group',
    //         caption: 'Group'
    //       },
    //       {
    //         label: 'mainPhone',
    //         caption: 'Main Phone'
    //       },
    //       {
    //         label: 'mainEmail',
    //         caption: 'Main Email'
    //       }
    //     ];
    //   }
    // })));
    this.contacts.paginator = this._paginator;
    this.contacts.sort = this._sort;
  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => {
      watcher.unsubscribe();
    });
  }

  // METHODS
  public applyFilter(filterValue: string): void {
    this.contacts.filter = filterValue.trim().toLowerCase();
    if (this.contacts.paginator) {
      this.contacts.paginator.firstPage();
    }
  }

  public calculateIndex(localIndex: number): number {
    return this._paginator.pageSize * this._paginator.pageIndex + localIndex + 1;
  }

  public displayedColumnsLabels(): Array<string> {
    return this.displayedColumns.map(column => column.label);
  }

  public detailsAboutContact(contact: IContactModel, label: string): string {
    switch(label) {
      case 'index':  return '0';
      case 'mainPhone': return contact.phones[0];
      case 'mainEmail': return contact.emails[0];
      default: return contact[label];
    }
  }

}
