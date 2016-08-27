import {Component, EventEmitter} from '@angular/core';
import {NavController, Events} from 'ionic-angular';
import {ImageModel} from '../../pages/image/image-model';
import {UploadImageController} from '../upload-image/upload-image-controller';
import {SlideImageController} from '../slide-image/slide-image-controller';

@Component({
    selector: 'carousel-image',
    inputs: ['images', 'editable'],
    outputs: ['updateCarousel: carouselChange'],
    templateUrl: 'build/component/carousel-image/carousel-image-view.html'
})

export class CarouselImageController {
    private updateCarousel: EventEmitter<number>;
    private events: Events;
    private navCtrl: NavController;
    private images: Array<ImageModel>;
    private editable: boolean;

    constructor(navCtrl: NavController, events: Events) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.updateCarousel = new EventEmitter<number>();

        this.events.subscribe('upload:image:carousel', (result) => {
            this.addImage(result[0]);
        });
    }

    private openCamera(img): void {
        this.navCtrl.push(UploadImageController, {callback: 'carousel', uploadImage: img});
    }

    private openImage(img): void {
        if(this.editable)
            this.openCamera(img);
        else {
            let indexSelected: number = this.images.indexOf(img);
            this.navCtrl.rootNav.push(SlideImageController, {images: this.images, selected: indexSelected});
        }
    }

    private addImage(result): void {
        if(result.isNew)
            this.images.push(result.img);
        else {
            var index: number = this.images.indexOf(result.img);
            this.images[index] = result.img;
        }

        this.updateCarousel.next(this.images);
    }
}
