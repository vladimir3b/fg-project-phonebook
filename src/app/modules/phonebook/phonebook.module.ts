import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// My imports
import { DeviceService } from '../root/services/device.service';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { FakeLoadingDataService } from './../../data/fake-data/fake-loading-data.service';
import { DeleteContactDialogComponent } from './components/delete-contact-dialog/delete-contact-dialog.component';
import { PhonebookLoadingAngularMaterialModule } from './phonebook.loaging-angular-material.module';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';
import { PhonebookRoutingModule } from './phonebook.routing.module';
import { ManageTabsService } from './services/manage-tabs.service';

const LOADING_AND_EXPORTING = {
  declarations: [
    PhonebookComponent,
    EditContactComponent,
    ViewContactsComponent,
    ViewContactComponent,
    DeleteContactDialogComponent
  ],
  imports: [
    PhonebookRoutingModule
  ]
};

@NgModule({
  declarations: [ ...LOADING_AND_EXPORTING.declarations ],
  imports: [
    CommonModule,
    PhonebookLoadingAngularMaterialModule,
    ...LOADING_AND_EXPORTING.imports
  ],
  exports: [
    ...LOADING_AND_EXPORTING.declarations,
    ...LOADING_AND_EXPORTING.imports
  ],
  providers: [
    DeviceService,
    ManageTabsService,
    FakeLoadingDataService
  ]
})
export class PhonebookModule { }
