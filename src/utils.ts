import { Platform } from 'ionic-angular';

declare var cordova: any;

export class Utils {
    
    static formatNumber(number: number, dp: number): string {
        var s = ''+(Math.floor(number)), d = number % 1, i = s.length, r = '';
        while ((i -= 3) > 0) { r = '.' + s.substr(i, 3) + r; }
        return s.substr(0, i + 3) + r + (d ? '.' + Math.round(d * Math.pow(10, dp || 2)) : '');
    }

    static validEmail(email: string): boolean {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    static isNative(platform: Platform): boolean {
        return platform.is('cordova') && cordova.file.dataDirectory;
    }
    
    static formatBytes(bytes: number): string {
        var kb: number = bytes / 1024;
        var mb: number = kb / 1024;

        if (mb > 1) {
            return mb.toFixed(1) + " MB";
        } else {
            return kb.toFixed(1) + " KB";
        }
    }
}
