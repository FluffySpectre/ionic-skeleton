import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home-page/home-page.module';

import { SafePipe } from '../pipe/safe';
import { Network } from '@ionic-native/network';
import { AppConfig } from '../providers/app-config';
import { IonicStorageModule } from '@ionic/storage'

@NgModule({
  declarations: [
    MyApp,
    SafePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    AppConfig,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
