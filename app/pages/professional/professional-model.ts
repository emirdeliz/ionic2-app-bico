import {PeopleModel} from '../people/people-model';
import {WorkModel} from '../work/work-model';
import {TypeWorkModel} from '../type-work/type-work-model';

export class ProfessionalModel extends PeopleModel {
    private _note: string;
    private _work: WorkModel[];
    private _typeWork: TypeWorkModel[];
    private _noteAveragePrice: number;
    private _noteAverageService: number;
    private _noteAverageScore: number;
    private _distance: number;
    private _description: string;

    constructor (
        _name: string,
        _adress: string,
        _picture: string,
        _note: string,
        _typeWork: TypeWorkModel[],
        _work: WorkModel[],
        _noteAveragePrice: number,
        _noteAverageService: number,
        _noteAverageScore: number,
        _distance: number,
        _description: string
    ) {
        super(_name, _adress, _picture);
        this._note = _note;
        this._typeWork = _typeWork;
        this._work = _work;
        this._noteAveragePrice = _noteAveragePrice;
        this._noteAverageService = _noteAverageService;
        this._noteAverageScore = _noteAverageScore;
        this._distance = _distance;
        this._description = _description;
    }

    get note(): string {
        return this._note;
    }

    set note(_note: string) {
        this._note = _note;
    }

    get typeWork(): TypeWorkModel[] {
        return this._typeWork;
    }

    set typeWork(_typeWork: TypeWorkModel[]) {
        this._typeWork = _typeWork;
    }

    get work(): WorkModel[] {
        return this._work;
    }

    set work(_work: WorkModel[]) {
        this._work = _work;
    }

    get noteAveragePrice(): number {
        return this._noteAveragePrice;
    }

    set noteAveragePrice(_noteAveragePrice: number) {
        this._noteAveragePrice = _noteAveragePrice;
    }

    get noteAverageService(): number {
        return this._noteAverageService;
    }

    set noteAverageService(_noteAverageService: number) {
        this._noteAverageService = _noteAverageService;
    }

    get noteAverageScore(): number {
        return this._noteAverageScore;
    }

    set noteAverageScore(_noteAverageScore: number) {
        this._noteAverageScore = _noteAverageScore;
    }

    get distance(): number {
        return this._distance;
    }

    set distance(_distance: number) {
        this._distance = _distance;
    }

    get description(): string {
        return this._description;
    }

    set description(_description: string) {
        this._description = _description;
    }
}
