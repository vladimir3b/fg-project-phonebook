import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// My components
import { HomeComponent } from './../../components/home/home.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { SignInComponent } from './../../components/sign-in/sign-in.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class RootRouterModule { }
