import {Component, ViewChild} from '@angular/core';
import {NavController,  NavParams, Platform, Page, Content, Events} from 'ionic-angular';
import {TimerWrapper} from '@angular/core/src/facade/async';
import {ProfessionalModel} from '../professional/professional-model';
import {MessageModel} from '../message/message-model';
import {TypeMessageEnum} from '../type-message/type-message-enum';
import {HoldPressController} from '../../directive/hold-press/hold-press-controller';
import {UploadImageController} from '../../component/upload-image/upload-image-controller';
import {ImageModel} from '../image/image-model';
import {RecordVoiceModel} from '../../component/record-voice/record-voice-model';

@Page({
    templateUrl: 'build/pages/chat/chat-view.html',
    directives: [HoldPressController]
})

export class ChatController {
    private platform: Platform;
    private navCtrl: NavController;
    private navParams: NavParams;
    private professional: ProfessionalModel;
    private messageText: string;
    private messages: Array<MessageModel>;
    private pathFileRecordVoice: string;
    private events: Events;
    private currentRecordVoice: RecordVoiceModel;

    @ViewChild(Content) content: Content;

    constructor (
        platform: Platform,
        navCtrl: NavController,
        navParams: NavParams,
        events: Events
    ) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.professional = navParams.get('professional');
        this.messages = this.mock();//new Array<MessageModel>();//this.mock();//[];
        this.messageText = '';

        this.events.subscribe('upload:image:chat', (result) => {
            this.addImage(result[0]);
        });

        this.events.subscribe('hold:press:startRecord', (result) => {
            this.startRecord();
        });

        this.events.subscribe('hold:press:stopRecord', (result) => {
            this.stopRecord();
        });
    }

    public sendMessage(event): void {
        var isMessageEmpty: boolean = (!this.messageText || this.messageText == '');

        if(isMessageEmpty)
            return;

        let isMessageOfOther: boolean = false;
        let message: MessageModel = new MessageModel(
            isMessageOfOther,
            TypeMessageEnum.Text,
            this.messageText
        )

        this.messages.push(message);
        this.messageText = '';
        this.updateScrollPositionBottom();
    }

    private updateScrollPositionBottom(): void {
        var position: number = this.content.height();
        this.content.scrollTo(0, position, 0);
    }

    private openCamera(img): void {
        this.navCtrl.push(UploadImageController, {callback: 'chat', uploadImage: img});
    }

    private startRecord(): void {
        let nameFileRecordVoice = 'chat-record-voice';
        this.currentRecordVoice = new RecordVoiceModel(this.platform, '', nameFileRecordVoice);
        this.currentRecordVoice.startRecord();
    }

    private stopRecord(): void {
        this.currentRecordVoice.stopRecord();

        let isMessageOfOther: boolean = false;
        let message: MessageModel = new MessageModel(
            isMessageOfOther,
            TypeMessageEnum.Voice,
            '',
            this.currentRecordVoice
        )

        this.messages.push(message);
        this.updateScrollPositionBottom();
    }

    private seekTo(event, item): void {
        item.recordVoice.advanceTo(event.value);
    }

    private addImage(result): void {
        console.log('add image...');        /*
        if(result.isNew)
        this.images.push(result.img);
        else {
            var index: number = this.images.indexOf(result.img);
            this.images[index] = result.img;
        }
        */
    }

    mock() {
        let messages: MessageModel[] = [];
        /*
        messages.push(new MessageModel(
            true,
            TypeMessageEnum.Img,
            ``,
            null,
            new UploadImageModel('http://mariahesterimobiliaria.com.br/imagens/imovel/casa-topo.png', '')
        ));

        messages.push(new MessageModel(
            true,
            TypeMessageEnum.Text,
            `
            I think I like Ionic
            `
        ));

        messages.push(new MessageModel(
            false,
            TypeMessageEnum.Img,
            ``,
            null,
            new UploadImageModel('http://mariahesterimobiliaria.com.br/imagens/imovel/casa-topo.png', '')
        ));
        */
        messages.push(new MessageModel(
            true,
            TypeMessageEnum.Voice,
            '',
            new RecordVoiceModel(this.platform, '../Library/NoCloud/chat-record-voice-49786108.wav')
        ));

        messages.push(new MessageModel(
            true,
            TypeMessageEnum.Voice,
            '',
            new RecordVoiceModel(this.platform, '../Library/NoCloud/chat-record-voice-70978723.wav')
        ));

        return messages;
    }
}
