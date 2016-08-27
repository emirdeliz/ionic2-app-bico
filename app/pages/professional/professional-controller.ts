import {NavController, NavParams, Page} from 'ionic-angular';
import {ProfessionalModel} from './professional-model';
import {RatingController} from '../../component/rating/rating-controller';
import {ChatController} from '../chat/chat-controller';
import {BudgetController} from '../budget/budget-controller';
import {WorkController} from '../work/work-controller';

@Page({
    templateUrl: 'build/pages/professional/professional-view.html',
    directives: [RatingController]
})

export class ProfessionalController {
    private navCtrl: NavController;
    private navParams: NavParams;
    private professional: ProfessionalModel;

    constructor (
        navCtrl: NavController,
        navParams: NavParams
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professional = navParams.get('professional');

        /* MOCK */
        //this.openWork(null, this.professional.work[0]);
    }

    private openChat(event): void {
        this.navCtrl.push(ChatController, {
            professional: this.professional
        });
    }

    private openBudget(event): void {
        this.navCtrl.push(BudgetController, {
            professional: this.professional
        });
    }

    private openWork(event, item): void {
        this.navCtrl.push(WorkController, {
            work: item,
            professional: this.professional
        });
    }
}
