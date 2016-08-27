import {Component} from '@angular/core';
import {NavController, NavParams, Platform, Page, Events, Toast} from 'ionic-angular';
import {Camera} from 'ionic-native';

import {ProfessionalModel} from '../professional/professional-model';
import {MessageModel} from '../message/message-model';

import {HoldPressController} from '../../directive/hold-press/hold-press-controller';
import {ImageModel} from '../image/image-model';
import {CarouselImageController} from '../../component/carousel-image/carousel-image-controller';
import {RecordVoiceModel} from '../../component/record-voice/record-voice-model';

@Page({
    templateUrl: 'build/pages/budget/budget-view.html',
    directives: [HoldPressController, CarouselImageController]
})

export class BudgetController {
    private navCtrl: NavController;
    private navParams: NavParams;
    private events: Events;
    private recordVoice: RecordVoiceModel;
    private professional: ProfessionalModel;
    private images: ImageModel[];
    private message: string;

    constructor (
        navCtrl: NavController,
        navParams: NavParams,
        events: Events,
        platform: Platform
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;

        this.professional = navParams.get('professional');
        this.message = '';

        let nameFileRecordVoice = 'budget-record-voice';
        this.recordVoice = new RecordVoiceModel(platform, '', nameFileRecordVoice);

        this.events.subscribe('hold:press:error', (result) => {
            this.presentToast('error: ' + result);
        });

        this.events.subscribe('hold:press:startRecord', (result) => {
            this.recordVoice.startRecord();
        });

        this.events.subscribe('hold:press:stopRecord', (result) => {
            this.recordVoice.stopRecord();
        });

        /* mock */
        this.images = this.mock();
        if(this.professional == null) {
            this.professional = new ProfessionalModel(
                'José Nascimento',
                'XXX',
                'profile-image-5.jpg',
                'This is item # 5',
                [],
                [],
                4,
                3,
                5,
                456,
                `
                Tincidunt fermentum, sit dolor.
                Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
                Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
                at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
                `
            );
        }
    }

    private cancel(event): void {
        this.navCtrl.pop();
    }

    private presentToast(message): void {
        let toast = Toast.create({
            message: message,
            duration: 3000
        });

        toast.onDismiss(() => {});
        this.navCtrl.present(toast);
    }

    mock() {
        let images: ImageModel[] = [
            new ImageModel('http://fotosdecasasmodernas.com/wp-content/uploads/2012/10/Modelos-de-Casas-Sencillas-y-Peque%C3%B1as4.jpg', 'Teste3')
        ];

        return images;
    }
}
