import { Component, ViewChild } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
    selector: 'offline',
    templateUrl: 'offline.html'
})
export class OfflineComponent {
    @ViewChild("offline") offline;

    constructor(private events: Events) {
        events.subscribe('onlineStatusChanged', (online) => {
            this.offline.nativeElement.style.display = online ? "none" : "flex";
        });
    }
}
