import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// My imports
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

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
    component: EditUserComponent
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
