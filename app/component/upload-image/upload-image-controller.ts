import {Component, ViewChild, NgZone} from '@angular/core';
import {NavController, NavParams, Platform, ActionSheet, Page, Events} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {ImageModel} from '../../pages/image/image-model';

@Page({
    templateUrl: 'build/component/upload-image/upload-image-view.html'
})

export class UploadImageController {
    private navCtrl: NavController;
    private navParams: NavParams;
    private zone: NgZone;
    private events: Events;
    private platform: Platform;
    private uploadImage: ImageModel;
    private callback: string;
    private isNew: boolean;

    constructor (
        navCtrl: NavController,
        navParams: NavParams,
        zone: NgZone,
        events: Events,
        platform: Platform
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.events = events;
        this.platform = platform;

        this.uploadImage = navParams.get('uploadImage');
        this.isNew = !(this.uploadImage);
        this.callback = navParams.get('callback');

        if(this.isNew) {
            this.openCamera();
            this.uploadImage = new ImageModel();
        }
    }

    private complete(event): void {
        var keyEvent = 'upload:image:' + this.callback;
        this.events.publish(keyEvent, {img: this.uploadImage, isNew: this.isNew});
        this.navCtrl.pop();
    }

    private cancel(event): void {
        this.navCtrl.pop();
    }

    private openCamera(): void {
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            quality:100
        }).then((imageData) => {
            let base64Image: string = "data:image/jpeg;base64," + imageData;
            this.zone.run(() => this.uploadImage.path = base64Image);
        }, (err) => {
            console.log(err);
        });
    }

    mock() {
        let uploadImage: ImageModel = new ImageModel(
            'http://vista.imobiliariaducati.com.br/blog/wp-content/uploads/2015/12/casa.jpg',
            'Teste descricao'
        );
        return uploadImage;
    }
}
