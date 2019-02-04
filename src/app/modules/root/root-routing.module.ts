import { PhonebookRoutingModule } from './../phonebook/phonebook-routing.module';
import { AuthenticationRoutingModule } from './../authentication/authentication-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// My imports
import { HomeComponent } from './components/home/home.component';

const ROUTERS: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

const LOADING_AND_EXPORTING = {
  declarations: [],
  imports: [
    AuthenticationRoutingModule,
    PhonebookRoutingModule
  ]
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
export class RootRoutingModule { }
