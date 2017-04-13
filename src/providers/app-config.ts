import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Storage } from '@ionic/storage';
import { UserProfile } from '../models/userprofile';
import { Platform } from 'ionic-angular';
import { Network } from "@ionic-native/network";

@Injectable()
export class AppConfig {
    userProfile: UserProfile;
    agbAccepted: boolean = false;
    isOnline: boolean = true;

    constructor(private storage: Storage, private platform: Platform, private network: Network) {
        this.checkNetwork();
        var offline = Observable.fromEvent(document, "offline");
        var online = Observable.fromEvent(document, "online");

        offline.subscribe(() => {
            //console.log("Offline");            
            this.isOnline = false;
        });

        online.subscribe(()=>{
            //console.log("Online");
            this.isOnline = true;
        });
    }

    load(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let val = await this.storage.get('app-config');
            if (val) {
                let config = JSON.parse(val);
                
                // restore saved objects
                if (config.userProfile)
                    this.userProfile = new UserProfile().deserialize(config.userProfile);
                
                this.checkNetwork();
            }

            resolve();
        });
    }

    save(): Promise<any> {
        let configJson = JSON.stringify({
            userProfile: this.userProfile,
        });

        return this.storage.set('app-config', configJson);
    }

    clear(): Promise<any> {
        // clear instances
        this.userProfile = new UserProfile();

        return this.storage.clear();
    }

    checkNetwork() {
        this.platform.ready().then(() => {
            if (this.network.type != 'none'){
                this.isOnline = true;
            } else {
                this.isOnline = false;
            }
        });
   }
}
