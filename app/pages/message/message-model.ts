import {TypeMessageEnum} from '../type-message/type-message-enum';
import {ImageModel} from '../image/image-model';
import {RecordVoiceModel} from '../../component/record-voice/record-voice-model';

export class MessageModel {
    private _isMessageOfOther: boolean;
    private _typeMessage: TypeMessageEnum;
    private _message: string;
    private _recordVoice: RecordVoiceModel;
    private _image: ImageModel;

    constructor (
        _isMessageOfOther: boolean,
        _typeMessage: TypeMessageEnum,
        _message?: string,
        _recordVoice?: RecordVoiceModel,
        _image?: ImageModel
    ) {
        this._isMessageOfOther = _isMessageOfOther;
        this._typeMessage = _typeMessage;
        this._message = _message;
        this._recordVoice = _recordVoice;
        this._image = _image;
    }

    get isMessageOfOther(): boolean {
        return this._isMessageOfOther;
    }

    set isMessageOfOther(_isMessageOfOther: boolean) {
        this._isMessageOfOther = _isMessageOfOther;
    }

    get typeMessage(): TypeMessageEnum {
        return this._typeMessage;
    }

    set typeMessage(_typeMessage: TypeMessageEnum) {
        this._typeMessage = _typeMessage;
    }

    get message(): string {
        return this._message;
    }

    set message(_message: string) {
        this._message = _message;
    }

    get recordVoice(): RecordVoiceModel {
        return this._recordVoice;
    }

    set recordVoice(_recordVoice: RecordVoiceModel) {
        this._recordVoice = _recordVoice;
    }

    get image(): ImageModel {
        return this._image;
    }

    set image(_image: ImageModel) {
        this._image = _image;
    }

    get isTypeText(): boolean {
        return this._typeMessage == TypeMessageEnum.Text;
    }

    get isTypeVoiceRecord(): boolean {
        return this._typeMessage == TypeMessageEnum.Voice;
    }

    get isTypeImg(): boolean {
        return this._typeMessage == TypeMessageEnum.Img;
    }
}
