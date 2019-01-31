import { MaterialModule } from './../../modules/material.module';
import { RootRouterModule } from './../../modules/routers/root-router.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from '../component/root.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// My elements
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { HomeComponent } from '../../components/home/home.component';

@NgModule({
  declarations: [
    RootComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RootRouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
