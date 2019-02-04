import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditContactsComponent } from './components/edit-contacts/edit-contacts.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { DeleteContactDialogComponent } from './components/delete-contact-dialog/delete-contact-dialog.component';

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
    ...LOADING_AND_EXPORTING.imports
  ],
  exports: [
    ...LOADING_AND_EXPORTING.declarations,
    ...LOADING_AND_EXPORTING.imports
  ]
})
export class PhonebookModule { }
