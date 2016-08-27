export class ImageModel {
    private _path: string;
    private _description: string;

    constructor (
        _path?: string,
        _description?: string
    ) {
        this._path = _path;
        this._description = _description;
    }

    get path(): string {
        return this._path;
    }

    set path(_path: string) {
        this._path = _path;
    }

    get description(): string {
        return this._description;
    }

    set description(_description: string) {
        this._description = _description;
    }
}
