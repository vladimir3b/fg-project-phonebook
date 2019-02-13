import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// My imports
import { DeleteContactDialogComponent } from './components/delete-contact-dialog/delete-contact-dialog.component';
import { DeviceService } from '../root/services/device.service';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { EditContactsComponent } from './components/edit-contacts/edit-contacts.component';
import { FakeLoadingDataService } from './../../data/fake-data/fake-loading-data.service';
import { LoadingModulesModule } from './../loading-modules/loading-modules.module';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';

const LOADING_AND_EXPORTING = {
  declarations: [
    EditContactsComponent,
    EditContactComponent,
    ViewContactsComponent,
    ViewContactComponent,
    DeleteContactDialogComponent
  ],
  imports: []
};

@NgModule({
  declarations: [ ...LOADING_AND_EXPORTING.declarations ],
  imports: [
    CommonModule,
    LoadingModulesModule,
    ...LOADING_AND_EXPORTING.imports
  ],
  exports: [
    ...LOADING_AND_EXPORTING.declarations,
    ...LOADING_AND_EXPORTING.imports
  ],
  providers: [
    DeviceService,
    FakeLoadingDataService
  ]
})
export class PhonebookModule { }
