import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegisterController} from '../register/register-controller';

@Component({
    templateUrl: 'build/pages/login/login-view.html'
})

export class LoginController {
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
