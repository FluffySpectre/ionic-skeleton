import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfflineComponent } from './offline';

@NgModule({
  declarations: [
    OfflineComponent,
  ],
  imports: [
    IonicPageModule.forChild(OfflineComponent),
  ],
  exports: [
    OfflineComponent
  ]
})
export class OfflineModule {}
