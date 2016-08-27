import {Component} from '@angular/core';
import {NavController, Page} from 'ionic-angular';
import {RegisterController} from '../register/register-controller';

@Component({
    templateUrl: 'build/pages/settings/settings-view.html',
    selector: "settings"
})

export class SettingsController {
    constructor (
        private navCtrl: NavController
    ) {
        this.navCtrl = navCtrl;
    }

    private login(): void {
        this.close();
    }

    private register(): void {
        this.navCtrl.push(RegisterController);
    }

    private close(): void {
        this.navCtrl.popToRoot();
    }
}
