import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
    selector: 'offline',
    templateUrl: 'offline.html'
})
export class OfflineComponent {
    isOnline: boolean = true;

    constructor(private events: Events) {
        events.subscribe('onlineStatusChanged', (online) => {
            this.isOnline = online;
        });
    }
}
