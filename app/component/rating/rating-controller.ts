import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'rating',
    inputs: ['rate', 'disabled'],
    outputs: ['updateRate: rateChange'],
    templateUrl: 'build/component/rating/rating-view.html'
})

export class RatingController {
    private updateRate: EventEmitter<number>;
    private range: Array<number> = [0, 1, 2, 3, 4];
    private disabled: boolean;
    private rate: number;

    constructor() {
        this.updateRate = new EventEmitter<number>();
    }

    private update(value): void {
        if(this.disabled)
            return;

        var isSameNote: boolean = (value == this.rate);
        if(isSameNote && this.rate > 0 || value <= this.rate -1)
            value--;

        this.rate = value;
        this.updateRate.next(this.rate);
    }
}
