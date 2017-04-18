import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Storage } from '@ionic/storage';
import { UserProfile } from '../models/userprofile';
import { Platform } from 'ionic-angular';
import { Network } from "@ionic-native/network";
import { ENV } from '@app/config';

@Injectable()
export class AppConfig {
    userProfile: UserProfile;
    isOnline: boolean = true;

    constructor(private storage: Storage, private platform: Platform, private network: Network) {

        console.log(ENV.apiUrl);

        this.checkNetwork();
        // watch network for a connection
        this.network.onConnect().subscribe(() => {
            this.isOnline = true;
        });
    
        this.network.onDisconnect().subscribe(() => {
            this.isOnline = false;
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
