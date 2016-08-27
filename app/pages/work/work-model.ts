import {PeopleModel} from '../people/people-model';
import {RatingModel} from '../rating/rating-model';

import {ClientModel} from '../client/client-model';
import {ProfessionalModel} from '../professional/professional-model';

import {TypeWorkModel} from '../type-work/type-work-model';
import {ImageModel} from '../image/image-model';

export class WorkModel {
    private _client: ClientModel;
    private _professional: ProfessionalModel;
    private _dateExecution: Date;
    private _typeWork: TypeWorkModel;
    private _rating: RatingModel;
    private _description: string;
    private _images: Array<ImageModel>;

    constructor (
        _dateExecution: Date,
        _rating: RatingModel,
        _typeWork: TypeWorkModel,
        _description: string,
        _images: Array<ImageModel>,
        _client?: ClientModel,
        _professional?: ProfessionalModel
    ) {
        this._dateExecution = _dateExecution;
        this._rating = _rating;
        this._typeWork = _typeWork;
        this._description = _description;
        this._images = _images;
        this._client = _client;
        this._professional = _professional;
    }

    get dateExecution(): Date {
        return this._dateExecution;
    }

    set dateExecution(_dateExecution: Date) {
        this._dateExecution = _dateExecution;
    }

    get rating(): RatingModel {
        return this._rating;
    }

    set rating(_rating: RatingModel) {
        this._rating = _rating;
    }

    get typeWork(): TypeWorkModel {
        return this._typeWork;
    }

    set typeWork(_typeWork: TypeWorkModel) {
        this._typeWork = _typeWork;
    }

    get description(): string {
        return this._description;
    }

    set description(_description: string) {
        this._description = _description;
    }

    get images(): Array<ImageModel> {
        return this._images;
    }

    set images(_images: Array<ImageModel>) {
        this._images = _images;
    }

    get client(): ClientModel {
        return this._client;
    }

    set client(_client: ClientModel) {
        this._client = _client;
    }

    get professional(): ProfessionalModel {
        return this._professional;
    }

    set professional(_professional: ProfessionalModel) {
        this._professional = _professional;
    }
}
