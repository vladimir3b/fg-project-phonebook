import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// My imports
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';
import { EditContactsComponent } from './components/edit-contacts/edit-contacts.component';


const ROUTERS: Routes = [
  {
    path: 'phonebook',
    component: EditContactsComponent
  }
];

const LOADING_AND_EXPORTING = {
  declarations: [],
  imports: []
};

@NgModule({
  declarations: [ ...LOADING_AND_EXPORTING.declarations ],
  imports: [
    RouterModule.forRoot(ROUTERS),
    ...LOADING_AND_EXPORTING.imports
  ],
  exports: [
    RouterModule,
    ...LOADING_AND_EXPORTING.declarations,
    ...LOADING_AND_EXPORTING.imports
  ]
})
export class PhonebookRoutingModule { }
