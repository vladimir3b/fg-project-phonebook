import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// My imports
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

const ROUTERS: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'edit-user',
    component: DeleteUserDialogComponent
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
export class AuthenticationRoutingModule { }
