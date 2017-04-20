import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelloWorldComponent } from './hello-world';

@NgModule({
  declarations: [
    HelloWorldComponent,
  ],
  imports: [
    IonicPageModule.forChild(HelloWorldComponent),
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class HelloWorldModule {}
