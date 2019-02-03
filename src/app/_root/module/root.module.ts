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
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';
import { NavigationMenuComponent } from '../../components/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    RootComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    SideNavigationComponent,
    NavigationMenuComponent
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
