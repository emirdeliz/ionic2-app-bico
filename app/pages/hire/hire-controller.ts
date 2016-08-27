import {Component, ViewChild} from '@angular/core';
import {NavController,  NavParams, Page, Alert} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {ProfessionalModel} from '../professional/professional-model';
import {MessageModel} from '../message/message-model';

@Page({
    templateUrl: 'build/pages/hire/hire-view.html'
})

export class HireController {
    private navCtrl: NavController;
    private navParams: NavParams;
    private professional: ProfessionalModel;
    private images: string[];
    private message: string;

    constructor (
        navCtrl: NavController,
        navParams: NavParams
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professional = navParams.get('professional');
        this.message = '';
    }

    private sendMessage(event) {

    }

    openCamera() {
        /**
         * Set the source of the picture.
         * Defined in navigator.camera.PictureSourceType. Default is CAMERA.
         *      PHOTOLIBRARY : 0,
         *      CAMERA : 1,
         *      SAVEDPHOTOALBUM : 2
         */

        Camera.getPicture({sourceType: 0}).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = "data:image/jpeg;base64," + imageData;

        }, (err) => {
            console.log(err);
        });
    }

    onChangeDescriptionServiceWrite(event) {
        var height: number = event.currentTarget.querySelector('.text-input').scrollHeight;
        event.currentTarget.setAttribute('style', 'height:' + (height + 3) + 'px');
        event.currentTarget.querySelector('.text-input').setAttribute('style', 'height:' + height + 'px');
    }
}
