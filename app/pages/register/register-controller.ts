import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/register/register-view.html'
})

export class RegisterController {
    constructor (
        private navCtrl: NavController
    ) {
        this.navCtrl = navCtrl;
    }

    private register(): void {
        this.close();
    }

    private close(): void {
        this.navCtrl.popToRoot();
    }
}
