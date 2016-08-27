import {Component, ViewChild, OnInit} from '@angular/core';
import {NavController, NavParams, Page, Slides} from 'ionic-angular';
import {WorkModel} from '../../pages/work/work-model';
import {ImageModel} from '../../pages/image/image-model';

@Component({
    templateUrl: 'build/component/slide-image/slide-image-view.html',
    inputs: ['images']
})

export class SlideImageController implements OnInit {
    private navCtrl: NavController;
    private navParams: NavParams;
    private images: Array<ImageModel>;

    @ViewChild('slider') slider: Slides;

    constructor (navCtrl: NavController, navParams: NavParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.images = navParams.get('images');
    }

    ngOnInit() {
        /*
            FIXME: EXCEPTION: Error: Uncaught (in promise): TypeError: Cannot read property 'slideTo' of undefined
            https://forum.ionicframework.com/t/cant-call-methods-on-slider/56536

            - Posiciona o slide na foto que o usuário clicou
        */
        //this.slider.slideTo(this.navParams.get('selected'), 100);
    }

    private close(event): void {
        this.navCtrl.rootNav.pop();
    }
}
