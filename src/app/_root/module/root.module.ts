import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// My elements
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { RootComponent } from '../component/root.component';
import { MaterialModule } from './../../modules/material.module';
import { HomeComponent } from '../../components/home/home.component';
import { RootRouterModule } from './../../modules/routers/root-router.module';

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
    MaterialModule,
    BrowserAnimationsModule 
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
