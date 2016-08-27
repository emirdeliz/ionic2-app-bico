export class PeopleModel {
    private _name: string;
    private _adress: string;
    private _picture: string;

    constructor (
        _name: string,
        _adress: string,
        _picture: string
    ) {
        this._name = _name;
        this._adress = _adress;
        this._picture = _picture;
    }

    get name(): string {
        return this._name;
    }

    set name(_name: string) {
        this._name = _name;
    }

    get adress(): string {
        return this._adress;
    }

    set adress(_adress: string) {
        this._adress = _adress;
    }

    get picture(): string {
        return this._picture;
    }

    set picture(_picture: string) {
        this._picture = _picture;
    }
}
