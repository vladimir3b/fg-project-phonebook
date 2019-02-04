import { NgModule } from '@angular/core';
// My imports
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';

const LOADING_AND_EXPORTING = {
  declarations: [
    LoginComponent,
    EditUserComponent,
    SignUpComponent,
    DeleteUserDialogComponent
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
export class AuthenticationModule { }
