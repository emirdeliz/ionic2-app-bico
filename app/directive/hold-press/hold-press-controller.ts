import {Events} from 'ionic-angular';
import {Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture';
import * as Hammer from 'hammerjs';

@Directive({
    selector: '[onHoldPress]'
})

export class HoldPressController implements OnInit, OnDestroy {
    private el: ElementRef;
    private pressGesture: Gesture;
    private events: Events;

    @Input('onPress') onPress: string;
    @Input('onPressUp') onPressUp: string;

    constructor(el: ElementRef, events: Events) {
        this.el = el;
        this.events = events;
    }

    public ngOnInit(): void {
        this.pressGesture = new Gesture(this.el.nativeElement,  {
            recognizers: [
                [Hammer.Press, {time: 0}]
            ]
        });
        this.pressGesture.listen();
        this.pressGesture.on('press', e => {
            this.events.publish('hold:press:' + this.onPress);
        });

        this.pressGesture.on('pressup', e => {
            this.events.publish('hold:press:' + this.onPressUp);
        });
    }

    public ngOnDestroy(): void {
        this.pressGesture.destroy();
    }
}
