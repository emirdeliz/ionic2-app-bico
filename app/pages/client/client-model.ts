import {PeopleModel} from '../people/people-model';
import {WorkModel} from '../work/work-model';

export class ClientModel extends PeopleModel {
    private _work: WorkModel[];

    constructor (
        _name: string,
        _adress: string,
        _picture: string,
        _work?: WorkModel[]
    ) {
        super(_name, _adress, _picture);
        this._work = _work;
    }

    get work(): WorkModel[] {
        return this._work;
    }

    set work(_work: WorkModel[]) {
        this._work = _work;
    }
}
