import {NavController, Alert} from 'ionic-angular';
import {Component} from '@angular/core';
import {LoginController} from '../login/login-controller';
import {RegisterController} from '../register/register-controller';
import {SettingsController} from '../settings/settings-controller';
import {SearchController} from '../search/search-controller';
import {ScheduleController} from '../schedule/schedule-controller';

import {ChatController} from '../chat/chat-controller';
import {BudgetController} from '../budget/budget-controller';

@Component({
    templateUrl: 'build/pages/home/home-view.html'
})

export class HomeController {
    private tab1: any;
    private tab2: any;
    private tab3: any;

    private navCtrl: NavController;
    private messageRegisterAlreadyDisplayed: any;

    constructor (
        navCtrl: NavController
    ) {
        this.navCtrl = navCtrl;
        this.tab1 = SearchController
        this.tab2 = ScheduleController;
        this.tab3 = SettingsController;
        this.messageRegisterAlreadyDisplayed = false;
    }

    private onPageWillEnter(): void {
        if(!this.isLogged()){
            if(!this.isRegistered() && !this.messageRegisterAlreadyDisplayed)
                this.showMessageConfirmRegister();
            else
                this.navCtrl.push(LoginController);
        }
    }

    private showMessageConfirmRegister(): void {
        this.messageRegisterAlreadyDisplayed = true;

        let alert = Alert.create({
            title: 'Registro',
            message: 'Não encontramos um perfil registrado. Deseja cadastrar agora?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {

                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Registrar',
                    handler: () => {
                        this.navCtrl.push(RegisterController);
                    }
                }
            ]
        });
        this.navCtrl.present(alert);
    }

    private isLogged(): boolean {
        return true;
    }

    private isRegistered(): boolean {
        return false;
    }
}
