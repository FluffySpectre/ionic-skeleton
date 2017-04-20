import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelloWorldModule } from '../../components/hello-world/hello-world.module';
import { OfflineModule } from '../../components/offline/offline.module';
import { HomePage } from './home-page';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HelloWorldModule,
    OfflineModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
