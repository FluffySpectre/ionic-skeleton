import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppConfig } from '../../providers/app-config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public config: AppConfig) {

  }

}
