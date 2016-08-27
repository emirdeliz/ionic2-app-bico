import {NavController, NavParams, Page} from 'ionic-angular';
import {ProfessionalModel} from '../professional/professional-model';
import {WorkModel} from './work-model';
import {CarouselImageController} from '../../component/carousel-image/carousel-image-controller';

@Page({
    templateUrl: 'build/pages/work/work-view.html',
    directives: [CarouselImageController]
})

export class WorkController {
    private navCtrl: NavController;
    private navParams: NavParams;
    private professional: ProfessionalModel;
    private work: WorkModel;

    constructor (
        navCtrl: NavController,
        navParams: NavParams
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professional = navParams.get('professional');
        this.work = navParams.get('work');
    }
}
