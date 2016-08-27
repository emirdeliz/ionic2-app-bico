import {Platform, Page, Events} from 'ionic-angular';
import {MediaPlugin} from 'ionic-native';
import {TimerWrapper} from '@angular/core/src/facade/async';
import {RandomUtil} from '../random/random-util';

export class RecordVoiceModel {
    private _platform: Platform;
    private _fileRecord: MediaPlugin;

    private _pathFile: string;
    private _nameFile: string;

    private _statusMediaRecord: boolean = false;
    private _statusMediaPlay: boolean = false;

    private _durationMediaPlayPercent: number = 0;
    private _durationMediaPlay: number = 0;
    private _durationMediaRecord: number = 0;

    constructor(platform: Platform, pathFile?:string, nameFile?: string) {
        this._platform = platform;
        this._nameFile = nameFile;

        let isNewRecord: boolean = (!pathFile);
        this._pathFile = pathFile;
    }

    public startRecord(): void {
        this._pathFile = this.getPathFileRecordAudio();
        this._fileRecord = new MediaPlugin(this._pathFile);
        this._fileRecord.startRecord();
        this._statusMediaRecord = true;

        let intervalId: number = TimerWrapper.setInterval(() => {
            this._fileRecord.getCurrentAmplitude().then(() => {
                this._durationMediaRecord += 100;
                if(!this._statusMediaRecord)
                    TimerWrapper.clearInterval(intervalId);
            });
        }, 100)
    }

    public stopRecord(): void {
        this._statusMediaRecord = false;
        this._fileRecord.stopRecord();
        this._fileRecord.release();
        this._durationMediaRecord = 0;
    }

    private actionPlay(): void {
        if(this._statusMediaPlay)
            this.stopPlay();
        else
            this.startPlay();
    }

    private startPlay(): void {
        this._fileRecord = new MediaPlugin(this._pathFile);
        this._fileRecord.seekTo(this.durationMediaPlayPercent);
        this._fileRecord.play();
        this._statusMediaPlay = true;

        let intervalId: number = TimerWrapper.setInterval(() => {
            this._fileRecord.getCurrentAmplitude().then(() => {
                let duration: number = this._fileRecord.getDuration();
                let loadFileComplete: boolean = (duration > -1);

                if(((this._durationMediaPlay * 0.001) >= duration && loadFileComplete) || !this._statusMediaPlay){
                    TimerWrapper.clearInterval(intervalId);
                    this.stopPlay();
                }
                this._durationMediaPlay += 100;
            });
        }, 100);
    }

    private stopPlay(): void {
        if(!this.alreadyRecordable)
            return;

        this._fileRecord.stop();
        this._statusMediaPlay = false;
        this._durationMediaPlay = 0;
        this._durationMediaPlayPercent = 0;
    }

    private getPathFileRecordAudio(): string {
        /*
        let path: string = this._platform.url(); // window.location.pathname
        let phoneGapPath: string = path.substring(0, path.lastIndexOf('/') + 1);
        let complementNameFile: string = RandomUtil.nextInt().toString();

        //'www/audio/': '/android_asset/www/audio');
        console.log(' phoneGapPath::: ' + phoneGapPath);
        return phoneGapPath + nameFile + '_' + complementNameFile + (this._platform.is('ios') ? '.wav': '.amr');
        */

        let path: string = (this._platform.is('ios') ? '../Library/NoCloud/': '../Documents/');
        return path + this._nameFile + '-' + RandomUtil.nextInt().toString() + '.wav';
    }

    private get statusMediaRecord(): boolean {
        return this._statusMediaRecord;
    }

    private get statusMediaPlay(): boolean {
        return this._statusMediaPlay;
    }

    private get durationMediaRecord(): number {
        return this._durationMediaRecord > 0? this._durationMediaRecord: this.alreadyRecordable? this._fileRecord.getDuration(): 0;
    }

    private get alreadyRecordable(): boolean {
        return (this._fileRecord != null);
    }

    private get durationMediaPlay(): number {
        return this._durationMediaPlay;
    }

    private get durationMediaPlayPercent(): number {
        if(!this._statusMediaPlay)
            return 0;

        let playPercent: number = (this.alreadyRecordable? (this._durationMediaPlay * 0.10) / this._fileRecord.getDuration(): 0);
        return playPercent;
    }

    private waitLoad(): void {
        let duration: number = this._fileRecord.getDuration();
        let loadFileComplete: boolean = (duration > -1);
        let timeLimit: number = 0;
        let isTimeOut = (timeLimit == 100);

        while(!loadFileComplete || isTimeOut){
            TimerWrapper.setTimeout(() => {
                console.log('this._fileRecord.getDuration() ' + this._fileRecord.getDuration());
                duration = this._fileRecord.getDuration();
                loadFileComplete = (duration > -1);
                timeLimit++;
                isTimeOut = (timeLimit == 100);
            }, 100);
        }

        if(isTimeOut)
            console.warn('the file load failed for: ' + this._pathFile);
    }

    private advanceTo(advance): void {
        if(!this.alreadyRecordable)
            this._fileRecord = new MediaPlugin(this._pathFile);

        //this.waitLoad();

        let seek: number = (advance * this._fileRecord.getDuration()) / 100;
        console.log('value::: ' + advance + ' seek::: ' + seek + ' ::::: ' + this._fileRecord.getDuration());

        //this.stopPlay();
        //this._durationMediaPlayPercent = seek;
        this.stopPlay();
    }
}
