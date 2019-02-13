import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// My imports
import { AuthenticationLoadingAngularMaterialModule } from './authentication.loading-angular-material.module';
import { AuthenticationRoutingModule } from './authentication.routing.module';
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
  imports: [
    AuthenticationRoutingModule
  ]
};

@NgModule({
  declarations: [ ...LOADING_AND_EXPORTING.declarations ],
  imports: [
    CommonModule,
    AuthenticationLoadingAngularMaterialModule,
    ...LOADING_AND_EXPORTING.imports
  ],
  exports: [
    ...LOADING_AND_EXPORTING.declarations,
    ...LOADING_AND_EXPORTING.imports
  ]
})
export class AuthenticationModule { }
