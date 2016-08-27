export class TypeWorkModel {
    private _id: number;
    private _description: string;

    constructor (
        _id: number,
        _description: string
    ) {
        this._id = _id;
        this._description = _description;
    }

    get id(): number {
        return this._id;
    }

    set rating(_id: number) {
        this._id = _id;
    }

    get description(): string {
        return this._description;
    }

    set description(_description: string) {
        this._description = _description;
    }
}
